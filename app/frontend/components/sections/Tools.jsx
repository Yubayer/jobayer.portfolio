import { Link } from "react-router";
import { Section } from "../ui/Section";
import { Pill } from "../ui/Eyebrow";
import { TiltCard } from "../ui/Card";
import { TOOLS } from "../../data/tools";

export function Tools() {
  return (
    <Section
      id="tools"
      innerClassName="max-w-5xl mx-auto text-center"
      orbs={[{ tone: "amber", size: 700, top: "25%", left: "50%", opacity: 0.24, depth: 15 }]}
    >
      <Pill className="mb-6">What I work with</Pill>

      <h2 className="fade-up delay-2 text-4xl sm:text-5xl font-bold mb-4">
        Tools &amp; <span className="gold-text">Technologies</span>
      </h2>
      <p className="fade-up delay-2 text-[var(--color-text-muted)] max-w-md mx-auto mb-14">
        The core stack I reach for to design, build and ship products.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {TOOLS.map((tool, i) => (
          <TiltCard key={tool.name} className={`fade-up- ${i < 3 ? "delay-3" : "delay-4"} p-6 flex flex-col items-center gap-4`}>
            <div className="w-12 h-12 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">{tool.icon}</svg>
            </div>
            <p className="font-semibold text-sm">{tool.name}</p>
          </TiltCard>
        ))}
      </div>

      <div className="text-center">
        <Link to="/resume" className="fade-up delay-4 inline-flex items-center gap-1.5 mt-12 text-sm font-medium gold-text">
          View full skills breakdown
          <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </Link>
      </div>
    </Section>
  );
}
