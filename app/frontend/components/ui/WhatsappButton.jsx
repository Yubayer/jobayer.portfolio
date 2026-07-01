import { useEffect, useState } from "react";

// Set your WhatsApp number in international format, no + or spaces (e.g. "8801XXXXXXXXX")
const WHATSAPP_NUMBER = "8801XXXXXXXXX";
const DEFAULT_MESSAGE = "Hi! I found your portfolio and I'd like to chat.";

export function WhatsappButton() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 400);
    return () => clearTimeout(t);
  }, []);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "scale(1) translateY(0)" : "scale(0.4) translateY(20px)",
      }}
      className="group fixed bottom-6 left-6 z-40 flex items-center transition-[opacity,transform] duration-500 ease-out"
    >
      {/* Tooltip */}
      <span
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-8px)",
        }}
        className="pointer-events-none absolute left-[calc(100%+12px)] whitespace-nowrap rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-text)] shadow-lg transition-all duration-300"
      >
        Chat on WhatsApp
      </span>

      {/* Outer pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-[wa-ping_2.2s_cubic-bezier(0,0,0.2,1)_infinite]" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-[wa-ping_2.2s_cubic-bezier(0,0,0.2,1)_infinite] [animation-delay:0.6s]" />

      {/* Button body */}
      <span
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_24px_-6px_rgba(37,211,102,0.55)] transition-transform duration-300 ease-out group-hover:scale-110 group-active:scale-95"
        style={{ background: "linear-gradient(145deg, #2be374, #1fb955)" }}
      >
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 transition-transform duration-300 group-hover:rotate-[8deg]"
          fill="#ffffff"
          aria-hidden="true"
        >
          <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.7 4.607 1.902 6.47L4 29l7.727-1.87A11.94 11.94 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3Zm0 21.818a9.77 9.77 0 0 1-4.98-1.362l-.357-.212-4.585 1.11 1.127-4.47-.234-.366A9.78 9.78 0 0 1 5.182 15c0-5.964 4.855-10.818 10.819-10.818S26.818 9.036 26.818 15 21.965 24.818 16.001 24.818Zm5.51-7.34c-.302-.152-1.788-.883-2.065-.984-.278-.101-.48-.152-.682.152-.202.303-.782.984-.959 1.187-.176.202-.353.227-.655.076-.303-.152-1.278-.472-2.434-1.507-.9-.803-1.508-1.795-1.684-2.098-.176-.303-.019-.467.133-.618.136-.136.303-.354.454-.53.152-.177.202-.303.303-.505.101-.202.05-.38-.025-.53-.076-.152-.682-1.649-.935-2.257-.246-.591-.497-.512-.682-.521l-.581-.01c-.202 0-.53.076-.808.38-.278.303-1.06 1.037-1.06 2.529s1.085 2.935 1.236 3.138c.152.202 2.135 3.26 5.171 4.57.723.312 1.287.499 1.727.639.726.231 1.386.198 1.908.12.582-.087 1.788-.731 2.04-1.437.253-.706.253-1.31.177-1.437-.076-.126-.278-.202-.581-.353Z" />
        </svg>
      </span>
    </a>
  );
}
