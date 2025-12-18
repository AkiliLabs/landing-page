# Akili Labs — Landing Page

This repository is the landing page for **Akili Labs** (https://akililabs.org). It uses Vite + React + TypeScript and Tailwind CSS. The page includes a full-screen animated background (powered by `unicornstudio-react`) and a simple UI overlay with company name, buttons and modals.

## Quick overview
- Project root: repository root
- Source: `src/`
- Main entry: `src/main.tsx`
- Demo page: `src/demo.tsx`
- UI components: `src/components/ui/` (the `rainbow-matrix-shader.tsx` component lives here)
- Assets: `src/assets/` and `public/`

## Requirements
- Node.js (16+ recommended)
- npm or pnpm

## Install
```bash
npm install
```

## Run (dev)
```bash
npm run dev
```

## Build
```bash
npm run build
```

## Preview production build
```bash
npm run preview
```

## Key files to edit
- `index.html` — site `<head>`: SEO, Open Graph, Twitter cards, JSON-LD. I updated this to use `https://akililabs.org/`.
- `src/demo.tsx` — top-level UI overlay (company title, slogan, logo position, buttons, modals).
- `src/components/ui/rainbow-matrix-shader.tsx` — Unicorn background component.
- `src/index.css` — global styles and Tailwind imports; font and layout tweaks live here.

## SEO & Social images
- Current `index.html` uses `/logo.png` for favicon and OG image. For best results add a dedicated social preview at `/og-image.png` sized 1200×630. Update the `og:image` and `twitter:image` meta tags in `index.html` when ready.

## Adding a web manifest & icons
- `index.html` references `/site.webmanifest`. Create a `public/site.webmanifest` with your app manifest and add icon files in `public/` (48×48, 72×72, 120×120, 180×180, 512×512).

## Where to change the domain
- `index.html` canonical, `og:url`, and JSON-LD `url`/`logo` point to `https://akililabs.org/`. Update if your production domain differs.

## UI notes
- Logo: `src/assets/logo.png` (used as favicon and top-left logo in the page).
- Project example: Projects modal displays `asmaulhusna_icon.png` from `src/assets/`.

## Future improvements (suggested)
- Add `/og-image.png` (1200×630) for richer link previews.
- Add `site.webmanifest` and appropriate icons for progressive web app support.
- Add sitemap.xml and robots.txt for SEO.
- Consider server-side rendering (Next.js) if you need expanded SEO or dynamic pages.

## Contact
- For edits to content or assets, update the files above and open a PR.

