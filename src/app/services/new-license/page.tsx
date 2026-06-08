import { Metadata } from "next"
import Link from "next/link"
import PageLayout, { CTABanner } from "@/components/marketing/PageLayout"

export const metadata: Metadata = {
  title: "בקשה חדשה לרישיון קנאביס רפואי | המרכז לליווי רפואי",
  description: "ליווי מקצועי בהגשת בקשה חדשה לרישיון קנאביס רפואי בישראל. בדיקת התאמה, הכנת מסמכים והפניה לגורמים מוסמכים.",
}

export default function NewLicensePage() {
  return (
    <PageLayout>
      <section style={{ background: "#0d3d2a" }} className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }} className="uppercase mb-4 text-center">שירות</div>
          <h1 style={{ color: "#f7f5f0", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.2 }} className="text-center mb-6">
            בקשה חדשה לרישיון קנאביס רפואי
          </h1>
          <p style={{ color: "rgba(247,245,240,0.6)", fontSize: "1.1rem", lineHeight: 1.8 }} className="text-center max-w-2xl mx-auto mb-10">
            לא יודעים אם מגיע לכם? מה צריך להכין? אנחנו מסדרים הכל — מהבדיקה הראשונית ועד הגשת התיק לגורם המוסמך.
          </p>
          <div className="flex justify-center">
            <Link href="/eligibility"
              style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 800, borderRadius: 12, fontSize: "1rem" }}
              className="px-10 py-4 hover:opacity-90 transition-opacity">
              בדיקת התאמה ראשונית — חינם
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: "#f7f5f0" }} className="py-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 style={{ color: "#0d3d2a", fontWeight: 800, fontSize: "1.5rem" }} className="mb-6">מה כלול בשירות?</h2>
            <div className="space-y-4">
              {[
                ["בדיקת התאמה ראשונית", "שאלון מפורט וציון ראשוני שיגיד לכם אם יש בסיס לבקשה."],
                ["רשימת מסמכים אישית", "כל מטופל צריך מסמכים אחרים — נכין רשימה מותאמת."],
                ["ניהול תיק מלא", "נציג מטעמנו ינהל את כל תהליך איסוף המסמכים."],
                ["סיכום AI לנציג", "הנציג שלנו יקבל סיכום AI של התיק לפני כל שיחה."],
                ["הפניה לגורם מוסמך", "כשהתיק מוכן — נפנה לרופא/גורם מוסמך להמשך."],
              ].map(([title, desc]) => (
                <div key={title} style={{ background: "white", border: "1.5px solid #e8e4dc", borderRadius: 14 }} className="p-5">
                  <div style={{ color: "#0d3d2a", fontWeight: 700, fontSize: "0.95rem" }} className="mb-1">{title}</div>
                  <div style={{ color: "#6b6560", fontSize: "0.87rem", lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ color: "#0d3d2a", fontWeight: 800, fontSize: "1.5rem" }} className="mb-6">מסמכים נדרשים בדרך כלל</h2>
            <div style={{ background: "white", border: "1.5px solid #e8e4dc", borderRadius: 16 }} className="p-6">
              {[
                "סיכום רופא משפחה / מטפל",
                "אבחנה פסיכיאטרית (לPTSD)",
                "תוצאות MRI / CT רלוונטיות",
                "מרשמים קיימים לתרופות",
                "תיעוד טיפולים קודמים שנוסו",
                "סיכום אשפוז (אם רלוונטי)",
              ].map((doc) => (
                <div key={doc} className="flex items-center gap-3 py-3"
                  style={{ borderBottom: "1px solid #f0ece4" }}>
                  <div style={{ width: 8, height: 8, background: "#c9a84c", borderRadius: "50%", flexShrink: 0 }} />
                  <span style={{ color: "#3d3a35", fontSize: "0.9rem" }}>{doc}</span>
                </div>
              ))}
              <p style={{ color: "#9b9590", fontSize: "0.82rem", lineHeight: 1.7 }} className="mt-4">
                * הרשימה הסופית מותאמת אישית לפי מצבכם הרפואי. בדיקת ההתאמה תגדיר בדיוק מה נדרש.
              </p>
            </div>

            <div style={{ background: "#0d3d2a", borderRadius: 16 }} className="p-6 mt-6">
              <div style={{ color: "#c9a84c", fontWeight: 700, fontSize: "1.1rem" }} className="mb-2">עלות השירות</div>
              <div style={{ color: "#f7f5f0", fontSize: "2rem", fontWeight: 800 }} className="mb-1">699–1,500 ₪</div>
              <div style={{ color: "rgba(247,245,240,0.5)", fontSize: "0.85rem" }}>
                בהתאם למורכבות התיק. התשלום לאחר שיחה ראשונה בלבד.
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  )
}
