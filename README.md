# Project Aura

An interactive, cinematic birthday memory — built with Next.js, GSAP,
Lenis, and Framer Motion. No menus, no navigation, no UI clutter.
The visitor scrolls through a slow, directed sequence of real
moments and arrives at a birthday message at the end.

## What this is

- A single continuous scroll experience: opening → nine memory
  scenes → a birthday finale.
- All copy, image paths, and the birthday message live in one file:
  `content/story.ts`. You should never need to touch a component to
  change what the site says or which photo it shows.
- Eleven of your real uploaded photos have already been curated and
  placed in `public/images`, each mapped to a specific scene.
- Two images from your uploads were deliberately left out — one had
  a visible "AI-generated content" watermark and one had the same
  overly-smoothed, synthetic look. A memory site like this works
  best built entirely from real photos, so those were skipped rather
  than passed off as memories.
- Music is wired up but silent by default (per the brief) — you need
  to drop in your own track. See "Adding music" below.

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/               Next.js App Router: layout, global styles, the single page
components/        Opening sequence, Scene (reusable memory block), Finale, audio toggle, smooth-scroll provider
content/story.ts    ALL copy + image paths + the birthday message + music references
public/images/      Your curated photos
public/audio/       Drop your music here (see README.txt inside)
```

## Editing the story

Open `content/story.ts`. Each entry in the `scenes` array is one
full-screen block:

```ts
{
  id: "quiet-mornings",
  eyebrow: "I — Quiet Mornings",
  title: "The days that didn't ask to be remembered",
  body: ["...", "..."],
  image: "/images/scene-desk.jpg",
  imageAlt: "A quiet portrait at a work desk",
  align: "left",
}
```

Reorder scenes by reordering the array. Swap a photo by changing
`image` to a new file in `public/images`. Nothing else needs to
change.

## Adding music

The brief asks for music muted by default with a way to opt in —
that's already built (bottom-right corner toggle). To activate it:

1. Choose a royalty-free track (suggestions are listed at the
   bottom of `content/story.ts`).
2. Save it as `public/audio/theme.mp3`.
3. Optionally add ambient one-shots (office hum, rain, footsteps,
   etc.) named to match `content/story.ts`.

No code changes needed.

## Verified

This exact repository was installed and built successfully with
`npm install` && `npm run build` before being handed to you (see
`VERIFICATION.md`). The only thing that didn't run in the sandbox
this was built in was fetching Google Fonts, because that sandbox
has no general internet access — it will resolve normally on your
machine or on Vercel.

See `SETUP.md`, `DEPLOYMENT.md`, `PROJECT_STATUS.md`, and
`CHANGELOG.md` for more detail.
