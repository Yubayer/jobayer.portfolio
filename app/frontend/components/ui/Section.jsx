import { GlowOrbs, GridOverlay } from "./GlowOrbs";

/**
 * Every section on every page should use this wrapper. It standardizes
 * spacing/borders AND gives the section its ambient glow + grid backdrop —
 * so the enhanced glow effect is automatically applied site-wide, not just
 * on the home page, without repeating any markup.
 */
export function Section({
  id,
  className = "",
  innerClassName = "max-w-6xl mx-auto",
  orbs,
  grid = true,
  border = true,
  fullHeight = false,
  as: Tag = "section",
  children,
}) {
  return (
    <Tag
      id={id}
      className={[
        "relative px-6 py-24",
        border ? "border-t border-[var(--color-border)]" : "",
        fullHeight ? "min-h-screen flex items-center justify-center" : "",
        className,
      ].join(" ")}
    >
      <GlowOrbs orbs={orbs} />
      {grid && <GridOverlay />}
      <div className={`relative z-10 w-full ${innerClassName}`}>{children}</div>
    </Tag>
  );
}
