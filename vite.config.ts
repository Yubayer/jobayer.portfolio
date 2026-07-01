// import { reactRouter } from "@react-router/dev/vite";

// import tailwindcss from "@tailwindcss/vite";
// import { defineConfig } from "vite";

// export default defineConfig({
//   plugins: [tailwindcss(), reactRouter()],
//   resolve: {
//     tsconfigPaths: true,
//   },
// });


// new vite config =====
import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // GitHub Pages repo-name subpath e serve kore (username.github.io/jobayer.portfolio/),
  // tai asset/route path thik rakhte base set kora hocche.
  // Custom domain use korle eta "/" kore dite hobe.
  base: "/jobayer.portfolio/",
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
});