type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({ id, eyebrow, title, intro, tone = "light" }: SectionHeadingProps) {
  const eyebrowClass = tone === "dark" ? "text-mint" : "text-teal-strong";
  const titleClass = tone === "dark" ? "text-paper" : "text-ink";
  const introClass = tone === "dark" ? "text-slate" : "text-muted";

  return (
    <div className="max-w-2xl">
      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${eyebrowClass}`}>{eyebrow}</p>
      <h2 id={id} className={`mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl ${titleClass}`}>
        {title}
      </h2>
      {intro ? <p className={`mt-4 text-pretty text-base leading-relaxed sm:text-lg ${introClass}`}>{intro}</p> : null}
    </div>
  );
}
