import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { NAV_LINKS } from "../../data/nav";
import { NavIcon } from "../ui/NavIcon";
import { ThemeToggle } from "../ui/ThemeToggle";

const LogoMark = () => (
  <div className="w-9 h-9 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center gold-text">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  </div>
);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    function onKey(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.slice(1);
    return location.pathname.startsWith(href);
  };

  return (
    <nav id="siteNav" className={`site-nav fixed top-0 left-0 right-0 z-50 bg-[var(--color-nav)] backdrop-blur-md border-b border-[var(--color-border)] ${scrolled ? "scrolled" : ""}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <LogoMark />
          <span className="font-semibold text-lg whitespace-nowrap">
            Portfolio<span className="gold-text">.</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7 text-sm text-[var(--color-text-muted)]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`nav-link ${isActive(link.href) ? "active text-[var(--color-text)]" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Link to="/contact" className="hidden sm:block px-4 py-2 rounded-full text-sm border border-[var(--color-border-strong)] hover:border-[var(--color-gold)]/50 hover:bg-[var(--color-surface)] transition">
            Say hello
          </Link>
          <Link to="/projects" className="nav-cta btn-glow px-4 sm:px-5 py-2 rounded-full text-sm font-semibold bg-[var(--color-gold)] text-[var(--color-bg)]">
            View work
          </Link>
          <button
            id="burgerBtn"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
            className={`lg:hidden w-10 h-10 rounded-lg border border-[var(--color-border-strong)] flex flex-col items-center justify-center gap-[5px] shrink-0 ${menuOpen ? "burger-open" : ""}`}
          >
            <span className="burger-line block w-4 h-[1.5px]" />
            <span className="burger-line block w-4 h-[1.5px]" />
            <span className="burger-line block w-4 h-[1.5px]" />
          </button>
        </div>
      </div>

      <div className={`mobile-menu-backdrop lg:hidden ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)} />

      <div className={`mobile-menu lg:hidden ${menuOpen ? "open" : ""}`}>
        <div className="relative z-10 flex items-center justify-between px-5 py-4 border-b border-[var(--color-border)] shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <LogoMark />
            <span className="font-semibold text-lg">
              Portfolio<span className="gold-text">.</span>
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-lg border border-[var(--color-border-strong)] flex items-center justify-center hover:border-[var(--color-gold)]/50 hover:text-[var(--color-gold)] transition"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="menu-scroll relative z-10 px-3 py-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} to={link.href} className={`mnav-link ${isActive(link.href) ? "active" : ""}`}>
              <span className="mnav-icon">
                <NavIcon name={link.icon} />
              </span>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="relative z-10 px-4 py-4 mt-auto flex flex-col sm:flex-row gap-3 border-t border-[var(--color-border)] shrink-0">
          <Link to="/projects" className="nav-cta btn-glow flex-1 px-6 py-3.5 rounded-full text-sm font-semibold bg-[var(--color-gold)] text-[var(--color-bg)] text-center flex items-center justify-center gap-2">
            View my work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
          <Link to="/contact" className="flex-1 px-6 py-3.5 rounded-full text-sm font-medium border border-[var(--color-border-strong)] hover:border-[var(--color-gold)]/50 hover:bg-[var(--color-surface)] transition text-center">
            Say hello
          </Link>
        </div>
      </div>
    </nav>
  );
}
