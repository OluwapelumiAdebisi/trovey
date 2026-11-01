type LogoProps = {
  tone?: "onDark" | "onLight";
  className?: string;
};

export function Logo({ tone = "onDark", className = "" }: LogoProps) {
  const word = tone === "onDark" ? "text-paper" : "text-ink";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <rect width="28" height="28" rx="8" fill={tone === "onDark" ? "#13284F" : "#0D1B3E"} />
        <path d="M8 19.5 H19.5 M19.5 8.5 V19.5" stroke="#14B8A6" strokeWidth="1.4" fill="none" />
        <circle cx="8" cy="19.5" r="2.1" fill="#14B8A6" />
        <circle cx="19.5" cy="8.5" r="2" fill="#5EEAD4" />
        <circle cx="19.5" cy="19.5" r="3" fill="#F0F4F8" />
      </svg>
      <span className={`font-display text-[15px] font-bold tracking-[0.22em] ${word}`}>TROVEY</span>
    </span>
  );
}
