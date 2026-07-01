import { Link } from "react-router";
import { Section } from "../ui/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { TiltCard } from "../ui/Card";
import { BLOG_POSTS } from "../../data/blog";

export function BlogPreview() {
  return (
    <Section id="blog" orbs={[{ tone: "amber", size: 500, top: "33%", right: "33%", depth: 20, opacity: 0.32 },
      { tone: "violet", size: 360, bottom: "10%", left: "15%", depth: -18, opacity: 0.22, delay: "1.8s" }]}>
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <Eyebrow>FROM THE BLOG</Eyebrow>
          <h2 className="fade-up delay-2 text-4xl sm:text-5xl font-bold">
            Notes &amp; <span className="gold-text">write-ups</span>
          </h2>
        </div>
        <Link to="/blog" className="fade-up delay-2 inline-flex items-center gap-1.5 text-sm font-medium gold-text">
          View all posts
          <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOG_POSTS.slice(0, 3).map((post, i) => (
          <TiltCard key={post.slug} className={`blog-card fade-up- ${i < 2 ? "delay-3" : "delay-4"} overflow-hidden text-left`}>
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
  );
}
