import { Link } from "react-router";
import { GlowOrbs, GridOverlay } from "../ui/GlowOrbs";
import { FOOTER_COLUMNS } from "../../data/footer";
import { SITE, SOCIALS } from "../../data/site";

export function Footer() {
  return (
    <footer className="relative px-6 pt-10 pb-8 border-t border-[var(--color-border)]">
      <GridOverlay />
      <GlowOrbs orbs={[{ tone: "gold", size: 512, top: "-40px", left: "50%", opacity: 0.1, depth: 10 }]} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="footer-cta-card rounded-3xl bg-gradient-to-br from-[var(--color-surface-hover)] to-[var(--color-surface)] p-8 sm:p-10 mb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-xs font-medium text-green-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> AVAILABLE FOR PROJECTS
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold leading-tight mb-2">
              Got a project? <span className="gold-text">Let's ship it.</span>
            </h3>
            <p className="text-[var(--color-text-muted)] max-w-md">From Shopify storefronts to full-stack apps — I reply within a day.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <Link to="/contact" className="nav-cta btn-glow px-6 py-3.5 rounded-full text-sm font-semibold bg-[var(--color-gold)] text-[var(--color-bg)] text-center whitespace-nowrap">
              Start a project
            </Link>
            <a href={`mailto:${SITE.email}`} className="px-6 py-3.5 rounded-full text-sm font-medium border border-[var(--color-border-strong)] hover:border-[var(--color-gold)]/50 hover:bg-[var(--color-surface)] transition text-center whitespace-nowrap">
              Email me
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center gold-text">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </div>
              <span className="font-semibold text-lg">Portfolio<span className="gold-text">.</span></span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5 max-w-xs">
              Crafting exceptional digital experiences through thoughtful design and clean, performant code. Available for freelance and contract work worldwide.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="social-btn w-9 h-9 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]/40">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.icon} /></svg>
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold tracking-wider text-[var(--color-text-dim)] mb-4">{col.title}</p>
              <ul className="space-y-3 text-sm text-[var(--color-text-muted)]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("mailto:") ? (
                      <a href={link.href} className="footer-link">{link.label}</a>
                    ) : (
                      <Link to={link.href} className="footer-link">{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--color-border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm text-[var(--color-text-dim)]">Copyright © 2026 {SITE.name}. All Rights Reserved. Built with <span className="gold-text">♥</span> and lots of coffee.</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["React Router", "Prisma", "MySQL", "Tailwind"].map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-full text-[11px] border border-[var(--color-border)] text-[var(--color-text-dim)]">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
