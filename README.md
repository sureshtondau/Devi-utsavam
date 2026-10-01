# Navaratri & Bathukamma 2026 — Ambience Courtyard

A professional, mobile-first, interactive single-page website for the community's
**Navaratri & Bathukamma** celebrations (10 – 21 October 2026), inspired by (and built to
out-shine) the community's Ganesh Utsav site.

Everything is plain **HTML + CSS + vanilla JavaScript** — no build step, no frameworks — so it
runs anywhere and deploys to GitHub Pages as-is.

## What's inside

```
navaratri-bathukamma-2026/
├── index.html            # all page markup
├── assets/
│   ├── css/styles.css    # mobile-first theme + animations
│   ├── js/main.js        # data, countdown, theme switcher, lightbox, form, etc.
│   └── img/              # 12 licensed festival photos (Wikimedia Commons, CC BY-SA)
└── README.md
```

### Features
- **Mobile-first** layout with a slide-down hamburger menu.
- **Live countdown** to the first day (and remaining time once it starts).
- **Navadurga theme switcher** — tap any of the 9 nights to re-colour the whole page.
- **Bathukamma 9-day** timeline with dates and naivedyam.
- **Filterable 12-day schedule** (Pooja / Bathukamma / Culturals / Special).
- **Contribute buttons** — open your Google Form (to donate) and your Google Sheet (to check an
  entry) in a new tab (setup below).
- **Gallery with lightbox** (swipe/keyboard/arrows).
- Animated counters, scroll-reveal, floating petals, scroll progress bar, back-to-top.
- Accessible: keyboard support, reduced-motion aware, semantic landmarks.

## Preview locally

```bash
cd navaratri-bathukamma-2026
python3 -m http.server 8000
# open http://localhost:8000
```

## Customise (all the "placeholder" content lives in two places)

1. **Text & imagery** → edit `index.html` directly (welcome message, tiers, SPOC names).
2. **Structured data & links** → edit the top of `assets/js/main.js`:
   - `CONFIG.startDate` / `CONFIG.endDate` — the countdown target.
   - `CONFIG.donationForm` — your Google Form link (opened by "Open the donation form" buttons).
   - `CONFIG.sheetView` — your read-only Google Sheet link (opened by "Check your entry" buttons).
   - `CONFIG.links.whatsapp` / `.poojaRegister` — replace `"#"` with your real links. Buttons with
     `data-form="whatsapp"` are wired automatically.
   - `NAVADURGA`, `BATHUKAMMA`, `SCHEDULE`, `CULTURALS`, `BLOCKS`, `GALLERY` — arrays that drive
     the cards. Add/edit/remove entries freely.

## Contribution links (Google Form + Google Sheet)

The Contribute section has two buttons that simply open your Google links in a new tab — no in-page
form, no backend:

- **"Open the donation form ↗"** → your Google Form, where residents enter their donation.
  Configured as `CONFIG.donationForm` in `assets/js/main.js`.
  Current: https://forms.gle/cHXwShS6KLeuc6Xo7
- **"Check your entry ↗"** → your read-only Google Sheet, where residents can see their logged
  donation. Configured as `CONFIG.sheetView` in `assets/js/main.js`.

Both links also appear in the footer under **Get involved**.

### One-time sharing settings (so links open without asking for access)
- **Google Form** — Settings ▸ Responses: set "Collect email addresses" to **Do not collect** and,
  on Workspace accounts, turn **off** "Restrict to users in <your org>". Otherwise residents are
  forced to sign in before they can respond.
- **Google Sheet** — Share ▸ General access: **"Anyone with the link" → Viewer** (not Editor, so
  no one can alter entries). *Privacy note:* this exposes the whole sheet (names, flats, amounts,
  transaction refs). If you'd rather show only some columns, make a separate tab with
  `=QUERY(...)` / `=FILTER(...)`, share as Viewer, and point `CONFIG.sheetView` at that tab's `gid`.

### Phone numbers & SPOCs
Search `index.html` for `00000 00000` and `tel:+910000000000` and replace with real values.

### Replacing photos with the community's own
Drop your images into `assets/img/` and point the `GALLERY` array (and the hero / welcome
`<img>` tags in `index.html`) at them. Keep files reasonably sized (< 1 MB each) for fast mobile
loading. The current photos are from **Wikimedia Commons contributors (CC BY-SA)** and are fine to
use with attribution, but your own community photos will feel more real.

## Deploy to GitHub Pages (https://mrityunjay.github.io/)

Your user site lives in a repo named exactly **`mrityunjay.github.io`**. Two options:

### Option A — this festival at the site root (served at `https://mrityunjay.github.io/`)
Copy the **contents** of this folder into the root of the `mrityunjay.github.io` repo.

```bash
# from inside a fresh clone of your Pages repo
git clone https://github.com/mrityunjay/mrityunjay.github.io.git
cd mrityunjay.github.io
cp -R /path/to/navaratri-bathukamma-2026/* .
git add .
git commit -m "Add Navaratri & Bathukamma 2026 site"
git push origin main
```
Then in the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch →
`main` / `/ (root)`**. Live in ~1 minute at `https://mrityunjay.github.io/`.

### Option B — as a sub-path (served at `https://mrityunjay.github.io/navaratri-bathukamma-2026/`)
Copy this whole folder into the repo (keep the folder name), commit and push. No path changes are
needed because every link/asset in the site is **relative**.

> Tip: if you ever move it under a sub-path and something 404s, it's almost always an absolute
> `/asset` path — this project deliberately uses relative paths (`assets/...`) to avoid that.

## Notes
- The countdown uses IST (`+05:30`); adjust in `CONFIG` if needed.
- No external JS libraries; only Google Fonts are loaded from the network.
- Tested on mobile (Pixel emulation) and desktop (1280×900) with zero console errors.
```
