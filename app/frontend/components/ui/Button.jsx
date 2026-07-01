import { Link } from "react-router";

const base = "px-7 py-3 rounded-full font-medium inline-flex items-center justify-center gap-2 transition";

const variants = {
  primary: "btn-glow bg-[var(--color-gold)] text-[var(--color-bg)]",
  outline: "border border-[var(--color-border-strong)] hover:border-[var(--color-gold)]/50 hover:bg-[var(--color-surface)]",
  cta: "nav-cta btn-glow bg-[var(--color-gold)] text-[var(--color-bg)] font-semibold",
};

export function Button({ to, href, variant = "primary", className = "", children, ...props }) {
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`;
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
