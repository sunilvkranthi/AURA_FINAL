# Deployment Guide (Vercel)

## Option A — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts (accept the defaults — Vercel auto-detects
Next.js). For a production deployment:

```bash
vercel --prod
```

## Option B — Git + Vercel dashboard

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Go to https://vercel.com/new and import the repository.
3. Framework preset: Next.js (auto-detected). No custom build
   settings are required.
4. Deploy.

## Before you deploy — checklist

- [ ] Replaced any placeholder copy in `content/story.ts` you want
      changed
- [ ] Confirmed all 11 photos in `public/images` are the ones you
      want (swap any you don't)
- [ ] Added a real music file at `public/audio/theme.mp3` (optional,
      but the brief calls for it)
- [ ] Ran `npm run build` locally once with no errors
- [ ] Decided whether this URL should be publicly indexable — if
      not, add a `robots.txt` or use Vercel's password-protection
      (Pro/Enterprise plans) since anyone with the link can view it

## Custom domain (optional)

In the Vercel dashboard: Project → Settings → Domains → Add. Point
your domain's DNS as instructed there (usually a CNAME to
`cname.vercel-dns.com` or an A record Vercel provides).

## Environment variables

None required. This project has no server-side secrets, database,
or API keys — it's a fully static/client experience.
