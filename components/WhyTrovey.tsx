import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const rows = [
  {
    criterion: "Preference matching",
    trovey: "You set the requirements. Matching starts there.",
    brokers: "You search what is already packaged.",
    diy: "You build the filters and maintain them.",
  },
  {
    criterion: "Modular purchasing",
    trovey: "Buy the dataset that fits the brief.",
    brokers: "Broad bundles are the default offer.",
    diy: "You pay to collect, store, and query.",
  },
  {
    criterion: "Transparent pricing",
    trovey: "The price is visible before you commit.",
    brokers: "Many prices sit behind a sales quote.",
    diy: "Cost is spread across tools, time, and usage.",
  },
];

export function WhyTrovey() {
  return (
    <section id="why-trovey" className="scroll-mt-24 bg-white py-20 sm:py-28" aria-labelledby="why-title">
      <Container>
        <div className="reveal">
          <SectionHeading
            id="why-title"
            eyebrow="Why Trovey"
            title="Designed for fit, not for bulk."
            intro="How Trovey is designed to compare with the usual options: a short brief, a dataset that fits it, and a price you can see."
          />
        </div>

        <div className="reveal mt-10 hidden md:block">
          <table className="w-full border-separate border-spacing-0 overflow-hidden rounded-2xl border border-navy/10 text-left text-sm">
            <caption className="sr-only">
              Designed comparison of Trovey, traditional brokers, and DIY or direct APIs. Trovey is in early access.
            </caption>
            <thead>
              <tr className="bg-paper text-navy">
                <th scope="col" className="px-4 py-4 font-semibold">
                  <span className="sr-only">Criteria</span>
                </th>
                <th scope="col" className="bg-[#e7f6f4] px-4 py-4 font-semibold">
                  Trovey
                  <span className="mt-1 block text-xs font-medium uppercase tracking-[0.14em] text-teal-strong">
                    Early access
                  </span>
                </th>
                <th scope="col" className="px-4 py-4 font-semibold">
                  Traditional brokers
                </th>
                <th scope="col" className="px-4 py-4 font-semibold">
                  DIY / APIs
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.criterion} className="border-t border-navy/10">
                  <th scope="row" className="border-t border-navy/10 px-4 py-4 font-semibold text-ink">
                    {row.criterion}
                  </th>
                  <td className="border-t border-navy/10 bg-[#f3fbfa] px-4 py-4 text-body">{row.trovey}</td>
                  <td className="border-t border-navy/10 px-4 py-4 text-muted">{row.brokers}</td>
                  <td className="border-t border-navy/10 px-4 py-4 text-muted">{row.diy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="mt-10 grid gap-4 md:hidden">
          {rows.map((row) => (
            <li key={row.criterion} className="rounded-2xl border border-navy/10 bg-paper p-5">
              <h3 className="font-display text-lg font-semibold text-ink">{row.criterion}</h3>
              <dl className="mt-4 grid gap-3 text-sm">
                <div>
                  <dt className="font-semibold text-teal-strong">Trovey · early access</dt>
                  <dd className="mt-1 text-body">{row.trovey}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">Traditional brokers</dt>
                  <dd className="mt-1 text-muted">{row.brokers}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">DIY / APIs</dt>
                  <dd className="mt-1 text-muted">{row.diy}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
