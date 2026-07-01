import { useState } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";

const CHECK = <svg className="gold-text shrink-0 mt-0.5 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>;

const PLANS = [
  {
    name: "Starter",
    price: "800",
    unit: "starting",
    desc: "Good for a focused single-feature build.",
    features: ["One Shopify section or small feature", "Mobile-first responsive build", "7-day delivery", "7-day bug-fix window"],
  },
  {
    name: "Full Build",
    price: "2,500",
    unit: "starting",
    desc: "A complete Shopify theme or small custom app.",
    features: ["Full custom Shopify 2.0 theme", "Section Rendering API + AJAX cart", "99 Lighthouse target", "CI/CD GitHub workflow setup", "30-day bug-fix window"],
    featured: true,
  },
  {
    name: "Partner Retainer",
    priceMonthly: "1,200",
    priceProject: "4,500",
    desc: "Ongoing dev support for growing stores and apps.",
    features: ["Dedicated monthly hours", "Priority response time", "Feature requests + bug fixes", "Monthly performance review", "Cancel anytime"],
  },
];

const INCLUDED = [
  {
    title: "Always included",
    desc: "Source code ownership, a clear handoff document, and a free bug-fix window after delivery — regardless of package.",
  },
  {
    title: "Not included by default",
    desc: "Third-party app subscription costs, Shopify plan fees, and paid stock assets — these are billed separately at cost.",
  },
];

export function meta() {
  return [{ title: "Pricing — Jobayer Hossain" }];
}

export default function Pricing() {
  const [monthly, setMonthly] = useState(true);

  return (
    <PageLayout>
      <PageHero
        crumb="Pricing"
        eyebrow="Simple, transparent pricing"
        title="Packages built for"
        goldWord="real projects"
        subtitle="Starting prices for common project types. Every engagement gets a fixed quote after a quick scoping call — no surprise invoices."
      />

      <Section border={false} className="pt-0">
        <div className="flex items-center justify-center gap-3 mb-12 fade-up delay-2">
          <span className={`text-sm ${monthly ? "text-[var(--color-text)]" : "text-[var(--color-text-dim)]"}`}>Monthly retainer</span>
          <button
            onClick={() => setMonthly((m) => !m)}
            aria-pressed={!monthly}
            className={`relative w-[52px] h-7 rounded-full border border-[var(--color-border-strong)] transition-colors ${!monthly ? "bg-[var(--color-gold-soft)]" : "bg-[var(--color-surface)]"}`}
          >
            <span className="absolute top-[2px] left-[2px] w-[22px] h-[22px] rounded-full bg-[var(--color-gold)] transition-transform" style={{ transform: !monthly ? "translateX(24px)" : "none" }} />
          </button>
          <span className={`text-sm ${!monthly ? "text-[var(--color-text)]" : "text-[var(--color-text-dim)]"}`}>Project-based</span>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              surface={false}
              hover={false}
              className={`pricing-card fade-up delay-2 relative p-8 ${
                plan.featured
                  ? "border border-[var(--color-gold)]/50 bg-gradient-to-b from-[var(--color-gold-soft)] to-[var(--color-surface)]"
                  : "border border-[var(--color-border)] bg-[var(--color-surface)]"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--color-gold)] text-[var(--color-bg)] text-xs font-semibold whitespace-nowrap">
                  Most popular
                </span>
              )}
              <p className="font-semibold text-lg mb-1">{plan.name}</p>
              <p className="text-3xl font-bold gold-text mb-2">
                ${plan.price ?? (monthly ? plan.priceMonthly : plan.priceProject)}
                <span className="text-base text-[var(--color-text-dim)] font-normal ml-1">{plan.unit ?? (monthly ? "/mo" : "starting")}</span>
              </p>
              <p className="text-sm text-[var(--color-text-muted)] mb-6">{plan.desc}</p>
              <ul className="space-y-2.5 mb-8 text-sm text-[var(--color-text-muted)]">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">{CHECK} {f}</li>
                ))}
              </ul>
              <Button to="/contact" variant={plan.featured ? "primary" : "outline"} className="w-full">Get started</Button>
            </Card>
          ))}
        </div>

        <p className="fade-up delay-3 text-center text-sm text-[var(--color-text-muted)] max-w-lg mx-auto mt-10">
          Need something bigger or more custom? Every quote is scoped to the actual project — reach out and I'll put together a fixed-price proposal.
        </p>
      </Section>

      <Section innerClassName="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          What's <span className="gold-text">included</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {INCLUDED.map((item) => (
            <Card key={item.title} className="fade-up delay-2 p-6">
              <p className="font-semibold mb-2">{item.title}</p>
              <p className="text-sm text-[var(--color-text-muted)]">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
