/**
 * Reusable ambient glow — soft, radial-gradient orbs used as a section
 * backdrop. Colors are NEVER hardcoded here or in callers — each orb picks
 * a `tone` name ("gold" | "amber" | "violet") that maps to a `--glow-*`
 * CSS variable in app.css. To re-theme every glow on the whole site,
 * change those variables in one place; no component needs to change.
 *
 * Each orb: { tone, size, top, left, right, bottom, depth, delay, opacity }
 */
const TONE_VARS = {
  gold: "var(--glow-gold)",
  amber: "var(--glow-amber)",
  violet: "var(--glow-violet)",
};

const DEFAULT_ORBS = [
  { tone: "gold", size: 480, top: "15%", left: "8%", depth: 30, opacity: 0.28 },
  { tone: "violet", size: 420, bottom: "10%", right: "8%", depth: -22, opacity: 0.24, delay: "2s" },
];

export function GlowOrbs({ orbs = DEFAULT_ORBS }) {
  return (
    <>
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="orb absolute rounded-full glow-orb pointer-events-none"
          data-depth={orb.depth ?? 20}
          style={{
            width: orb.size ?? 360,
            height: orb.size ?? 360,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            animationDelay: orb.delay,
            "--tone": TONE_VARS[orb.tone] ?? TONE_VARS.gold,
            ...(orb.opacity != null ? { "--o": orb.opacity } : {}),
          }}
        />
      ))}
    </>
  );
}

/** Faint 48px grid, themed automatically via the .grid-overlay CSS var. */
export function GridOverlay() {
  return <div className="absolute inset-0 grid-overlay pointer-events-none" />;
}
