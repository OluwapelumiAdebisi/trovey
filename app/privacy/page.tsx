import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CONTACT_EMAIL, NOTICE_COOKIE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Trovey handles personal information collected through this early-access website. The marketplace is not live.",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main id="content" className="bg-paper pb-20 pt-28 sm:pt-32">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-strong">Trovey · Early access</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Privacy policy</h1>
        <p className="mt-4 text-sm text-muted">Last updated 31 October 2026</p>
        <p className="mt-6 text-base leading-relaxed text-body">
          Trovey is preparing a marketplace that will match businesses with datasets. This policy explains what this
          website does with personal information while the product is in early access. The marketplace is not live, and
          this site does not take payment or open accounts.
        </p>

        <Section title="Who we are">
          <p>
            Trovey (“we”) is an early-stage company. Pelumi, Founder and CEO, is the contact for privacy requests. Email{" "}
            <a className="font-semibold text-teal-strong underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            . A registered address is not published on this site yet.
          </p>
        </Section>

        <Section title="What this policy covers">
          <p>
            This website, the early-access form, and the essential cookie described below. It does not describe a live
            product, because there is not one yet.
          </p>
        </Section>

        <Section title="Information we collect">
          <p>If you request early access, we ask for:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Your name</li>
            <li>Work email</li>
            <li>Company</li>
            <li>Role</li>
            <li>Whether you are a business seeking data, a data provider, an investor, or other</li>
            <li>Anything you choose to write about the data you need or offer</li>
            <li>Your confirmation that we may store those details and contact you</li>
          </ul>
          <p className="mt-3">
            We do not ask for payment details. If you email us, we keep that correspondence so we can reply.
          </p>
        </Section>

        <Section title="How we use it">
          <p>
            If a request is stored, we use it to reply, to understand whether you want to buy data, offer data, or follow
            the company, and to contact you about early access. We do not sell personal information, and we do not use
            it for unrelated advertising.
          </p>
          <p className="mt-3">
            If the form is not connected to an inbox yet, the site says so after you submit, and the request is not
            saved. You can email us instead.
          </p>
        </Section>

        <Section title="Legal basis">
          <p>
            Where UK or EU data protection law applies, we rely on your consent for the early-access form. You can
            withdraw that consent by emailing us. We rely on legitimate interest for a single essential cookie that
            remembers you closed the cookie notice.
          </p>
        </Section>

        <Section title="How long we keep it">
          <p>
            We keep stored early-access details until you ask us to delete them, or until we no longer need them to run
            early access, whichever comes first. The cookie lasts about six months.
          </p>
        </Section>

        <Section title="Who we share it with">
          <p>
            We do not sell or rent personal information. If we use a service to receive form submissions, that provider
            processes the information so we can read your request. We may also share information if the law requires it.
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            We use one first-party cookie, <code className="rounded bg-white px-1.5 py-0.5 text-sm text-ink">{NOTICE_COOKIE}</code>,
            to remember that you closed the cookie notice. It is set only after you choose “Got it”. We do not use
            analytics cookies, advertising cookies, or other tracking cookies.
          </p>
        </Section>

        <Section title="Your rights">
          <p>You can ask us to confirm what we hold about you, correct it, delete it, or stop contacting you. Email {CONTACT_EMAIL}.</p>
          <p className="mt-3">
            If you are in the UK or the EEA, you can also complain to your local data protection authority.
          </p>
        </Section>

        <Section title="Children">
          <p>This site is for businesses. It is not aimed at children, and we do not knowingly collect information from anyone under 18.</p>
        </Section>

        <Section title="Changes">
          <p>
            If this policy changes, we will update the date at the top. If a change affects early-access details we
            already hold, we will describe that change here before we rely on it.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Email{" "}
            <a className="font-semibold text-teal-strong underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Section>

        <p className="mt-12">
          <Link href="/" className="text-sm font-semibold text-teal-strong underline decoration-teal/40 underline-offset-4">
            Back to Trovey
          </Link>
        </p>
      </Container>
    </main>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">{title}</h2>
      <div className="mt-3 space-y-3 text-base leading-relaxed text-body">{children}</div>
    </section>
  );
}
