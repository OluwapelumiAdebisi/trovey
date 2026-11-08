import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const categories = [
  {
    title: "Consumer Behaviour",
    body: "How people browse, buy, and respond.",
    examples: ["Test which promotion works", "Spot churn early"],
  },
  {
    title: "Market and Industry",
    body: "Sector structure, competitors, and where demand is moving.",
    examples: ["Size a new market", "Benchmark against rivals"],
  },
  {
    title: "Demographic",
    body: "Population, place, and how an audience is composed.",
    examples: ["Choose where to open", "Target a campaign by area"],
  },
  {
    title: "Custom and Niche",
    body: "A specific cut that a standard package does not stock.",
    examples: ["Research a narrow segment", "Fill a gap in your own data"],
  },
];

export function Categories() {
  return (
    <section id="categories" className="scroll-mt-24 bg-paper py-20 sm:py-28" aria-labelledby="categories-title">
      <Container>
        <div className="reveal">
          <SectionHeading
            id="categories-title"
            eyebrow="Data categories"
            title="Start with the kind of data you actually use."
            intro="Trovey is built to carry four kinds of data, each tied to a decision a team actually has to make."
          />
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {categories.map((item, index) => (
            <li key={item.title} className="reveal lift rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_16px_40px_-28px_rgba(13,27,62,0.45)]">
              <p className="font-display text-sm font-semibold tracking-[0.16em] text-teal-strong">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-strong">Helps you</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.examples.map((example) => (
                  <li key={example} className="rounded-full bg-paper px-3 py-1 text-sm text-navy">
                    {example}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
