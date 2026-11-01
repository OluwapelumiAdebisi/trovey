# Trovey

Early-access marketing site for Trovey. The marketplace is pre-launch. The copy says so, and it does not invent customers, usage numbers, funding, or market statistics.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Deploy

### Vercel

1. Push the project to a Git host and import it at [vercel.com/new](https://vercel.com/new). Vercel detects Next.js. No config file is required.
2. Add the environment variables below, then deploy.
3. Or from this folder, after [installing the Vercel CLI](https://vercel.com/docs/cli): `npx vercel`.

### Netlify

1. Import the repository. `netlify.toml` sets the build command and the Next.js plugin.
2. Add the same environment variables, then deploy.
3. If you use the Netlify UI, the build command is `npm run build`. Leave the plugin `@netlify/plugin-nextjs` enabled.

Set `NEXT_PUBLIC_SITE_URL` to the production domain so the sitemap, robots file, and social cards use the right links. Rebuild after changing it.

## Placeholders to replace

Do these before you share the site with anyone whose request you need to keep.

| What | Where | Current value |
| --- | --- | --- |
| Contact email | `lib/site.ts` → `CONTACT_EMAIL` | `your.email@trovey.com` |
| LinkedIn URL | `lib/site.ts` → `LINKEDIN_URL` | `https://www.linkedin.com/` |
| Founder headshot | `components/About.tsx` (comment shows the swap) and `public/founder.jpg` | Monogram placeholder |
| Form endpoint | `.env.local` and your host. See below. | Not set. Requests are not stored. |
| Public site URL | `NEXT_PUBLIC_SITE_URL` | Falls back to the host URL, or `http://localhost:3000` |

Search the repo for `TODO` if you want the comments next to each one.

Have the privacy page reviewed against how you actually store requests once the form is connected. The page is an honest starting point, not a lawyer’s sign-off.

## Form endpoint

The form validates in the browser, then:

1. If `NEXT_PUBLIC_FORM_ENDPOINT` is set, the browser POSTs JSON there. Use this for [Formspree](https://formspree.io) (`https://formspree.io/f/xxxxxxxx`). Formspree accepts JSON.
2. Otherwise the browser POSTs JSON to `/api/early-access`. If `FORM_ENDPOINT` is set, that route forwards the payload and the success message says the person is on the list.
3. If neither variable is set, the route acknowledges a valid request and does **not** store it. The page says “Received — not saved yet” and points people at the contact email.

Use one option, not both. If both are set, the public URL wins and the API route is skipped.

```bash
cp .env.example .env.local
```

Example:

```bash
NEXT_PUBLIC_SITE_URL=https://trovey.com
FORM_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

Fields sent as JSON: `name`, `email`, `company`, `role`, `audience` (`business`, `provider`, `investor`, `other`), `needs`, `consent`. The API route also adds `submittedAt` and `source`.

## Design notes

- Headings use Outfit. Body text uses Plus Jakarta Sans. Both are loaded with `next/font`.
- Brand teal `#0D9488` is the accent. Button fills and small text on light backgrounds use `#0F766E`, because white on `#0D9488` does not meet WCAG AA.
- `#94A3B8` is used for muted text on the dark hero and footer only. Secondary text on light sections is `#334155`.
- No customer logos, testimonials, user counts, revenue, partnerships, funding figures, or market-size statistics are included. Do not add them unless you have a real source and a real relationship.
