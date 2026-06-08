import Link from "next/link";
import { Navbar, Footer } from "@/components/marketing/PageLayout";

const STEPS = [
  { n: "01", title: "בדיקת התאמה", desc: "שאלון קצר, ציון ראשוני ודוח PDF אישי — חינם לחלוטין." },
  { n: "02", title: "שיחה עם נציג", desc: "נציג מטעמנו יחזור אליכם לתאום ובירור הצרכים." },
  { n: "03", title: "הכנת התיק", desc: "איסוף מסמכים, ארגון וסדר — אנחנו מנהלים, אתם בשקט." },
  { n: "04", title: "הפניה לגורם מוסמך", desc: "התיק המוכן מועבר לרופא/גורם מוסמך להמשך הליך." },
];

const CONDITIONS = [
  "פוסט טראומה (PTSD)", "פיברומיאלגיה", "כאב כרוני",
  "סרטן", "קרוהן", "קוליטיס", "פרקינסון",
  "טרשת נפוצה", "אפילפסיה", "כאב נוירופתי",
];

const FAQS = [
  { q: "כמה זמן לוקח התהליך?", a: "תלוי במצב הרפואי ובמסמכים הקיימים. בממוצע 4–8 שבועות מתחילת הליווי ועד הפניה לגורם החיצוני." },
  { q: "האם אתם מבטיחים אישור?", a: "לא. המערכת מספקת ליווי תפעולי בלבד ואינה מבטיחה אישור. ההחלטה נמצאת בידי גורמים מוסמכים בלבד." },
  { q: "כמה עולה השירות?", a: "בדיקת ההתאמה חינמית. שירותי הליווי מתומחרים לפי הצורך — נציג יפרט בשיחה ראשונה." },
  { q: "האם המידע שלי מאובטח?", a: "כן. כל המסמכים מוצפנים, גישה מוגבלת לצוות בלבד, Privacy by Design." },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "'Assistant', sans-serif", background: "#f7f5f0" }}>
      <Navbar />

      {/* ─── HERO ─── */}
      <section style={{ background: "#0d3d2a", minHeight: "90vh" }}
        className="relative flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #c9a84c 0%, transparent 50%)" }} />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Text */}
            <div className="text-center lg:text-right">
              <div className="flex items-center justify-center lg:justify-end gap-2 mb-6">
                <span style={{ color: "#c9a84c", fontSize: 12, letterSpacing: "0.1em", fontWeight: 700 }} className="uppercase">
                  ליווי רפואי מקצועי · דיסקרטי · ישראל
                </span>
                <div style={{ width: 7, height: 7, background: "#c9a84c", borderRadius: "50%" }} className="animate-pulse" />
              </div>

              <h1 className="font-bold leading-tight mb-5"
                style={{ fontSize: "clamp(2.2rem, 6vw, 3.6rem)", color: "#f7f5f0", lineHeight: 1.15 }}>
                ליווי חכם ומסודר
                <br />
                <span style={{ color: "#c9a84c" }}>לתהליכי קנאביס</span>
                <br />
                <span style={{ color: "rgba(247,245,240,0.85)" }}>רפואי בישראל</span>
              </h1>

              <p style={{ color: "rgba(247,245,240,0.65)", fontSize: "1rem", lineHeight: 1.8 }}
                className="mb-8 max-w-lg mx-auto lg:mx-0">
                בדיקת התאמה ראשונית, הכנת מסמכים, ניהול תיק מסודר והפניה לגורמים מוסמכים.
                אנחנו לא מוכרים קנאביס ולא מעניקים ייעוץ רפואי.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end mb-8">
                <Link href="/eligibility"
                  style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 700, fontSize: "1rem", borderRadius: 12 }}
                  className="px-7 py-4 text-center hover:opacity-90 transition-all shadow-xl">
                  בדיקת התאמה ראשונית — חינם
                </Link>
                <a href="https://wa.me/972500000000"
                  style={{ border: "1.5px solid rgba(247,245,240,0.2)", color: "#f7f5f0", fontWeight: 600, borderRadius: 12 }}
                  className="px-7 py-4 text-center hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  💬 וואטסאפ
                </a>
              </div>

              <div className="flex items-center gap-5 justify-center lg:justify-end flex-wrap">
                {[["🔒", "דיסקרטי"], ["⚡", "מענה 24 שעות"], ["✓", "ללא התחייבות"]].map(([icon, text]) => (
                  <div key={text} className="flex items-center gap-1.5">
                    <span style={{ color: "#c9a84c", fontSize: 13 }}>{icon}</span>
                    <span style={{ color: "rgba(247,245,240,0.5)", fontSize: 13 }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card — desktop only */}
            <div className="hidden lg:block">
              <div style={{ borderRadius: 20, overflow: "hidden", marginBottom: 14, height: 220 }}>
                <img
                  src="https://images.unsplash.com/photo-1616671276441-2f2c277b8bf6?w=700&q=80&fit=crop"
                  alt="קנאביס רפואי"
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.7) saturate(0.85)" }}
                />
              </div>
              <div style={{ background: "rgba(247,245,240,0.04)", border: "1px solid rgba(247,245,240,0.1)", borderRadius: 20 }}
                className="p-6">
                <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em" }} className="mb-4 uppercase">
                  דוח התאמה לדוגמה
                </div>
                {[
                  { label: "מצב רפואי", value: "פוסט טראומה (PTSD)" },
                  { label: "משך הבעיה", value: "מעל 3 שנים" },
                  { label: "ציון התאמה", value: "בסיס טוב לבדיקה" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-2.5"
                    style={{ borderBottom: "1px solid rgba(247,245,240,0.07)" }}>
                    <span style={{ color: "rgba(247,245,240,0.5)", fontSize: 13 }}>{row.label}</span>
                    <div className="flex items-center gap-2">
                      <span style={{ color: "#f7f5f0", fontSize: 13, fontWeight: 500 }}>{row.value}</span>
                      <div style={{ width: 16, height: 16, background: "#c9a84c", borderRadius: "50%", fontSize: 9, color: "#0d3d2a", fontWeight: 800 }}
                        className="flex items-center justify-center">✓</div>
                    </div>
                  </div>
                ))}
                <Link href="/eligibility"
                  style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 700, borderRadius: 8 }}
                  className="block text-center py-3 mt-4 text-sm hover:opacity-90 transition-opacity">
                  צרו דוח משלכם →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section style={{ background: "#0d3d2a", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            {[
              { num: "500+", sub: "לקוחות טופלו" },
              { num: "95%", sub: "שביעות רצון" },
              { num: "24h", sub: "זמן מענה" },
              { num: "100%", sub: "דיסקרטיות" },
            ].map((s) => (
              <div key={s.sub}>
                <div style={{ color: "#c9a84c", fontSize: "clamp(1.6rem,4vw,2rem)", fontWeight: 800 }}>{s.num}</div>
                <div style={{ color: "rgba(247,245,240,0.5)", fontSize: 13 }} className="mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section style={{ background: "#f7f5f0" }} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <div style={{ color: "#c9a84c", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em" }}
              className="uppercase mb-2">השירותים שלנו</div>
            <h2 style={{ color: "#0d3d2a", fontWeight: 800 }} className="text-2xl md:text-4xl">ליווי מלא בכל שלב</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              { title: "בקשה חדשה לרישיון", desc: "ליווי מלא מבדיקת ההתאמה ועד הגשת הבקשה לגורם המוסמך.", tag: "פופולרי", href: "/services/new-license" },
              { title: "חידוש רישיון / מרשם", desc: "תהליך החידוש בזמן הנכון עם תזכורות, ניהול תיק ומעקב.", tag: "מבוקש", href: "/services/renewal" },
              { title: "הגדלת מינון", desc: "איסוף תיעוד רפואי נדרש והצגתו בצורה הטובה לגורם המוסמך.", tag: null, href: "/services/dosage-increase" },
              { title: "בדיקת מסמכים", desc: "בדיקה מקצועית, זיהוי חסרים ורשימת השלמות מדויקת.", tag: null, href: "/services/documents-review" },
            ].map((s) => (
              <Link key={s.href} href={s.href}
                style={{ background: "white", border: "1.5px solid #e8e4dc", borderRadius: 18 }}
                className="p-6 md:p-8 group hover:shadow-xl hover:-translate-y-1 transition-all block">
                <div className="flex items-start justify-between mb-3">
                  <h3 style={{ color: "#0d3d2a", fontSize: "clamp(1rem,2.5vw,1.2rem)", fontWeight: 700, lineHeight: 1.3 }}>{s.title}</h3>
                  {s.tag && (
                    <span style={{ background: "rgba(201,168,76,0.15)", color: "#a07c20", fontSize: 11, fontWeight: 700, borderRadius: 6, flexShrink: 0 }}
                      className="px-2 py-0.5 mr-2">{s.tag}</span>
                  )}
                </div>
                <p style={{ color: "#6b6560", fontSize: "0.9rem", lineHeight: 1.75 }} className="mb-4">{s.desc}</p>
                <div style={{ color: "#0d3d2a", fontWeight: 700, fontSize: 13 }}
                  className="flex items-center gap-1 group-hover:gap-2 transition-all">
                  קרא עוד <span>←</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section style={{ background: "#0d3d2a" }} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <div style={{ color: "#c9a84c", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em" }}
              className="uppercase mb-2">התהליך</div>
            <h2 style={{ color: "#f7f5f0", fontWeight: 800 }} className="text-2xl md:text-4xl">
              4 שלבים — מבדיקה ועד הפניה
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {STEPS.map((step) => (
              <div key={step.n}
                style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 16 }}
                className="p-5 md:p-6">
                <div style={{ color: "#c9a84c", fontSize: "clamp(1.6rem,4vw,2rem)", fontWeight: 800, lineHeight: 1 }} className="mb-3">{step.n}</div>
                <h3 style={{ color: "#f7f5f0", fontWeight: 700, fontSize: "1rem" }} className="mb-2">{step.title}</h3>
                <p style={{ color: "rgba(247,245,240,0.55)", fontSize: "0.88rem", lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 md:mt-12">
            <Link href="/eligibility"
              style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 800, borderRadius: 12, fontSize: "1rem" }}
              className="inline-block px-8 py-4 hover:opacity-90 transition-opacity shadow-xl">
              התחל בדיקת התאמה עכשיו — חינם
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CONDITIONS ─── */}
      <section style={{ background: "#f7f5f0" }} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <div style={{ color: "#c9a84c", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em" }}
              className="uppercase mb-2">מצבים רפואיים</div>
            <h2 style={{ color: "#0d3d2a", fontWeight: 800 }} className="text-2xl md:text-4xl">מי אנחנו מלווים?</h2>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {CONDITIONS.map((c) => (
              <Link key={c} href={`/conditions/${c}`}
                style={{ background: "white", border: "1.5px solid #e8e4dc", color: "#0d3d2a", borderRadius: 100 }}
                className="px-4 md:px-5 py-2 md:py-2.5 text-sm font-medium hover:border-yellow-600 hover:bg-yellow-50 transition-all">
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ background: "white" }} className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <div style={{ color: "#c9a84c", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em" }}
              className="uppercase mb-2">שאלות ותשובות</div>
            <h2 style={{ color: "#0d3d2a", fontWeight: 800 }} className="text-2xl md:text-4xl">שאלות נפוצות</h2>
          </div>
          <div className="space-y-3 md:space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q}
                style={{ border: "1.5px solid #e8e4dc", borderRadius: 14, background: "#faf9f6" }}
                className="p-5 md:p-6">
                <div style={{ color: "#0d3d2a", fontWeight: 700, fontSize: "0.95rem" }} className="mb-2">{faq.q}</div>
                <div style={{ color: "#6b6560", fontSize: "0.87rem", lineHeight: 1.8 }}>{faq.a}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/faq" style={{ color: "#0d3d2a", fontWeight: 700, fontSize: 14 }} className="hover:underline">
              לכל השאלות והתשובות ←
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ background: "#0d3d2a" }} className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div style={{ color: "#c9a84c", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em" }}
            className="uppercase mb-4">מוכנים להתחיל?</div>
          <h2 style={{ color: "#f7f5f0", fontWeight: 800, lineHeight: 1.3 }}
            className="text-2xl md:text-4xl mb-4 md:mb-6">
            בדיקת ההתאמה חינמית
            <br />
            <span style={{ color: "#c9a84c" }}>וללא שום התחייבות</span>
          </h2>
          <p style={{ color: "rgba(247,245,240,0.55)", fontSize: "0.95rem" }} className="mb-8 max-w-xl mx-auto">
            מלאו שאלון קצר וקבלו דוח אישי מפורט תוך דקות.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/eligibility"
              style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 800, borderRadius: 12, fontSize: "1rem" }}
              className="px-8 py-4 hover:opacity-90 transition-all text-center">
              בדיקת התאמה ראשונית — חינם
            </Link>
            <a href="https://wa.me/972500000000"
              style={{ border: "1.5px solid rgba(247,245,240,0.2)", color: "#f7f5f0", fontWeight: 600, borderRadius: 12 }}
              className="px-8 py-4 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              💬 וואטסאפ
            </a>
          </div>
        </div>
      </section>

      {/* ─── MOBILE STICKY CTA ─── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 flex gap-2"
        style={{ background: "rgba(13,61,42,0.97)", borderTop: "1px solid rgba(201,168,76,0.25)", backdropFilter: "blur(8px)" }}>
        <Link href="/eligibility"
          style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 800, borderRadius: 10, fontSize: "0.9rem" }}
          className="flex-1 py-3 text-center hover:opacity-90 transition-opacity">
          בדיקת התאמה — חינם
        </Link>
        <a href="https://wa.me/972500000000"
          style={{ background: "rgba(247,245,240,0.1)", color: "#f7f5f0", fontWeight: 600, borderRadius: 10, fontSize: "0.9rem", border: "1px solid rgba(247,245,240,0.15)" }}
          className="px-4 py-3 flex items-center justify-center">
          💬
        </a>
      </div>

      {/* Spacer for mobile sticky bar */}
      <div className="md:hidden h-16" />

      <Footer />
    </main>
  );
}
