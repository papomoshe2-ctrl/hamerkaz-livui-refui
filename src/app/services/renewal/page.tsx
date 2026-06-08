import { Metadata } from "next"
import Link from "next/link"
import PageLayout, { CTABanner } from "@/components/marketing/PageLayout"

export const metadata: Metadata = {
  title: "חידוש רישיון קנאביס רפואי | המרכז לליווי רפואי",
  description: "ליווי בתהליך חידוש רישיון קנאביס רפואי. תזכורות, הכנת מסמכים ומעקב עד השלמת החידוש.",
}

export default function RenewalPage() {
  return (
    <PageLayout>
      <section style={{ background: "#0d3d2a" }} className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }} className="uppercase mb-4">שירות</div>
          <h1 style={{ color: "#f7f5f0", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.2 }} className="mb-6">
            חידוש רישיון / מרשם קנאביס רפואי
          </h1>
          <p style={{ color: "rgba(247,245,240,0.6)", fontSize: "1.1rem", lineHeight: 1.8 }} className="max-w-2xl mx-auto mb-10">
            הרישיון פג בעוד כמה חודשים? אנחנו מתחילים את תהליך החידוש בזמן הנכון, מנהלים את התיק ומוודאים שהכל עובד בצורה רציפה.
          </p>
          <Link href="/eligibility"
            style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 800, borderRadius: 12, fontSize: "1rem" }}
            className="inline-block px-10 py-4 hover:opacity-90 transition-opacity">
            בדיקת התאמה לחידוש — חינם
          </Link>
        </div>
      </section>

      <section style={{ background: "#f7f5f0" }} className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 style={{ color: "#0d3d2a", fontWeight: 800, fontSize: "1.5rem" }} className="mb-8 text-center">לוח הזמנים לחידוש</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { when: "30 יום לפני", action: "שליחת התראה ראשונה ופתיחת תיק חידוש.", color: "#fff3cd" },
              { when: "21 יום לפני", action: "רשימת מסמכים נדרשים נשלחת ללקוח.", color: "#d4edda" },
              { when: "14 יום לפני", action: "בדיקת מסמכים שהתקבלו וזיהוי חסרים.", color: "#cce5ff" },
              { when: "7 ו-3 ימים", action: "תזכורות אחרונות ואישור הגשה לגורם מוסמך.", color: "#f8d7da" },
            ].map((s) => (
              <div key={s.when} style={{ background: "white", border: "1.5px solid #e8e4dc", borderRadius: 16 }} className="p-6 text-center">
                <div style={{ background: s.color, borderRadius: 8, fontWeight: 800, fontSize: "0.9rem", color: "#0d3d2a" }}
                  className="px-3 py-1.5 inline-block mb-3">{s.when}</div>
                <p style={{ color: "#6b6560", fontSize: "0.88rem", lineHeight: 1.7 }}>{s.action}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#0d3d2a", borderRadius: 20 }} className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div style={{ color: "#c9a84c", fontWeight: 700, fontSize: "1.1rem" }} className="mb-1">עלות שירות החידוש</div>
              <div style={{ color: "#f7f5f0", fontSize: "2rem", fontWeight: 800 }}>399–900 ₪</div>
              <div style={{ color: "rgba(247,245,240,0.5)", fontSize: "0.85rem" }}>בהתאם למורכבות התיק</div>
            </div>
            <Link href="/eligibility"
              style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 700, borderRadius: 12, fontSize: "1rem", whiteSpace: "nowrap" }}
              className="px-8 py-4 hover:opacity-90 transition-opacity">
              התחל חידוש עכשיו →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  )
}
