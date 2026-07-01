import { useTilt } from "../../hooks/use-tilt";

/**
 * The single card primitive used everywhere on the site — service cards,
 * project cards, testimonial cards, sidebar cards, everything. Every card
 * tilts subtly toward the cursor and lifts on hover by default, so nothing
 * needs one-off hover markup: just use <Card>.
 *
 * - `tilt`  (default true)  — subtle 3D tilt following the mouse position
 * - `hover` (default true)  — lift + gold border-glow on hover
 * Pass `tilt={false}` for cards inside another tilting/scrolling container
 * where the extra motion would fight the parent (rare).
 */
export function Card({ className = "", hover = true, tilt = true, surface = true, children, ...props }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt();
  const tiltHandlers = tilt ? { ref, onMouseMove, onMouseLeave } : {};

  return (
    <div
      {...tiltHandlers}
      className={[
        surface ? "bg-[var(--color-surface)] border border-[var(--color-border)]" : "",
        "rounded-2xl",
        tilt ? "tilt-card" : "",
        hover ? "card-hover" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

/** Back-compat alias — TiltCard is just Card (tilt + hover both on). */
export const TiltCard = Card;
