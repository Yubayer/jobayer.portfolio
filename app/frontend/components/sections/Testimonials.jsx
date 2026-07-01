import { Section } from "../ui/Section";
import { Pill } from "../ui/Eyebrow";
import { TiltCard } from "../ui/Card";
import { useCounter } from "../../hooks/use-counter";
import { STATS, TESTIMONIALS } from "../../data/testimonials";

const STAR_PATH = "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1L12 2Z";

function Stat({ stat }) {
  const { ref, display } = useCounter(stat.target, { decimals: stat.decimals ?? 0 });
  return (
    <div ref={ref}>
      <p className="text-3xl font-bold gold-text">
        {display}
        <span className="text-base text-[var(--color-text-dim)]">{stat.suffix}</span>
      </p>
      <p className="text-xs text-[var(--color-text-dim)] mt-1">{stat.label}</p>
    </div>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials" orbs={[
      { tone: "amber", size: 500, top: "25%", right: "25%", depth: 25, opacity: 0.32 },
      { tone: "violet", size: 500, bottom: "33%", left: "25%", depth: -20, opacity: 0.42, delay: "1s" },
    ]}>
      <div className="text-center mb-14">
        <Pill className="mb-5">Testimonials</Pill>
        <h2 className="fade-up delay-2 text-4xl sm:text-5xl font-bold mb-4">
          What <span className="gold-text">clients</span> say
        </h2>
        <p className="fade-up delay-2 text-[var(--color-text-muted)] max-w-md mx-auto">
          Dummy feedback from people I've worked with — for demo purposes.
        </p>
      </div>

      <div className="fade-up delay-2 flex flex-wrap items-center justify-center gap-8 sm:gap-14 mb-14 text-center">
        {STATS.map((stat, i) => (
          <div key={stat.label} className="contents">
            <Stat stat={stat} />
            {i < STATS.length - 1 && <div className="w-px h-10 bg-[var(--color-border)] hidden sm:block" />}
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <TiltCard key={t.name} className="fade-up- delay-3 p-6 text-left">
            <div className="flex gap-1 mb-4 gold-text">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={STAR_PATH} /></svg>
              ))}
            </div>
            <p className="text-sm text-[var(--color-text-muted)] mb-5">{t.quote}</p>
            <div className="flex items-center gap-3">
              <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-[var(--color-text-dim)]">{t.role}</p>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}
