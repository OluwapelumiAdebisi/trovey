import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SectionLink } from "@/components/links";
import { CONTACT_EMAIL, FOOTER_NAV, LINKEDIN_URL, POSITIONING, TAGLINE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper" data-theme="dark">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo tone="onDark" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate">{TAGLINE}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate">{POSITIONING}</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-mint">Early access · Pre-launch</p>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">On this page</p>
          <ul className="mt-4 grid gap-2">
            {FOOTER_NAV.map((item) => (
              <li key={item.hash}>
                <SectionLink hash={item.hash} className="text-sm text-paper hover:text-mint">
                  {item.label}
                </SectionLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">Contact</p>
          <ul className="mt-4 grid gap-2 text-sm">
            <li>
              <a className="text-paper hover:text-mint" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a className="text-paper hover:text-mint" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-sm text-slate sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Trovey</p>
          <Link className="text-paper hover:text-mint" href="/privacy">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
