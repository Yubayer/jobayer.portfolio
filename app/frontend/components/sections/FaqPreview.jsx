import { useState } from "react";
import { Section } from "../ui/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { FAQS } from "../../data/faq";

function FaqItem({ item, open, onToggle, delay }) {
  return (
    <div className={`faq-item fade-up ${delay} bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden`}>
      <button onClick={onToggle} className="faq-toggle w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-medium">{item.q}</span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
            open ? "bg-[var(--color-gold)] border-[var(--color-gold)]" : "border-[var(--color-gold)]/30 bg-[var(--color-gold-soft)]"
          }`}
        >
          <svg
            className={`transition-transform duration-300 w-4 h-4 ${open ? "rotate-45 text-[var(--color-bg)]" : "gold-text"}`}
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm text-[var(--color-text-muted)] leading-relaxed">{item.a}</div>
      )}
    </div>
  );
}

export function FaqPreview() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section id="faq" innerClassName="max-w-3xl mx-auto" orbs={[{ tone: "amber", size: 450, bottom: "25%", left: "25%", depth: -20, opacity: 0.32 },
      { tone: "violet", size: 340, top: "10%", right: "15%", depth: 18, opacity: 0.22, delay: "1.5s" }]}>
      <Eyebrow>GOT QUESTIONS</Eyebrow>
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <h2 className="fade-up delay-2 text-4xl sm:text-5xl font-bold">
          Frequently asked <span className="gold-text">questions</span>
        </h2>
        <span className="fade-up delay-2 text-sm text-[var(--color-text-dim)]">{FAQS.length} questions</span>
      </div>

      <div className="space-y-3">
        {FAQS.map((item, i) => (
          <FaqItem
            key={item.q}
            item={item}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            delay={i < 3 ? "delay-3" : "delay-4"}
          />
        ))}
      </div>

      <div className="fade-up delay-4 mt-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="font-semibold mb-1">Still have questions?</p>
          <p className="text-sm text-[var(--color-text-muted)]">Happy to talk through your project before you commit to anything.</p>
        </div>
        <a href="#contact" className="nav-cta btn-glow px-6 py-3 rounded-full text-sm font-semibold bg-[var(--color-gold)] text-[var(--color-bg)] whitespace-nowrap shrink-0">Ask a question</a>
      </div>
    </Section>
  );
}
