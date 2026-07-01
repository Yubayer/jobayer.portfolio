export const FAQ_CATEGORIES = [
  { key: "all", label: "All" },
  { key: "process", label: "Process" },
  { key: "pricing", label: "Pricing" },
  { key: "technical", label: "Technical" },
  { key: "support", label: "Support" },
];

// Shown on the Home page preview (8 items, unfiltered).
export const FAQS = [
  {
    q: "What's your typical project timeline?",
    a: "Most Shopify projects take 2-4 weeks depending on scope, and custom React/Next.js apps usually take 4-8 weeks. I'll give you a clear estimate after our first call.",
    cat: "process",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, I work remotely with clients across the US, UK, Australia and beyond. I'm flexible with overlapping hours for calls and updates.",
    cat: "process",
  },
  {
    q: "What's included in a Shopify theme build?",
    a: "Custom section-based theme architecture, mobile-first responsive design, speed optimization, and basic app integrations. Ongoing support packages are also available.",
    cat: "technical",
  },
  {
    q: "How do payments and contracts work?",
    a: "I typically split projects into milestones — 50% upfront, 50% on delivery for smaller projects, or monthly billing for retainers. A simple agreement covers scope and timeline.",
    cat: "pricing",
  },
  {
    q: "Do you offer post-launch support or maintenance?",
    a: "Yes — most clients move to a monthly retainer after launch for bug fixes, small feature requests, and Shopify/dependency updates. One-off support is also available billed hourly.",
    cat: "support",
  },
  {
    q: "Can you migrate my store from another platform?",
    a: "Yes — I've handled migrations from WooCommerce, Magento, and custom platforms into Shopify, including products, customers, orders, and URL redirects to preserve SEO.",
    cat: "process",
  },
  {
    q: "Will my site be fast and SEO-friendly?",
    a: "Performance and SEO are built in from day one — lazy-loaded assets, minimal JS, semantic markup, and clean Lighthouse scores. I test on real devices, not just dev tools.",
    cat: "technical",
  },
  {
    q: "What do you need from me to get started?",
    a: "A brief on your goals, any design references or Figma files, brand assets, and access to your Shopify store or repo. I'll handle the rest and keep you updated at every milestone.",
    cat: "process",
  },
];

// Two extra items shown only on the full /faq page (not the Home preview).
export const FAQ_FULL = [
  ...FAQS,
  {
    q: "Do you offer fixed-price packages?",
    a: "For well-scoped work like a theme build or app feature, yes — check the pricing page for starting packages. Larger or more open-ended projects are quoted after a scoping call.",
    cat: "pricing",
  },
  {
    q: "What happens if something breaks after launch?",
    a: "Bugs directly caused by my work are fixed free of charge within 30 days of delivery. After that, issues are covered under a support retainer or billed hourly, whichever fits.",
    cat: "support",
  },
];
