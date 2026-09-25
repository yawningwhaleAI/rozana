# Rozana — landing page

**Everyday, better.** The waitlist + contact landing page for Rozana, an Indian
home and kitchen paper essentials brand launching in Delhi NCR.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.
Vercel-ready. There is no store — nothing is for sale yet. The page exists to
capture launch-waitlist emails and institutional/partnership enquiries.

---

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # next lint
```

---

## The one environment variable

Both forms POST to a single API route (`/api/lead`), which forwards submissions
to whatever endpoint you set in `CONTACT_FORM_ENDPOINT`.

| Variable | What it is | Required? |
| --- | --- | --- |
| `CONTACT_FORM_ENDPOINT` | A [Formspree](https://formspree.io) form endpoint, e.g. `https://formspree.io/f/xxxxxxxx`. Receives both waitlist and contact submissions. | Optional |

Copy `.env.example` to `.env.local` and fill it in:

```bash
cp .env.example .env.local
```

**If it's left blank**, the route logs each submission to the server console and
still returns success, so the page works end-to-end before it's wired up. Wire
it up any time by setting the variable — no code changes needed.

### Wiring up Formspree

1. Create a form at <https://formspree.io> and copy its endpoint URL.
2. Set `CONTACT_FORM_ENDPOINT` to that URL (locally in `.env.local`, and in
   Vercel → Project → Settings → Environment Variables).
3. Redeploy. Submissions now arrive in your Formspree inbox. Waitlist sign-ups
   carry `type: "waitlist"`; contact enquiries carry `type: "contact"` plus the
   full form fields, so you can filter them apart.

---

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, **New Project → Import** this repository. Framework preset is
   detected as Next.js automatically; no build settings to change.
3. Add the `CONTACT_FORM_ENDPOINT` environment variable (see above) if you have
   a Formspree endpoint. You can add it later and redeploy.
4. Deploy. Image optimization, caching and the API route all work on Vercel with
   no extra configuration.

---

## Where to drop product images

Product photography lives in `public/products/` with these exact filenames — the
page references them by name, so replacing a file swaps the image with no code
change:

```
public/products/kitchen-towel.png
public/products/facial-tissues.png
public/products/party-napkins.png
public/products/toilet-rolls.png
public/products/air-fryer-liners.png
public/products/food-wrap.png
public/products/hero.png          # the hero shot
```

Cards use a 4:3 crop (`object-cover`); the hero is roughly 3:2. Any reasonable
resolution works — images are served through `next/image`, which resizes and
converts them to modern formats automatically. Landscape shots ~1100–1400px wide
are plenty.

Other slots:

- `public/og.png` — Open Graph / social share image (1200×630).
- `app/icon.svg` — favicon (the Rozana "R").
- `design/source/` — the original high-res source images, kept for reference.
  Not served to the browser.

---

## Editing the copy

**All text lives in `content.ts`.** Headlines, product taglines, form labels,
success/error messages, the team bios — everything. Edit there without touching
components.

Two small conventions in that file:

- Wrap a word or phrase in `[[double brackets]]` to give it the yellow
  highlighter stroke in a headline, e.g. `"Nobody remembers the [[paper]]…"`.
- Taglines and hand-drawn callouts render in the handwriting font automatically.

---

## Project structure

```
app/
  layout.tsx          # fonts, SEO metadata, Open Graph
  page.tsx            # assembles the sections in order
  globals.css         # design tokens + brand marks (highlighter, pill, sticky-note)
  icon.svg            # favicon
  api/lead/route.ts   # single API route for both forms (+ honeypot + Formspree)
components/
  nav.tsx, footer.tsx
  decor.tsx           # Highlight, Pill, RedUnderline, Sparkle, SparkLines
  icons.tsx           # line icons for "Why it's different"
  forms.tsx           # WaitlistForm + ContactForm (client, inline states)
  section-*.tsx       # hero, problem, spec, products, why, people, waitlist band, contact
content.ts            # ← all copy
public/products/      # ← product + hero images
design/source/        # original high-res references
```

---

## Design system

Set in `tailwind.config.ts` and `app/globals.css`.

| Token | Hex | Use |
| --- | --- | --- |
| Cream | `#FAF3E3` | Page background |
| Deep green | `#14512F` | Primary, headings, dark sections |
| Warm yellow | `#F2C230` | Highlighter strokes, CTAs |
| Tomato red | `#D6412B` | Accents, underlines, sparkles |
| Navy | `#1D4E89` | Secondary accent, focus rings |
| Charcoal | `#2B2B2B` | Body text |

Fonts (via `next/font`, self-hosted at build): **Fraunces** (display),
**Plus Jakarta Sans** (body), **Caveat** (handwritten callouts).

---

## Notes

- **Accessibility:** semantic landmarks, labelled inputs, a skip link, visible
  focus states, `alt` text on every image, and reduced-motion support.
- **Performance:** CSS-only animations, no heavy client libraries, `next/image`
  throughout. First-load JS is ~95 kB.
- **Spam:** both forms include a hidden honeypot field; submissions that fill it
  are silently discarded.
