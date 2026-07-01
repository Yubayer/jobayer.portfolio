import { useState } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { FAQ_FULL, FAQ_CATEGORIES } from "../data/faq";

function FaqRow({ item, open, onToggle }) {
  return (
    <div className="faq-item fade-up delay-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
      <button onClick={onToggle} className="faq-toggle w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-medium">{item.q}</span>
        <span className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${open ? "bg-[var(--color-gold)] border-[var(--color-gold)]" : "border-[var(--color-gold)]/30 bg-[var(--color-gold-soft)]"}`}>
          <svg className={`transition-transform duration-300 w-4 h-4 ${open ? "rotate-45 text-[var(--color-bg)]" : "gold-text"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && <div className="px-6 pb-5 text-sm text-[var(--color-text-muted)] leading-relaxed">{item.a}</div>}
    </div>
  );
}

export function meta() {
  return [{ title: "FAQ — Jobayer Hossain" }];
}

export default function Faq() {
  const [cat, setCat] = useState("all");
  const [openIndex, setOpenIndex] = useState(null);
  const visible = cat === "all" ? FAQ_FULL : FAQ_FULL.filter((f) => f.cat === cat);

  return (
    <PageLayout>
      <PageHero crumb="FAQ" title="Frequently asked" goldWord="questions" subtitle="Everything clients usually ask before starting a project." />
      <Section border={false} className="pt-0" innerClassName="max-w-3xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {FAQ_CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setCat(c.key)}
              className={`faq-cat-btn px-4 py-2 rounded-full text-sm font-medium transition ${
                cat === c.key ? "bg-[var(--color-gold)] text-[var(--color-bg)]" : "border border-[var(--color-border-strong)] text-[var(--color-text-muted)]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {visible.map((item, i) => (
            <FaqRow key={item.q} item={item} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
