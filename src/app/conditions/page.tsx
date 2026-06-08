import { Metadata } from "next"
import Link from "next/link"
import PageLayout, { CTABanner } from "@/components/marketing/PageLayout"

export const metadata: Metadata = {
  title: "מצבים רפואיים | המרכז לליווי רפואי בישראל",
  description: "מידע על מצבים רפואיים מוכרים בישראל לצורך קבלת רישיון קנאביס רפואי.",
}

const CONDITIONS = [
  { name: "פוסט טראומה (PTSD)", slug: "ptsd", desc: "הפרעת דחק פוסט-טראומטית — אחד המצבים הנפוצים ביותר בבקשות לקנאביס רפואי בישראל." },
  { name: "פיברומיאלגיה", slug: "fibromyalgia", desc: "תסמונת כאב כרוני נפוצה הכוללת כאבים בשרירים, עייפות ובעיות שינה." },
  { name: "כאב כרוני", slug: "chronic-pain", desc: "כאב הנמשך מעל 3 חודשים שלא הגיב לטיפולים קונבנציונליים." },
  { name: "סרטן", slug: "cancer", desc: "מטופלי סרטן פעיל או בהחלמה הסובלים מכאב, בחילה ותופעות לוואי של כימותרפיה." },
  { name: "קרוהן", slug: "crohn", desc: "מחלת מעי דלקתית כרונית הגורמת לכאבי בטן, שלשולים ועייפות." },
  { name: "קוליטיס", slug: "colitis", desc: "דלקת כרונית של המעי הגס הגורמת לכאב ולהפרעות במערכת העיכול." },
  { name: "פרקינסון", slug: "parkinson", desc: "מחלה ניוונית הפוגעת בתנועה, נגרמת מחוסר דופמין במוח." },
  { name: "טרשת נפוצה", slug: "multiple-sclerosis", desc: "מחלה אוטואימונית הפוגעת במערכת העצבים המרכזית." },
  { name: "אפילפסיה", slug: "epilepsy", desc: "הפרעה נוירולוגית הגורמת לפרכוסים חוזרים." },
  { name: "כאב נוירופתי", slug: "neuropathic-pain", desc: "כאב הנגרם מנזק למערכת העצבים, לרוב תוצאה של סוכרת, פציעות או טיפולים כימותרפיים." },
]

export default function ConditionsPage() {
  return (
    <PageLayout>
      <section style={{ background: "#0d3d2a" }} className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }} className="uppercase mb-4">מצבים רפואיים</div>
          <h1 style={{ color: "#f7f5f0", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800 }} className="mb-4">
            מי זכאי לקנאביס רפואי?
          </h1>
          <p style={{ color: "rgba(247,245,240,0.6)", fontSize: "1.1rem", lineHeight: 1.8 }} className="max-w-2xl mx-auto">
            ישנם עשרות מצבים רפואיים מוכרים בישראל. להלן המצבים הנפוצים ביותר שאנחנו מלווים.
          </p>
        </div>
      </section>

      <section style={{ background: "#f7f5f0" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONDITIONS.map((c) => (
              <Link key={c.slug} href={`/conditions/${c.slug}`}
                style={{ background: "white", border: "1.5px solid #e8e4dc", borderRadius: 16 }}
                className="p-6 group hover:shadow-lg hover:-translate-y-0.5 transition-all block">
                <h2 style={{ color: "#0d3d2a", fontWeight: 700, fontSize: "1.1rem" }} className="mb-2 group-hover:text-yellow-700 transition-colors">
                  {c.name}
                </h2>
                <p style={{ color: "#6b6560", fontSize: "0.88rem", lineHeight: 1.7 }}>{c.desc}</p>
                <div style={{ color: "#0d3d2a", fontWeight: 700, fontSize: 13 }} className="mt-3 group-hover:underline">קרא עוד ←</div>
              </Link>
            ))}
          </div>

          <div style={{ background: "#0d3d2a", borderRadius: 20 }} className="p-8 mt-12 text-center">
            <p style={{ color: "rgba(247,245,240,0.7)", fontSize: "1rem" }} className="mb-4">
              לא מצאתם את המצב שלכם? ייתכן שעדיין מגיע לכם. בדקו עם בדיקת ההתאמה הראשונית.
            </p>
            <Link href="/eligibility"
              style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 800, borderRadius: 12 }}
              className="inline-block px-8 py-3 hover:opacity-90 transition-opacity">
              בדיקת התאמה — חינם
            </Link>
          </div>
        </div>
      </section>
      <CTABanner />
    </PageLayout>
  )
}
