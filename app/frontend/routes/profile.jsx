import { Link } from "react-router";
import { PageLayout } from "../components/layout/PageLayout";
import { Section } from "../components/ui/Section";
import { Pill } from "../components/ui/Eyebrow";
import { TiltCard, Card } from "../components/ui/Card";
import { SITE } from "../data/site";

const PRINCIPLES = [
  {
    title: "Ship in small, reviewable pieces",
    desc: "Large PRs hide bugs. I break work into chunks you can actually review and approve with confidence.",
  },
  {
    title: "Performance is a feature",
    desc: "A fast site isn't a nice-to-have — it's measurable revenue. I treat Lighthouse scores as a real requirement.",
  },
  {
    title: "Communicate before you have to ask",
    desc: "Regular updates, clear blockers, honest timelines. No disappearing for a week and resurfacing with surprises.",
  },
  {
    title: "Code that someone else can read",
    desc: "Whoever maintains this after me shouldn't need a translator. Clear naming, sensible structure, no clever tricks.",
  },
];

export function meta() {
  return [{ title: "Profile — Jobayer Hossain" }];
}

export default function Profile() {
  return (
    <PageLayout>
      <Section border={false} className="page-hero !pt-36" orbs={[{ tone: "amber", size: 600, top: "0%", left: "25%", depth: 20, opacity: 0.32 }, { tone: "violet", size: 380, bottom: "-5%", right: "10%", depth: -18, opacity: 0.22, delay: "1.5s" }]}>
        <div className="max-w-6xl mx-auto">
          <div className="breadcrumb mb-6">
            <Link to="/">Home</Link>
            <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            <span className="text-[var(--color-text)]">Profile</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
            <div className="fade-up delay-2 relative">
              <TiltCard className="relative p-6 max-w-sm">
                <img src="/images/profile/profile.png" alt={SITE.name} className="w-full aspect-square rounded-xl object-cover mb-5" />
                <p className="font-semibold text-lg">{SITE.name}</p>
                <p className="text-sm text-[var(--color-text-muted)] mb-4">{SITE.title}</p>
                <div className="grid grid-cols-3 gap-2">
                  {[["3+", "Years"], ["40+", "Projects"], ["20+", "Clients"]].map(([n, l]) => (
                    <div key={l} className="bg-[var(--color-surface)] rounded-lg p-2.5 text-center">
                      <p className="text-lg font-bold gold-text">{n}</p>
                      <p className="text-[11px] text-[var(--color-text-muted)]">{l}</p>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </div>

            <div>
              <Pill tone="green" className="mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                Available for work
              </Pill>
              <h1 className="fade-up delay-2 text-4xl sm:text-5xl font-bold leading-tight mb-5">
                Hey, I'm Jobayer — <span className="gold-text">I build things for the web.</span>
              </h1>
              <p className="fade-up delay-3 text-[var(--color-text-muted)] leading-relaxed mb-4">
                I'm a full-stack developer based in Dhaka, working with brands and agencies to build Shopify storefronts, custom apps, and React-based products. My focus is the same on every project: clean code, fast pages, and interfaces that feel obvious to use.
              </p>
              <p className="fade-up delay-3 text-[var(--color-text-muted)] leading-relaxed mb-8">
                Outside of client work, I spend time deepening my grasp of data structures and backend architecture — the kind of foundational knowledge that makes the next ten projects easier than the last.
              </p>
              <div className="fade-up delay-4 flex flex-wrap gap-4">
                <Link to="/resume" className="nav-cta btn-glow px-7 py-3 rounded-full font-medium bg-[var(--color-gold)] text-[var(--color-bg)] flex items-center gap-2">
                  View resume
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
                <Link to="/contact" className="px-7 py-3 rounded-full font-medium border border-[var(--color-border-strong)] hover:border-[var(--color-gold)]/50 hover:bg-[var(--color-surface)] transition">Say hello</Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section innerClassName="max-w-4xl mx-auto" orbs={[{ tone: "amber", size: 500, top: "20%", right: "20%", depth: 15, opacity: 0.25 }]}>
        <div className="fade-up delay-1 flex items-center gap-2 text-sm font-medium gold-text mb-3">
          <span className="w-6 h-px bg-[var(--color-gold)]" /> HOW I WORK
        </div>
        <h2 className="fade-up delay-2 text-3xl sm:text-4xl font-bold mb-12">
          My <span className="gold-text">working principles</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {PRINCIPLES.map((p, i) => (
            <Card key={p.title} className={`fade-up ${i < 2 ? "delay-3" : "delay-4"} p-6`}>
              <p className="font-semibold mb-2">{p.title}</p>
              <p className="text-sm text-[var(--color-text-muted)]">{p.desc}</p>
            </Card>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
