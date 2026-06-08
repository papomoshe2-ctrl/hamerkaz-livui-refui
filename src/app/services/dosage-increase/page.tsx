import { Metadata } from "next"
import Link from "next/link"
import PageLayout, { CTABanner } from "@/components/marketing/PageLayout"

export const metadata: Metadata = {
  title: "הגדלת מינון קנאביס רפואי | המרכז לליווי רפואי",
}

export default function DosageIncreasePage() {
  return (
    <PageLayout>
      <section style={{ background: "#0d3d2a" }} className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }} className="uppercase mb-4">שירות</div>
          <h1 style={{ color: "#f7f5f0", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800 }} className="mb-6">
            הגדלת מינון קנאביס רפואי
          </h1>
          <p style={{ color: "rgba(247,245,240,0.6)", fontSize: "1.1rem", lineHeight: 1.8 }} className="max-w-2xl mx-auto mb-10">
            יש לכם רישיון קיים אך המינון הנוכחי אינו מספיק? אנחנו מסייעים לאסוף את התיעוד הרפואי הנדרש לבקשת ההגדלה.
          </p>
          <Link href="/eligibility"
            style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 800, borderRadius: 12 }}
            className="inline-block px-10 py-4 hover:opacity-90">
            בדיקת התאמה — חינם
          </Link>
        </div>
      </section>

      <section style={{ background: "#f7f5f0" }} className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div style={{ background: "white", border: "1.5px solid #e8e4dc", borderRadius: 20 }} className="p-8">
              <h2 style={{ color: "#0d3d2a", fontWeight: 800, fontSize: "1.3rem" }} className="mb-6">מה נדרש לבקשת הגדלה?</h2>
              {["תיעוד שהמינון הנוכחי אינו מספיק", "סיכומי רופא עדכניים (עד שנה)", "תיעוד טיפולים מקבילים שנוסו", "הסבר על השפעה על איכות חיים"].map((item) => (
                <div key={item} className="flex items-center gap-3 py-3" style={{ borderBottom: "1px solid #f0ece4" }}>
                  <div style={{ width: 8, height: 8, background: "#c9a84c", borderRadius: "50%", flexShrink: 0 }} />
                  <span style={{ color: "#3d3a35", fontSize: "0.9rem" }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "#0d3d2a", borderRadius: 20 }} className="p-8">
              <h2 style={{ color: "#c9a84c", fontWeight: 800, fontSize: "1.3rem" }} className="mb-6">עלות ולוח זמנים</h2>
              <div style={{ color: "#f7f5f0", fontSize: "2.2rem", fontWeight: 800 }} className="mb-2">399–900 ₪</div>
              <p style={{ color: "rgba(247,245,240,0.55)", fontSize: "0.9rem", lineHeight: 1.8 }} className="mb-6">
                בהתאם למורכבות התיק ומספר המסמכים הנדרשים.
              </p>
              <Link href="/eligibility"
                style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 700, borderRadius: 10 }}
                className="block text-center py-3 hover:opacity-90 transition-opacity">
                התחל בדיקה עכשיו →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </PageLayout>
  )
}
