# Setup Guide

## Requirements

- Node.js 20.x or later
- npm 10.x or later (comes with Node)

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Visit http://localhost:3000. Changes to `content/story.ts` or any
component will hot-reload.

## 3. (Optional) Add your music

See "Adding music" in `README.md`. The site works and builds fine
without it — the audio toggle just won't produce sound until a real
file exists at `public/audio/theme.mp3`.

## 4. Replace or add photos

Drop new images into `public/images/`, then point to them from
`content/story.ts`. Recommended: photos at least 1600px on the long
edge, JPEG quality 80–90, so the parallax scenes stay sharp on large
screens without bloating page weight.

## 5. Build for production

```bash
npm run build
npm run start
```

This is the exact command Vercel runs during deployment (`next
build`, then serving with `next start`-equivalent infrastructure).

## Troubleshooting

**"Failed to fetch font from Google Fonts"** — only happens in
network-restricted environments (like the sandbox this was built
in). On a normal machine or on Vercel this resolves automatically.
If you ever need the site to build with zero external network calls
at build time, swap `next/font/google` in `app/layout.tsx` for
`next/font/local` and add your own font files under
`public/fonts/`.

**Smooth scroll feels different / doesn't appear** — Lenis is
intentionally disabled when the visitor's OS has "reduce motion"
turned on. That's expected behavior, not a bug.
