import { Metadata } from "next"
import Link from "next/link"
import PageLayout, { PageHero, CTABanner } from "@/components/marketing/PageLayout"

export const metadata: Metadata = {
  title: "השירותים שלנו | המרכז לליווי רפואי בישראל",
  description: "ליווי מקצועי בכל שלבי תהליך קנאביס רפואי — בקשה חדשה, חידוש, הגדלת מינון ובדיקת מסמכים.",
}

const SERVICES = [
  {
    title: "בקשה חדשה לרישיון",
    desc: "ליווי מלא מבדיקת ההתאמה ועד הגשת הבקשה. נוודא שהתיק שלכם מלא, מסודר ועומד בכל הדרישות לפני הפניה לגורם המוסמך.",
    price: "699–1,500 ₪",
    tag: "פופולרי",
    href: "/services/new-license",
    items: ["בדיקת התאמה ראשונית", "רשימת מסמכים מותאמת אישית", "ניהול תיק מלא", "הפניה לגורם מוסמך"],
  },
  {
    title: "חידוש רישיון / מרשם",
    desc: "תהליך החידוש מתחיל 30–60 יום לפני התפוגה. אנחנו שולחים תזכורות, מנהלים את התיק ומוודאים שלא תפספסו את המועד.",
    price: "399–900 ₪",
    tag: "מבוקש",
    href: "/services/renewal",
    items: ["תזכורות 30/14/7 ימים מראש", "בדיקת מסמכים עדכניים", "ניהול תהליך החידוש", "מעקב עד סגירה"],
  },
  {
    title: "הגדלת מינון",
    desc: "מעוניינים להגדיל מינון? נסייע לאסוף את התיעוד הרפואי הנדרש ולהציגו בצורה הטובה ביותר לגורם המוסמך.",
    price: "399–900 ₪",
    tag: null,
    href: "/services/dosage-increase",
    items: ["בדיקת זכאות להגדלה", "איסוף תיעוד רפואי מתאים", "הכנת בקשה מסודרת", "הפניה לגורם מוסמך"],
  },
  {
    title: "בדיקת מסמכים",
    desc: "יש לכם מסמכים אך לא בטוחים אם מספיקים? נבדוק, נזהה חסרים ונכין רשימה מדויקת של מה שצריך להשלים.",
    price: "249–499 ₪",
    tag: null,
    href: "/services/documents-review",
    items: ["סקירת כל המסמכים הקיימים", "זיהוי חסרים לפי שירות", "רשימת השלמות מדויקת", "ייעוץ להמשך"],
  },
]

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        tag="השירותים שלנו"
        title="ליווי מלא בכל שלב"
        subtitle="אנחנו מלווים אתכם מבדיקת ההתאמה הראשונית ועד הפניה לגורם המוסמך. כל שירות מותאם לצורך הספציפי שלכם."
      />

      <section style={{ background: "#f7f5f0" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((s) => (
              <div key={s.href} style={{ background: "white", border: "1.5px solid #e8e4dc", borderRadius: 20 }} className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h2 style={{ color: "#0d3d2a", fontSize: "1.3rem", fontWeight: 800 }}>{s.title}</h2>
                  {s.tag && (
                    <span style={{ background: "rgba(201,168,76,0.15)", color: "#a07c20", fontSize: 11, fontWeight: 700, borderRadius: 6 }}
                      className="px-2.5 py-1 whitespace-nowrap">{s.tag}</span>
                  )}
                </div>
                <p style={{ color: "#6b6560", lineHeight: 1.8, fontSize: "0.95rem" }} className="mb-6">{s.desc}</p>
                <div className="space-y-2 mb-6">
                  {s.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div style={{ width: 18, height: 18, background: "#0d3d2a", borderRadius: "50%", flexShrink: 0 }}
                        className="flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <span style={{ color: "#3d3a35", fontSize: "0.9rem" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ color: "#0d3d2a", fontWeight: 700, fontSize: "1.1rem" }}>{s.price}</span>
                  <Link href={s.href}
                    style={{ background: "#0d3d2a", color: "#f7f5f0", fontWeight: 700, borderRadius: 10, fontSize: 14 }}
                    className="px-6 py-2.5 hover:opacity-80 transition-opacity">
                    קרא עוד →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  )
}
