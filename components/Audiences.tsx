import { Container } from "@/components/Container";
import { JoinLink } from "@/components/links";
import { SectionHeading } from "@/components/SectionHeading";
import { btnPrimary, btnSecondaryLight } from "@/lib/classes";

const businessBenefits = [
  "One brief instead of a search across brokers.",
  "Datasets matched to industry, type, geography, and format.",
  "Buy a slice, not a bundle you will not open.",
  "Onboarding that does not assume a data department.",
];

const providerBenefits = [
  "Buyers who have already described the data they want.",
  "A place for niche datasets, not only broad packages.",
  "Pricing a buyer can see before they commit.",
  "A chance to shape the marketplace before it opens.",
];

export function Audiences() {
  return (
    <section id="audiences" className="scroll-mt-24 bg-paper py-20 sm:py-28" aria-labelledby="audiences-title">
      <Container>
        <div className="reveal">
          <SectionHeading
            id="audiences-title"
            eyebrow="Who it is for"
            title="Two sides. One brief."
            intro="Businesses say what they need. Providers offer data that can meet it. Both can join while Trovey is still in early access."
          />
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article
            id="for-businesses"
            className="reveal scroll-mt-24 rounded-3xl bg-ink p-7 text-paper sm:p-9"
            data-theme="dark"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">For businesses</p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">Get the data that fits the work.</h3>
            <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-[#CBD5E1]">
              {businessBenefits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <JoinLink join="business" className={`${btnPrimary} mt-8 w-full sm:w-auto`}>
              Get Early Access
            </JoinLink>
          </article>

          <article
            id="for-providers"
            className="reveal scroll-mt-24 rounded-3xl border border-navy/10 bg-white p-7 sm:p-9"
            data-theme="light"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-strong">For data providers</p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Reach buyers who already know what they need.
            </h3>
            <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-muted">
              {providerBenefits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <JoinLink join="provider" className={`${btnSecondaryLight} mt-8 w-full sm:w-auto`}>
              Become a Data Partner
            </JoinLink>
          </article>
        </div>
      </Container>
    </section>
  );
}
