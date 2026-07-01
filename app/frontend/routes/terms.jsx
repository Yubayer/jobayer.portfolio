import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { SITE } from "../data/site";

const SECTIONS = [
  {
    title: "Scope of work",
    body: "Project scope, deliverables, timeline, and pricing are agreed in writing before work begins, typically via a proposal or contract sent after an initial scoping call.",
  },
  {
    title: "Payment terms",
    body: "Unless otherwise agreed, projects are billed in milestones — generally 50% upfront and 50% on delivery for fixed-price work, or monthly in advance for retainer agreements. Late payments may pause active work.",
  },
  {
    title: "Revisions",
    body: "Each package includes a defined bug-fix window after delivery. Requests outside the original scope are treated as new work and quoted separately.",
  },
  {
    title: "Intellectual property",
    body: "Once final payment is received, the client owns the custom code delivered for their project. Reusable internal tools, snippets, and pre-existing frameworks remain my own property and may be reused across other projects.",
  },
  {
    title: "Third-party services",
    body: "Costs for third-party apps, plugins, hosting, or platform fees (such as Shopify subscription costs) are the client's responsibility and are not included in project pricing unless explicitly stated.",
  },
  {
    title: "Limitation of liability",
    body: "Work is delivered with reasonable care and skill, but no guarantee is made of specific business outcomes (such as sales or traffic increases) resulting from the delivered work.",
  },
  {
    title: "Termination",
    body: "Either party may terminate an ongoing engagement with written notice. Work completed up to that point is billed at the agreed rate.",
  },
];

export function meta() {
  return [{ title: "Terms of Service — Jobayer Hossain" }];
}

export default function Terms() {
  return (
    <PageLayout>
      <PageHero crumb="Terms of Service" title="Terms of" goldWord="Service" subtitle="Last updated June 30, 2026" />
      <Section border={false} className="pt-0" innerClassName="max-w-3xl mx-auto">
        <p className="fade-up delay-1 text-sm text-[var(--color-text-dim)] italic mb-8">
          This is placeholder terms text for demo purposes. Replace it with your actual terms before publishing this site live.
        </p>
        <div className="policy-body space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="fade-up delay-2">
              <h2 className="text-xl font-bold mb-2">{s.title}</h2>
              <p className="text-[var(--color-text-muted)] leading-[1.8]">{s.body}</p>
            </div>
          ))}
          <div className="fade-up delay-2">
            <h2 className="text-xl font-bold mb-2">Contact</h2>
            <p className="text-[var(--color-text-muted)] leading-[1.8]">
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${SITE.email}`} className="gold-text underline underline-offset-2">{SITE.email}</a>.
            </p>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
