import { Link } from "react-router";
import { Section } from "../ui/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { TiltCard } from "../ui/Card";
import { EDUCATION } from "../../data/education";

export function Education() {
  return (
    <Section id="education" innerClassName="max-w-4xl mx-auto" orbs={[{ tone: "amber", size: 450, top: "25%", right: "25%", depth: 20, opacity: 0.32 },
      { tone: "violet", size: 340, bottom: "15%", left: "15%", depth: -18, opacity: 0.22, delay: "1.5s" }]}>
      <Eyebrow>BACKGROUND</Eyebrow>
      <h2 className="fade-up delay-2 text-4xl sm:text-5xl font-bold mb-12">
        Education <span className="gold-text">&amp; Certifications</span>
      </h2>

      <div className="grid sm:grid-cols-2 gap-5">
        {EDUCATION.map((edu, i) => (
          <TiltCard key={edu.title} className={`fade-up- ${i < 2 ? "delay-3" : "delay-4"} p-6`}>
            <div className="w-11 h-11 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center gold-text mb-4">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{edu.icon}</svg>
            </div>
            <p className="font-semibold mb-1">{edu.title}</p>
            <p className="text-sm gold-text mb-1">{edu.org}</p>
            <p className="text-xs text-[var(--color-text-dim)]">{edu.period}</p>
          </TiltCard>
        ))}
      </div>

      <Link to="/resume" className="fade-up delay-4 inline-flex items-center gap-1.5 mt-10 text-sm font-medium gold-text">
        View full resume
        <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </Link>
    </Section>
  );
}
