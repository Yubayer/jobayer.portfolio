import { Link } from "react-router";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { TiltCard, Card } from "../components/ui/Card";
import { useTilt } from "../hooks/use-tilt";
import { SITE, SOCIALS } from "../data/site";
import { EXPERIENCE } from "../data/experience";
import { EDUCATION } from "../data/education";
import { RESUME, RESUME_PROJECTS } from "../data/resume";

/** Each project link needs its own tilt hook instance, so it's a small component rather than inline in the .map(). */
function ResumeProjectCard({ project: p }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt();
  return (
    <Link
      to={`/projects/${p.slug}`}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="project-card tilt-card card-hover block bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden sm:flex"
    >
      <img src={p.image} alt={p.title} className="project-img h-40 sm:h-auto sm:w-48 w-full object-cover" />
      <div className="p-5">
        <p className="font-semibold mb-1.5">{p.title}</p>
        <p className="text-sm text-[var(--color-text-muted)] mb-3">{p.desc}</p>
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-full text-[11px] border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)]">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

const SIDEBAR_ICONS = {
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  whatsapp: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  location: (
    <>
      <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </>
  ),
  link: <path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1.5-1.5" />,
};

export function meta() {
  return [{ title: "Resume — Jobayer Hossain" }];
}

export default function Resume() {
  return (
    <PageLayout>
      <PageHero crumb="Resume" eyebrow="Career path" title="My" goldWord="resume" />

      <div className="max-w-4xl mx-auto px-6 -mt-8 mb-10 relative z-10 flex justify-center">
        <a
          href={`mailto:${SITE.email}?subject=Resume%20request`}
          className="nav-cta btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[var(--color-gold)] text-[var(--color-bg)]"
        >
          Download PDF
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0-4-4m4 4 4-4M5 19h14" /></svg>
        </a>
      </div>

      <Section border={false} className="pt-0" innerClassName="max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-8 items-start" orbs={[{ tone: "amber", size: 500, top: "10%", left: "20%", depth: 20, opacity: 0.25 }, { tone: "violet", size: 340, bottom: "10%", right: "15%", depth: -18, opacity: 0.2, delay: "1.5s" }]}>
        {/* Sidebar */}
        <div className="space-y-6">
          <TiltCard className="p-6 text-center">
            <img src="/images/profile/profile.png" alt={SITE.name} className="w-28 h-28 mx-auto rounded-full object-cover border-2 border-[var(--color-gold)] mb-4" />
            <p className="font-semibold text-lg">{SITE.name}</p>
            <p className="text-sm text-[var(--color-text-muted)] mb-1">Senior Software Engineer</p>
            <p className="text-xs text-[var(--color-text-dim)] mb-4">Shopify, React & Laravel Specialist</p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-xs font-medium text-green-400">
              Available for work
            </div>
          </TiltCard>

          <Card className="p-6" hover={false}>
            <p className="text-xs font-semibold tracking-wider text-[var(--color-text-dim)] mb-4">CONTACT</p>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center gold-text shrink-0"><svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{SIDEBAR_ICONS.email}</svg></span>
                <span className="break-all">{SITE.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center gold-text shrink-0"><svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{SIDEBAR_ICONS.whatsapp}</svg></span>
                {SITE.whatsapp}
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center gold-text shrink-0"><svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{SIDEBAR_ICONS.location}</svg></span>
                Dhaka, Bangladesh — {SITE.location}
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center gold-text shrink-0"><svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{SIDEBAR_ICONS.link}</svg></span>
                <span className="text-[var(--color-text-muted)]">{RESUME.websites.join(" · ")}</span>
              </li>
            </ul>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="social-btn w-9 h-9 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]/40">
                  <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.icon} /></svg>
                </a>
              ))}
            </div>
          </Card>

          <Card className="p-6" hover={false}>
            <p className="text-xs font-semibold tracking-wider text-[var(--color-text-dim)] mb-4">SKILLS</p>
            <div className="space-y-3 mb-3">
              {RESUME.topSkills.map((s) => (
                <div key={s.name} className="flex items-center justify-between text-sm">
                  <span className="text-[var(--color-text-muted)]">{s.name}</span>
                  <span className="gold-text font-medium">{s.value}%</span>
                </div>
              ))}
            </div>
            <Link to="/#skills" className="inline-flex items-center gap-1.5 text-xs font-medium gold-text">
              View full skills grid
              <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </Card>

          <Card className="p-6" hover={false}>
            <p className="text-xs font-semibold tracking-wider text-[var(--color-text-dim)] mb-4">LANGUAGES</p>
            <ul className="space-y-2 text-sm">
              {RESUME.languages.map((l) => (
                <li key={l.name} className="flex items-center justify-between">
                  <span className="text-[var(--color-text-muted)]">{l.name}</span>
                  <span className="text-xs text-[var(--color-text-dim)]">{l.level}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6" hover={false}>
            <p className="text-xs font-semibold tracking-wider text-[var(--color-text-dim)] mb-4">TOOLS &amp; SOFTWARE</p>
            <div className="flex flex-wrap gap-2">
              {RESUME.tools.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full text-xs border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)]">{t}</span>
              ))}
            </div>
          </Card>
        </div>

        {/* Main column */}
        <div className="space-y-10">
          <div>
            <p className="text-xs font-semibold tracking-wider text-[var(--color-text-dim)] mb-4">PROFILE SUMMARY</p>
            <p className="text-[var(--color-text-muted)] leading-relaxed">{RESUME.summary}</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-[var(--color-gold-soft)] border border-[var(--color-gold)]/20 flex items-center justify-center gold-text">
                  <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4zM4 9h16M9 4v16" /></svg>
                </span>
                Work Experience
              </h2>
              <span className="text-sm text-[var(--color-text-dim)]">{EXPERIENCE.length} positions</span>
            </div>

            <div className="relative pl-10">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-border)]" />
              {EXPERIENCE.map((job, i) => (
                <div key={job.title} className={`relative ${i < EXPERIENCE.length - 1 ? "mb-10" : ""}`}>
                  <span className={`absolute -left-10 top-1.5 w-4 h-4 rounded-full border-4 border-[var(--color-bg)] ${job.current ? "bg-[var(--color-gold)]" : "bg-[var(--color-border-strong)]"}`} />
                  <Card className="p-6">
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                      <p className="font-semibold text-lg">{job.title}</p>
                      {job.current && <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/30">Current</span>}
                    </div>
                    <p className="gold-text text-sm font-medium mb-1">{job.company} <span className="text-[var(--color-text-dim)] font-normal">· {job.location}</span></p>
                    <p className="text-xs text-[var(--color-text-dim)] mb-4">{job.period}</p>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">{job.desc}</p>
                    {job.achievements?.length > 0 && (
                      <ul className="space-y-1.5 mb-4 text-sm text-[var(--color-text-muted)]">
                        {job.achievements.map((a) => (
                          <li key={a} className="flex items-start gap-2">
                            <svg className="gold-text shrink-0 mt-0.5 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                            {a}
                          </li>
                        ))}
                      </ul>
                    )}
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
          </div>

          <div>
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">
              <span className="w-9 h-9 rounded-lg bg-[var(--color-gold-soft)] border border-[var(--color-gold)]/20 flex items-center justify-center gold-text">
                <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 11.5V17c0 1.1 2.7 2 6 2s6-.9 6-2v-5.5M22 9v6" /></svg>
              </span>
              Education &amp; Certifications
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {EDUCATION.map((edu) => (
                <Card key={edu.title} className="p-6">
                  <div className="w-11 h-11 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center gold-text mb-4">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{edu.icon}</svg>
                  </div>
                  <p className="font-semibold mb-1">{edu.title}</p>
                  <p className="text-sm gold-text mb-1">{edu.org}</p>
                  <p className="text-xs text-[var(--color-text-dim)]">{edu.period}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-[var(--color-gold-soft)] border border-[var(--color-gold)]/20 flex items-center justify-center gold-text">
                  <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 9h16" /></svg>
                </span>
                Key Projects
              </h2>
              <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm font-medium gold-text">
                View all
                <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
            <div className="space-y-4">
              {RESUME_PROJECTS.map((p) => (
                <ResumeProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">
              <span className="w-9 h-9 rounded-lg bg-[var(--color-gold-soft)] border border-[var(--color-gold)]/20 flex items-center justify-center gold-text">
                <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1L12 2Z" /></svg>
              </span>
              Key Achievements
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {RESUME.achievements.map((a) => (
                <Card key={a.label} className="p-6 text-center">
                  <p className="text-3xl font-bold gold-text mb-2">{a.value}</p>
                  <p className="text-sm text-[var(--color-text-muted)]">{a.label}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-lg bg-[var(--color-gold-soft)] border border-[var(--color-gold)]/20 flex items-center justify-center gold-text">
                <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </span>
              References
            </h2>
            <p className="text-[var(--color-text-muted)]">{RESUME.references}</p>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
