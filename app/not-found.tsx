import type { Metadata } from "next";
import Link from "next/link";
import { btnPrimary } from "@/lib/classes";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="content" className="bg-paper px-5 pb-24 pt-32">
      <div className="mx-auto max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-strong">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">That page is not on this site.</h1>
        <p className="mt-4 leading-relaxed text-muted">
          Trovey is in early access. The homepage has the product story and the request form.
        </p>
        <Link href="/" className={`${btnPrimary} mt-8`}>
          Back to Trovey
        </Link>
      </div>
    </main>
  );
}
