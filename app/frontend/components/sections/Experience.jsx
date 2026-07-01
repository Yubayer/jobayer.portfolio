import { Link } from "react-router";
import { Section } from "../ui/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { Card } from "../ui/Card";
import { EXPERIENCE } from "../../data/experience";

export function Experience() {
  return (
    <Section id="experience" innerClassName="max-w-4xl mx-auto" orbs={[{ tone: "amber", size: 450, top: "25%", left: "25%", depth: 20, opacity: 0.32 },
      { tone: "violet", size: 340, bottom: "15%", right: "15%", depth: -18, opacity: 0.22, delay: "1.5s" }]}>
      <div className="flex items-center justify-between mb-12 flex-wrap gap-3">
        <div>
          <Eyebrow>CAREER PATH</Eyebrow>
          <h2 className="fade-up delay-2 text-4xl sm:text-5xl font-bold">
            Work <span className="gold-text">Experience</span>
          </h2>
        </div>
        <span className="fade-up delay-2 text-sm text-[var(--color-text-dim)]">{EXPERIENCE.length} positions</span>
      </div>

      <div className="relative pl-10">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-border)]" />

        {EXPERIENCE.map((job, i) => (
          <div key={job.title} className={`relative fade-up ${i < 2 ? "mb-10" : ""} ${i < 2 ? "delay-3" : "delay-4"}`}>
            <span className={`absolute -left-10 top-1.5 w-4 h-4 rounded-full border-4 border-[var(--color-bg)] ${job.current ? "bg-[var(--color-gold)]" : "bg-[var(--color-border-strong)]"}`} />
            <Card className="p-6">
              <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                <p className="font-semibold text-lg">{job.title}</p>
                {job.current && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/30">Current</span>
                )}
              </div>
              <p className="gold-text text-sm font-medium mb-1">
                {job.company} <span className="text-[var(--color-text-dim)] font-normal">· {job.location}</span>
              </p>
              <p className="text-xs text-[var(--color-text-dim)] mb-4">{job.period}</p>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">{job.desc}</p>
              {job.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-full text-[11px] border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)]">{t}</span>
                  ))}
                </div>
              )}
            </Card>
          </div>
        ))}
      </div>

      <Link to="/resume" className="fade-up delay-4 inline-flex items-center gap-1.5 mt-10 text-sm font-medium gold-text">
        View full resume
        <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </Link>
    </Section>
  );
}
