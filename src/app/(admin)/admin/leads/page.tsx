export const dynamic = 'force-dynamic'

import { requireRole } from '@/lib/auth/guards'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

const STATUS_MAP: Record<string, { label: string; bg: string; color: string }> = {
  new: { label: 'חדש', bg: '#d4edda', color: '#155724' },
  contacted: { label: 'נוצר קשר', bg: '#cce5ff', color: '#004085' },
  no_answer: { label: 'אין מענה', bg: '#fff3cd', color: '#856404' },
  qualified: { label: 'מוסמך', bg: '#d1ecf1', color: '#0c5460' },
  not_qualified: { label: 'לא מתאים', bg: '#f8d7da', color: '#721c24' },
  docs_requested: { label: 'בקשת מסמכים', bg: '#e2d9f3', color: '#4a0e7a' },
  converted_to_case: { label: 'הפך לתיק', bg: '#0d3d2a', color: '#c9a84c' },
  closed_lost: { label: 'סגור', bg: '#f0ece4', color: '#6b6560' },
}

const SERVICE_MAP: Record<string, string> = {
  new_license: 'בקשה חדשה',
  renewal: 'חידוש',
  dosage_increase: 'הגדלת מינון',
  documents_review: 'בדיקת מסמכים',
}

export default async function AdminLeadsPage() {
  await requireRole(['admin', 'super_admin', 'sales_agent', 'case_manager'])
  const supabase = await createClient()

  const { data: leads } = await supabase
    .from('leads')
    .select(`
      *,
      eligibility_assessments (
        score, complexity, recommendation, pdf_url, missing_documents, created_at
      )
    `)
    .order('created_at', { ascending: false })
    .limit(50)

  return (
    <div className="min-h-screen" style={{ background: '#f7f5f0', fontFamily: "'Assistant', sans-serif" }}>
      {/* Top bar */}
      <div style={{ background: '#0d3d2a', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin" style={{ color: 'rgba(247,245,240,0.5)', fontSize: 13 }} className="hover:text-white">
              דשבורד
            </Link>
            <span style={{ color: 'rgba(247,245,240,0.3)' }}>/</span>
            <span style={{ color: '#f7f5f0', fontWeight: 700, fontSize: 15 }}>לידים</span>
          </div>
          <div style={{ background: '#c9a84c', borderRadius: 8, padding: '4px 12px' }}>
            <span style={{ color: '#0d3d2a', fontWeight: 700, fontSize: 13 }}>
              {leads?.length ?? 0} לידים
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'חדשים', count: leads?.filter(l => l.status === 'new').length ?? 0, color: '#d4edda', text: '#155724' },
            { label: 'ממוצע ציון', count: leads?.length ? Math.round(leads.reduce((s, l) => s + (l.eligibility_score || 0), 0) / leads.length) : 0, color: '#cce5ff', text: '#004085', suffix: '' },
            { label: 'בקשות חדשות', count: leads?.filter(l => l.requested_service === 'new_license').length ?? 0, color: '#e2d9f3', text: '#4a0e7a' },
            { label: 'חידושים', count: leads?.filter(l => l.requested_service === 'renewal').length ?? 0, color: '#fff3cd', text: '#856404' },
          ].map(s => (
            <div key={s.label} style={{ background: 'white', border: '1.5px solid #e8e4dc', borderRadius: 16 }} className="p-5">
              <div style={{ color: '#9b9590', fontSize: 12 }} className="mb-1">{s.label}</div>
              <div style={{ color: '#0d3d2a', fontSize: '2rem', fontWeight: 800 }}>{s.count}</div>
            </div>
          ))}
        </div>

        {/* Leads list */}
        <div className="space-y-4">
          {!leads?.length && (
            <div style={{ background: 'white', border: '1.5px solid #e8e4dc', borderRadius: 16 }} className="p-12 text-center">
              <div style={{ color: '#9b9590', fontSize: '1rem' }}>אין לידים עדיין</div>
            </div>
          )}
          {leads?.map((lead) => {
            const assessment = Array.isArray(lead.eligibility_assessments)
              ? lead.eligibility_assessments[0]
              : lead.eligibility_assessments
            const status = STATUS_MAP[lead.status] || { label: lead.status, bg: '#f0ece4', color: '#6b6560' }
            const score = lead.eligibility_score || assessment?.score || 0
            const scoreColor = score >= 70 ? '#155724' : score >= 40 ? '#856404' : '#721c24'
            const scoreBg = score >= 70 ? '#d4edda' : score >= 40 ? '#fff3cd' : '#f8d7da'
            const missing = (assessment?.missing_documents as string[]) ?? []

            return (
              <div key={lead.id}
                style={{ background: 'white', border: '1.5px solid #e8e4dc', borderRadius: 18 }}
                className="p-5 md:p-6 hover:shadow-md transition-shadow">

                <div className="flex items-start justify-between gap-4 flex-wrap">
                  {/* Left: info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span style={{ color: '#0d3d2a', fontWeight: 800, fontSize: '1.05rem' }}>
                        {lead.full_name}
                      </span>
                      <span style={{ background: status.bg, color: status.color, fontSize: 11, fontWeight: 700, borderRadius: 6 }}
                        className="px-2.5 py-0.5">{status.label}</span>
                      {lead.requested_service && (
                        <span style={{ background: '#f0ece4', color: '#6b6560', fontSize: 11, borderRadius: 6 }}
                          className="px-2.5 py-0.5">{SERVICE_MAP[lead.requested_service]}</span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 flex-wrap mb-3">
                      <a href={`tel:${lead.phone}`} style={{ color: '#0d3d2a', fontSize: 14, fontWeight: 600 }}
                        className="hover:underline">📞 {lead.phone}</a>
                      {lead.medical_condition && (
                        <span style={{ color: '#6b6560', fontSize: 13 }}>{lead.medical_condition}</span>
                      )}
                      <span style={{ color: '#c0bdb8', fontSize: 12 }}>
                        {new Date(lead.created_at).toLocaleDateString('he-IL')}
                      </span>
                    </div>

                    {assessment?.recommendation && (
                      <p style={{ color: '#6b6560', fontSize: 13, lineHeight: 1.6 }}>
                        {assessment.recommendation}
                      </p>
                    )}

                    {missing.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <span style={{ color: '#9b9590', fontSize: 12 }}>חסרים:</span>
                        {missing.slice(0, 3).map(m => (
                          <span key={m} style={{ background: '#fff8ed', color: '#a07c20', fontSize: 11, borderRadius: 4 }}
                            className="px-2 py-0.5">{m}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: score + actions */}
                  <div className="flex flex-col items-end gap-3">
                    {score > 0 && (
                      <div style={{ background: scoreBg, borderRadius: 12, padding: '8px 16px', textAlign: 'center' }}>
                        <div style={{ color: scoreColor, fontSize: '1.8rem', fontWeight: 800, lineHeight: 1 }}>{score}</div>
                        <div style={{ color: scoreColor, fontSize: 10, opacity: 0.7 }}>ציון</div>
                      </div>
                    )}
                    <div className="flex gap-2">
                      {assessment?.pdf_url && (
                        <a href={assessment.pdf_url} target="_blank" rel="noopener noreferrer"
                          style={{ background: '#0d3d2a', color: '#c9a84c', fontSize: 12, fontWeight: 700, borderRadius: 8 }}
                          className="px-3 py-2 hover:opacity-80 transition-opacity">
                          📄 דוח PDF
                        </a>
                      )}
                      <a href={`https://wa.me/972${lead.phone?.replace(/^0/, '')}`}
                        target="_blank" rel="noopener noreferrer"
                        style={{ background: '#25D366', color: 'white', fontSize: 12, fontWeight: 700, borderRadius: 8 }}
                        className="px-3 py-2 hover:opacity-80 transition-opacity">
                        💬 וואטסאפ
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
