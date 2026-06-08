import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createAdminClient } from '@/lib/supabase/admin'
import { renderToBuffer, Document } from '@react-pdf/renderer'
import { EligibilityReportPDF } from '@/lib/pdf/eligibility-report'
import { createElement, type ReactElement } from 'react'
import type { DocumentProps } from '@react-pdf/renderer'

const schema = z.object({
  full_name: z.string().min(2),
  phone: z.string().min(9),
  city: z.string().optional(),
  preferred_contact: z.enum(['whatsapp', 'phone', 'email']).default('whatsapp'),
  purpose: z.enum(['new_license', 'renewal', 'dosage_increase', 'documents_review']),
  medical_condition: z.string().min(1),
  condition_duration: z.string().optional(),
  treatments_tried: z.array(z.string()).default([]),
  documents_available: z.array(z.string()).default([]),
  previous_license: z.boolean().default(false),
  agree_terms: z.boolean(),
})

function calculateScore(data: z.infer<typeof schema>): {
  score: number
  complexity: 'low' | 'medium' | 'high'
  missing: string[]
  recommendation: string
} {
  let score = 0

  // Condition weight
  const highConditions = ['סרטן', 'פרקינסון', 'טרשת נפוצה', 'אפילפסיה']
  const medConditions = ['פוסט טראומה', 'PTSD', 'פיברומיאלגיה', 'קרוהן', 'קוליטיס']
  if (highConditions.some(c => data.medical_condition.includes(c))) score += 30
  else if (medConditions.some(c => data.medical_condition.includes(c))) score += 22
  else score += 14

  // Duration
  const durationScores: Record<string, number> = {
    more_than_5_years: 25, '3_5_years': 20, '1_3_years': 14, less_than_1_year: 6,
  }
  score += durationScores[data.condition_duration || ''] ?? 10

  // Previous license
  if (data.previous_license) score += 20

  // Documents
  const goodDocs = data.documents_available.filter(d => d !== 'אין מסמכים כרגע')
  score += Math.min(goodDocs.length * 5, 25)

  score = Math.min(score, 100)

  // Missing documents list
  const allKeyDocs = ['סיכום רופא', 'אבחנה פסיכיאטרית', 'מרשמים קיימים']
  const missing = allKeyDocs.filter(d => !data.documents_available.includes(d))
  if (!data.documents_available.length || data.documents_available.includes('אין מסמכים כרגע')) {
    missing.push('MRI / CT עדכני (אם רלוונטי)', 'תיעוד טיפולים שנוסו')
  }

  const complexity: 'low' | 'medium' | 'high' =
    score >= 70 ? 'low' : score >= 40 ? 'medium' : 'high'

  const recommendation =
    score >= 70
      ? 'יש בסיס טוב לבדיקה מקצועית — מומלץ להמשיך'
      : score >= 40
      ? 'נדרשת בדיקה מעמיקה של המסמכים'
      : 'מומלץ להתייעץ עם נציג לפני הגשה'

  return { score, complexity, missing, recommendation }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'נתונים לא תקינים' }, { status: 400 })
    }

    const data = parsed.data
    const { score, complexity, missing, recommendation } = calculateScore(data)
    const supabase = createAdminClient()
    const now = new Date().toISOString()

    // 1. Create lead
    const { data: lead, error: leadError } = await supabase
      .from('leads')
      .insert({
        full_name: data.full_name,
        phone: data.phone,
        source: 'eligibility_form',
        requested_service: data.purpose,
        medical_condition: data.medical_condition,
        eligibility_score: score,
        status: 'new',
      })
      .select('id')
      .single()

    if (leadError || !lead) {
      console.error('Lead error:', leadError)
      return NextResponse.json({ error: 'שגיאה ביצירת ליד' }, { status: 500 })
    }

    // 2. Generate PDF
    let pdfUrl: string | null = null
    try {
      const reportData = {
        full_name: data.full_name,
        phone: data.phone,
        city: data.city,
        purpose: data.purpose,
        medical_condition: data.medical_condition,
        condition_duration: data.condition_duration,
        documents_available: data.documents_available,
        previous_license: data.previous_license,
        score,
        complexity,
        recommendation,
        missing_documents: missing,
        created_at: now,
      }

      const pdfElement = createElement(EligibilityReportPDF, { data: reportData }) as ReactElement<DocumentProps>
      const pdfBuffer = await renderToBuffer(pdfElement)

      const fileName = `eligibility-reports/${lead.id}.pdf`

      // Upload to Supabase Storage (bucket: documents)
      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(fileName, pdfBuffer, {
          contentType: 'application/pdf',
          upsert: true,
        })

      if (!uploadError) {
        // Create signed URL valid for 7 days
        const { data: signedData } = await supabase.storage
          .from('documents')
          .createSignedUrl(fileName, 60 * 60 * 24 * 7)
        pdfUrl = signedData?.signedUrl ?? null
      } else {
        console.error('Storage upload error:', uploadError)
      }
    } catch (pdfErr) {
      console.error('PDF generation error:', pdfErr)
      // Continue without PDF — not fatal
    }

    // 3. Save eligibility assessment
    await supabase.from('eligibility_assessments').insert({
      lead_id: lead.id,
      answers: data as Record<string, unknown>,
      condition: data.medical_condition,
      duration: data.condition_duration ?? '',
      treatments_tried: data.treatments_tried,
      documents_available: data.documents_available,
      previous_license: data.previous_license,
      requested_action: data.purpose,
      score,
      complexity,
      recommendation,
      missing_documents: missing,
      pdf_url: pdfUrl,
    })

    // 4. Create task for sales agent
    await supabase.from('tasks').insert({
      lead_id: lead.id,
      title: `ליד חדש — ${data.full_name} | ציון: ${score}`,
      description: `מצב רפואי: ${data.medical_condition}\nשירות מבוקש: ${data.purpose}\nציון: ${score} | מורכבות: ${complexity}`,
      priority: score >= 70 ? 'high' : score >= 40 ? 'medium' : 'low',
      status: 'open',
      created_by: (await supabase.from('profiles').select('id').eq('role', 'admin').limit(1).single()).data?.id,
    })

    return NextResponse.json({
      success: true,
      leadId: lead.id,
      score,
      complexity,
      recommendation,
      pdfUrl,
      missingDocuments: missing,
    })
  } catch (err) {
    console.error('Submit error:', err)
    return NextResponse.json({ error: 'שגיאת שרת' }, { status: 500 })
  }
}
