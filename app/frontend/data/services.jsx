export const SERVICES = [
  {
    num: "01",
    title: "Shopify Development",
    desc: "Custom Shopify 2.0 themes from scratch — Section Rendering API, AJAX filters, infinite scroll, variant selectors, and CI/CD GitHub workflows. 99 Lighthouse guaranteed.",
    href: "/services#shopify-development",
    icon: (
      <>
        <path d="M6 8h12l-1 12H7L6 8Z" />
        <path d="M9 8a3 3 0 0 1 6 0" />
      </>
    ),
  },
  {
    num: "02",
    title: "React & Frontend Eng.",
    desc: "Modern full-stack apps with React Router v7, TypeScript, and Prisma ORM. Clean architecture, optimised rendering, zero unnecessary re-renders.",
    href: "/services#react-frontend",
    icon: (
      <g>
        <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
        <g strokeWidth="1">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        </g>
      </g>
    ),
  },
  {
    num: "03",
    title: "Shopify App Development",
    desc: "Private and public Shopify apps using Polaris UI, GraphQL Admin API, Shopify CLI 3, and OAuth 2.0 — from concept to App Store listing.",
    href: "/services#shopify-apps",
    icon: (
      <>
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </>
    ),
  },
  {
    num: "04",
    title: "DevOps & Deployment",
    desc: "Dockerized production setups, CI/CD pipelines, reverse proxies, and self-hosted infrastructure — built for uptime, not guesswork.",
    href: "/services#devops",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="7" rx="1.5" />
        <rect x="3" y="13" width="18" height="7" rx="1.5" />
        <circle cx="7" cy="7.5" r="0.6" fill="currentColor" />
        <circle cx="7" cy="16.5" r="0.6" fill="currentColor" />
      </>
    ),
  },
  {
    num: "05",
    title: "Backend & APIs",
    desc: "Node.js and Laravel backends, REST/GraphQL APIs, and MySQL data modelling — designed to stay fast as your product scales.",
    href: "/services#backend-apis",
    icon: (
      <>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </>
    ),
  },
  {
    num: "06",
    title: "Performance Audits",
    desc: "Core Web Vitals fixes, render-blocking cleanup, and asset optimisation for storefronts and apps that are losing conversions to speed.",
    href: "/services#performance",
    icon: (
      <>
        <path d="M12 14.5 16 10M3.5 17a9 9 0 1 1 17 0" />
      </>
    ),
  },
];

// Full detail content for the /services page — one entry per service id,
// matching the anchors used in SERVICES[].href (#shopify-development, etc).
export const SERVICE_DETAILS = [
  {
    id: "shopify-development",
    num: "01",
    title: ["Shopify", "Development"],
    desc: "Custom Shopify 2.0 themes built from scratch for stores that have outgrown off-the-shelf themes. Every section is built around the Section Rendering API so filtering, variant selection, and cart updates happen without a full page reload.",
    items: [
      "Section-based theme architecture",
      "AJAX filtering, infinite scroll, variant selectors",
      "Mobile-first responsive design",
      "CI/CD GitHub workflow setup",
      "99 Lighthouse score target",
    ],
    timeline: "2–4 weeks depending on the number of custom sections and integrations.",
    stack: ["Liquid", "Shopify 2.0", "JavaScript"],
    cta: "Start a Shopify project",
  },
  {
    id: "react-frontend",
    num: "02",
    title: ["React &", "Frontend Engineering"],
    desc: "Full-stack apps built with React Router v7, TypeScript, and Prisma. The focus is architecture that stays clean as the app grows — predictable data loading, minimal re-renders, and components that are easy to hand off.",
    items: [
      "React Router v7 data loaders & nested routes",
      "Type-safe Prisma ORM data layer",
      "Component library handoff documentation",
      "Accessibility-conscious markup",
    ],
    timeline: "4–8 weeks depending on scope and integrations.",
    stack: ["React Router v7", "TypeScript", "Prisma"],
    cta: "Start a React project",
  },
  {
    id: "shopify-apps",
    num: "03",
    title: ["Shopify", "App Development"],
    desc: "Private and public Shopify apps built on the modern app platform — Polaris UI for the embedded admin experience, GraphQL Admin API for data, and Shopify Functions or Checkout UI Extensions where native theme customization isn't enough.",
    items: [
      "Embedded admin UI with Polaris components",
      "OAuth 2.0 authentication flow",
      "Shopify CLI 3 project scaffold",
      "App Store listing support",
    ],
    timeline: "3–6 weeks for a focused single-purpose app.",
    stack: ["Polaris", "GraphQL", "Prisma + MySQL"],
    cta: "Start an app project",
  },
  {
    id: "devops",
    num: "04",
    title: ["DevOps &", "Deployment"],
    desc: "Production infrastructure that doesn't depend on a third-party PaaS bill growing out of control. Dockerized setups, reverse proxies, and CI/CD pipelines that take a project from \"works on my machine\" to a server you actually control.",
    items: [
      "Multi-stage Docker builds",
      "Reverse proxy + SSL via Let's Encrypt",
      "GitHub Actions CI/CD with SSH deploy",
      "Database backup & retention policy",
    ],
    timeline: "1–2 weeks for a standard deployment pipeline.",
    stack: ["Docker", "Caddy", "GitHub Actions"],
    cta: "Start a DevOps project",
  },
  {
    id: "backend-apis",
    num: "05",
    title: ["Backend &", "APIs"],
    desc: "Node.js and Laravel backends built to stay fast as your product scales — clean REST or GraphQL contracts, sensible MySQL schemas, and queries that don't fall over once the table hits a few million rows.",
    items: [
      "REST or GraphQL API design",
      "MySQL schema design & indexing",
      "Authentication & role-based access",
      "API documentation",
    ],
    timeline: "3–6 weeks depending on the number of endpoints and integrations.",
    stack: ["Node.js", "Laravel", "MySQL"],
    cta: "Start a backend project",
  },
  {
    id: "performance",
    num: "06",
    title: ["Performance", "Audits"],
    desc: "A focused pass on an existing storefront or app that's losing conversions to speed. Core Web Vitals fixes, render-blocking cleanup, and asset optimisation — with a clear before/after report so you can see exactly what changed.",
    items: [
      "Lighthouse + Core Web Vitals audit",
      "Render-blocking script/style cleanup",
      "Image/asset optimisation",
      "Before/after performance report",
    ],
    timeline: "3–7 days for a single storefront or app.",
    stack: ["Lighthouse", "WebPageTest", "Chrome DevTools"],
    cta: "Request an audit",
  },
];
