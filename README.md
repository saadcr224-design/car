# Velocity Motors — Car Showroom Website

A clean, animated car showroom website built with **React + Vite**.

## Sections
- **Hero banner** with full-screen background video (`public/videos/hero.mp4`)
- **Animated stats** counter
- **Car collection** filtered by category (SUV, Sedan, Sports, Electric, Luxury, Hatchback)
- **Vision, Mission & Goals**
- **Message from the CEO**
- **Offers banner** with video background (`public/videos/showcase.mp4`), live countdown and the showroom where each offer applies
- **Showrooms & live map** (Leaflet + OpenStreetMap) with "Use my live location", nearest-showroom detection and directions
- **Testimonials** slider
- **Book a test drive** form
- Responsive navbar with mobile menu, scroll-reveal animations throughout

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Deploy to Vercel
The project is ready for Vercel (`vercel.json` is included).

**Option 1 — Vercel dashboard (easiest)**
1. Go to https://vercel.com/new and import this GitHub repository.
2. Vercel detects **Vite** automatically (build: `npm run build`, output: `dist`).
3. Click **Deploy**. You get a live URL like `https://your-project.vercel.app`.

**Option 2 — Vercel CLI**
```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

Every push to the connected branch redeploys automatically.

## Customising
All text, cars, offers, CEO details and map locations live in **`src/data/site.js`**.
- Replace showroom `lat`/`lng` with your real coordinates.
- Add real car photos to `public/cars/` and set `image: '/cars/name.jpg'` on a car.
- Add a CEO photo with `photo: '/ceo.jpg'` in the `ceo` object.
- The booking form currently shows a confirmation only; connect it to your backend in `src/components/Contact.jsx`.
