# Verification Checklist

What was actually run against this exact codebase before it was
handed to you:

| Check | Result |
|---|---|
| `npm install` | ✅ Passed — 391 packages, no vulnerabilities blocking install |
| `npx next build` (with Google Fonts) | ⚠️ Failed only on font fetch — sandbox has no general internet access, see note below |
| `npx next build` (fonts swapped to system stack temporarily, to isolate the issue) | ✅ Passed — compiled successfully, TypeScript passed, all pages statically generated |
| TypeScript strict mode | ✅ Passed, no errors |
| All 11 curated images present in `public/images` and referenced correctly in `content/story.ts` | ✅ Confirmed |

## Why the font fetch failed here (and won't on your machine)

`next/font/google` downloads font files from `fonts.googleapis.com`
at build time. The sandbox this project was built in only allows
network access to a small allow-list of package registries — it
cannot reach Google's font CDN. This is a property of the sandbox,
not the code. Two ways to confirm/handle this yourself:

1. **Just build it normally.** On your own computer or on Vercel,
   `fonts.googleapis.com` is reachable and `npm run build` will pull
   the fonts automatically — no action needed.
2. **If you ever need a zero-external-network build** (e.g. an
   isolated CI runner), switch `app/layout.tsx` from
   `next/font/google` to `next/font/local` and add `.woff2` files
   under `public/fonts/`. Not necessary for a normal Vercel
   deployment.

## What wasn't tested

- Visual/manual QA in an actual browser (this environment can't
  launch one) — recommend running `npm run dev` and scrolling
  through once yourself before sharing the link.
- Mobile device testing — the layout uses responsive Tailwind
  classes and `100svh` units intended to behave well on mobile
  Safari/Chrome, but hasn't been checked on a physical device.
- Lighthouse/performance audit.
