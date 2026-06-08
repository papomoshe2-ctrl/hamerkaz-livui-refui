import Link from "next/link";

const STEPS = [
  { num: "01", title: "בדיקת התאמה ראשונית", desc: "מלאו שאלון קצר וקבלו דוח אישי חינם תוך דקות." },
  { num: "02", title: "איסוף מסמכים", desc: "נציג שלנו יסביר בדיוק אילו מסמכים נדרשים ויעזור לאסוף אותם." },
  { num: "03", title: "הכנת התיק", desc: "אנו מכינים את תיק הבקשה ומוודאים שהכל תקין לפני הגשה." },
  { num: "04", title: "הפניה לגורם מוסמך", desc: "מעבירים את התיק לרופא מוסמך לבדיקה ולהמשך הליך מול הרשויות." },
];

const CONDITIONS = [
  "פוסט טראומה (PTSD)", "פיברומיאלגיה", "כאב כרוני", "סרטן",
  "קרוהן וקוליטיס", "פרקינסון", "טרשת נפוצה", "אפילפסיה",
  "כאב נוירופתי", "מצבים נוספים",
];

const FAQS = [
  { q: "כמה זמן לוקח התהליך?", a: "תלוי במצב הרפואי ובמסמכים הקיימים. בממוצע 4–8 שבועות מתחילת הליווי ועד הפניה לגורם החיצוני." },
  { q: "האם אתם מבטיחים אישור?", a: "לא. המערכת מספקת ליווי תפעולי בלבד ואינה מבטיחה אישור. ההחלטה הרפואית והרגולטורית נמצאת בידי גורמים מוסמכים בלבד." },
  { q: "כמה עולה השירות?", a: "בדיקת ההתאמה הראשונית חינמית לחלוטין. שירותי הליווי מתומחרים לפי צורך — נציג יפרט בשיחה ראשונה." },
  { q: "האם המידע שלי מאובטח?", a: "כן. כל המסמכים מאוחסנים בצורה מוצפנת, גישה מוגבלת לצוות בלבד, ואנו פועלים לפי עקרון Privacy by Design." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-slate-800">
            המרכז לליווי רפואי
          </div>
          <div className="flex items-center gap-4">
            <Link href="/eligibility" className="text-slate-600 hover:text-slate-900 text-sm font-medium">
              בדיקת התאמה
            </Link>
            <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              כניסה
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            ליווי מקצועי ודיסקרטי
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            ליווי חכם בתהליכי
            <br />
            <span className="text-blue-400">קנאביס רפואי בישראל</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            בדיקת התאמה ראשונית, הכנת מסמכים, ניהול תיק והפניה לגורמים מוסמכים.
            <br />
            <span className="text-sm text-slate-400">המערכת אינה מעניקה ייעוץ רפואי ואינה מבטיחה אישור.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/eligibility"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-xl shadow-blue-900/50 hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              בדיקת התאמה ראשונית – חינם
            </Link>
            <a
              href="https://wa.me/972500000000"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all backdrop-blur-sm"
            >
              💬 דברו איתנו בוואטסאפ
            </a>
          </div>
          <p className="text-slate-400 text-sm mt-8">ללא התחייבות · תשובה תוך 24 שעות · דיסקרטי לחלוטין</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "500+", label: "לקוחות טופלו" },
            { num: "95%", label: "שביעות רצון" },
            { num: "24h", label: "זמן תגובה" },
            { num: "100%", label: "דיסקרטיות" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold mb-1">{s.num}</div>
              <div className="text-blue-100 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">השירותים שלנו</h2>
          <p className="text-slate-500">ליווי מלא בכל שלבי התהליך</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "בקשה חדשה", desc: "ליווי מלא בתהליך הגשת בקשה ראשונה לקנאביס רפואי", href: "/services/new-license", icon: "📋", color: "blue" },
            { title: "חידוש רישיון", desc: "ניהול תהליך החידוש לפני תאריך התפוגה עם תזכורות", href: "/services/renewal", icon: "🔄", color: "green" },
            { title: "הגדלת מינון", desc: "ליווי מקצועי בתהליך בקשת הגדלת מינון", href: "/services/dosage-increase", icon: "📈", color: "purple" },
            { title: "בדיקת מסמכים", desc: "בדיקה מקצועית והכנת תיק המסמכים הרפואי", href: "/services/documents-review", icon: "🗂️", color: "orange" },
          ].map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all group"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-slate-800 mb-2 text-lg group-hover:text-blue-600 transition-colors">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4 text-blue-600 text-sm font-medium group-hover:underline">קרא עוד ←</div>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">איך זה עובד?</h2>
            <p className="text-slate-500">4 שלבים פשוטים מבדיקת התאמה ועד הפניה לגורם מוסמך</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative text-center">
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-blue-100 translate-x-1/2" />
                )}
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                  {step.num}
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/eligibility" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors inline-block shadow-lg shadow-blue-200">
              התחל בדיקת התאמה עכשיו – חינם
            </Link>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">מצבים רפואיים מטופלים</h2>
          <p className="text-slate-500">אנו מלווים מטופלים עם מגוון מצבים רפואיים מוכרים</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {CONDITIONS.map((c) => (
            <Link
              key={c}
              href={`/conditions/${c}`}
              className="bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700 hover:text-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-all"
            >
              {c}
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">שאלות נפוצות</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white border border-slate-100 rounded-2xl p-6">
                <h3 className="font-bold text-slate-800 mb-2">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-blue-600 font-medium hover:underline">לכל השאלות והתשובות ←</Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">מוכנים להתחיל?</h2>
          <p className="text-blue-100 text-lg mb-8">בדיקת ההתאמה חינמית ומחייבת לשום דבר. קבלו דוח אישי תוך דקות.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/eligibility" className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg">
              בדיקת התאמה ראשונית – חינם
            </Link>
            <a href="https://wa.me/972500000000" className="border-2 border-white/40 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors">
              💬 וואטסאפ
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-white font-bold text-lg mb-1">המרכז לליווי רפואי בישראל</div>
              <div className="text-sm">ליווי דיסקרטי, מסודר וחכם בתהליכים רפואיים מורכבים</div>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">מדיניות פרטיות</Link>
              <Link href="/terms" className="hover:text-white transition-colors">תנאי שימוש</Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">נגישות</Link>
              <Link href="/contact" className="hover:text-white transition-colors">צור קשר</Link>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
            © 2024 המרכז לליווי רפואי בישראל | המערכת אינה מעניקה ייעוץ רפואי ואינה מחליפה רופא מוסמך.
          </div>
        </div>
      </footer>
    </main>
  );
}
