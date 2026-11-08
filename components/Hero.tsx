import { Container } from "@/components/Container";
import { JoinLink } from "@/components/links";
import { NetworkVisual } from "@/components/NetworkVisual";
import { btnPrimary, btnSecondaryDark } from "@/lib/classes";
import { POSITIONING } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper" data-theme="dark" aria-labelledby="hero-title">
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="hero-grid absolute inset-0" aria-hidden="true" />

      <Container className="relative grid items-center gap-14 pb-20 pt-28 sm:pb-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:pb-28 lg:pt-36">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-mint">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
            Early access
          </p>
          <h1
            id="hero-title"
            className="mt-5 max-w-xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Data, <span className="text-mint">exactly</span> as you need it.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-[#CBD5E1] sm:text-lg">
            Tell us the decision you are making. Trovey finds the dataset that fits it from vetted providers, and
            shows you the price before you commit.
          </p>
          <p className="mt-5 max-w-xl border-l-2 border-mint pl-4 text-base text-slate sm:text-lg">{POSITIONING}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <JoinLink join="business" className={`${btnPrimary} w-full sm:w-auto`}>
              Get Early Access
            </JoinLink>
            <JoinLink join="provider" className={`${btnSecondaryDark} w-full sm:w-auto`}>
              Become a Data Partner
            </JoinLink>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate">
            Early access is open. The marketplace itself is not live yet.{" "}
            <JoinLink join="investor" className="font-semibold text-mint underline decoration-mint/40 underline-offset-4">
              Investor? Request a conversation.
            </JoinLink>
          </p>
        </div>

        <NetworkVisual />
      </Container>
    </section>
  );
}
