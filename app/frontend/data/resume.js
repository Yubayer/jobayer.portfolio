export const RESUME = {
  summary:
    "Full-stack developer with 3+ years of experience building Shopify storefronts, custom apps, and React-based products for clients across the US, UK, and Australia. Specialised in section-based theme architecture, the Section Rendering API, and React Router v7 application development. Comfortable owning a project end-to-end — from design handoff and database schema through to CI/CD deployment and post-launch support.",
  websites: ["articmaze.com", "mclbx.com"],
  topSkills: [
    { name: "Shopify Liquid", value: 95 },
    { name: "React.js", value: 85 },
    { name: "Node.js", value: 78 },
    { name: "MySQL", value: 80 },
    { name: "TypeScript", value: 78 },
  ],
  languages: [
    { name: "Bengali", level: "Native" },
    { name: "English", level: "Professional" },
  ],
  tools: ["VS Code", "Git & GitHub", "Docker", "Figma", "Postman", "Shopify CLI", "Linear", "Notion"],
  achievements: [
    { value: "40+", label: "Projects delivered across Shopify, React, and Laravel" },
    { value: "99", label: "Average Lighthouse score on recent theme builds" },
    { value: "20+", label: "Clients across the US, UK, and Australia" },
  ],
  references: "Available on request — happy to connect you with past clients or teammates who can speak to the work directly.",
};

export const RESUME_PROJECTS = [
  {
    slug: "ecommerce-dashboard",
    title: "E-commerce Dashboard",
    desc: "A real-time admin panel with live sales analytics, inventory tracking, and customer activity — cut daily reporting time from 45 minutes to under five.",
    image: "/images/projects/ecommerce-dashboard.svg",
    tags: ["Next.js", "TypeScript", "Prisma"],
  },
  {
    slug: "banking-app-ui",
    title: "Banking App UI",
    desc: "A mobile-first fintech interface with smooth transaction flows, built for clarity and speed on small screens.",
    image: "/images/projects/banking-app-ui.svg",
    tags: ["React", "Framer Motion"],
  },
  {
    slug: "golf-equipment-storefront",
    title: "Golf Equipment Storefront",
    desc: "A custom Shopify 2.0 theme with variant-based filtering, AJAX cart, and a 95+ Lighthouse score across all major pages.",
    image: "/images/projects/golf-equipment-storefront.svg",
    tags: ["Shopify", "Liquid"],
  },
];
