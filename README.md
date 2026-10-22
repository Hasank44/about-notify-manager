# Notify Manager — Landing Page

Marketing website for Notify Manager. Publicly accessible at
`https://about-notify-manager.vercel.app`.

## Quick Start

\`\`\`bash
npm install
cp .env.local.example .env.local  # optional — defaults work
npm run dev
\`\`\`

Opens at **http://localhost:3001**.

## Build & Deploy

\`\`\`bash
npm run build
\`\`\`

**Vercel deploy:**

1. Import repo → set **Root Directory** = `landing`
2. Framework: **Next.js** (auto-detected)
3. Add env vars (optional):
   - `NEXT_PUBLIC_SITE_URL=https://about-notify-manager.vercel.app`
   - `NEXT_PUBLIC_APP_URL=https://all-notify-manager.vercel.app`
   - `NEXT_PUBLIC_API_URL=https://api-notify-manager.vercel.app`
4. Deploy

## URLs

| Purpose | URL |
|---|---|
| Landing | https://about-notify-manager.vercel.app |
| User Panel | https://all-notify-manager.vercel.app |
| Backend API | https://api-notify-manager.vercel.app |
| Docs | https://all-notify-manager.vercel.app/docs |

## Sections (planned)

- ✅ Hero (Batch 1)
- 🔜 Features, How it works, Code examples (Batch 2)
- 🔜 Pricing, FAQ, Final CTA (Batch 3)

## Design

Matches the app's design system:
- Dark gradient background
- Indigo / purple / cyan accents
- Inter font
- Consistent card / button styles