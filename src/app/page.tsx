import Link from "next/link";
import { Navbar, Footer } from "@/components/marketing/PageLayout";
import FaqAccordion from "@/components/marketing/FaqAccordion";
import FloatingWhatsApp from "@/components/marketing/FloatingWhatsApp";

const STEPS = [
  {
    n: "01",
    icon: "🔍",
    title: "בדיקת התאמה חינמית",
    desc: "שאלון קצר — 3 דקות. קבלו ציון אישי ודוח PDF מפורט עם רשימת מסמכים מדויקת.",
    color: "#c9a84c",
  },
  {
    n: "02",
    icon: "📞",
    title: "שיחה עם נציג מומחה",
    desc: "נציג ייעודי יחזור אליכם תוך שעות לבירור, מענה על שאלות, ותיאום המשך.",
    color: "#a07c20",
  },
  {
    n: "03",
    icon: "📁",
    title: "בניית תיק מקצועי",
    desc: "אנחנו אוספים, מארגנים ומכינים את כל המסמכים בדיוק כנדרש. אתם בשקט.",
    color: "#0d3d2a",
  },
  {
    n: "04",
    icon: "✅",
    title: "הפניה לגורם מוסמך",
    desc: "התיק המוכן מועבר לרופא/גורם מוסמך להמשך הליך. אנחנו עוקבים עד לסיום.",
    color: "#0a2e1f",
  },
];

const SERVICES = [
  {
    icon: "🌱",
    title: "בקשה חדשה לרישיון",
    desc: "ליווי מלא מבדיקת ההתאמה ועד הגשת הבקשה. נבנה תיק שמדבר בעד עצמו.",
    tag: "הכי פופולרי",
    tagBg: "#0d3d2a",
    href: "/services/new-license",
    highlight: true,
  },
  {
    icon: "🔄",
    title: "חידוש רישיון / מרשם",
    desc: "תהליך החידוש בזמן הנכון עם תזכורות, ניהול תיק ומעקב מלא.",
    tag: "מבוקש",
    tagBg: "#c9a84c",
    href: "/services/renewal",
    highlight: false,
  },
  {
    icon: "📈",
    title: "הגדלת מינון",
    desc: "איסוף התיעוד הרפואי הנדרש והצגתו בצורה הטובה ביותר לגורם המוסמך.",
    tag: null,
    tagBg: null,
    href: "/services/dosage-increase",
    highlight: false,
  },
  {
    icon: "🔎",
    title: "בדיקת מסמכים",
    desc: "בדיקה מקצועית, זיהוי חסרים ורשימת השלמות מדויקת לפני הגשה.",
    tag: null,
    tagBg: null,
    href: "/services/documents-review",
    highlight: false,
  },
];

const TESTIMONIALS = [
  {
    name: "יוסי כ.",
    city: "תל אביב",
    stars: 5,
    text: "אחרי שנתיים של ניסיונות כושלים לבד, תוך 5 שבועות קיבלתי את כל מה שהייתי צריך. המקצועיות והסבלנות של הצוות פשוט מעוררת אמון.",
    service: "בקשה חדשה לרישיון",
    date: "לפני שבוע",
  },
  {
    name: "מיכל ר.",
    city: "חיפה",
    stars: 5,
    text: "פוסט טראומה שנים. לא ידעתי מאיפה להתחיל. בדיקת ההתאמה הסבירה הכל, ואחר כך הצוות ניהל הכל עבורי. מומלץ בחום.",
    service: "בקשה חדשה — PTSD",
    date: "לפני 2 שבועות",
  },
  {
    name: "דניאל ס.",
    city: "ירושלים",
    stars: 5,
    text: "חידשתי מרשם פג תוקף. התהליך לקח שבועיים בדיוק, הצוות עקב אחרי כל שלב ועדכן אותי. מקצוענות אמיתית.",
    service: "חידוש מרשם",
    date: "לפני 3 שבועות",
  },
  {
    name: "שרה מ.",
    city: "באר שבע",
    stars: 5,
    text: "סרטן שלב 3. הייתי במצב קשה ולא היה לי כוח לרוץ על בירוקרטיה. הם עשו הכל. זה שינה לי את החיים.",
    service: "בקשה דחופה — אונקולוגי",
    date: "לפני חודש",
  },
];

