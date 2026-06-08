import { Metadata } from "next"
import Link from "next/link"
import PageLayout, { CTABanner } from "@/components/marketing/PageLayout"

export const metadata: Metadata = {
  title: "אודות | המרכז לליווי רפואי בישראל",
  description: "אנחנו מלווים מטופלים בתהליכי קנאביס רפואי בישראל — מקצועי, דיסקרטי ומסודר.",
}

export default function AboutPage() {
  return (
    <PageLayout>
      <section style={{ background: "#0d3d2a" }} className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }} className="uppercase mb-4">אודות</div>
          <h1 style={{ color: "#f7f5f0", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800 }} className="mb-4">
            המרכז לליווי רפואי בישראל
          </h1>
          <p style={{ color: "rgba(247,245,240,0.6)", fontSize: "1.1rem", lineHeight: 1.8 }} className="max-w-2xl mx-auto">
            ליווי דיסקרטי, מסודר וחכם בתהליכים רפואיים מורכבים.
          </p>
        </div>
      </section>

      <section style={{ background: "#f7f5f0" }} className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 style={{ color: "#0d3d2a", fontWeight: 800, fontSize: "1.6rem" }} className="mb-6">מי אנחנו?</h2>
              <div style={{ color: "#6b6560", fontSize: "0.95rem", lineHeight: 1.9 }} className="space-y-4">
                <p>
                  המרכז לליווי רפואי בישראל הוקם מתוך הכרה שתהליכי קנאביס רפואי בישראל מורכבים, בירוקרטיים ומבלבלים — ורוב המטופלים מתמודדים איתם לבד.
                </p>
                <p>
                  אנחנו מספקים ליווי תפעולי מקצועי: בדיקת התאמה, הכנת תיק מסמכים, ניהול תהליך והפניה לגורמים מוסמכים. אנחנו לא רופאים, לא מוכרים קנאביס ולא מבטיחים אישור.
                </p>
                <p>
                  המטרה שלנו: שכל מטופל שמגיע אלינו ידע בדיוק מה מצבו, מה חסר לו ומה הצעד הבא — ולא יאבד זמן יקר בבירוקרטיה מיותרת.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: "מקצועי ומסודר", desc: "נציגים מנוסים, תהליך ברור, תיעוד מלא — כל שלב מתועד ומנוהל." },
                { title: "דיסקרטי לחלוטין", desc: "הנתונים שלכם מוצפנים. לא חולקים מידע עם גורמים חיצוניים ללא הסכמה." },
                { title: "ללא הבטחות ריקות", desc: "אנחנו אומרים את האמת. אם אין בסיס לבקשה — נאמר את זה." },
                { title: "מענה אנושי מהיר", desc: "נציג חוזר תוך 24 שעות בשעות פעילות. לא בוטים, לא תורים אינסופיים." },
              ].map((v) => (
                <div key={v.title} style={{ background: "white", border: "1.5px solid #e8e4dc", borderRadius: 14 }} className="p-5">
                  <div className="flex items-center gap-3 mb-1">
                    <div style={{ width: 8, height: 8, background: "#c9a84c", borderRadius: "50%" }} />
                    <span style={{ color: "#0d3d2a", fontWeight: 700 }}>{v.title}</span>
                  </div>
                  <p style={{ color: "#6b6560", fontSize: "0.87rem", lineHeight: 1.7, paddingRight: 20 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#0d3d2a", borderRadius: 20 }} className="p-8 mt-16 text-center">
            <p style={{ color: "rgba(247,245,240,0.6)", fontSize: "0.95rem" }} className="mb-2">
              יש שאלות? נשמח לדבר.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Link href="/contact"
                style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 700, borderRadius: 10 }}
                className="px-8 py-3 hover:opacity-90">
                צרו קשר
              </Link>
              <a href="https://wa.me/972500000000"
                style={{ border: "1.5px solid rgba(247,245,240,0.2)", color: "#f7f5f0", fontWeight: 600, borderRadius: 10 }}
                className="px-8 py-3 hover:bg-white/10 transition-all">
                💬 וואטסאפ
              </a>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </PageLayout>
  )
}
