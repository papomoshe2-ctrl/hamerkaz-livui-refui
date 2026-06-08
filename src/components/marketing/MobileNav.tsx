'use client'

import { useState } from "react"
import Link from "next/link"

const NAV_LINKS = [
  ["שירותים", "/services"],
  ["מצבים רפואיים", "/conditions"],
  ["מרכז ידע", "/knowledge"],
  ["אודות", "/about"],
  ["שאלות נפוצות", "/faq"],
  ["צור קשר", "/contact"],
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
        aria-label="תפריט"
      >
        <span style={{
          display: "block", width: 22, height: 2, background: open ? "transparent" : "#f7f5f0",
          transition: "all 0.2s", transform: open ? "rotate(45deg) translate(4px, 4px)" : "none"
        }} />
        <span style={{
          display: "block", width: 22, height: 2, background: "#f7f5f0",
          opacity: open ? 0 : 1, transition: "opacity 0.2s"
        }} />
        <span style={{
          display: "block", width: 22, height: 2, background: open ? "transparent" : "#f7f5f0",
          transition: "all 0.2s", transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none"
        }} />
        {open && (
          <>
            <span style={{ position: "fixed", top: 0, right: 0, width: 22, height: 2, background: "#f7f5f0", transform: "rotate(45deg) translate(32px, 16px)", display: "block" }} />
            <span style={{ position: "fixed", top: 0, right: 0, width: 22, height: 2, background: "#f7f5f0", transform: "rotate(-45deg) translate(32px, 16px)", display: "block" }} />
          </>
        )}
      </button>

      {/* Drawer */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setOpen(false)}
          />
          {/* Menu panel */}
          <div
            className="fixed top-0 right-0 bottom-0 z-50 flex flex-col"
            style={{ width: "min(320px, 85vw)", background: "#0d3d2a", borderLeft: "1px solid rgba(201,168,76,0.2)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                <div style={{ width: 32, height: 32, background: "#c9a84c", borderRadius: 7 }}
                  className="flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d3d2a" strokeWidth="2.5">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: "#f7f5f0", fontWeight: 700, fontSize: 14, lineHeight: 1.3 }}>המרכז לליווי רפואי</div>
                  <div style={{ color: "#c9a84c", fontSize: 11 }}>בישראל</div>
                </div>
              </Link>
              <button onClick={() => setOpen(false)}
                style={{ color: "rgba(247,245,240,0.6)", fontSize: 22, lineHeight: 1 }}
                className="hover:text-white transition-colors w-8 h-8 flex items-center justify-center">
                ✕
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 py-4 overflow-y-auto">
              {NAV_LINKS.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <span style={{ color: "#f7f5f0", fontSize: 16, fontWeight: 500 }}>{label}</span>
                  <span style={{ color: "#c9a84c", fontSize: 18 }}>←</span>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="p-5 space-y-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <Link
                href="/eligibility"
                onClick={() => setOpen(false)}
                className="block text-center py-3.5 rounded-xl font-bold text-base hover:opacity-90 transition-opacity"
                style={{ background: "#c9a84c", color: "#0d3d2a" }}
              >
                בדיקת התאמה — חינם
              </Link>
              <a
                href="https://wa.me/972500000000"
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-colors"
                style={{ border: "1.5px solid rgba(247,245,240,0.2)", color: "#f7f5f0" }}
              >
                💬 וואטסאפ
              </a>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block text-center py-2 text-sm"
                style={{ color: "rgba(247,245,240,0.5)" }}
              >
                כניסה לאזור האישי
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}
