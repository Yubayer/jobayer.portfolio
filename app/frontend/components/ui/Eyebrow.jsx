export function Eyebrow({ children, className = "" }) {
  return (
    <div className={`fade-up delay-1 flex items-center gap-2 text-sm font-medium gold-text mb-3 ${className}`}>
      <span className="w-6 h-px bg-[var(--color-gold)]" /> {children}
    </div>
  );
}

export function Pill({ children, className = "", tone = "gold" }) {
  const tones = {
    gold: "border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 gold-text",
    green: "border-green-500/30 bg-green-500/10 text-green-400",
  };
  return (
    <div className={`fade-up delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium ${tones[tone]} ${className}`}>
      {children}
    </div>
  );
}
