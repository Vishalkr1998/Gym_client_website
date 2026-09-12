# Ironforge — Gym & Fitness Website

Premium, fully responsive gym website built with React 18, Vite, Tailwind CSS,
Framer Motion, React Router, Swiper, AOS, and React CountUp.

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## What's included

- **Hero** — full-screen video background, animated headline, CTA buttons, animated stats
- **Navbar** — sticky/transparent on scroll, smooth-scroll links, animated mobile menu
- **About** — mission/vision, animated counters
- **Programs** — 6 gradient-border cards (Strength, Cardio, Yoga, CrossFit, Powerlifting, PT)
- **Trainers** — hover-reveal social cards
- **Pricing** — Basic / Pro / Elite plans with a highlighted "Most Popular" tier
- **BMI Calculator** — height/weight input, live category result
- **Gallery** — masonry grid with a lightbox viewer
- **Testimonials** — Swiper carousel with autoplay
- **Contact** — validated form + embedded map
- **Footer** — quick links, programs, newsletter signup
- Loading screen, scroll progress bar, custom cursor, back-to-top button,
  floating WhatsApp button, AOS scroll-reveal, lazy-loaded images

## Notes

- Hero video and all photography currently point to royalty-free Unsplash/Coverr
  URLs — swap these for your own assets in `src/assets/` and update the `src`
  paths in `Hero.jsx`, `About.jsx`, `Trainers.jsx`, `Gallery.jsx`, and
  `Testimonials.jsx`.
- Update the WhatsApp number in `src/App.jsx` (`WhatsAppButton`) and the map
  query / contact details in `src/components/Contact.jsx`.
- Colors and fonts are defined as design tokens in `tailwind.config.js`
  (`gym-black`, `gym-red`, etc.) — change them there to re-theme the whole site.
