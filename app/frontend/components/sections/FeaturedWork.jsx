import { Link } from "react-router";
import { Section } from "../ui/Section";
import { Pill } from "../ui/Eyebrow";
import { TiltCard } from "../ui/Card";
import { PROJECTS } from "../../data/projects";

export function FeaturedWork() {
  return (
    <Section
      id="work"
      fullHeight
      innerClassName="max-w-5xl w-full text-center"
      orbs={[
        { tone: "amber", size: 500, top: "33%", left: "33%", depth: 30, opacity: 0.32 },
        { tone: "violet", size: 500, bottom: "25%", right: "33%", depth: -30, opacity: 0.32, delay: "2.5s" },
      ]}
    >
      <Pill className="mb-5">Selected work</Pill>

      <h2 className="fade-up delay-2 text-4xl sm:text-5xl font-bold mb-4">
        Featured <span className="gold-text">projects</span>
      </h2>
      <p className="fade-up delay-2 text-[var(--color-text-muted)] mb-14 max-w-md mx-auto">
        A few things I've built recently — dummy data for demo purposes.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.slice(0, 3).map((p, i) => (
          <TiltCard key={p.slug} className={`project-card fade-up- ${i < 2 ? "delay-3" : "delay-4"} overflow-hidden text-left`}>
            <Link to={`/projects/${p.slug}`} className="block">
              <div className="relative h-48 overflow-hidden">
                <img src={p.image} alt={p.title} className="project-img h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="project-overlay absolute inset-0 flex items-center justify-center bg-black/50 opacity-0">
                  <span className="px-5 py-2.5 rounded-full bg-[var(--color-gold)] text-[var(--color-bg)] text-sm font-semibold flex items-center gap-2">
                    View project
                    <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="font-semibold mb-1">{p.title}</p>
                <p className="text-sm text-[var(--color-text-muted)] mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-full text-[11px] border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)]">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          </TiltCard>
        ))}
      </div>

      <Link to="/projects" className="fade-up delay-4 inline-flex items-center gap-2 mt-12 px-6 py-3 rounded-full border border-[var(--color-border-strong)] hover:border-[var(--color-gold)]/50 hover:bg-[var(--color-surface)] transition text-sm font-medium">
        View all projects
        <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </Link>
    </Section>
  );
}
