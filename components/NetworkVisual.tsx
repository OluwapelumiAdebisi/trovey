/**
 * Decorative match diagram. Labels are an example brief, not a live catalogue
 * and not a customer. The svg title is exposed as the image name.
 */
export function NetworkVisual() {
  return (
    <svg
      viewBox="0 0 640 520"
      className="mx-auto h-auto w-full max-w-xl lg:max-w-none"
      role="img"
      aria-label="Abstract diagram of an example retail brief connected to three matching datasets."
    >
      <defs>
        <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#94A3B8" stopOpacity="0.35" />
          <stop offset="1" stopColor="#14B8A6" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#14B8A6" stopOpacity="0.35" />
          <stop offset="1" stopColor="#14B8A6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g opacity="0.45" stroke="#94A3B8" strokeWidth="1" fill="none">
        <path d="M40 70 L120 40 L210 78" />
        <path d="M520 60 L590 110 L560 180" />
        <path d="M70 460 L150 490 L230 450" />
        <path d="M480 470 L560 430" />
      </g>
      <g fill="#14B8A6">
        <circle cx="40" cy="70" r="3" opacity="0.7" />
        <circle cx="120" cy="40" r="2.5" opacity="0.5" />
        <circle cx="210" cy="78" r="3" opacity="0.8" />
        <circle cx="590" cy="110" r="3" opacity="0.6" />
        <circle cx="560" cy="180" r="2.2" opacity="0.5" />
        <circle cx="70" cy="460" r="2.4" opacity="0.55" />
        <circle cx="150" cy="490" r="3" opacity="0.4" />
        <circle cx="480" cy="470" r="2.5" opacity="0.6" />
      </g>

      <text x="36" y="36" fill="#94A3B8" fontSize="12" fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="1.5">
        EXAMPLE BRIEF
      </text>
      <text x="430" y="78" fill="#94A3B8" fontSize="12" fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="1.5">
        SURFACED
      </text>

      <BriefChip y={58} kicker="Industry" value="Retail" />
      <BriefChip y={148} kicker="Data type" value="Behaviour" />
      <BriefChip y={238} kicker="Geography" value="United Kingdom" />
      <BriefChip y={328} kicker="Format" value="CSV" />

      <path className="flow" d="M268 90 C 320 90, 300 226, 352 226" stroke="url(#edge)" strokeWidth="1.4" fill="none" />
      <path className="flow" d="M268 180 C 318 180, 310 226, 352 226" stroke="url(#edge)" strokeWidth="1.4" fill="none" />
      <path className="flow" d="M268 270 C 320 270, 320 236, 352 236" stroke="url(#edge)" strokeWidth="1.4" fill="none" />
      <path className="flow" d="M268 360 C 330 360, 320 246, 352 246" stroke="url(#edge)" strokeWidth="1.4" fill="none" />

      <path className="flow" d="M430 150 H 468" stroke="#14B8A6" strokeWidth="1.4" fill="none" opacity="0.85" />
      <path className="flow" d="M430 226 H 468" stroke="#14B8A6" strokeWidth="1.4" fill="none" opacity="0.85" />
      <path className="flow" d="M430 302 H 468" stroke="#14B8A6" strokeWidth="1.4" fill="none" opacity="0.85" />

      <circle cx="392" cy="236" r="78" fill="url(#hubGlow)" />
      <circle className="hub-ring" cx="392" cy="236" r="46" fill="none" stroke="#14B8A6" strokeWidth="1.5" />
      <circle cx="392" cy="236" r="28" fill="#0D1B3E" stroke="#14B8A6" strokeWidth="1.5" />
      <text
        x="392"
        y="241"
        textAnchor="middle"
        fill="#F0F4F8"
        fontSize="13"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="650"
      >
        Match
      </text>

      <DatasetCard y={118} title="Basket trends" detail="Weekly · retail" />
      <DatasetCard y={194} title="Store catchment" detail="Local · geography" />
      <DatasetCard y={270} title="Promo response" detail="Campaign · behaviour" />

      <text x="36" y="470" fill="#94A3B8" fontSize="13" fontFamily="ui-sans-serif, system-ui, sans-serif">
        Illustrative only. Not a live catalogue.
      </text>
    </svg>
  );
}

function BriefChip({ y, kicker, value }: { y: number; kicker: string; value: string }) {
  return (
    <g>
      <rect x="36" y={y} width="232" height="64" rx="14" fill="#13284F" stroke="#14B8A6" strokeOpacity="0.35" />
      <text x="52" y={y + 26} fill="#14B8A6" fontSize="11" fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="0.8">
        {kicker.toUpperCase()}
      </text>
      <text x="52" y={y + 46} fill="#F0F4F8" fontSize="16" fontFamily="ui-sans-serif, system-ui, sans-serif" fontWeight="650">
        {value}
      </text>
    </g>
  );
}

function DatasetCard({ y, title, detail }: { y: number; title: string; detail: string }) {
  return (
    <g>
      <rect x="468" y={y} width="148" height="64" rx="14" fill="#0A0F1E" stroke="#94A3B8" strokeOpacity="0.35" />
      <text x="484" y={y + 28} fill="#F0F4F8" fontSize="14" fontFamily="ui-sans-serif, system-ui, sans-serif" fontWeight="650">
        {title}
      </text>
      <text x="484" y={y + 46} fill="#94A3B8" fontSize="11" fontFamily="ui-sans-serif, system-ui, sans-serif">
        {detail}
      </text>
    </g>
  );
}
