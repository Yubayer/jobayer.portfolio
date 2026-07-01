import { Section } from "../ui/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { SITE } from "../../data/site";
import { Card } from "../ui/Card";

const CONTACT_INFO = [
  {
    label: "Email",
    value: SITE.email,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    label: "WhatsApp",
    value: SITE.whatsapp,
    icon: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  },
  {
    label: "Location",
    value: SITE.location,
    icon: (
      <>
        <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.3" />
      </>
    ),
  },
];

export function ContactCTA({ id = "contact" }) {
  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your form backend of choice (Formspree, an API route, etc).
  }

  return (
    <Section id={id} innerClassName="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center" orbs={[{ tone: "amber", size: 450, top: "33%", right: "25%", depth: 20, opacity: 0.32 },
      { tone: "violet", size: 340, bottom: "15%", left: "15%", depth: -18, opacity: 0.22, delay: "1.5s" }]}>
      <div>
        <Eyebrow>GET IN TOUCH</Eyebrow>
        <h2 className="fade-up delay-2 text-4xl sm:text-5xl font-bold mb-4 leading-tight">
          Let's build something <span className="gold-text">great together.</span>
        </h2>
        <p className="fade-up delay-2 text-[var(--color-text-muted)] leading-relaxed mb-10 max-w-md">
          Have a project in mind? I'd love to hear about it. Whether it's a Shopify store, a web application, or just an idea — let's talk.
        </p>

        <div className="fade-up delay-3 space-y-5 mb-8">
          {CONTACT_INFO.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center gold-text">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{item.icon}</svg>
              </div>
              <div>
                <p className="text-xs text-[var(--color-text-dim)]">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up delay-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-sm font-medium text-green-400">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          Currently available for new projects
        </div>
      </div>

      <Card>
        <form onSubmit={handleSubmit} className="fade-up delay-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs text-[var(--color-text-dim)] mb-1.5 block">Full name *</label>
              <input type="text" required placeholder="John Doe" className="form-input" />
            </div>
            <div>
              <label className="text-xs text-[var(--color-text-dim)] mb-1.5 block">Email address *</label>
              <input type="email" required placeholder="john@example.com" className="form-input" />
            </div>
          </div>
          <div className="mb-4">
            <label className="text-xs text-[var(--color-text-dim)] mb-1.5 block">Subject</label>
            <input type="text" placeholder="What's this about?" className="form-input" />
          </div>
          <div className="mb-6">
            <label className="text-xs text-[var(--color-text-dim)] mb-1.5 block">Message *</label>
            <textarea rows={4} required placeholder="Tell me about your project, goals, timeline, and budget..." className="form-textarea resize-none" />
          </div>
          <button type="submit" className="btn-glow w-full bg-[var(--color-gold)] text-[var(--color-bg)] py-3 rounded-lg font-medium flex items-center justify-center gap-2">
            Send message
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </form>
      </Card>
    </Section>
  );
}
