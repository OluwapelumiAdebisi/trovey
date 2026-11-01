import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const problems = [
  {
    title: "Fragmented sources",
    body: "Relevant data sits with different providers, in different formats, with no single place to compare it.",
    icon: FragmentIcon,
  },
  {
    title: "Overpriced and overpackaged data",
    body: "Traditional packages bundle far more than a team needs, at a price that is hard to justify for the part you will actually use.",
    icon: PackageIcon,
  },
  {
    title: "No preference matching",
    body: "Industry, geography, format, and use case rarely shape the offer. You adapt to the catalogue instead of the other way round.",
    icon: SlidersIcon,
  },
];

export function Problem() {
  return (
    <section id="problem" className="scroll-mt-24 bg-paper py-20 sm:py-28" aria-labelledby="problem-title">
      <Container>
        <div className="reveal">
          <SectionHeading
            id="problem-title"
            eyebrow="The problem"
            title="Good data is easy to miss and hard to buy well."
            intro="Most teams do not have a shortage of data. They have a fit problem. The set that matches the decision is scattered, bundled, or never offered."
          />
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {problems.map((item) => (
            <li key={item.title} className="reveal lift rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_16px_40px_-28px_rgba(13,27,62,0.45)]">
              <item.icon />
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function FragmentIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
      <rect x="4" y="5" width="10" height="10" rx="2" fill="none" stroke="#0F766E" strokeWidth="1.6" />
      <rect x="20" y="8" width="10" height="10" rx="2" fill="none" stroke="#0D9488" strokeWidth="1.6" />
      <rect x="12" y="21" width="10" height="10" rx="2" fill="none" stroke="#14B8A6" strokeWidth="1.6" />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
      <path d="M8 13 L18 8 L28 13 L28 24 L18 29 L8 24 Z" fill="none" stroke="#0F766E" strokeWidth="1.6" />
      <path d="M8 13 L18 18 L28 13" fill="none" stroke="#0D9488" strokeWidth="1.6" />
      <path d="M18 18 L18 29" fill="none" stroke="#14B8A6" strokeWidth="1.6" />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
      <path d="M7 11 H29 M7 18 H29 M7 25 H29" stroke="#0F766E" strokeWidth="1.6" />
      <circle cx="14" cy="11" r="2.4" fill="#F0F4F8" stroke="#0D9488" strokeWidth="1.6" />
      <circle cx="23" cy="18" r="2.4" fill="#F0F4F8" stroke="#14B8A6" strokeWidth="1.6" />
      <circle cx="12" cy="25" r="2.4" fill="#F0F4F8" stroke="#0F766E" strokeWidth="1.6" />
    </svg>
  );
}
