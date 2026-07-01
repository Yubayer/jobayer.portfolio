import { useEffect, useState } from "react";

/**
 * Cycles through `roles`, typing and deleting each one, matching the
 * original vanilla-JS typed effect. Reusable anywhere a "typed" line is needed.
 */
export function useTypedText(roles, { typeSpeed = 80, deleteSpeed = 40, pause = 1400 } = {}) {
  const [text, setText] = useState("");

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    function tick() {
      const current = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, pause);
          return;
        }
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      timeoutId = setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
    }

    timeoutId = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timeoutId);
  }, [roles, typeSpeed, deleteSpeed, pause]);

  return text;
}
