import { index, route } from "@react-router/dev/routes";

// Manual route table — every page lives under app/frontend/routes.
export default [
  index("frontend/routes/_index.jsx"),

  route("projects", "frontend/routes/projects.jsx"),
  route("projects/:slug", "frontend/routes/projects.$slug.jsx"),

  route("blog", "frontend/routes/blog.jsx"),
  route("blog/:slug", "frontend/routes/blog.$slug.jsx"),

  route("services", "frontend/routes/services.jsx"),
  route("resume", "frontend/routes/resume.jsx"),
  route("faq", "frontend/routes/faq.jsx"),
  route("contact", "frontend/routes/contact.jsx"),
  route("pricing", "frontend/routes/pricing.jsx"),
  route("privacy", "frontend/routes/privacy.jsx"),
  route("terms", "frontend/routes/terms.jsx"),
  route("profile", "frontend/routes/profile.jsx"),
];
