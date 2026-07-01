import { useTheme } from "../../context/theme-context";

/**
 * Standard icon button (same shape/size as the other header icon buttons —
 * e.g. the mobile menu close button) that toggles the theme. Icons crossfade
 * with a small rotate for a smooth, non-jarring swap.
 */
export function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative w-10 h-10 rounded-lg border border-[var(--color-border-strong)] flex items-center justify-center shrink-0 hover:border-[var(--color-gold)]/50 hover:text-[var(--color-gold)] hover:bg-[var(--color-surface)] transition-colors ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-[18px] h-[18px] absolute transition-all duration-300"
        fill="currentColor"
        aria-hidden="true"
        style={{ opacity: isDark ? 1 : 0, transform: isDark ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.5)" }}
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className="w-[18px] h-[18px] absolute transition-all duration-300"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ opacity: isDark ? 0 : 1, transform: isDark ? "rotate(90deg) scale(0.5)" : "rotate(0deg) scale(1)" }}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
