import { Link, useParams } from "react-router";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { TiltCard } from "../components/ui/Card";
import { PROJECTS } from "../data/projects";

export function meta({ params }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  return [{ title: project ? `${project.title} — Jobayer Hossain` : "Project — Jobayer Hossain" }];
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug) ?? PROJECTS[0];
  const more = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);
  const chips = project.detailTags ?? project.tags;

  return (
    <PageLayout>
      <PageHero crumb={project.title} eyebrow="Case study" title={project.title} subtitle={project.summary} />

      <div className="max-w-3xl mx-auto px-6 -mt-4 mb-10 relative z-10 flex flex-wrap gap-2 justify-center">
        {chips.map((t) => (
          <span key={t} className="px-3 py-1.5 rounded-full text-xs font-medium border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)]">{t}</span>
        ))}
      </div>

      <Section border={false} className="pt-0 pb-12">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-[var(--color-border)]">
          <img src={project.image} alt={`${project.title} preview`} className="w-full h-auto object-cover" />
        </div>
      </Section>

      <Section innerClassName="max-w-4xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-12 items-start">
        <div className="article-body">
          {project.brief ? (
            <>
              <h2 className="text-2xl font-bold mb-3">The brief</h2>
              <p className="text-[var(--color-text-muted)] leading-[1.8] mb-8">{project.brief}</p>

              <h2 className="text-2xl font-bold mb-3">What I built</h2>
              <p className="text-[var(--color-text-muted)] leading-[1.8] mb-6">{project.whatIBuilt}</p>
              {project.keyFeatures && (
                <>
                  <p className="font-semibold mb-3">Key features</p>
                  <ul className="space-y-2 mb-8 text-[var(--color-text-muted)]">
                    {project.keyFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <svg className="gold-text shrink-0 mt-1.5 w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <h2 className="text-2xl font-bold mb-3">Technical approach</h2>
              <p className="text-[var(--color-text-muted)] leading-[1.8] mb-8">{project.technicalApproach}</p>

              <h2 className="text-2xl font-bold mb-3">The result</h2>
              <p className="text-[var(--color-text-muted)] leading-[1.8]">{project.result}</p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-3">Overview</h2>
              <p className="text-[var(--color-text-muted)] leading-[1.8]">{project.summary}</p>
            </>
          )}
        </div>

        <div className="lg:sticky lg:top-28">
          <TiltCard className="p-6">
            <p className="text-xs font-semibold tracking-wider text-[var(--color-text-dim)] mb-4">PROJECT INFO</p>
            <div className="space-y-4 text-sm mb-6">
              <div><p className="text-[var(--color-text-dim)] mb-0.5">Client</p><p className="font-medium">{project.client}</p></div>
              {project.timeline && <div><p className="text-[var(--color-text-dim)] mb-0.5">Timeline</p><p className="font-medium">{project.timeline}</p></div>}
              <div><p className="text-[var(--color-text-dim)] mb-0.5">Role</p><p className="font-medium">{project.role}</p></div>
              <div><p className="text-[var(--color-text-dim)] mb-0.5">Year</p><p className="font-medium">{project.year}</p></div>
            </div>
            <Button to="/contact" variant="cta" className="w-full text-sm">Start a similar project</Button>
          </TiltCard>
        </div>
      </Section>

      <Section innerClassName="max-w-6xl mx-auto">
        <h2 className="fade-up delay-1 text-3xl sm:text-4xl font-bold mb-10">
          More <span className="gold-text">projects</span>
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {more.map((p) => (
            <TiltCard key={p.slug} className="project-card fade-up delay-2 overflow-hidden text-left">
              <Link to={`/projects/${p.slug}`} className="block">
                <div className="relative h-40 overflow-hidden">
                  <img src={p.image} alt={p.title} className="project-img h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="font-semibold mb-1">{p.title}</p>
                  <p className="text-sm text-[var(--color-text-muted)]">{p.desc}</p>
                </div>
              </Link>
            </TiltCard>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
