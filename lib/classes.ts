/**
 * #0D9488 is the brand accent, but white text on it is about 3.7:1.
 * Buttons and small text on light backgrounds use #0F766E (about 5.5:1 with white)
 * so the same hue still meets WCAG AA. Hover stays at #0C726B (about 5.8:1).
 */
export const btnPrimary =
  "inline-flex min-h-11 items-center justify-center rounded-full bg-teal-strong px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0c726b]";

export const btnSecondaryDark =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-mint hover:text-mint";

export const btnSecondaryLight =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-teal-strong hover:text-teal-strong";

export const fieldClass =
  "mt-2 w-full rounded-xl border border-navy/15 bg-white px-3.5 py-3 text-base text-ink placeholder:text-[#64748b]";
