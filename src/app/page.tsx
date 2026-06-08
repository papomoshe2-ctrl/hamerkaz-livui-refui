import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ fontFamily: "'Assistant', sans-serif", background: "#f7f5f0" }}>

      {/* ─── NAVBAR ─── */}
      <nav style={{ background: "#0d3d2a", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div style={{ width: 36, height: 36, background: "#c9a84c", borderRadius: 8 }}
              className="flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d3d2a" strokeWidth="2.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div>
              <div className="text-white font-bold text-base leading-tight">המרכז לליווי רפואי</div>
              <div style={{ color: "#c9a84c", fontSize: 11 }} className="leading-tight">בישראל</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[["שירותים", "/services"], ["מצבים רפואיים", "/conditions"], ["מרכז ידע", "/knowledge"], ["אודות", "/about"]].map(([label, href]) => (
              <Link key={href} href={href} style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}
                className="hover:text-white transition-colors font-medium">{label}</Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}
              className="hidden md:block hover:text-white transition-colors">כניסה</Link>
            <Link href="/eligibility"
              style={{ background: "#c9a84c", color: "#0d3d2a", fontSize: 14, fontWeight: 700, borderRadius: 8 }}
              className="px-5 py-2.5 hover:opacity-90 transition-opacity whitespace-nowrap">
              בדיקת התאמה חינם
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section style={{ background: "#0d3d2a", minHeight: "92vh" }}
        className="relative flex items-center overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #c9a84c 0%, transparent 50%), radial-gradient(circle at 80% 20%, #4ade80 0%, transparent 40%)" }} />
        <div className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 60%)" }} />

        <div className="max-w-7xl mx-auto px-6 py-24 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div style={{ width: 8, height: 8, background: "#c9a84c", borderRadius: "50%" }} />
                <span style={{ color: "#c9a84c", fontSize: 13, letterSpacing: "0.1em" }} className="font-semibold uppercase">
                  ליווי רפואי מקצועי · דיסקרטי · ישראל
                </span>
              </div>

              <h1 className="font-bold leading-tight mb-6"
                style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", color: "#f7f5f0", lineHeight: 1.15 }}>
                ליווי חכם ומסודר
                <br />
                <span style={{ color: "#c9a84c" }}>לתהליכי קנאביס</span>
                <br />
                <span style={{ color: "rgba(247,245,240,0.85)" }}>רפואי בישראל</span>
              </h1>

              <p style={{ color: "rgba(247,245,240,0.65)", fontSize: "1.1rem", lineHeight: 1.8 }}
                className="mb-10 max-w-lg">
                בדיקת התאמה ראשונית, הכנת מסמכים, ניהול תיק מסודר והפניה לגורמים מוסמכים.
                אנחנו לא מוכרים קנאביס ולא מעניקים ייעוץ רפואי — אנחנו מלווים אתכם בתהליך.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/eligibility"
                  style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 700, fontSize: "1rem", borderRadius: 12 }}
                  className="px-8 py-4 text-center hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-xl">
                  בדיקת התאמה ראשונית — חינם
                </Link>
                <a href="https://wa.me/972500000000"
                  style={{ border: "1.5px solid rgba(247,245,240,0.2)", color: "#f7f5f0", fontWeight: 600, fontSize: "1rem", borderRadius: 12 }}
                  className="px-8 py-4 text-center hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.144.566 4.155 1.548 5.899L.057 23.428a.75.75 0 00.921.921l5.529-1.491A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.5a10.45 10.45 0 01-5.398-1.497l-.386-.23-4.003 1.08 1.08-3.934-.252-.406A10.5 10.5 0 1112 22.5z" />
                  </svg>
                  דברו איתנו בוואטסאפ
                </a>
              </div>

              <div className="flex items-center gap-6">
                {[["🔒", "דיסקרטי לחלוטין"], ["⚡", "תשובה תוך 24 שעות"], ["✓", "ללא התחייבות"]].map(([icon, text]) => (
                  <div key={text} className="flex items-center gap-1.5">
                    <span style={{ color: "#c9a84c" }}>{icon}</span>
                    <span style={{ color: "rgba(247,245,240,0.5)", fontSize: 13 }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Card */}
            <div className="hidden lg:block">
              <div style={{ background: "rgba(247,245,240,0.04)", border: "1px solid rgba(247,245,240,0.1)", borderRadius: 24 }}
                className="p-8 backdrop-blur-sm">
                <div style={{ color: "#c9a84c", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em" }}
                  className="mb-6 uppercase">דוח ההתאמה שלך — חינם</div>

                {[
                  { label: "מצב רפואי", value: "פוסט טראומה (PTSD)", done: true },
                  { label: "משך הבעיה", value: "מעל 3 שנים", done: true },
                  { label: "מסמכים קיימים", value: "סיכום פסיכיאטר, מרשמים", done: true },
                  { label: "ציון התאמה", value: "בסיס טוב לבדיקה מקצועית", done: true },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-3"
                    style={{ borderBottom: "1px solid rgba(247,245,240,0.07)" }}>
                    <span style={{ color: "rgba(247,245,240,0.5)", fontSize: 13 }}>{row.label}</span>
                    <div className="flex items-center gap-2">
                      <span style={{ color: "#f7f5f0", fontSize: 14, fontWeight: 500 }}>{row.value}</span>
                      <div style={{ width: 18, height: 18, background: "#c9a84c", borderRadius: "50%" }}
                        className="flex items-center justify-center text-xs">✓</div>
                    </div>
                  </div>
                ))}

                <div style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 12 }}
                  className="p-4 mt-6">
                  <div style={{ color: "#c9a84c", fontWeight: 700, fontSize: 15 }} className="mb-1">
                    המלצה: יש בסיס לבדיקה מקצועית
                  </div>
                  <div style={{ color: "rgba(247,245,240,0.6)", fontSize: 12 }}>
                    מסמכים חסרים: סיכום רופא משפחה, MRI עדכני
                  </div>
                </div>

                <Link href="/eligibility"
                  style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 700, borderRadius: 10 }}
                  className="block text-center py-3 mt-4 text-sm hover:opacity-90 transition-opacity">
                  צרו דוח התאמה משלכם →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section style={{ background: "#0d3d2a", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "500+", sub: "לקוחות טופלו" },
              { num: "95%", sub: "שביעות רצון" },
              { num: "24h", sub: "זמן מענה" },
              { num: "100%", sub: "דיסקרטיות מובטחת" },
            ].map((s) => (
              <div key={s.sub}>
                <div style={{ color: "#c9a84c", fontSize: "2rem", fontWeight: 800 }}>{s.num}</div>
                <div style={{ color: "rgba(247,245,240,0.5)", fontSize: 13 }} className="mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section style={{ background: "#f7f5f0" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }}
              className="uppercase mb-3">השירותים שלנו</div>
            <h2 style={{ color: "#0d3d2a", fontSize: "2.2rem", fontWeight: 800 }}>ליווי מלא בכל שלב</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "בקשה חדשה לרישיון", desc: "ליווי מלא מבדיקת ההתאמה ועד הגשת הבקשה. נוודא שהתיק שלכם מלא, מסודר ועומד בכל הדרישות לפני הפניה לגורם המוסמך.", tag: "פופולרי", href: "/services/new-license" },
              { title: "חידוש רישיון / מרשם", desc: "תהליך החידוש מתחיל 30–60 יום לפני התפוגה. אנחנו שולחים תזכורות, מנהלים את התיק ומוודאים שלא תפספסו את המועד.", tag: "מבוקש", href: "/services/renewal" },
              { title: "הגדלת מינון", desc: "מעוניינים להגדיל מינון? נסייע לאסוף את התיעוד הרפואי הנדרש ולהציגו בצורה הטובה ביותר לבדיקת הגורם המוסמך.", tag: null, href: "/services/dosage-increase" },
              { title: "בדיקת מסמכים", desc: "יש לכם מסמכים אך לא בטוחים אם מספיקים? נבדוק, נזהה חסרים ונכין רשימה מדויקת של מה שצריך להשלים.", tag: null, href: "/services/documents-review" },
            ].map((s) => (
              <Link key={s.href} href={s.href}
                style={{ background: "white", border: "1.5px solid #e8e4dc", borderRadius: 20 }}
                className="p-8 group hover:shadow-xl hover:-translate-y-1 transition-all block">
                <div className="flex items-start justify-between mb-4">
                  <h3 style={{ color: "#0d3d2a", fontSize: "1.2rem", fontWeight: 700 }}>{s.title}</h3>
                  {s.tag && (
                    <span style={{ background: "rgba(201,168,76,0.15)", color: "#a07c20", fontSize: 11, fontWeight: 700, borderRadius: 6 }}
                      className="px-2.5 py-1 whitespace-nowrap">{s.tag}</span>
                  )}
                </div>
                <p style={{ color: "#6b6560", fontSize: "0.95rem", lineHeight: 1.75 }} className="mb-6">{s.desc}</p>
                <div style={{ color: "#0d3d2a", fontWeight: 700, fontSize: 14 }}
                  className="flex items-center gap-1 group-hover:gap-2 transition-all">
                  קרא עוד <span>←</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section style={{ background: "#0d3d2a" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }}
              className="uppercase mb-3">התהליך</div>
            <h2 style={{ color: "#f7f5f0", fontSize: "2.2rem", fontWeight: 800 }}>
              4 שלבים — מבדיקה ועד הפניה
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { n: "01", title: "בדיקת התאמה", desc: "שאלון קצר, ציון ראשוני ודוח PDF אישי — חינם לחלוטין." },
              { n: "02", title: "שיחה עם נציג", desc: "נציג מטעמנו יחזור אליכם לתאום ובירור הצרכים המדויקים." },
              { n: "03", title: "הכנת התיק", desc: "איסוף מסמכים, ארגון וסדר — אנחנו מנהלים, אתם בשקט." },
              { n: "04", title: "הפניה לגורם מוסמך", desc: "התיק המוכן מועבר לרופא/גורם מוסמך להמשך הליך." },
            ].map((step, i) => (
              <div key={step.n} className="relative">
                {i < 3 && <div className="hidden md:block absolute top-8 left-0 w-full h-px"
                  style={{ background: "rgba(201,168,76,0.2)" }} />}
                <div style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 16 }}
                  className="p-6 relative z-10">
                  <div style={{ color: "#c9a84c", fontSize: "2rem", fontWeight: 800, lineHeight: 1 }} className="mb-4">{step.n}</div>
                  <h3 style={{ color: "#f7f5f0", fontWeight: 700, fontSize: "1.05rem" }} className="mb-2">{step.title}</h3>
                  <p style={{ color: "rgba(247,245,240,0.55)", fontSize: "0.9rem", lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/eligibility"
              style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 700, borderRadius: 12, fontSize: "1rem" }}
              className="inline-block px-10 py-4 hover:opacity-90 transition-opacity shadow-xl">
              התחל בדיקת התאמה עכשיו — חינם
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CONDITIONS ─── */}
      <section style={{ background: "#f7f5f0" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }}
              className="uppercase mb-3">מצבים רפואיים</div>
            <h2 style={{ color: "#0d3d2a", fontSize: "2.2rem", fontWeight: 800 }}>מי אנחנו מלווים?</h2>
            <p style={{ color: "#6b6560" }} className="mt-3 max-w-xl mx-auto">
              אנו מלווים מטופלים עם מגוון מצבים רפואיים מוכרים בישראל
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "פוסט טראומה (PTSD)", "פיברומיאלגיה", "כאב כרוני",
              "סרטן", "קרוהן", "קוליטיס", "פרקינסון",
              "טרשת נפוצה", "אפילפסיה", "כאב נוירופתי",
            ].map((c) => (
              <Link key={c} href={`/conditions/${c}`}
                style={{ background: "white", border: "1.5px solid #e8e4dc", color: "#0d3d2a", borderRadius: 100 }}
                className="px-5 py-2.5 text-sm font-medium hover:border-yellow-600 hover:bg-yellow-50 transition-all">
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ background: "white" }} className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }}
              className="uppercase mb-3">שאלות ותשובות</div>
            <h2 style={{ color: "#0d3d2a", fontSize: "2.2rem", fontWeight: 800 }}>שאלות נפוצות</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "כמה זמן לוקח התהליך?", a: "תלוי במצב הרפואי ובמסמכים הקיימים. בממוצע 4–8 שבועות מתחילת הליווי ועד הפניה לגורם החיצוני." },
              { q: "האם אתם מבטיחים אישור?", a: "לא. המערכת מספקת ליווי תפעולי בלבד ואינה מבטיחה אישור. ההחלטה הרפואית נמצאת בידי גורמים מוסמכים בלבד." },
              { q: "כמה עולה השירות?", a: "בדיקת ההתאמה חינמית לחלוטין. שירותי הליווי מתומחרים לפי הצורך — נציג יפרט בשיחה ראשונה." },
              { q: "האם המידע שלי מאובטח?", a: "כן. כל המסמכים מוצפנים, גישה מוגבלת לצוות בלבד, ואנחנו פועלים לפי עקרון Privacy by Design." },
            ].map((faq) => (
              <div key={faq.q}
                style={{ border: "1.5px solid #e8e4dc", borderRadius: 16, background: "#faf9f6" }}
                className="p-6">
                <div style={{ color: "#0d3d2a", fontWeight: 700, fontSize: "1rem" }} className="mb-2">{faq.q}</div>
                <div style={{ color: "#6b6560", fontSize: "0.9rem", lineHeight: 1.8 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section style={{ background: "#0d3d2a" }} className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }}
            className="uppercase mb-4">מוכנים להתחיל?</div>
          <h2 style={{ color: "#f7f5f0", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.3 }}
            className="mb-6">
            בדיקת ההתאמה חינמית
            <br />
            <span style={{ color: "#c9a84c" }}>וללא שום התחייבות</span>
          </h2>
          <p style={{ color: "rgba(247,245,240,0.55)", fontSize: "1.05rem" }} className="mb-10 max-w-xl mx-auto">
            מלאו שאלון קצר וקבלו דוח אישי מפורט תוך דקות. נציג יחזור אליכם תוך 24 שעות.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/eligibility"
              style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 800, borderRadius: 12, fontSize: "1.05rem" }}
              className="px-10 py-4 hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-2xl">
              בדיקת התאמה ראשונית — חינם
            </Link>
            <a href="https://wa.me/972500000000"
              style={{ border: "1.5px solid rgba(247,245,240,0.2)", color: "#f7f5f0", fontWeight: 600, borderRadius: 12, fontSize: "1rem" }}
              className="px-10 py-4 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              💬 שלח הודעה בוואטסאפ
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: "#071f15", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div style={{ width: 32, height: 32, background: "#c9a84c", borderRadius: 7 }}
                  className="flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d3d2a" strokeWidth="2.5">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <span style={{ color: "#f7f5f0", fontWeight: 700, fontSize: "1rem" }}>המרכז לליווי רפואי בישראל</span>
              </div>
              <p style={{ color: "rgba(247,245,240,0.4)", fontSize: "0.85rem", lineHeight: 1.8, maxWidth: 280 }}>
                ליווי דיסקרטי, מסודר וחכם בתהליכים רפואיים מורכבים.
                המערכת אינה מעניקה ייעוץ רפואי ואינה מחליפה רופא מוסמך.
              </p>
            </div>
            <div>
              <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em" }}
                className="uppercase mb-4">שירותים</div>
              <div className="space-y-2">
                {[["בקשה חדשה", "/services/new-license"], ["חידוש רישיון", "/services/renewal"],
                  ["הגדלת מינון", "/services/dosage-increase"], ["בדיקת מסמכים", "/services/documents-review"]].map(([l, h]) => (
                  <Link key={h} href={h} style={{ color: "rgba(247,245,240,0.45)", fontSize: "0.85rem", display: "block" }}
                    className="hover:text-white transition-colors">{l}</Link>
                ))}
              </div>
            </div>
            <div>
              <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em" }}
                className="uppercase mb-4">מידע</div>
              <div className="space-y-2">
                {[["אודות", "/about"], ["צור קשר", "/contact"], ["מדיניות פרטיות", "/privacy"],
                  ["תנאי שימוש", "/terms"], ["נגישות", "/accessibility"]].map(([l, h]) => (
                  <Link key={h} href={h} style={{ color: "rgba(247,245,240,0.45)", fontSize: "0.85rem", display: "block" }}
                    className="hover:text-white transition-colors">{l}</Link>
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(247,245,240,0.07)" }} className="pt-8 text-center">
            <p style={{ color: "rgba(247,245,240,0.25)", fontSize: "0.8rem" }}>
              © 2024 המרכז לליווי רפואי בישראל · כל הזכויות שמורות · המערכת אינה מוכרת קנאביס ואינה מבטיחה אישור
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
