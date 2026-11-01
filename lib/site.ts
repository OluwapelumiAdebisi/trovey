/**
 * Single place for launch placeholders. Search the repo for "TODO" before you ship.
 */

/** TODO: Replace with the inbox that should receive early-access mail. */
export const CONTACT_EMAIL = "your.email@trovey.com";

/**
 * TODO: Replace with Pelumi's profile or the Trovey company page.
 * The LinkedIn homepage is only a stand-in so this does not point at a stranger.
 */
export const LINKEDIN_URL = "https://www.linkedin.com/";

export const SITE_NAME = "Trovey";
export const TAGLINE = "Data, exactly as you need it.";
export const POSITIONING = "The marketplace layer the data industry has been missing.";

export const DESCRIPTION =
  "Trovey is a pre-launch marketplace that will match businesses with verified datasets based on their requirements. Join early access as a business or a data provider. Nothing is for sale yet.";

/** Cookie set when someone dismisses the essential-cookie notice. */
export const NOTICE_COOKIE = "trovey_notice";

export const NAV = [
  { hash: "#problem", label: "The problem" },
  { hash: "#how-it-works", label: "How it works" },
  { hash: "#categories", label: "Categories" },
  { hash: "#why-trovey", label: "Why Trovey" },
  { hash: "#about", label: "About" },
] as const;

export const FOOTER_NAV = [
  ...NAV,
  { hash: "#for-businesses", label: "For businesses" },
  { hash: "#for-providers", label: "For data providers" },
  { hash: "#early-access", label: "Early access" },
] as const;

/**
 * Absolute site URL for sitemap, robots, and metadata.
 * TODO: Set NEXT_PUBLIC_SITE_URL in production if the host does not provide one.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (explicit) return explicit;

  const netlify = process.env.URL?.trim().replace(/\/$/, "");
  if (netlify) return netlify;

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction) return `https://${vercelProduction.replace(/\/$/, "")}`;

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;

  return "http://localhost:3000";
}
