import Link from "next/link"
import type { ReactNode } from "react"
import MobileNav from "./MobileNav"

export function Navbar() {
  return (
    <nav style={{ background: "#0d3d2a", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div style={{ width: 34, height: 34, background: "#c9a84c", borderRadius: 8 }}
            className="flex items-center justify-center flex-shrink-0">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0d3d2a" strokeWidth="2.5">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div>
            <div className="text-white font-bold leading-tight" style={{ fontSize: 15 }}>המרכז לליווי רפואי</div>
            <div style={{ color: "#c9a84c", fontSize: 10 }} className="leading-tight">בישראל</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[["שירותים", "/services"], ["מצבים רפואיים", "/conditions"], ["מרכז ידע", "/knowledge"], ["אודות", "/about"]].map(([label, href]) => (
            <Link key={href} href={href} style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}
              className="hover:text-white transition-colors font-medium">{label}</Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <Link href="/login" style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}
            className="hidden md:block hover:text-white transition-colors">כניסה</Link>
          <Link href="/eligibility"
            style={{ background: "#c9a84c", color: "#0d3d2a", fontSize: 13, fontWeight: 700, borderRadius: 8 }}
            className="hidden md:block px-4 py-2.5 hover:opacity-90 transition-opacity whitespace-nowrap">
            בדיקת התאמה חינם
          </Link>
          {/* Mobile hamburger */}
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}

export function Footer() {
  return (
    <footer style={{ background: "#071f15", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div style={{ width: 32, height: 32, background: "#c9a84c", borderRadius: 7 }}
                className="flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d3d2a" strokeWidth="2.5">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span style={{ color: "#f7f5f0", fontWeight: 700, fontSize: "1rem" }}>המרכז לליווי רפואי בישראל</span>
            </Link>
            <p style={{ color: "rgba(247,245,240,0.4)", fontSize: "0.85rem", lineHeight: 1.8, maxWidth: 280 }}>
              ליווי דיסקרטי, מסודר וחכם בתהליכים רפואיים מורכבים. המערכת אינה מעניקה ייעוץ רפואי.
            </p>
          </div>
          <div>
            <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em" }} className="uppercase mb-3 md:mb-4">שירותים</div>
            <div className="space-y-2">
              {[["בקשה חדשה", "/services/new-license"], ["חידוש רישיון", "/services/renewal"],
                ["הגדלת מינון", "/services/dosage-increase"], ["בדיקת מסמכים", "/services/documents-review"]].map(([l, h]) => (
                <Link key={h} href={h} style={{ color: "rgba(247,245,240,0.45)", fontSize: "0.85rem", display: "block" }}
                  className="hover:text-white transition-colors">{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em" }} className="uppercase mb-3 md:mb-4">מידע</div>
            <div className="space-y-2">
              {[["אודות", "/about"], ["צור קשר", "/contact"], ["שאלות נפוצות", "/faq"],
                ["מדיניות פרטיות", "/privacy"], ["תנאי שימוש", "/terms"]].map(([l, h]) => (
                <Link key={h} href={h} style={{ color: "rgba(247,245,240,0.45)", fontSize: "0.85rem", display: "block" }}
                  className="hover:text-white transition-colors">{l}</Link>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(247,245,240,0.07)" }} className="pt-6 md:pt-8 text-center">
          <p style={{ color: "rgba(247,245,240,0.25)", fontSize: "0.78rem" }}>
            © 2024 המרכז לליווי רפואי בישראל · המערכת אינה מוכרת קנאביס ואינה מבטיחה אישור
          </p>
        </div>
      </div>
    </footer>
  )
}

export function PageHero({ tag, title, subtitle }: { tag: string; title: string; subtitle: string }) {
  return (
    <section style={{ background: "#0d3d2a" }} className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <div style={{ color: "#c9a84c", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em" }} className="uppercase mb-3">{tag}</div>
        <h1 style={{ color: "#f7f5f0", fontWeight: 800, lineHeight: 1.2 }}
          className="text-3xl md:text-5xl mb-4">{title}</h1>
        <p style={{ color: "rgba(247,245,240,0.6)", fontSize: "1rem", lineHeight: 1.8 }}
          className="md:text-lg max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  )
}

export function CTABanner() {
  return (
    <section style={{ background: "#0d3d2a" }} className="py-14 md:py-16">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <h2 style={{ color: "#f7f5f0", fontWeight: 800 }} className="text-2xl md:text-3xl mb-3 md:mb-4">מוכנים להתחיל?</h2>
        <p style={{ color: "rgba(247,245,240,0.55)", fontSize: "0.95rem" }} className="mb-6 md:mb-8">
          בדיקת ההתאמה חינמית וללא התחייבות. קבלו דוח אישי תוך דקות.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/eligibility"
            style={{ background: "#c9a84c", color: "#0d3d2a", fontWeight: 800, borderRadius: 12, fontSize: "1rem" }}
            className="px-8 py-4 hover:opacity-90 transition-opacity text-center">
            בדיקת התאמה ראשונית — חינם
          </Link>
          <a href="https://wa.me/972500000000"
            style={{ border: "1.5px solid rgba(247,245,240,0.2)", color: "#f7f5f0", fontWeight: 600, borderRadius: 12, fontSize: "0.95rem" }}
            className="px-8 py-4 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            💬 וואטסאפ
          </a>
        </div>
      </div>
    </section>
  )
}

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <main style={{ fontFamily: "'Assistant', sans-serif", background: "#f7f5f0" }}>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
