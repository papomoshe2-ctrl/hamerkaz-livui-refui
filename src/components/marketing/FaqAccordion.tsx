"use client"

import { useState } from "react"

const FAQS = [
  {
    q: "כמה זמן לוקח התהליך?",
    a: "תלוי במצב הרפואי ובמסמכים הקיימים. בממוצע 4–8 שבועות מתחילת הליווי ועד הפניה לגורם החיצוני. ב-80% מהמקרים אנחנו מסיימים את הכנת התיק תוך 3 שבועות בלבד.",
  },
  {
    q: "האם אתם מבטיחים אישור?",
    a: "לא. אנחנו מספקים ליווי תפעולי מקצועי בלבד — הכנת תיק מדויק ומוצג בצורה הטובה ביותר. ההחלטה הסופית נמצאת בידי גורמים רפואיים מוסמכים בלבד.",
  },
  {
    q: "כמה עולה השירות?",
    a: "בדיקת ההתאמה הראשונית חינמית לחלוטין. שירותי הליווי מתומחרים בהתאם לסוג הבקשה ומורכבות התיק — נציג יפרט את כל העלויות בשיחה הראשונה, ללא הפתעות.",
  },
  {
    q: "האם המידע שלי מאובטח?",
    a: "כן, לגמרי. כל המסמכים מוצפנים, גישה מוגבלת לצוות המורשה בלבד, Privacy by Design. אנחנו לא חולקים מידע עם שום גורם שלישי.",
  },
  {
    q: "מה ההבדל בין שירות חידוש לבקשה חדשה?",
    a: "בקשה חדשה מיועדת למי שמעולם לא קיבל רישיון קנאביס רפואי. חידוש רישיון/מרשם מיועד למי שרישיונו פג ועליו לחדשו. התהליך שונה — בחידוש יש יתרון של היסטוריה רפואית קיימת.",
  },
  {
    q: "האם אפשר להגיש בדיקת התאמה בלי מסמכים?",
    a: "כן. בדיקת ההתאמה מתבצעת גם ללא מסמכים — הדוח יפרט בדיוק אילו מסמכים יש לאסוף ואיך להשיגם. זו נקודת ההתחלה שלנו עם רוב הלקוחות.",
  },
]

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => (
        <div
          key={i}
          onClick={() => setOpen(open === i ? null : i)}
          style={{
            border: open === i ? "1.5px solid #c9a84c" : "1.5px solid #e8e4dc",
            borderRadius: 16,
            background: open === i ? "#fffdf7" : "white",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          <div className="flex items-center justify-between p-5 md:p-6">
            <div
              style={{
                color: "#0d3d2a",
                fontWeight: 700,
                fontSize: "0.97rem",
                lineHeight: 1.4,
                flex: 1,
              }}
            >
              {faq.q}
            </div>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: open === i ? "#c9a84c" : "rgba(13,61,42,0.07)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginRight: 12,
                transition: "all 0.2s",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke={open === i ? "#0d3d2a" : "#0d3d2a"}
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="6" y1="1" x2="6" y2="11" />
                <line x1="1" y1="6" x2="11" y2="6" />
              </svg>
            </div>
          </div>
          {open === i && (
            <div
              style={{
                color: "#5a554f",
                fontSize: "0.9rem",
                lineHeight: 1.85,
                paddingBottom: 20,
                paddingRight: 24,
                paddingLeft: 24,
              }}
            >
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
