import { Section } from "../ui/Section";
import { Pill } from "../ui/Eyebrow";
import { Button } from "../ui/Button";
import { TiltCard } from "../ui/Card";
import { useTypedText } from "../../hooks/use-typed-text";
import { SITE } from "../../data/site";

const ROLES = ["Senior Software Engineer", "Shopify Expert", "Senior Shopify Developer", "Shopify App Developer", "React Router v7 Developer", "Laravel Developer", "Prisma ORM.", "MySql, PostGreSql, MongoDB", "Heroku, Railway"];

export function Hero() {
  const typed = useTypedText(ROLES);

  return (
    <Section
      id="home"
      border={false}
      fullHeight
      innerClassName="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
      orbs={[
        { tone: "amber", size: 460, top: "18%", left: "8%", depth: 35, opacity: 0.22 },
        { tone: "violet", size: 620, top: "10%", right: "-5%", depth: -25, opacity: 0.5, delay: "2s" },
        { tone: "violet", size: 480, bottom: "10%", right: "20%", depth: -15, opacity: 0.35, delay: "1s" },
      ]}
      className="pt-24"
    >
      <div>
        <Pill tone="green" className="mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          Available for work
        </Pill>

        <p className="fade-up delay-2 text-[var(--color-text-muted)] mb-2">
          Hi, I'm <span className="text-[var(--color-text)] font-medium">{SITE.name}</span>
        </p>

        <h1 className="fade-up delay-2 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-2">
          Building <span className="gold-text">great</span> things.
        </h1>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 h-12 sm:h-16 inline-block">
          <span className="gold-text">{typed}</span>
          <span className="cursor-blink gold-text">|</span>
        </h1>

        <p className="fade-up delay-3 text-[var(--color-text-muted)] leading-relaxed mb-8 max-w-md">
          {SITE.bio}
        </p>

        <div className="fade-up delay-3 flex flex-wrap gap-4 mb-10">
          <Button to="/projects" variant="primary">
            View my work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Button>
          <Button to="/contact" variant="outline">Say hello</Button>
        </div>

        <div className="fade-up delay-4 flex items-center gap-2 text-[var(--color-text-dim)] text-sm">
          <span className="w-8 h-px bg-current opacity-40" />
          SCROLL TO EXPLORE
        </div>
      </div>

      <div className="relative fade-up delay-3">
        <div className="float absolute -top-6 right-0 sm:right-6 z-20 px-3 sm:px-4 py-2 rounded-full bg-[var(--color-card)] border border-[var(--color-border)] text-xs sm:text-sm font-medium flex items-center gap-2">
          <svg className="w-3.5 h-3.5 gold-text" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8h12l-1 12H7L6 8Z" /><path d="M9 8a3 3 0 0 1 6 0" /></svg>
          Shopify expert
        </div>
        <div className="float-slow hidden sm:flex absolute top-1/3 -right-6 z-20 px-4 py-2 rounded-full bg-[var(--color-card)] border border-[var(--color-border)] text-sm font-medium items-center gap-2" style={{ animationDelay: "1s" }}>
          <svg className="w-3.5 h-3.5" style={{ color: "#a78bfa" }} viewBox="0 0 24 24" fill="#a78bfa"><circle cx="12" cy="12" r="2.2" fill="currentColor" /><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse cx="12" cy="12" rx="10" ry="4.2" /><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" /></g></svg>
          React dev
        </div>
        <div className="float absolute bottom-8 left-0 sm:-left-6 z-20 px-3 sm:px-4 py-2 rounded-full bg-[var(--color-card)] border border-[var(--color-border)] text-xs sm:text-sm font-medium flex items-center gap-2" style={{ animationDelay: "2s" }}>
          <svg className="w-3.5 h-3.5 gold-text" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" /></svg>
          99 Lighthouse
        </div>

        <TiltCard className="relative p-6 max-w-md mx-auto">
          <div className="flex gap-1.5 mb-6">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>

          <div className="text-center mb-6">
            <img
              src="/images/profile/profile.png"
              alt={SITE.name}
              className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-[var(--color-gold)] mb-4"
            />
            <p className="font-semibold text-lg">{SITE.name}</p>
            <p className="text-sm text-[var(--color-text-muted)]">{SITE.title}</p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-5">
            {[["3+", "Years"], ["40+", "Projects"], ["20+", "Happy"]].map(([n, l]) => (
              <div key={l} className="bg-[var(--color-surface)] rounded-xl p-3 text-center">
                <p className="text-xl font-bold gold-text">{n}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{l}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {["Laravel", "React Router v7", "Shopify API", "Node.js", "Prisma ORM", "Heroku, Railway"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-xs font-medium border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)]">{t}</span>
            ))}
          </div>
        </TiltCard>
      </div>
    </Section>
  );
}
