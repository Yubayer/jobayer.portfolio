export const PROJECT_FILTERS = [
  { key: "all", label: "All" },
  { key: "shopify", label: "Shopify" },
  { key: "react", label: "React / Next.js" },
  { key: "app", label: "Apps" },
];

export const PROJECTS = [
  {
    slug: "ecommerce-dashboard",
    title: "E-commerce dashboard",
    desc: "Admin panel with real-time sales analytics and inventory tracking.",
    image: "/images/projects/ecommerce-dashboard.svg",
    tags: ["Next.js", "Tailwind"],
    detailTags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    cat: ["shopify"],
    client: "DTC retail brand",
    year: "2026",
    role: "Full-stack developer",
    timeline: "6 weeks",
    summary:
      "An admin panel built for a mid-size DTC brand to track sales, inventory and customer behaviour in one place — dummy data for demo purposes.",
    brief:
      "The client's existing back office was a patchwork of spreadsheets and a third-party analytics tool that didn't talk to their inventory system. Order data, stock levels, and customer activity all lived in different places, which made day-to-day decisions slower than they needed to be.",
    whatIBuilt:
      "A single-page admin dashboard that pulls live order, inventory, and customer data into one view. Real-time sales charts update via websockets, inventory levels show low-stock warnings automatically, and the whole interface is built to stay fast even with tens of thousands of SKUs.",
    keyFeatures: [
      "Real-time sales analytics with day/week/month breakdowns",
      "Inventory tracking with automatic low-stock alerts",
      "Customer activity timeline and lifetime value tracking",
      "Role-based access for staff, managers, and admins",
      "Exportable reports in CSV and PDF",
    ],
    technicalApproach:
      "The frontend is built with Next.js and TypeScript, using server components for the data-heavy views and client components only where interactivity is needed. Tailwind CSS keeps the styling consistent and fast to iterate on. Prisma handles the data layer against a PostgreSQL database, with a lightweight websocket layer pushing live updates to connected dashboards.",
    result:
      "The client's team cut their daily reporting time from roughly 45 minutes to under five, and low-stock issues that used to surface after a sellout now get flagged days in advance.",
  },
  {
    slug: "banking-app-ui",
    title: "Banking app UI",
    desc: "Mobile-first fintech interface with smooth transaction flows.",
    image: "/images/projects/banking-app-ui.svg",
    tags: ["React", "Framer Motion"],
    cat: ["react", "app"],
    client: "Northwind Financial",
    year: "2024",
    role: "Frontend engineer",
    summary:
      "Designed and implemented a mobile-first transaction experience with animated balance transitions, biometric-style auth screens, and a component system reused across web and app shells.",
  },
  {
    slug: "team-collaboration-tool",
    title: "Team collaboration tool",
    desc: "Real-time task board with chat, file sharing and notifications.",
    image: "/images/projects/team-collaboration-tool.svg",
    tags: ["Node.js", "Socket.io"],
    cat: ["app"],
    client: "Lumen Labs",
    year: "2024",
    role: "Full-stack developer",
    summary:
      "Shipped a real-time Kanban board with sockets-backed presence, threaded comments, and drag-and-drop file attachments for a distributed product team.",
  },
  {
    slug: "golf-equipment-storefront",
    title: "Golf equipment storefront",
    desc: "Custom Shopify 2.0 theme with variant-based filtering and AJAX cart.",
    image: "/images/projects/golf-equipment-storefront.svg",
    tags: ["Shopify", "Liquid"],
    cat: ["shopify"],
    client: "Better Billy Bunker",
    year: "2025",
    role: "Shopify theme developer",
    summary:
      "Built a custom Shopify 2.0 theme for a golf equipment brand with variant-based filtering, an AJAX cart, and a 95+ Lighthouse score across all major pages.",
  },
  {
    slug: "photography-membership-platform",
    title: "Photography membership platform",
    desc: "Subscription-gated content community with custom Shopify app integration.",
    image: "/images/projects/photography-membership-platform.svg",
    tags: ["Shopify", "Polaris"],
    cat: ["shopify", "app"],
    client: "North Borders",
    year: "2025",
    role: "Shopify app developer",
    summary:
      "Built a subscription-gated membership community on top of Shopify, with a custom Polaris-based admin app for managing tiers, content gating, and member perks.",
  },
  {
    slug: "luxury-apparel-storefront",
    title: "Luxury apparel storefront",
    desc: "Pixel-perfect React Router v7 storefront with custom checkout extensions.",
    image: "/images/projects/luxury-apparel-storefront.svg",
    tags: ["React Router", "Prisma"],
    cat: ["react"],
    client: "ACE MOTO",
    year: "2025",
    role: "Full-stack developer",
    summary:
      "Delivered a pixel-perfect storefront on React Router v7 with a Prisma-backed catalog and custom checkout extensions tailored to the brand's fulfillment flow.",
  },
];
