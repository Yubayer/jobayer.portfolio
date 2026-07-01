// import type { Config } from "@react-router/dev/config";

// export default {
//   // Config options...
//   // Server-side render by default, to enable SPA mode set this to `false`
//   ssr: true,
// } satisfies Config;



// new config
import type { Config } from "@react-router/dev/config";
import { BLOG_POSTS } from "./app/frontend/data/blog";
import { PROJECTS } from "./app/frontend/data/projects";

export default {
  // SSR bondho — build time e sob route static HTML hisebe generate hobe (GitHub Pages er jonno)
  ssr: false,
  // vite.config.ts er `base` er shathe eta match korte hobe, nahole prerender
  // internal route matching e 404 dey (GitHub Pages subpath deploy er jonno dorkar)
  basename: "/jobayer.portfolio/",
  async prerender() {
    return [
      "/", "/projects", "/blog", "/services", "/resume",
      "/faq", "/contact", "/pricing", "/privacy", "/terms", "/profile",
      ...PROJECTS.map((p) => `/projects/${p.slug}`),
      ...BLOG_POSTS.map((b) => `/blog/${b.slug}`),
    ];
  },
} satisfies Config;