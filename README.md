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

## Customising
All text, cars, offers, CEO details and map locations live in **`src/data/site.js`**.
- Replace showroom `lat`/`lng` with your real coordinates.
- Add real car photos to `public/cars/` and set `image: '/cars/name.jpg'` on a car.
- Add a CEO photo with `photo: '/ceo.jpg'` in the `ceo` object.
- The booking form currently shows a confirmation only; connect it to your backend in `src/components/Contact.jsx`.
