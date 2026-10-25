# Professional landing page template

A one-page site for an independent professional whose goal is to book calls. Next.js (App Router), Tailwind CSS, no animation library.

## Before you publish

The name, businesses, quotes and figures in `config/professional.ts` are placeholders. Replace all of them, and only publish figures you can trace to a real job.

## Change the content

All text, prices, figures and the photo path live in `config/professional.ts`. Components only render what is in that file.

- Photo: put your own file in `public/images/` and update `hero.image` (src, size, alt text).
- Link preview image: `app/opengraph-image.tsx` is generated from the same config and photo. It fetches two Google fonts at build time and falls back to system fonts if they cannot be reached.
- Site address: set `NEXT_PUBLIC_SITE_URL` in production so link previews use absolute URLs.
- Contact form: set `NEXT_PUBLIC_FORM_ENDPOINT` (see `.env.example`) to a Formspree URL or your own route. Without it the form only shows its confirmation message.

## Change the look

Colour and type rules are in `tailwind.config.ts` and `app/globals.css`.

- `ledger` green is for actions only (buttons and links that do something).
- `stamp` red is for the one figure or tag that matters.
- `graphite` is for quiet information.
- Fonts: Zilla Slab for headings, Public Sans for text (set in `app/layout.tsx`).

## Run it

```bash
npm install
npm run dev
```
