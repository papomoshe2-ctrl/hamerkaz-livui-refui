import Link from 'next/link'
import { createAdminClient } from '@/lib/supabase/admin'
import { Navbar, Footer } from '@/components/marketing/PageLayout'

const COMPLEXITY_LABEL: Record<string, { text: string; bg: string; color: string; border: string }> = {
  low: { text: 'נמוכה', bg: '#d4edda', color: '#155724', border: '#b8dabe' },
  medium: { text: 'בינונית', bg: '#fff3cd', color: '#856404', border: '#fce08a' },
  high: { text: 'גבוהה', bg: '#f8d7da', color: '#721c24', border: '#f0b8bc' },
}

const SERVICE_MAP: Record<string, string> = {
  new_license: 'בקשה חדשה לרישיון',
  renewal: 'חידוש רישיון / מרשם',
  dosage_increase: 'הגדלת מינון',
  documents_review: 'בדיקת מסמכים',
}

export default async function EligibilityResultPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>
}) {
  const { id } = await searchParams

  let assessment = null
  let lead = null

  if (id) {
    const supabase = createAdminClient()
    const { data } = await supabase
      .from('eligibility_assessments')
      .select('*, leads(*)')
      .eq('lead_id', id)
      .order('created_at', { ascending: false })
      .limit(1)
      .single()

    assessment = data
    lead = data?.leads
  }

  const score = assessment?.score ?? 0
  const complexity = assessment?.complexity ?? 'medium'
  const complexityInfo = COMPLEXITY_LABEL[complexity]
  const recommendation = assessment?.recommendation ?? 'מומלץ להתייעץ עם נציג'
  const missing = (assessment?.missing_documents as string[]) ?? []
  const available = (assessment?.documents_available as string[]) ?? []
  const pdfUrl = assessment?.pdf_url

  // Score color
  const scoreColor = score >= 70 ? '#0d3d2a' : score >= 40 ? '#856404' : '#721c24'
  const scoreBg = score >= 70 ? '#d4edda' : score >= 40 ? '#fff3cd' : '#f8d7da'

  return (
    <main style={{ fontFamily: "'Assistant', sans-serif", background: '#f7f5f0' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: '#0d3d2a' }} className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <div style={{ width: 64, height: 64, background: '#c9a84c', borderRadius: '50%' }}
            className="flex items-center justify-center mx-auto mb-6">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0d3d2a" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 style={{ color: '#f7f5f0', fontWeight: 800 }} className="text-2xl md:text-4xl mb-3">
            בדיקת ההתאמה הושלמה
          </h1>
          {lead && (
            <p style={{ color: 'rgba(247,245,240,0.6)', fontSize: '1rem' }}>
              {lead.full_name} — נציג יחזור אליך תוך 24 שעות
            </p>
          )}
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 md:px-6 py-10 space-y-6">

        {/* Score card */}
        <div style={{ background: 'white', border: '1.5px solid #e8e4dc', borderRadius: 20 }} className="p-6 md:p-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div style={{ color: '#9b9590', fontSize: 12, fontWeight: 600 }} className="uppercase mb-1">
                ציון התאמה ראשוני
              </div>
              <div style={{ fontSize: 'clamp(3rem,10vw,4.5rem)', fontWeight: 800, color: scoreColor, lineHeight: 1 }}>
                {score}
                <span style={{ fontSize: '1.2rem', color: '#9b9590', fontWeight: 400 }}>/100</span>
              </div>
            </div>
            <div style={{ background: scoreBg, borderRadius: 12, padding: '12 20', textAlign: 'right', maxWidth: 260 }}>
              <div style={{ color: scoreColor, fontWeight: 700, fontSize: '1.05rem', marginBottom: 4 }}>
                {recommendation}
              </div>
              <div style={{
                background: complexityInfo.bg, color: complexityInfo.color,
                border: `1px solid ${complexityInfo.border}`, borderRadius: 6,
                fontSize: 11, fontWeight: 700, padding: '2px 10px', display: 'inline-block', marginTop: 6
              }}>
                מורכבות: {complexityInfo.text}
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        {assessment && (
          <div style={{ background: 'white', border: '1.5px solid #e8e4dc', borderRadius: 20 }} className="p-6 md:p-8">
            <h2 style={{ color: '#0d3d2a', fontWeight: 800, fontSize: '1.1rem' }} className="mb-4">
              פרטי הפנייה
            </h2>
            <div className="space-y-0">
              {[
                ['מצב רפואי', assessment.condition],
                ['שירות מבוקש', SERVICE_MAP[assessment.requested_action] || assessment.requested_action],
                ['רישיון קודם', assessment.previous_license ? 'כן' : 'לא'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between py-3"
                  style={{ borderBottom: '1px solid #f0ece4' }}>
                  <span style={{ color: '#9b9590', fontSize: 14 }}>{label}</span>
                  <span style={{ color: '#1a1614', fontWeight: 600, fontSize: 14 }}>{value}</span>
                </div>
              ))}
            </div>

            {available.length > 0 && (
              <div className="mt-5">
                <div style={{ color: '#0d3d2a', fontWeight: 700, fontSize: 13 }} className="mb-2">
                  ✓ מסמכים קיימים
                </div>
                <div className="flex flex-wrap gap-2">
                  {available.filter(d => d !== 'אין מסמכים כרגע').map(d => (
                    <span key={d} style={{ background: '#d4edda', color: '#155724', fontSize: 12, borderRadius: 6 }}
                      className="px-3 py-1 font-medium">{d}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Missing documents */}
        {missing.length > 0 && (
          <div style={{ background: '#fff8ed', border: '1.5px solid #f0c060', borderRadius: 20 }} className="p-6">
            <h2 style={{ color: '#a07c20', fontWeight: 800, fontSize: '1rem' }} className="mb-3">
              ⚠ מסמכים שכדאי להכין
            </h2>
            <div className="space-y-2">
              {missing.map(doc => (
                <div key={doc} className="flex items-center gap-2">
                  <div style={{ width: 6, height: 6, background: '#c9a84c', borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{ color: '#6b5a1e', fontSize: 14 }}>{doc}</span>
                </div>
              ))}
            </div>
            <p style={{ color: '#9b8040', fontSize: 12, marginTop: 12, lineHeight: 1.7 }}>
              * הרשימה היא הערכה ראשונית בלבד. נציג יבדוק בדיוק מה נדרש בשיחה אישית.
            </p>
          </div>
        )}

        {/* PDF + Actions */}
        <div style={{ background: '#0d3d2a', borderRadius: 20 }} className="p-6 md:p-8">
          <h2 style={{ color: '#c9a84c', fontWeight: 800, fontSize: '1.1rem' }} className="mb-2">
            הדוח האישי שלכם
          </h2>
          <p style={{ color: 'rgba(247,245,240,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }} className="mb-6">
            הדוח המלא כולל את כל פרטי ההתאמה, רשימת המסמכים והמלצות לצעד הבא.
            {!pdfUrl && ' הדוח מוכן — צרו קשר לקבלתו.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            {pdfUrl ? (
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer"
                style={{ background: '#c9a84c', color: '#0d3d2a', fontWeight: 700, borderRadius: 10 }}
                className="flex-1 py-3.5 text-center hover:opacity-90 transition-opacity text-sm">
                📄 הורד דוח PDF
              </a>
            ) : (
              <div style={{ background: 'rgba(201,168,76,0.2)', color: '#c9a84c', borderRadius: 10, fontSize: 13 }}
                className="flex-1 py-3.5 text-center">
                דוח יישלח לאחר שיחה עם נציג
              </div>
            )}
            <a href="https://wa.me/972500000000"
              style={{ background: '#25D366', color: 'white', fontWeight: 700, borderRadius: 10 }}
              className="flex-1 py-3.5 text-center hover:opacity-90 transition-opacity text-sm">
              💬 דברו עם נציג עכשיו
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ background: '#faf9f6', border: '1px solid #e8e4dc', borderRadius: 12 }} className="p-5">
          <p style={{ color: '#9b9590', fontSize: 12, lineHeight: 1.8, textAlign: 'center' }}>
            דוח זה הוא כלי עזר תפעולי בלבד ואינו מהווה ייעוץ רפואי או התחייבות לאישור.
            כל החלטה רפואית נמצאת בידי גורמים מוסמכים בלבד.
          </p>
        </div>

        <div className="text-center pb-8">
          <Link href="/" style={{ color: '#9b9590', fontSize: 13 }} className="hover:text-slate-700">
            ← חזרה לעמוד הבית
          </Link>
        </div>
      </div>

      {/* Mobile sticky */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 flex gap-2"
        style={{ background: 'rgba(13,61,42,0.97)', borderTop: '1px solid rgba(201,168,76,0.25)' }}>
        <a href="https://wa.me/972500000000"
          style={{ background: '#25D366', color: 'white', fontWeight: 700, borderRadius: 10, fontSize: '0.9rem' }}
          className="flex-1 py-3 text-center">
          💬 דברו עם נציג
        </a>
        {pdfUrl && (
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer"
            style={{ background: '#c9a84c', color: '#0d3d2a', fontWeight: 700, borderRadius: 10, fontSize: '0.9rem' }}
            className="flex-1 py-3 text-center">
            📄 הורד דוח
          </a>
        )}
      </div>
      <div className="md:hidden h-16" />

      <Footer />
    </main>
  )
}
