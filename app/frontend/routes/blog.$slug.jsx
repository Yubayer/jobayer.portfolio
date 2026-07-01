import { Link, useParams } from "react-router";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { TiltCard } from "../components/ui/Card";
import { SITE } from "../data/site";
import { BLOG_POSTS } from "../data/blog";

export function meta({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  return [{ title: post ? `${post.title} — Jobayer Hossain` : "Article — Jobayer Hossain" }];
}

/** Renders a content block. Plain strings (used by simpler posts) render as
 * paragraphs; structured posts use { type, text|items } for headings, lists,
 * and code blocks. */
function ArticleBlock({ block }) {
  const b = typeof block === "string" ? { type: "p", text: block } : block;
  switch (b.type) {
    case "h2":
      return <h2 className="text-2xl font-bold mt-10 mb-4">{b.text}</h2>;
    case "ul":
      return (
        <ul className="space-y-2 mb-6">
          {b.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[var(--color-text-muted)]">
              <svg className="gold-text shrink-0 mt-1.5 w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              {item}
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4 overflow-x-auto mb-6">
          <code className="text-sm text-[var(--color-text-muted)] whitespace-pre">{b.text}</code>
        </pre>
      );
    default:
      return <p className="text-[var(--color-text-muted)] leading-[1.8] mb-5">{b.text}</p>;
  }
}

export default function Article() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug) ?? BLOG_POSTS[0];
  const more = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <PageLayout>
      <PageHero crumb={post.title} eyebrow={`${post.tag} · ${post.readTime}${post.date ? ` · ${post.date}` : ""}`} title={post.title} />

      <div className="max-w-3xl mx-auto px-6 -mt-4 mb-10 relative z-10 flex items-center gap-3">
        <img src="/images/profile/profile.png" alt={SITE.name} className="w-10 h-10 rounded-full object-cover border border-[var(--color-gold)]/40" />
        <div>
          <p className="text-sm font-medium">{SITE.name}</p>
          <p className="text-xs text-[var(--color-text-dim)]">{SITE.title.split("|")[0].trim()}</p>
        </div>
      </div>

      <Section border={false} className="pt-0" innerClassName="max-w-3xl mx-auto">
        <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] mb-10">
          <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
        </div>
        <div className="article-body">
          {post.content.map((block, i) => (
            <ArticleBlock key={i} block={block} />
          ))}
        </div>
      </Section>

      <Section innerClassName="max-w-5xl mx-auto">
        <h2 className="fade-up delay-1 text-3xl sm:text-4xl font-bold mb-10">
          Keep <span className="gold-text">reading</span>
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {more.map((p) => (
            <TiltCard key={p.slug} className="blog-card fade-up delay-2 overflow-hidden text-left">
              <Link to={`/blog/${p.slug}`} className="block">
                <div className="relative h-40 overflow-hidden">
                  <img src={p.image} alt={p.title} className="project-img h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="font-semibold mb-1 leading-snug">{p.title}</p>
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
