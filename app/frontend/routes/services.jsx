import { Link } from "react-router";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { SERVICES, SERVICE_DETAILS } from "../data/services";

export function meta() {
  return [{ title: "Services — Jobayer Hossain" }];
}

export default function Services() {
  return (
    <PageLayout>
      <PageHero
        crumb="Services"
        eyebrow="What I do"
        title="Services &"
        goldWord="specialties"
        subtitle="A closer look at what's included in each service — process, deliverables, and the stack behind it."
      />

      <div className="max-w-4xl mx-auto px-6 -mt-6 mb-4 relative z-10 flex flex-wrap gap-2 justify-center">
        {SERVICE_DETAILS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="px-4 py-2 rounded-full text-sm font-medium border border-[var(--color-border-strong)] text-[var(--color-text-muted)] hover:border-[var(--color-gold)]/50 hover:text-[var(--color-text)] transition"
          >
            {s.title.join(" ")}
          </a>
        ))}
      </div>

      {SERVICE_DETAILS.map((s, i) => (
        <Section key={s.id} id={s.id} innerClassName="max-w-5xl mx-auto grid lg:grid-cols-[auto_1fr] gap-10" className="py-20" orbs={[{ tone: i % 2 === 0 ? "amber" : "violet", size: 460, top: "20%", left: i % 2 === 0 ? "10%" : "auto", right: i % 2 !== 0 ? "10%" : "auto", depth: 20, opacity: 0.25 }]}>
          <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0">
            <span className="text-7xl font-bold opacity-[0.06] leading-none select-none">{s.num}</span>
            <div className="w-14 h-14 rounded-xl bg-[var(--color-gold-soft)] border border-[var(--color-gold)]/20 flex items-center justify-center gold-text lg:mt-4">
              <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {SERVICES[i]?.icon}
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {s.title[0]} <span className="gold-text">{s.title[1]}</span>
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-8 max-w-2xl">{s.desc}</p>

            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[var(--color-text-dim)] mb-4">WHAT'S INCLUDED</p>
                <ul className="space-y-3 text-sm text-[var(--color-text-muted)]">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="gold-text shrink-0 mt-0.5 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-[var(--color-text-dim)] mb-4">TYPICAL TIMELINE</p>
                <p className="text-sm text-[var(--color-text-muted)] mb-6">{s.timeline}</p>
                <p className="text-xs font-semibold tracking-wider text-[var(--color-text-dim)] mb-4">STACK</p>
                <div className="flex flex-wrap gap-2">
                  {s.stack.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-xs border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)]">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <Button to="/contact" variant="cta" className="inline-flex px-6 py-3 text-sm">
              {s.cta}
              <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Button>
          </div>
        </Section>
      ))}

      <Section className="pt-20" orbs={[{ tone: "amber", size: 700, top: "-40px", left: "50%", opacity: 0.24, depth: 10 }]}>
        <div className="footer-cta-card rounded-3xl bg-gradient-to-br from-[var(--color-surface-hover)] to-[var(--color-surface)] p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-2">Not sure which service fits?</h3>
            <p className="text-[var(--color-text-muted)] max-w-md">Tell me what you're building and I'll point you to the right scope — or check the pricing page for starting packages.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link to="/pricing" className="px-6 py-3.5 rounded-full text-sm font-medium border border-[var(--color-border-strong)] hover:border-[var(--color-gold)]/50 hover:bg-[var(--color-surface)] transition text-center whitespace-nowrap">
              See pricing
            </Link>
            <Link to="/contact" className="nav-cta btn-glow px-6 py-3.5 rounded-full text-sm font-semibold bg-[var(--color-gold)] text-[var(--color-bg)] text-center whitespace-nowrap">
              Get in touch
            </Link>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
