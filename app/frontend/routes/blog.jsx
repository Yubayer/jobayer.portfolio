import { useState } from "react";
import { Link } from "react-router";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { TiltCard } from "../components/ui/Card";
import { useTilt } from "../hooks/use-tilt";
import { BLOG_POSTS } from "../data/blog";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "shopify", label: "Shopify" },
  { key: "react", label: "React" },
  { key: "devops", label: "DevOps" },
];

export function meta() {
  return [{ title: "Blog — Jobayer Hossain" }];
}

export default function Blog() {
  const [filter, setFilter] = useState("all");
  const tilt = useTilt();
  const featured = BLOG_POSTS.find((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);
  const visible = filter === "all" ? rest : rest.filter((p) => p.cat === filter);

  return (
    <PageLayout>
      <PageHero crumb="Blog" title="Notes &" goldWord="write-ups" subtitle="Short write-ups on Shopify, React, and the infrastructure decisions behind them." />
      <Section border={false} className="pt-0">
        {featured && (
          <Link
            to={`/blog/${featured.slug}`}
            ref={tilt.ref}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
            className="fade-up delay-1 blog-card tilt-card card-hover bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl overflow-hidden grid lg:grid-cols-2 mb-12 block"
          >
            <div className="relative h-64 lg:h-full overflow-hidden">
              <img src={featured.image} alt="Featured post" className="project-img h-full w-full object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs text-[var(--color-text-dim)] mb-4">
                <span className="px-2 py-0.5 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold-soft)] gold-text font-medium">Featured</span>
                <span>{featured.tag}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug">{featured.title}</h2>
              <p className="text-[var(--color-text-muted)] mb-6">{featured.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium gold-text">
                Read article
                <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </div>
          </Link>
        )}

        <div className="flex flex-wrap gap-2 justify-center mb-12 fade-up delay-2">
          {FILTERS.map((f) => (
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
          {visible.map((post) => (
            <TiltCard key={post.slug} className="blog-card fade-up delay-2 overflow-hidden text-left">
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative h-44 overflow-hidden">
                  <img src={post.image} alt={post.title} className="project-img h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-[var(--color-text-dim)] mb-3">
                    <span className="px-2 py-0.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] gold-text">{post.tag}</span>
                    <span>·</span><span>{post.readTime}</span>
                  </div>
                  <p className="font-semibold mb-2 leading-snug">{post.title}</p>
                  <p className="text-sm text-[var(--color-text-muted)]">{post.desc}</p>
                </div>
              </Link>
            </TiltCard>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
