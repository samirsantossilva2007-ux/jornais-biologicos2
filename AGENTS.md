# Jornais Históricos — Base44 Dev Notes

## Project Overview
Vite + React + TypeScript landing page (Portuguese) for "Jornais Históricos" —
educational historical newspapers for teachers. Sales page with hero, newspaper
showcase, teacher testimonials, biology bonuses, and offer section.

## Stack
- Vite 6 + React 18 + TypeScript
- Plain CSS (no Tailwind), serif typography (Georgia)
- npm (not bun despite original outline mentioning bun.lock)

## Running
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
- Web server on port 3000 (maps to container port 5173)
- Vite dev server with HMR, bind-mounted source for live reload
- `npm install` runs automatically on container startup

## Key Files
- `src/App.tsx` — main page composition
- `src/data/newspapersData.ts` — all content data (newspapers, bonuses, testimonials)
- `src/components/` — Hero, NewspaperShowcase, Testimonials, BonusSection, OfferSection, Footer
- `public/images/` — all downloaded assets (hero mockup, testimonials, bonus graphics, newspaper images)
- `index.html` — Facebook Pixel placeholder (activated via VITE_FB_PIXEL_ID env var)

## Environment Variables
- `VITE_FB_PIXEL_ID` — Facebook Pixel ID (optional, for tracking)
- `VITE_UTMIFY_KEY` — UTMify tracking key (optional)
- No secrets required to boot the app.
