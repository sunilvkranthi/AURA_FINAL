# Changelog

## v0.1.0 — Initial build

- Scaffolded Next.js 16 / React 19 / TypeScript / Tailwind project
- Built the opening sequence: black screen → heartbeat pulse →
  floating dust → eyes emerging from darkness → first two lines of
  text → quiet scroll invitation
- Built `Scene`, a reusable cinematic scene component with
  GSAP + ScrollTrigger parallax and scroll-triggered text reveal
- Curated 11 real photos from your uploads into nine memory scenes
  plus opening + finale imagery; excluded 2 photos that were
  AI-generated rather than real memories
- Wrote all scene copy, eyebrows, and the birthday message
  (`content/story.ts`) — separated entirely from component code
- Integrated Lenis smooth scrolling, synced to GSAP's ScrollTrigger,
  with automatic fallback to native scrolling when the visitor
  prefers reduced motion
- Built the finale section: closing photo, birthday title, message,
  sign-off
- Built a single muted-by-default music toggle (bottom-right),
  wired to `public/audio/theme.mp3` — track not included, royalty-
  free suggestions listed in `content/story.ts`
- Added film grain overlay, soft vignettes, and a bloom effect used
  sparingly for the eyes and finale imagery
- Verified `npm install` and `npm run build` both complete
  successfully

## Planned for v0.2 (not yet built)

- Optional: a short "Memory Wall" grid scene if you want a moment
  that shows several smaller photos at once rather than one at a
  time
- Optional: subtle ambient sound-effect layer that changes per scene
  (office hum, wind, footsteps) — the wiring is stubbed in
  `content/story.ts` under `audio.ambient`, but the actual audio
  files and playback logic aren't built yet
- Optional: a short closing video moment using one of your uploaded
  `.mp4` clips, if you'd like motion in the finale rather than a
  still photo
