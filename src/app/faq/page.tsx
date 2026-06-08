import { Metadata } from "next"
import PageLayout, { CTABanner } from "@/components/marketing/PageLayout"

export const metadata: Metadata = {
  title: "שאלות נפוצות | המרכז לליווי רפואי בישראל",
}

const FAQS = [
  { q: "כמה זמן לוקח התהליך?", a: "תלוי בסוג הבקשה ובמסמכים הקיימים. בקשה חדשה: 4–8 שבועות. חידוש: 2–4 שבועות. בדיקת מסמכים: עד 5 ימי עסקים." },
  { q: "האם אתם מבטיחים אישור?", a: "לא. המערכת מספקת ליווי תפעולי בלבד. ההחלטה הרפואית נמצאת בידי רופאים וגורמים מוסמכים בלבד. אנחנו אומרים את האמת." },
  { q: "כמה עולה השירות?", a: "בדיקת ההתאמה חינמית לחלוטין. שירות בדיקת מסמכים: 249–499 ₪. ליווי מלא: 699–1,500 ₪. חידוש/הגדלה: 399–900 ₪. התשלום לאחר שיחה ראשונה." },
  { q: "האם המידע שלי מאובטח?", a: "כן. כל המסמכים מאוחסנים מוצפנים בשרתים מאובטחים. גישה מוגבלת לצוות בלבד. לא חולקים מידע עם גורמים חיצוניים ללא הסכמה מפורשת." },
  { q: "מה אם אין לי רופא מטפל קבוע?", a: "זה נפוץ. אנחנו יכולים לייעץ על הדרכים לפנות לרופא מטפל, אך לא יכולים לספק רופא. ההפניה לגורם רפואי מוסמך היא חלק מהשירות." },
  { q: "האם ניתן לפנות גם בצ'אט/מייל?", a: "כן. ניתן ליצור קשר בוואטסאפ, במייל ודרך הפורטל האישי. נציג חוזר תוך 24 שעות בשעות פעילות (א׳–ה׳ 9:00–18:00)." },
  { q: "מה ההבדל בין רישיון למרשם?", a: "רישיון ניתן לתקופה ארוכה יותר ומחייב אישור ועדה. מרשם הוא אישור קצר-טווח הניתן על ידי רופא מוסמך. ההכנה לשניהם דומה, עם הבדלים במסמכים הנדרשים." },
  { q: "מה עושים אם הבקשה נדחתה?", a: "ניתן לערער תוך 45 יום. אנחנו מסייעים בהכנת הערעור, השלמת מסמכים חסרים וניסיון חוזר. דחייה לא אומרת שמגיע לכם — לפעמים רק חסר מסמך אחד." },
]

export default function FAQPage() {
  return (
    <PageLayout>
      <section style={{ background: "#0d3d2a" }} className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }} className="uppercase mb-4">שאלות ותשובות</div>
          <h1 style={{ color: "#f7f5f0", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800 }} className="mb-4">
            שאלות נפוצות
          </h1>
        </div>
      </section>

      <section style={{ background: "#f7f5f0" }} className="py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          {FAQS.map((faq) => (
            <div key={faq.q} style={{ background: "white", border: "1.5px solid #e8e4dc", borderRadius: 16 }} className="p-6">
              <h2 style={{ color: "#0d3d2a", fontWeight: 700, fontSize: "1rem" }} className="mb-3">{faq.q}</h2>
              <p style={{ color: "#6b6560", fontSize: "0.9rem", lineHeight: 1.8 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABanner />
    </PageLayout>
  )
}
