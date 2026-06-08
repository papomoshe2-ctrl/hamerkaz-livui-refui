import { Metadata } from "next"
import PageLayout from "@/components/marketing/PageLayout"

export const metadata: Metadata = {
  title: "צור קשר | המרכז לליווי רפואי בישראל",
}

export default function ContactPage() {
  return (
    <PageLayout>
      <section style={{ background: "#0d3d2a" }} className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }} className="uppercase mb-4">צור קשר</div>
          <h1 style={{ color: "#f7f5f0", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800 }} className="mb-4">
            נשמח לעזור
          </h1>
          <p style={{ color: "rgba(247,245,240,0.6)", fontSize: "1.1rem" }}>
            נציג יחזור אליכם תוך 24 שעות בשעות פעילות.
          </p>
        </div>
      </section>

      <section style={{ background: "#f7f5f0" }} className="py-20">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            {[
              { icon: "💬", title: "וואטסאפ", desc: "הדרך המהירה ביותר. נציג עונה תוך שעות.", action: "שלח הודעה", href: "https://wa.me/972500000000" },
              { icon: "📧", title: "אימייל", desc: "info@hamerkaz-refui.co.il", action: "שלח מייל", href: "mailto:info@hamerkaz-refui.co.il" },
              { icon: "⏰", title: "שעות פעילות", desc: "ראשון–חמישי: 9:00–18:00\nשישי: 9:00–13:00", action: null, href: null },
            ].map((c) => (
              <div key={c.title} style={{ background: "white", border: "1.5px solid #e8e4dc", borderRadius: 16 }} className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span style={{ fontSize: "1.5rem" }}>{c.icon}</span>
                  <span style={{ color: "#0d3d2a", fontWeight: 700 }}>{c.title}</span>
                </div>
                <p style={{ color: "#6b6560", fontSize: "0.88rem", lineHeight: 1.7, whiteSpace: "pre-line" }}>{c.desc}</p>
                {c.action && c.href && (
                  <a href={c.href} style={{ color: "#0d3d2a", fontWeight: 700, fontSize: 13 }}
                    className="mt-3 block hover:underline">{c.action} ←</a>
                )}
              </div>
            ))}
          </div>

          <div style={{ background: "white", border: "1.5px solid #e8e4dc", borderRadius: 20 }} className="p-8">
            <h2 style={{ color: "#0d3d2a", fontWeight: 800, fontSize: "1.2rem" }} className="mb-6">שלחו הודעה</h2>
            <form className="space-y-4">
              <div>
                <label style={{ color: "#3d3a35", fontSize: "0.88rem", fontWeight: 600 }} className="block mb-1">שם מלא</label>
                <input type="text" style={{ border: "1.5px solid #e8e4dc", borderRadius: 10, width: "100%", padding: "10px 14px", fontSize: "0.9rem", outline: "none" }} />
              </div>
              <div>
                <label style={{ color: "#3d3a35", fontSize: "0.88rem", fontWeight: 600 }} className="block mb-1">טלפון</label>
                <input type="tel" dir="ltr" style={{ border: "1.5px solid #e8e4dc", borderRadius: 10, width: "100%", padding: "10px 14px", fontSize: "0.9rem", outline: "none" }} />
              </div>
              <div>
                <label style={{ color: "#3d3a35", fontSize: "0.88rem", fontWeight: 600 }} className="block mb-1">הודעה</label>
                <textarea rows={4} style={{ border: "1.5px solid #e8e4dc", borderRadius: 10, width: "100%", padding: "10px 14px", fontSize: "0.9rem", outline: "none", resize: "none" }} />
              </div>
              <button type="submit"
                style={{ background: "#0d3d2a", color: "#f7f5f0", fontWeight: 700, borderRadius: 10, width: "100%", padding: "12px", fontSize: "0.95rem" }}
                className="hover:opacity-80 transition-opacity">
                שלח הודעה
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
