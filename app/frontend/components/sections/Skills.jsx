import { useState } from "react";
import { Link } from "react-router";
import { Section } from "../ui/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { TiltCard } from "../ui/Card";
import { SKILLS, SKILL_FILTERS } from "../../data/skills";

export function Skills() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? SKILLS : SKILLS.filter((s) => s.cat.includes(filter));

  return (
    <Section id="skills" fullHeight orbs={[
      { tone: "amber", size: 500, top: "10%", right: "33%", depth: 35, opacity: 0.32 },
      { tone: "violet", size: 500, bottom: "10%", left: "25%", depth: -25, opacity: 0.42, delay: "1.5s" },
    ]}>
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <Eyebrow>WHAT I WORK WITH</Eyebrow>
          <h2 className="fade-up delay-2 text-4xl sm:text-5xl font-bold">
            Skills <span className="gold-text">&amp; Expertise</span>
          </h2>
        </div>
        <div className="fade-up delay-2 flex flex-wrap gap-2">
          {SKILL_FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === f.key
                  ? "bg-[var(--color-gold)] text-[var(--color-bg)]"
                  : "border border-[var(--color-border-strong)] text-[var(--color-text-muted)] hover:border-[var(--color-gold)]/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {visible.map((skill) => (
          <TiltCard key={skill.name} className="fade-up- delay-3 p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="font-semibold">{skill.name}</p>
              <span className="gold-text font-medium">{skill.value}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-[var(--color-surface-strong)]">
              <div className="h-full rounded-full bg-[var(--color-gold)]" style={{ width: `${skill.value}%` }} />
            </div>
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