const CONDITIONS = [
  { name: "פוסט טראומה (PTSD)", icon: "🧠" },
  { name: "פיברומיאלגיה", icon: "💪" },
  { name: "כאב כרוני", icon: "⚕️" },
  { name: "סרטן", icon: "🎗️" },
  { name: "קרוהן", icon: "🫁" },
  { name: "קוליטיס", icon: "🫁" },
  { name: "פרקינסון", icon: "🧬" },
  { name: "טרשת נפוצה", icon: "🔬" },
  { name: "אפילפסיה", icon: "⚡" },
  { name: "כאב נוירופתי", icon: "🔵" },
  { name: "חרדה ודיכאון", icon: "💙" },
  { name: "נדודי שינה", icon: "🌙" },
];

const WHY_US = [
  {
    icon: "🎯",
    title: "ציון התאמה אישי",
    desc: "דוח PDF מפורט עם ציון מדויק ורשימת מסמכים — גם בלי ניסיון קודם.",
  },
  {
    icon: "🔒",
    title: "פרטיות מוחלטת",
    desc: "כל המסמכים מוצפנים. מידע לא נמסר לגורם שלישי. Privacy by Design.",
  },
  {
    icon: "⚡",
    title: "מענה מהיר",
    desc: "נציג אנושי חוזר תוך שעות — לא בוט, לא מרכז שיחות. אדם אמיתי.",
  },
  {
    icon: "📋",
    title: "ניהול תיק מלא",
    desc: "אנחנו עוקבים, מזכירים, ומוודאים שכל מסמך במקום הנכון.",
  },
  {
    icon: "💬",
    title: "ליווי עד הסוף",
    desc: "לא נזרוק אתכם אחרי הגשה. נעקוב אחרי ונעדכן אתכם בכל שלב.",
  },
  {
    icon: "✅",
    title: "ניסיון מוכח",
    desc: "מאות תיקים מוצלחים. יודעים בדיוק מה עובד ומה לא.",
  },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "var(--font-assistant, 'Assistant'), sans-serif", background: "#f7f5f0" }}>
      <Navbar />
      <FloatingWhatsApp />

      {/* ═══════════════════════════════════════════════
          HERO — full-screen premium
      ═══════════════════════════════════════════════ */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: "95vh" }}>
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1600&q=85&fit=crop"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.25) saturate(0.6)" }}
          />
        </div>
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(13,61,42,0.92) 0%, rgba(7,31,21,0.85) 50%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        {/* Gold glow */}
        <div
          className="absolute"
          style={{
            top: "10%",
            right: "-10%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Left / Text ── */}
            <div className="text-center lg:text-right order-2 lg:order-1">

              {/* Trust badge */}
              <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full"
                style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)" }}>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#c9a84c" }} />
                <span style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em" }}>
                  ליווי רפואי מקצועי · דיסקרטי · מוכר בישראל
                </span>
              </div>

              {/* Headline */}
              <h1 className="mb-6"
                style={{
                  fontFamily: "var(--font-frank, serif)",
                  fontSize: "clamp(2.6rem, 6.5vw, 4.2rem)",
                  color: "#f7f5f0",
                  fontWeight: 700,
                  lineHeight: 1.12,
                  letterSpacing: "-0.01em",
                }}>
                קנאביס רפואי בישראל —
                <br />
                <span style={{ color: "#c9a84c" }}>הליווי שישנה</span>
                <br />
                <span style={{ color: "rgba(247,245,240,0.9)" }}>את התוצאה שלך</span>
              </h1>

              <p style={{ color: "rgba(247,245,240,0.65)", fontSize: "1.07rem", lineHeight: 1.85, maxWidth: 490 }}
                className="mb-9 mx-auto lg:mx-0">
                בדיקת התאמה ראשונית חינמית, הכנת מסמכים מקצועית, ניהול תיק מסודר
                והפניה לגורמים מוסמכים — בלי בירוקרטיה מיותרת.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end mb-8">
                <Link
                  href="/eligibility"
                  style={{
                    background: "#c9a84c",
                    color: "#0d3d2a",
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    borderRadius: 14,
                    boxShadow: "0 8px 30px rgba(201,168,76,0.4)",
                  }}
                  className="px-8 py-4 text-center hover:opacity-90 transition-all">
                  בדיקת התאמה — חינם ←
                </Link>
                <a
                  href="https://wa.me/972500000000"
                  style={{
                    border: "1.5px solid rgba(247,245,240,0.2)",
                    color: "#f7f5f0",
                    fontWeight: 600,
                    borderRadius: 14,
                    backdropFilter: "blur(8px)",
                    background: "rgba(255,255,255,0.05)",
                  }}
                  className="px-7 py-4 text-center hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  וואטסאפ
                </a>
              </div>

              {/* Trust pills */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 justify-center lg:justify-end">
                {[
                  { icon: "🔒", text: "פרטיות מוחלטת" },
                  { icon: "⚡", text: "מענה תוך שעות" },
                  { icon: "✓", text: "ללא התחייבות" },
                  { icon: "📄", text: "דוח PDF חינם" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5">
                    <span style={{ fontSize: 14 }}>{icon}</span>
                    <span style={{ color: "rgba(247,245,240,0.5)", fontSize: 13 }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right / Card ── */}
            <div className="order-1 lg:order-2 flex flex-col gap-4">
              {/* Image card */}
              <div style={{ borderRadius: 20, overflow: "hidden", height: 210 }}>
                <img
                  src="https://images.unsplash.com/photo-1616671276441-2f2c277b8bf6?w=700&q=80&fit=crop"
                  alt="קנאביס רפואי"
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.75) saturate(0.8)" }}
                />
              </div>

              {/* Sample report card */}
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: 20,
                  backdropFilter: "blur(12px)",
                }}
                className="p-5 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div style={{ color: "#c9a84c", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em" }} className="uppercase">
                    דוח התאמה לדוגמה
                  </div>
                  <div style={{
                    background: "rgba(201,168,76,0.2)",
                    color: "#c9a84c",
                    fontSize: 11,
                    fontWeight: 700,
                    borderRadius: 20,
                    padding: "3px 10px",
                  }}>
                    ✓ מוכן
                  </div>
                </div>
                {[
                  { label: "מצב רפואי", value: "פוסט טראומה (PTSD)" },
                  { label: "ציון התאמה", value: "82 / 100", highlight: true },
                  { label: "מורכבות", value: "נמוכה" },
                  { label: "סטטוס", value: "מומלץ להמשיך" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between py-2.5"
                    style={{ borderBottom: "1px solid rgba(247,245,240,0.07)" }}>
                    <span style={{ color: "rgba(247,245,240,0.45)", fontSize: 13 }}>{row.label}</span>
                    <span style={{
                      color: row.highlight ? "#c9a84c" : "#f7f5f0",
                      fontSize: 13,
                      fontWeight: row.highlight ? 700 : 500,
                    }}>
                      {row.value}
                    </span>
                  </div>
                ))}
                <Link
                  href="/eligibility"
                  style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 700, borderRadius: 10 }}
                  className="block text-center py-3 mt-4 text-sm hover:opacity-90 transition-opacity">
                  צרו דוח משלכם — חינם →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════════════ */}
      <section style={{ background: "#071f15", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "500+", label: "לקוחות ליווינו", sub: "בכל הארץ" },
              { num: "95%", label: "שביעות רצון", sub: "מביקורות אמיתיות" },
              { num: "< 24h", label: "זמן מענה", sub: "נציג אנושי" },
              { num: "100%", label: "דיסקרטיות", sub: "Privacy by Design" },
            ].map((s) => (
              <div key={s.label} className="py-2">
                <div
                  style={{
                    fontFamily: "var(--font-frank, serif)",
                    color: "#c9a84c",
                    fontSize: "clamp(1.8rem, 4.5vw, 2.4rem)",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}>
                  {s.num}
                </div>
                <div style={{ color: "#f7f5f0", fontSize: 14, fontWeight: 600 }} className="mt-1.5">{s.label}</div>
                <div style={{ color: "rgba(247,245,240,0.35)", fontSize: 11 }} className="mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════════════ */}
      <section style={{ background: "#f7f5f0" }} className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div style={{ color: "#c9a84c", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em" }}
              className="uppercase mb-3">
              ● השירותים שלנו
            </div>
            <h2
              style={{
                fontFamily: "var(--font-frank, serif)",
                color: "#0d3d2a",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                lineHeight: 1.2,
              }}>
              ליווי מלא בכל שלב של התהליך
            </h2>
            <p style={{ color: "#7a7470", fontSize: "1rem", marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}>
              4 שירותים מקצועיים — מהרישיון הראשון ועד הגדלת מינון
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group block"
                style={{
                  background: s.highlight ? "#0d3d2a" : "white",
                  border: s.highlight ? "none" : "1.5px solid #e8e4dc",
                  borderRadius: 20,
                  transition: "all 0.25s ease",
                  boxShadow: s.highlight ? "0 12px 40px rgba(13,61,42,0.2)" : "none",
                }}>
                <div className="p-7 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: s.highlight ? "rgba(201,168,76,0.15)" : "rgba(13,61,42,0.07)",
                        fontSize: 22,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                      {s.icon}
                    </div>
                    {s.tag && (
                      <span
                        style={{
                          background: s.highlight ? "rgba(201,168,76,0.2)" : "rgba(13,61,42,0.08)",
                          color: s.highlight ? "#c9a84c" : "#0d3d2a",
                          fontSize: 11,
                          fontWeight: 700,
                          borderRadius: 20,
                          padding: "4px 12px",
                          flexShrink: 0,
                        }}>
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <h3
                    style={{
                      color: s.highlight ? "#f7f5f0" : "#0d3d2a",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      marginBottom: 8,
                      lineHeight: 1.3,
                    }}>
                    {s.title}
                  </h3>
                  <p style={{ color: s.highlight ? "rgba(247,245,240,0.6)" : "#7a7470", fontSize: "0.9rem", lineHeight: 1.8 }}>
                    {s.desc}
                  </p>
                  <div
                    style={{
                      color: s.highlight ? "#c9a84c" : "#0d3d2a",
                      fontSize: 13,
                      fontWeight: 700,
                      marginTop: 16,
                    }}
                    className="flex items-center gap-1.5 group-hover:gap-3 transition-all">
                    קרא עוד <span>←</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          HOW IT WORKS — premium timeline
      ═══════════════════════════════════════════════ */}
      <section style={{ background: "#0d3d2a" }} className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14 md:mb-18">
            <div style={{ color: "#c9a84c", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em" }} className="uppercase mb-3">
              ● איך זה עובד
            </div>
            <h2
              style={{
                fontFamily: "var(--font-frank, serif)",
                color: "#f7f5f0",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              }}>
              מ-0 לרישיון — 4 שלבים פשוטים
            </h2>
          </div>

          <div className="relative">
            {/* Connector line — desktop */}
            <div className="hidden md:block absolute top-10 right-[12.5%] left-[12.5%] h-0.5"
              style={{ background: "linear-gradient(to left, transparent, rgba(201,168,76,0.3), rgba(201,168,76,0.3), transparent)" }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {STEPS.map((step, i) => (
                <div
                  key={step.n}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: 20,
                    position: "relative",
                    transition: "all 0.25s",
                  }}
                  className="p-6 md:p-7 hover:bg-white/10 group">
                  {/* Step badge */}
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "rgba(201,168,76,0.15)",
                      border: "1.5px solid rgba(201,168,76,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                      fontSize: 20,
                    }}>
                    {step.icon}
                  </div>
                  <div style={{ color: "rgba(201,168,76,0.5)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 6 }}>
                    שלב {step.n}
                  </div>
                  <h3 style={{ color: "#f7f5f0", fontWeight: 700, fontSize: "1rem", marginBottom: 8, lineHeight: 1.4 }}>
                    {step.title}
                  </h3>
                  <p style={{ color: "rgba(247,245,240,0.5)", fontSize: "0.88rem", lineHeight: 1.75 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12 md:mt-14">
            <Link
              href="/eligibility"
              style={{
                background: "#c9a84c",
                color: "#0d3d2a",
                fontWeight: 800,
                borderRadius: 14,
                fontSize: "1.05rem",
                boxShadow: "0 8px 30px rgba(201,168,76,0.35)",
              }}
              className="inline-block px-10 py-4 hover:opacity-90 transition-opacity">
              התחל שלב ראשון — חינם
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════ */}
      <section style={{ background: "#f7f5f0" }} className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div style={{ color: "#c9a84c", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em" }} className="uppercase mb-3">
              ● מה אומרים עלינו
            </div>
            <h2
              style={{
                fontFamily: "var(--font-frank, serif)",
                color: "#0d3d2a",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              }}>
              לקוחות מספרים בעצמם
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} style={{ color: "#f5a623", fontSize: 18 }}>★</span>
                ))}
              </div>
              <span style={{ color: "#7a7470", fontSize: 14 }}>5.0 מתוך 5 · 120+ ביקורות Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  border: "1.5px solid #e8e4dc",
                  borderRadius: 18,
                  transition: "all 0.25s",
                }}
                className="p-5 md:p-6 hover:shadow-xl hover:-translate-y-1">
                {/* Stars */}
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} style={{ color: "#f5a623", fontSize: 14 }}>★</span>
                  ))}
                </div>
                {/* Quote */}
                <p style={{ color: "#3d3832", fontSize: "0.87rem", lineHeight: 1.85, marginBottom: 16 }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                {/* Author */}
                <div style={{ borderTop: "1px solid #f0ece4", paddingTop: 12 }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div style={{ color: "#0d3d2a", fontWeight: 700, fontSize: 13 }}>{t.name}</div>
                      <div style={{ color: "#a09890", fontSize: 11 }}>{t.city}</div>
                    </div>
                    <div style={{
                      background: "rgba(13,61,42,0.07)",
                      color: "#0d3d2a",
                      fontSize: 10,
                      fontWeight: 600,
                      borderRadius: 20,
                      padding: "3px 8px",
                      textAlign: "center",
                      maxWidth: 90,
                    }}>
                      {t.service}
                    </div>
                  </div>
                  <div style={{ color: "#b0a898", fontSize: 11, marginTop: 4 }}>{t.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHY US — premium cards
      ═══════════════════════════════════════════════ */}
      <section style={{ background: "white" }} className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div style={{ color: "#c9a84c", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em" }} className="uppercase mb-3">
              ● למה אנחנו?
            </div>
            <h2
              style={{
                fontFamily: "var(--font-frank, serif)",
                color: "#0d3d2a",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              }}>
              6 סיבות לבחור בנו
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {WHY_US.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#f7f5f0",
                  borderRadius: 18,
                  border: "1.5px solid #e8e4dc",
                  transition: "all 0.25s",
                }}
                className="p-6 md:p-7 hover:shadow-lg hover:border-yellow-300 group">
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "white",
                    border: "1.5px solid #e8e4dc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    marginBottom: 14,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  }}>
                  {item.icon}
                </div>
                <h3 style={{ color: "#0d3d2a", fontWeight: 700, fontSize: "1rem", marginBottom: 6 }}>
                  {item.title}
                </h3>
                <p style={{ color: "#7a7470", fontSize: "0.88rem", lineHeight: 1.8 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CONDITIONS
      ═══════════════════════════════════════════════ */}
      <section style={{ background: "#f7f5f0" }} className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-14">
            <div style={{ color: "#c9a84c", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em" }} className="uppercase mb-3">
              ● מצבים רפואיים
            </div>
            <h2
              style={{
                fontFamily: "var(--font-frank, serif)",
                color: "#0d3d2a",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              }}>
              עם מי אנחנו עובדים?
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5 md:gap-3 justify-center">
            {CONDITIONS.map((c) => (
              <Link
                key={c.name}
                href={`/conditions`}
                style={{
                  background: "white",
                  border: "1.5px solid #e8e4dc",
                  color: "#0d3d2a",
                  borderRadius: 100,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  transition: "all 0.2s",
                }}
                className="px-4 md:px-5 py-2 md:py-2.5 flex items-center gap-2 hover:border-yellow-400 hover:shadow-md hover:bg-yellow-50">
                <span>{c.icon}</span>
                {c.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/conditions"
              style={{ color: "#0d3d2a", fontWeight: 700, fontSize: 14, textDecoration: "underline", textUnderlineOffset: 3 }}>
              לכל המצבים הרפואיים המטופלים ←
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          COMPARISON — Us vs. Alone
      ═══════════════════════════════════════════════ */}
      <section style={{ background: "#0d3d2a" }} className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div style={{ color: "#c9a84c", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em" }} className="uppercase mb-3">
              ● ההבדל האמיתי
            </div>
            <h2
              style={{
                fontFamily: "var(--font-frank, serif)",
                color: "#f7f5f0",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              }}>
              עם ליווי מקצועי vs. לבד
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,168,76,0.2)" }}>
            {/* Header */}
            <div className="grid grid-cols-3" style={{ background: "rgba(201,168,76,0.1)" }}>
              <div className="p-4 md:p-5 text-center" style={{ borderLeft: "1px solid rgba(201,168,76,0.15)", color: "rgba(247,245,240,0.5)", fontSize: 13, fontWeight: 600 }}>
                הנושא
              </div>
              <div className="p-4 md:p-5 text-center" style={{ borderLeft: "1px solid rgba(201,168,76,0.15)", color: "#c9a84c", fontWeight: 700, fontSize: 14 }}>
                ✨ המרכז לליווי רפואי
              </div>
              <div className="p-4 md:p-5 text-center" style={{ color: "rgba(247,245,240,0.4)", fontWeight: 600, fontSize: 14 }}>
                לבד
              </div>
            </div>

            {[
              { topic: "הכנת תיק מסמכים", us: "מקצועי + מלא", alone: "מבלבל ולא בטוח" },
              { topic: "זמן ממוצע", us: "4–6 שבועות", alone: "3–6 חודשים" },
              { topic: "שגיאות נפוצות", us: "אפס — אנחנו בודקים", alone: "גבוה מאד" },
              { topic: "מי מנהל את הבירוקרטיה?", us: "אנחנו, עבורכם", alone: "אתם לבד" },
              { topic: "דוח אישי ראשוני", us: "חינם ותוך דקות", alone: "לא קיים" },
              { topic: "ליווי עד קבלת תשובה", us: "כן, מלא", alone: "לא" },
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3"
                style={{
                  background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                  borderTop: "1px solid rgba(247,245,240,0.06)",
                }}>
                <div className="p-4 md:p-5 text-center" style={{ borderLeft: "1px solid rgba(247,245,240,0.06)", color: "rgba(247,245,240,0.6)", fontSize: "0.88rem" }}>
                  {row.topic}
                </div>
                <div className="p-4 md:p-5 text-center" style={{ borderLeft: "1px solid rgba(247,245,240,0.06)", color: "#c9a84c", fontSize: "0.88rem", fontWeight: 600 }}>
                  ✓ {row.us}
                </div>
                <div className="p-4 md:p-5 text-center" style={{ color: "rgba(247,245,240,0.3)", fontSize: "0.88rem" }}>
                  ✗ {row.alone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ — accordion
      ═══════════════════════════════════════════════ */}
      <section style={{ background: "white" }} className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-14">
            <div style={{ color: "#c9a84c", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em" }} className="uppercase mb-3">
              ● שאלות ותשובות
            </div>
            <h2
              style={{
                fontFamily: "var(--font-frank, serif)",
                color: "#0d3d2a",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              }}>
              שאלות נפוצות
            </h2>
          </div>

          <FaqAccordion />

          <div className="text-center mt-8">
            <Link href="/faq" style={{ color: "#0d3d2a", fontWeight: 700, fontSize: 14, textDecoration: "underline", textUnderlineOffset: 3 }}>
              לכל השאלות והתשובות ←
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FINAL CTA — premium
      ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "#0a2e1f" }}>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,168,76,0.25) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <div
            style={{
              display: "inline-block",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: 100,
              padding: "6px 18px",
              color: "#c9a84c",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              marginBottom: 20,
            }}>
            ● מוכנים להתחיל?
          </div>

          <h2
            style={{
              fontFamily: "var(--font-frank, serif)",
              color: "#f7f5f0",
              fontWeight: 700,
              lineHeight: 1.2,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              marginBottom: 16,
            }}>
            בדיקת ההתאמה חינמית
            <br />
            <span style={{ color: "#c9a84c" }}>וללא שום התחייבות</span>
          </h2>

          <p style={{ color: "rgba(247,245,240,0.5)", fontSize: "1rem", lineHeight: 1.8, maxWidth: 480, margin: "0 auto 36px" }}>
            3 דקות · דוח PDF אישי · ציון מדויק · רשימת מסמכים נדרשים
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/eligibility"
              style={{
                background: "#c9a84c",
                color: "#0d3d2a",
                fontWeight: 800,
                borderRadius: 14,
                fontSize: "1.1rem",
                boxShadow: "0 10px 40px rgba(201,168,76,0.4)",
                padding: "16px 36px",
              }}
              className="text-center hover:opacity-90 transition-all">
              התחל בדיקה עכשיו — חינם
            </Link>
            <a
              href="https://wa.me/972500000000"
              style={{
                border: "1.5px solid rgba(247,245,240,0.2)",
                color: "#f7f5f0",
                fontWeight: 600,
                borderRadius: 14,
                background: "rgba(255,255,255,0.05)",
                padding: "16px 28px",
              }}
              className="text-center hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              שלחו לנו וואטסאפ
            </a>
          </div>

          {/* Small reassurance line */}
          <p style={{ color: "rgba(247,245,240,0.3)", fontSize: 12, marginTop: 20 }}>
            🔒 המידע שלך מוצפן ומוגן · לא נמכור את פרטיך לאף גורם
          </p>
        </div>
      </section>

      {/* ─── MOBILE STICKY CTA ─── */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 flex gap-2"
        style={{
          background: "rgba(7,31,21,0.97)",
          borderTop: "1px solid rgba(201,168,76,0.2)",
          backdropFilter: "blur(12px)",
        }}>
        <Link
          href="/eligibility"
          style={{
            background: "#c9a84c",
            color: "#0d3d2a",
            fontWeight: 800,
            borderRadius: 12,
            fontSize: "0.92rem",
          }}
          className="flex-1 py-3.5 text-center hover:opacity-90 transition-opacity">
          בדיקת התאמה — חינם
        </Link>
        <a
          href="https://wa.me/972500000000"
          style={{
            background: "#25D366",
            color: "white",
            fontWeight: 600,
            borderRadius: 12,
            fontSize: "0.92rem",
            width: 52,
          }}
          className="flex items-center justify-center hover:opacity-90">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>

      <div className="md:hidden h-16" />

      <Footer />
    </main>
  );
}
