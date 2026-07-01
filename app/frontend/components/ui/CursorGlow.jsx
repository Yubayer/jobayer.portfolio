import { useEffect, useRef } from "react";

/**
 * Mounted once at the app root. Moves a soft glow with the cursor and
 * gives every `.orb` on the page a subtle parallax based on its
 * `data-depth`. Purely additive — safe with any number of orbs/sections.
 */
export function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    function onMove(e) {
      const x = e.clientX;
      const y = e.clientY;
      if (glowRef.current) {
        glowRef.current.style.left = `${x}px`;
        glowRef.current.style.top = `${y}px`;
      }
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const relX = (x - cx) / cx;
      const relY = (y - cy) / cy;
      document.querySelectorAll(".orb").forEach((orb) => {
        const depth = parseFloat(orb.dataset.depth || 0);
        orb.style.transform = `translate(${relX * depth}px, ${relY * depth}px)`;
      });
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
