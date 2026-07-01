import { Link } from "react-router";
import { Section } from "./Section";

export function PageHero({ eyebrow, title, goldWord, subtitle, crumb }) {
  return (
    <Section border={false} className="page-hero !py-0 !pt-36 !pb-14" orbs={[
      { tone: "gold", size: 340, top: "-15%", left: "30%", depth: 15 },
      { tone: "violet", size: 260, top: "0%", right: "15%", depth: -12, delay: "1.5s" },
    ]}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="breadcrumb justify-center mb-5 fade-up delay-1">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{crumb}</span>
        </div>
        {eyebrow && <p className="fade-up delay-1 text-sm font-medium gold-text mb-3">{eyebrow}</p>}
        <h1 className="fade-up delay-2 text-4xl sm:text-5xl font-bold mb-4">
          {title} {goldWord && <span className="gold-text">{goldWord}</span>}
        </h1>
        {subtitle && <p className="fade-up delay-3 text-[var(--color-text-muted)] max-w-xl mx-auto">{subtitle}</p>}
      </div>
    </Section>
  );
}
