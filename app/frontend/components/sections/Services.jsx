import { Link } from "react-router";
import { Section } from "../ui/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { Card } from "../ui/Card";
import { SERVICES } from "../../data/services";

export function Services() {
  return (
    <Section id="services" orbs={[{ tone: "amber", size: 500, top: "33%", left: "25%", depth: 25, opacity: 0.32 },
      { tone: "violet", size: 360, bottom: "10%", right: "20%", depth: -20, opacity: 0.24, delay: "1.5s" }]}>
      <div className="flex flex-col items-start mb-14">
        <Eyebrow>WHAT I DO</Eyebrow>
        <h2 className="fade-up delay-2 text-4xl sm:text-5xl font-bold">
          Services <span className="gold-text">&amp; Specialties</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s, i) => (
          <Card key={s.title} className={`service-card group fade-up- ${i < 3 ? "delay-3" : "delay-4"} relative p-7 overflow-hidden`}>
            <span className="service-num absolute top-5 right-6 text-6xl font-bold text-current opacity-[0.06] leading-none select-none">{s.num}</span>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-gold-soft)] border border-[var(--color-gold)]/20 flex items-center justify-center gold-text mb-6 group-hover:text-[var(--color-bg)] transition-colors duration-300">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {s.icon}
                </svg>
              </div>
              <p className="font-semibold text-lg mb-2">{s.title}</p>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">{s.desc}</p>
              <Link to={s.href} className="service-link inline-flex items-center gap-1.5 text-sm font-medium gold-text">
                Learn more
                <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
