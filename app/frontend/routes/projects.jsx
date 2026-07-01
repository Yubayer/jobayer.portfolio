import { useState } from "react";
import { Link } from "react-router";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { TiltCard } from "../components/ui/Card";
import { PROJECTS, PROJECT_FILTERS } from "../data/projects";

export function meta() {
  return [{ title: "Projects — Jobayer Hossain" }];
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.cat.includes(filter));

  return (
    <PageLayout>
      <PageHero crumb="Projects" eyebrow="Selected work" title="All" goldWord="projects" subtitle="A complete look at the apps, storefronts, and tools I've shipped — dummy data for demo purposes." />
      <Section border={false} className="pt-0">
        <div className="flex flex-wrap gap-2 justify-center mb-12 fade-up delay-2">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`filter-btn px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === f.key ? "bg-[var(--color-gold)] text-[var(--color-bg)]" : "border border-[var(--color-border-strong)] text-[var(--color-text-muted)] hover:border-[var(--color-gold)]/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <TiltCard key={p.slug} className="project-card fade-up delay-2 overflow-hidden text-left">
              <Link to={`/projects/${p.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img src={p.image} alt={p.title} className="project-img h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
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
      </Section>
    </PageLayout>
  );
}
