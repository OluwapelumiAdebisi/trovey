import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Define your data needs.",
    body: "Share the industry, data type, geography, and format that matter for the decision in front of you.",
  },
  {
    n: "02",
    title: "Trovey matches and surfaces datasets.",
    body: "Those requirements are lined up with relevant datasets from providers Trovey reviews, and the closest fits are shown first.",
  },
  {
    n: "03",
    title: "Purchase only what you need.",
    body: "You pay for the dataset that fits the brief, with the price shown before you commit. No bundle to buy around.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-white py-20 sm:py-28" aria-labelledby="how-title">
      <Container>
        <div className="reveal">
          <SectionHeading
            id="how-title"
            eyebrow="How it works"
            title="A brief in. A matching dataset out."
            intro="Describe what you need once. Trovey does the searching, and you only pay for the part that fits."
          />
        </div>

        <ol className="relative mt-12 grid gap-6 md:grid-cols-3">
          <div
            className="pointer-events-none absolute left-[8%] right-[8%] top-6 hidden h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent md:block"
            aria-hidden="true"
          />
          {steps.map((step) => (
            <li key={step.n} className="reveal relative rounded-2xl border border-navy/10 bg-paper p-6">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-mint">
                {step.n}
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="reveal mt-10 rounded-3xl bg-ink p-6 text-paper sm:p-8" data-theme="dark">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">Example</p>
          <p className="mt-3 max-w-2xl font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
            A retail team is choosing which stores should run a spring promotion.
          </p>
          <dl className="mt-6 grid gap-6 text-sm leading-relaxed sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-mint">The brief</dt>
              <dd className="mt-2 text-[#CBD5E1]">Retail · Consumer behaviour · United Kingdom · CSV</dd>
            </div>
            <div>
              <dt className="font-semibold text-mint">What Trovey surfaces</dt>
              <dd className="mt-2 text-[#CBD5E1]">
                Weekly basket trends, store catchment by area, and promotion response by campaign, closest fit first.
              </dd>
            </div>
          </dl>
          <p className="mt-6 text-xs leading-relaxed text-slate">
            Illustrative example. The marketplace is not live yet, and early access does not include purchasing.
          </p>
        </div>
      </Container>
    </section>
  );
}
