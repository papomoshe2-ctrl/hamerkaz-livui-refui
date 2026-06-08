import { Metadata } from "next"
import Link from "next/link"
import PageLayout, { CTABanner } from "@/components/marketing/PageLayout"

export const metadata: Metadata = {
  title: "מרכז ידע | המרכז לליווי רפואי בישראל",
  description: "מדריכים, שאלות ותשובות ומאמרים על קנאביס רפואי בישראל.",
}

const ARTICLES = [
  { title: "מדריך מלא לקנאביס רפואי בישראל", type: "מדריך", href: "/knowledge/madrich-cannabis", desc: "כל מה שצריך לדעת על התהליך — ממי זכאי ועד קבלת הרישיון." },
  { title: "איזה מסמכים צריך לבקשת קנאביס רפואי?", type: "מדריך", href: "/knowledge/mishmachim", desc: "רשימה מפורטת של המסמכים הנדרשים לפי סוג הבקשה והמצב הרפואי." },
  { title: "כמה זמן לוקח תהליך קנאביס רפואי?", type: "שאלה", href: "/knowledge/zman", desc: "לוחות זמנים ריאליים לפי סוג בקשה ורמת מורכבות." },
  { title: "מה עושים אם הבקשה נדחתה?", type: "שאלה", href: "/knowledge/dchiya", desc: "צעדים מעשיים לאחר דחייה — ערעור, השלמת מסמכים וניסיון חוזר." },
  { title: "הבדל בין רישיון למרשם לקנאביס רפואי", type: "מדריך", href: "/knowledge/rishyon-mirsham", desc: "הסבר ברור על ההבדלים המשפטיים והמעשיים בין שני הסוגים." },
  { title: "חידוש רישיון קנאביס — כמה זמן לפני?", type: "שאלה", href: "/knowledge/hidush-zman", desc: "מתי להתחיל, מה צריך להכין ואיך לא לפספס את המועד." },
]

const TYPE_COLORS: Record<string, string> = {
  "מדריך": "rgba(13,61,42,0.1)",
  "שאלה": "rgba(201,168,76,0.15)",
}
const TYPE_TEXT: Record<string, string> = {
  "מדריך": "#0d3d2a",
  "שאלה": "#a07c20",
}

export default function KnowledgePage() {
  return (
    <PageLayout>
      <section style={{ background: "#0d3d2a" }} className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }} className="uppercase mb-4">מרכז ידע</div>
          <h1 style={{ color: "#f7f5f0", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800 }} className="mb-4">
            מידע מקצועי על קנאביס רפואי
          </h1>
          <p style={{ color: "rgba(247,245,240,0.6)", fontSize: "1.1rem", lineHeight: 1.8 }} className="max-w-2xl mx-auto">
            מדריכים, שאלות ותשובות ומאמרים שיעזרו לכם להבין את התהליך לפני שמתחילים.
          </p>
        </div>
      </section>

      <section style={{ background: "#f7f5f0" }} className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ARTICLES.map((a) => (
              <Link key={a.href} href={a.href}
                style={{ background: "white", border: "1.5px solid #e8e4dc", borderRadius: 16 }}
                className="p-6 group hover:shadow-lg hover:-translate-y-0.5 transition-all block">
                <span style={{ background: TYPE_COLORS[a.type], color: TYPE_TEXT[a.type], fontSize: 11, fontWeight: 700, borderRadius: 6 }}
                  className="px-2.5 py-1 inline-block mb-3">{a.type}</span>
                <h2 style={{ color: "#0d3d2a", fontWeight: 700, fontSize: "1rem", lineHeight: 1.4 }} className="mb-2">{a.title}</h2>
                <p style={{ color: "#6b6560", fontSize: "0.87rem", lineHeight: 1.7 }}>{a.desc}</p>
                <div style={{ color: "#0d3d2a", fontWeight: 700, fontSize: 13 }} className="mt-4 group-hover:underline">קרא עוד ←</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </PageLayout>
  )
}
