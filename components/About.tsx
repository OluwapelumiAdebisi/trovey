import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 sm:py-28" aria-labelledby="about-title">
      <Container className="grid items-center gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
        <figure className="reveal mx-auto w-full max-w-[240px]">
          {/*
            TODO: Replace this monogram with Pelumi's headshot.
            Save a square photo as public/founder.jpg (at least 640×640), then swap
            the placeholder below for:

            <Image
              src="/founder.jpg"
              alt="Pelumi, Founder and CEO of Trovey"
              width={640}
              height={640}
              className="aspect-square h-full w-full object-cover"
            />

            Import Image from "next/image" when you do.
          */}
          <div
            className="flex aspect-square items-center justify-center rounded-3xl bg-navy text-paper"
            role="img"
            aria-label="Placeholder for a headshot of Pelumi, Founder and CEO of Trovey"
          >
            <span className="font-display text-7xl font-semibold" aria-hidden="true">
              P
            </span>
          </div>
          <figcaption className="mt-3 text-center text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Headshot placeholder
          </figcaption>
        </figure>

        <div className="reveal">
          <SectionHeading
            id="about-title"
            eyebrow="About"
            title="Built by someone who has sat with the problem."
          />
          <p className="mt-6 font-display text-lg font-semibold text-ink">Pelumi · Founder &amp; CEO</p>
          <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-body">
            <p>
              Pelumi’s background is in data analytics and computer science. Trovey started after seeing how much value
              businesses lose when they cannot get to the right data — and how often they are sold a dataset that was
              never built around the way they work.
            </p>
            <p>
              The company is in early access. Pelumi is speaking with businesses and data providers before anything goes
              on sale.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
