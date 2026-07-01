import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { ContactMap } from "../components/ui/ContactMap";
import { SITE, SOCIALS } from "../data/site";

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

const BUDGETS = ["Under $500", "$500 – $1,000", "$1,000 – $2,000", "$2,000 – $5,000", "$5,000 – $15,000", "$15,000+"];
const PROJECT_TYPES = ["Shopify theme", "Shopify app", "React Router app", "Laravel app", "Other"];

export function meta() {
  return [{ title: "Contact — Jobayer Hossain" }];
}

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your form backend of choice (Formspree, an API route, etc).
  }

  return (
    <PageLayout>
      <PageHero crumb="Contact" eyebrow="Get in touch" title="Let's talk about your" goldWord="project" subtitle="Have a project in mind? I'd love to hear about it." />

      <Section innerClassName="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12" orbs={[{ tone: "amber", size: 450, top: "20%", right: "20%", depth: 20, opacity: 0.29 }, { tone: "violet", size: 320, bottom: "15%", left: "10%", depth: -18, opacity: 0.2, delay: "1.5s" }]}>
        <div>
          <div className="fade-up delay-2 space-y-5 mb-8">
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

          <div className="fade-up delay-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-sm font-medium text-green-400 mb-10">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            Currently available for new projects
          </div>

          <p className="text-xs font-semibold tracking-wider text-[var(--color-text-dim)] mb-4">FIND ME ELSEWHERE</p>
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="social-btn w-10 h-10 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]/40">
                <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.icon} /></svg>
              </a>
            ))}
          </div>
        </div>

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
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs text-[var(--color-text-dim)] mb-1.5 block">Budget range</label>
              <select className="form-select">
                {BUDGETS.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs text-[var(--color-text-dim)] mb-1.5 block">Project type</label>
              <select className="form-select">
                {PROJECT_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="text-xs text-[var(--color-text-dim)] mb-1.5 block">Subject</label>
            <input type="text" placeholder="What's this about?" className="form-input" />
          </div>
          <div className="mb-6">
            <label className="text-xs text-[var(--color-text-dim)] mb-1.5 block">Message *</label>
            <textarea rows={5} required placeholder="Tell me about your project, goals, timeline, and budget..." className="form-textarea resize-none" />
          </div>
          <button type="submit" className="nav-cta btn-glow w-full bg-[var(--color-gold)] text-[var(--color-bg)] py-3 rounded-lg font-medium flex items-center justify-center gap-2">
            Send message
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </form>
      </Section>

      <Section innerClassName="max-w-6xl mx-auto" orbs={[{ tone: "violet", size: 500, top: "20%", left: "20%", depth: 15, opacity: 0.25 }]}>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <p className="fade-up delay-1 text-sm font-medium gold-text mb-3">WHERE I WORK FROM</p>
            <h2 className="fade-up delay-2 text-2xl sm:text-3xl font-bold">
              Based in Dhaka, <span className="gold-text">working worldwide</span>
            </h2>
          </div>
          <div className="fade-up delay-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-sm font-medium text-green-400">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            Remote-first · GMT+6
          </div>
        </div>

        <div className="fade-up delay-3">
          <ContactMap />
        </div>

        <p className="fade-up delay-4 text-sm text-[var(--color-text-muted)] max-w-lg mx-auto text-center mt-8">
          Drag to pan, scroll or pinch to zoom — comfortable working across time zones, with overlapping hours easy to arrange wherever you're based.
        </p>
      </Section>
    </PageLayout>
  );
}
