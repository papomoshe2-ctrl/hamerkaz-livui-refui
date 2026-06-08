import { Metadata } from "next"
import Link from "next/link"
import PageLayout, { CTABanner } from "@/components/marketing/PageLayout"

export const metadata: Metadata = {
  title: "בדיקת מסמכים לקנאביס רפואי | המרכז לליווי רפואי",
}

export default function DocumentsReviewPage() {
  return (
    <PageLayout>
      <section style={{ background: "#0d3d2a" }} className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }} className="uppercase mb-4">שירות</div>
          <h1 style={{ color: "#f7f5f0", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800 }} className="mb-6">
            בדיקת מסמכים והכנת תיק
          </h1>
          <p style={{ color: "rgba(247,245,240,0.6)", fontSize: "1.1rem", lineHeight: 1.8 }} className="max-w-2xl mx-auto mb-10">
            יש לכם מסמכים אך לא בטוחים אם מספיקים? נבדוק, נזהה חסרים ונכין רשימה מדויקת — לפני שמתחילים את הבקשה.
          </p>
          <Link href="/eligibility"
            style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 800, borderRadius: 12 }}
            className="inline-block px-10 py-4 hover:opacity-90">
            שלחו מסמכים לבדיקה
          </Link>
        </div>
      </section>

      <section style={{ background: "#f7f5f0" }} className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "העלאת מסמכים", desc: "מעלים את המסמכים הקיימים דרך הפורטל האישי המאובטח." },
              { step: "02", title: "בדיקה מקצועית", desc: "רכז מסמכים מטעמנו בודק כל מסמך ומזהה חסרים." },
              { step: "03", title: "דוח מסמכים", desc: "מקבלים רשימה מדויקת של מה יש, מה חסר ומה צריך להשלים." },
            ].map((s) => (
              <div key={s.step} style={{ background: "white", border: "1.5px solid #e8e4dc", borderRadius: 16 }} className="p-6">
                <div style={{ color: "#c9a84c", fontSize: "2rem", fontWeight: 800 }} className="mb-3">{s.step}</div>
                <h3 style={{ color: "#0d3d2a", fontWeight: 700 }} className="mb-2">{s.title}</h3>
                <p style={{ color: "#6b6560", fontSize: "0.9rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "#0d3d2a", borderRadius: 20 }} className="p-8 mt-10 text-center">
            <div style={{ color: "#c9a84c", fontWeight: 700, fontSize: "1.1rem" }} className="mb-1">עלות הבדיקה</div>
            <div style={{ color: "#f7f5f0", fontSize: "2rem", fontWeight: 800 }} className="mb-2">249–499 ₪</div>
            <Link href="/eligibility"
              style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 700, borderRadius: 10 }}
              className="inline-block px-8 py-3 hover:opacity-90 mt-2">
              התחל בדיקה →
            </Link>
          </div>
        </div>
      </section>
      <CTABanner />
    </PageLayout>
  )
}
