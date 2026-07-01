import { SITE } from "./site";

export const FOOTER_COLUMNS = [
  {
    title: "WORK",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Shopify themes", href: "/services#shopify-development" },
      { label: "Shopify apps", href: "/services#shopify-apps" },
      { label: "React apps", href: "/services#react-frontend" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "PAGES",
    links: [
      { label: "Profile", href: "/profile" },
      { label: "Services", href: "/services" },
      { label: "Resume", href: "/resume" },
      { label: "Blog", href: "/blog" },
      { label: "Education", href: "/#education" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "MORE",
    links: [
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
      { label: SITE.email, href: `mailto:${SITE.email}` },
    ],
  },
];
