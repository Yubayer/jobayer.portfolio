import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import "./app.css";
import { ThemeProvider } from "./frontend/context/theme-context";
import { CursorGlow } from "./frontend/components/ui/CursorGlow";
import { ScrollTopButton } from "./frontend/components/ui/ScrollTopButton";
import { WhatsappButton } from "./frontend/components/ui/WhatsappButton";
import { PageLayout } from "./frontend/components/layout/PageLayout";
import { Section } from "./frontend/components/ui/Section";
import { Button } from "./frontend/components/ui/Button";

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

// Runs before hydration so the correct theme class is present on first
// paint — prevents a flash of the wrong theme.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'dark';
    if (theme === 'light') document.documentElement.classList.add('light');
  } catch (e) {}
})();
`;

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>
          <CursorGlow />
          {children}
          <ScrollTopButton />
          <WhatsappButton />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }) {
  let status = 404;
  let title = "This page wandered off";
  let details = "The page you're looking for doesn't exist or may have moved. Let's get you back on track.";
  let stack;

  if (isRouteErrorResponse(error)) {
    status = error.status;
    if (error.status !== 404) {
      title = "Something went wrong";
      details = error.statusText || details;
    }
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    title = "Something went wrong";
    details = error.message;
    stack = error.stack;
  }

  return (
    <PageLayout>
      <Section fullHeight border={false} orbs={[{ tone: "amber", size: 384, bottom: "25%", right: "25%", depth: -20, opacity: 0.15 }]}>
        <div className="max-w-xl mx-auto text-center">
          <p className="empty-state-num mb-2">{status}</p>
          <h1 className="fade-up delay-2 text-3xl sm:text-4xl font-bold mb-4">{title}</h1>
          <p className="fade-up delay-3 text-[var(--color-text-muted)] mb-8">{details}</p>
          <div className="fade-up delay-4 flex flex-wrap items-center justify-center gap-4">
            <Button to="/" variant="primary">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8M5 10v10h14V10" /></svg>
              Back to home
            </Button>
            <Button to="/contact" variant="outline">Contact me</Button>
          </div>
          {stack && (
            <pre className="w-full p-4 mt-8 overflow-x-auto text-left text-xs bg-[var(--color-surface)] rounded-xl">
              <code>{stack}</code>
            </pre>
          )}
        </div>
      </Section>
    </PageLayout>
  );
}
