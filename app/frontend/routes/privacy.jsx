import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { SITE } from "../data/site";

const SECTIONS = [
  {
    title: "Information I collect",
    body: "When you use the contact form on this site, I collect the information you provide directly — name, email address, and any details you include about your project. I don't collect this information through any other means on this site.",
  },
  {
    title: "How I use your information",
    body: null,
    list: [
      "To respond to your inquiry or project request",
      "To follow up about an ongoing or potential project",
      "To keep basic records of client communication",
    ],
    after: "I do not sell, rent, or share your information with third parties for marketing purposes.",
  },
  {
    title: "Cookies and analytics",
    body: "This site may use basic analytics to understand traffic patterns. No personally identifiable information is collected through analytics beyond what's typical for standard web traffic logging.",
  },
  {
    title: "Data retention",
    body: "Information submitted through the contact form is retained only as long as needed to respond to your inquiry or maintain a record of client work, after which it's deleted.",
  },
  {
    title: "Your rights",
    body: "You can request access to, correction of, or deletion of any personal information I hold about you by reaching out through the contact page.",
  },
];

export function meta() {
  return [{ title: "Privacy Policy — Jobayer Hossain" }];
}

export default function Privacy() {
  return (
    <PageLayout>
      <PageHero crumb="Privacy Policy" title="Privacy" goldWord="Policy" subtitle="Last updated June 30, 2026" />
      <Section border={false} className="pt-0" innerClassName="max-w-3xl mx-auto">
        <p className="fade-up delay-1 text-sm text-[var(--color-text-dim)] italic mb-8">
          This is placeholder policy text for demo purposes. Replace it with your actual privacy practices before publishing this site live.
        </p>
        <div className="policy-body space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="fade-up delay-2">
              <h2 className="text-xl font-bold mb-2">{s.title}</h2>
              {s.body && <p className="text-[var(--color-text-muted)] leading-[1.8]">{s.body}</p>}
              {s.list && (
                <ul className="space-y-1.5 my-3 text-[var(--color-text-muted)]">
                  {s.list.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="gold-text shrink-0 mt-1.5 w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {s.after && <p className="text-[var(--color-text-muted)] leading-[1.8]">{s.after}</p>}
            </div>
          ))}
          <div className="fade-up delay-2">
            <h2 className="text-xl font-bold mb-2">Contact</h2>
            <p className="text-[var(--color-text-muted)] leading-[1.8]">
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${SITE.email}`} className="gold-text underline underline-offset-2">{SITE.email}</a>.
            </p>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
