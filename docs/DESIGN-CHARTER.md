# Design & Graphic Charter

Visual specification for the NTRO / ONRC website. Use this to replicate the
look and feel on another site. Every value below is taken from the live
stylesheet (`css/style.css`) and markup (`index.html`).

---

## 1. Design philosophy

- **Inspiration:** DSFR — the French State Design System (*Système de Design de
  l'État*). Sober, institutional, trustworthy.
- **Palette logic:** "Blue France" as the single dominant brand colour on light
  backgrounds; red reserved as a sparse accent.
- **Surface strategy:** light by default (white / near-white). Dark surfaces are
  used **once, intentionally** (the blue CTA band) for emphasis.
- **Geometry:** near-flat. Small radii, very subtle shadows, hairline borders.
  Structure comes from **shared 1px borders on grids**, not from cards floating
  on shadow.
- **Signature motifs:**
  - 4px solid blue **top border** on the sticky header.
  - 3px blue **top accent** on panels/dropdowns/cookie banner.
  - 3px blue **left accent** on quick tiles, notices, announcements.
  - `blue-light` background on **all hover** states.
  - Grids with **collapsed shared borders** (cells divided by 1px lines, outer
    border around the whole grid).
  - Romanian **tricolor stripe** in the government identity banner.

---

## 2. Colour palette

### Brand — Blue France
| Token | Hex | Usage |
|---|---|---|
| `--blue` | `#000091` | Primary brand: buttons, accents, icons, top borders |
| `--blue-hover` | `#00006b` | Hover state of primary blue |
| `--blue-active` | `#000052` | Active/pressed |
| `--blue-tint` | `#ececfe` | Icon chips, tag backgrounds, soft fills |
| `--blue-light` | `#f3f3fe` | **Universal hover background**, blue sections |
| `--blue-link` | `#0063cb` | Text links |
| `--blue-link-hov` | `#003b80` | Link hover |

### Accent — Red Marianne / Romania
| Token | Hex | Usage |
|---|---|---|
| `--red` | `#ce0500` | Error accents, sparing emphasis |
| `--red-tint` | `#fce9e9` | Error backgrounds |

### Semantic system colours
| Token | Hex | Usage |
|---|---|---|
| `--green` | `#18753c` | Success, "operational" status, check marks |
| `--green-tint` | `#b8fec9` | Success backgrounds |
| `--orange` | `#b34000` | Warnings, "demo" notices |
| `--orange-tint` | `#fddfd2` | Warning backgrounds |

### Neutral grey scale (DSFR)
| Token | Hex | Usage |
|---|---|---|
| `--g950` | `#161616` | Headings, strong text |
| `--g800` | `#3a3a3a` | Body text |
| `--g600` | `#666666` | Secondary text |
| `--g425` | `#929292` | Placeholders, muted/meta |
| `--g200` | `#e5e5e5` | **Borders** (the default `--border`) |
| `--g100` | `#eeeeee` | Subtle dividers |
| `--g75` | `#f6f6f6` | Hero / footer / alt-section background |
| `--g50` | `#f9f9f9` | Card alt background |
| `--white` | `#ffffff` | Page background, cards, header |

### Flag stripe (tricolor)
Blue `#002b7f` · Yellow `#fcd116` · Red `#ce1126` (three equal vertical bands).

---

## 3. Typography

- **Primary font:** `Inter`, fallback `'Segoe UI', system-ui, -apple-system, sans-serif`.
- **Mono font:** `JetBrains Mono`, fallback `'Fira Code', monospace` — used for
  search-hint tags and date labels.
- **Base:** `16px` root, body `line-height: 1.6`, antialiased.
- **Weights in use:** 400 (body), 500 (nav/labels), 600 (sub-labels), 700
  (buttons, strong), 800 (titles), 900 (available).

### Type scale
| Role | Size | Weight | Letter-spacing | Notes |
|---|---|---|---|---|
| Hero title | `clamp(1.75rem, 3.5vw, 2.625rem)` | 800 | `-.02em` | line-height 1.15; one word in `--blue` |
| Section title | `clamp(1.375rem, 2.5vw, 1.875rem)` | 800 | `-.02em` | line-height 1.25 |
| Stat value | `1.875rem` | 800 | `-.04em` | colour `--blue` |
| Hero subtitle | `1.0625rem` | 400 | — | colour `--g600`, max-width 560px |
| CTA title | `clamp(1.25rem, 2.5vw, 1.75rem)` | 800 | `-.02em` | white on blue |
| Card/article title | `1rem`–`1.125rem` | 700 | — | colour `--g950` |
| Body / descriptions | `.875rem` | 400 | — | colour `--g600`, line-height ~1.7 |
| Button | `.875rem` | 700 | — | — |
| Nav link | `.8125rem` | 500 | — | — |
| **Eyebrow** | `.6875rem` | 700 | `.1em` | UPPERCASE, colour `--blue` |
| Label / meta | `.6875rem`–`.75rem` | 600–700 | `.07em` | often UPPERCASE, colour `--g425/600` |

**Eyebrow pattern** (used above every section title): tiny, bold, uppercase,
wide letter-spacing, blue.

---

## 4. Spacing — 8px grid

| Token | Value |
|---|---|
| `--sp1` | 4px |
| `--sp2` | 8px |
| `--sp3` | 12px |
| `--sp4` | 16px |
| `--sp5` | 20px |
| `--sp6` | 24px |
| `--sp8` | 32px |
| `--sp10` | 40px |
| `--sp12` | 48px |
| `--sp16` | 64px |

Section vertical rhythm: `padding-block: var(--sp16)` (64px), reduced to 40px on
mobile. Section header bottom margin: `--sp10` (40px).

---

## 5. Radii, shadows, borders, motion

### Radii (restrained, near-flat)
`--r-xs` 2px · `--r-sm` 4px · `--r-md` 6px · `--r-lg` 8px.
Buttons use `--r-md`; chips/tags use `--r-xs`/`--r-sm`.

### Shadows (very subtle)
| Token | Value |
|---|---|
| `--shadow-xs` | `0 1px 3px rgba(0,0,0,.07)` |
| `--shadow-sm` | `0 2px 6px rgba(0,0,0,.08)` |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,.10)` |
| `--shadow-focus` | `0 0 0 3px rgba(0,0,145,.25)` (blue focus ring) |

### Borders
- Default: `--border: 1px solid var(--g200)`.
- Accent borders: 4px top (header), 3px top (panels), 3px/4px left (tiles,
  notices).

### Motion
- `--t: 150ms ease` (default), `--t-slow: 250ms ease`.
- Hover transitions on colour/background/border; arrows nudge `translateX(3px)`;
  chevrons rotate 180° on dropdown open.
- `scroll-behavior: smooth`.

---

## 6. Layout

- **Container:** `max-width: 1200px`, centred, side padding `--sp6` (24px).
  - `--wide` 1440px · `--narrow` 880px.
- **Grid pattern (signature):** content grids (`services`, `legislation`,
  `offices`, `contact`) have `gap: 0` with a single outer `border`, and each
  cell carries `border-right`/`border-bottom`. Edge cells strip their borders
  via `:nth-child(3n)` / `:nth-last-child(-n+3)`. This produces the clean
  "table of cells" institutional look.
- **Hero:** two columns `1fr 420px` (content + portal panel), gap 64px; collapses
  to one column ≤1100px (panel hidden).

---

## 7. Components

### Buttons (`.btn`)
Flat, no gradient, 2px border, `--r-md`, weight 700, gap 8px for icon.
| Variant | Fill | Text | Border |
|---|---|---|---|
| `--primary` | `--blue` | white | blue → hover `--blue-hover` |
| `--secondary` | transparent | blue | blue; hover bg `--blue-light` |
| `--tertiary` | transparent | blue | none; hover bg `--blue-light` |
| `--ghost` | transparent | `--g600` | `--g200`; hover bg `--g75` |
| `--white` | white | blue | white (for blue backgrounds) |
| `--white-outline` | transparent | white | `rgba(255,255,255,.5)` |

Sizes: `--sm` / (default) / `--lg` / `--xl`; `--block` full-width.
Focus: `box-shadow: var(--shadow-focus)`.

### Header
Sticky, white, **4px solid `--blue` top border**, hairline bottom border,
`--shadow-xs`. Logo = 38px blue rounded square mark + acronym (800) + small
grey full name. Nav links 13px/500 with a 3px transparent bottom border that
turns blue on active.

### Government identity banner
Thin white bar above header: tricolor stripe + institution name (700, 12px) +
subtitle (11px grey), language buttons on the right (active = blue fill).

### Dropdown menu
White, `--border`, **3px blue top border**, `--shadow-md`, min-width 280px.
Items: icon + bold label + small grey hint, divided by `--g100`, hover
`--blue-light`. Fades/rises in (`translateY(-4px)` → 0).

### Search bar
White, 2px `--g200` border, `--r-md`; on focus → blue border + focus ring.
Left `select` (grey bg, custom chevron), flexible input, solid blue submit
button. Below it: mono "hint tags" on `--g100`.

### Cards / tiles (shared pattern)
White cell, padding `--sp6`–`--sp8`, icon chip (blue-tint bg, blue icon,
`--r-sm`), title (700, `--g950`), description (`.875rem`, `--g600`), link
(blue, 700, underline on hover). Hover: background `--blue-light`; service
cards add a 3px blue top bar that fades in.

### Tags / badges (`.tag`)
Tiny (11px), 700, uppercase, `--r-xs`. Variants: `--blue` (blue-tint),
`--green`, `--orange`, `--eu` (`#fff3cd` / `#7a5800`).

### Notices (`.notice-bar`) & announcements (`.ann`)
Left-accent bars: 4px blue (default), orange (`--warn`), green (`--ok`), red
(`--err`), on tinted/white backgrounds with a matching icon.

### Stats bar
White, 5-column grid divided by right borders; big blue value (1.875rem/800) +
small uppercase grey label.

### News block
DSFR tab strip (3px active underline) + featured article (16:6 blue-gradient
image header) + compact article list with mono dates and a right-side
announcements sidebar.

### CTA band (the one dark element)
Solid `--blue` background, white title + `rgba(255,255,255,.75)` subtitle,
white buttons. Used once near the page end for emphasis.

### Footer
`--g75` background, hairline top border. 5-column grid (`2fr 1fr 1fr 1fr 1fr`):
brand block (mark + description + social squares) then link columns. Column
heads: 11px uppercase with a 2px blue underline. Bottom bar: copyright + legal
links + small bordered compliance badges.

### Iconography
Inline SVG sprite (`<symbol>`), **stroke style**: `fill:none`,
`stroke:currentColor`, `stroke-width:1.75` (2 for small UI arrows),
round caps/joins. Common sizes 12–26px. Icons inherit colour — grey by default,
blue on hover/active, green for success.

---

## 8. Responsive breakpoints

| Max-width | Key changes |
|---|---|
| **1100px** | Hero → 1 col, portal panel hidden; footer → 3 cols; offices → 3 cols |
| **900px** | Services → 2 cols; stats → 3 cols; about → 1 col; news → 1 col; legislation → 2 cols; CTA → 1 col |
| **768px** | Gov banner + desktop nav hidden, **mobile toggle shown**; services/legislation/contact → 1 col; footer → 2 cols; stats → 2 cols; section padding 40px |
| **480px** | Logo full-name hidden; hero quick tiles → 2 cols; footer → 1 col; search bar stacks vertically; CTA actions stack |

Approach: **progressive collapse** of multi-column grids to single column;
borders are re-added/removed at each step so the shared-border grid never breaks.

---

## 9. Accessibility & interaction notes

- Visible focus ring via `--shadow-focus` (3px blue glow).
- `.sr-only` utility for screen-reader-only text.
- Colour contrast: `--g800`/`--g950` body on white; blue `#000091` on white
  passes AA.
- Status conveyed by icon + colour (not colour alone).
- Reduced, purposeful motion (150ms); smooth scroll.

---

## 10. Copy-paste design tokens

Drop this `:root` block into a new project to inherit the system 1:1.

```css
:root {
  /* Blue France */
  --blue:#000091; --blue-hover:#00006b; --blue-active:#000052;
  --blue-tint:#ececfe; --blue-light:#f3f3fe;
  --blue-link:#0063cb; --blue-link-hov:#003b80;

  /* Red Marianne / accent */
  --red:#ce0500; --red-tint:#fce9e9;

  /* Semantic */
  --green:#18753c; --green-tint:#b8fec9;
  --orange:#b34000; --orange-tint:#fddfd2;

  /* Greys */
  --g950:#161616; --g800:#3a3a3a; --g600:#666666; --g425:#929292;
  --g200:#e5e5e5; --g100:#eeeeee; --g75:#f6f6f6; --g50:#f9f9f9;
  --white:#ffffff;

  /* Type */
  --font:'Inter','Segoe UI',system-ui,-apple-system,sans-serif;
  --mono:'JetBrains Mono','Fira Code',monospace;

  /* Spacing (8px grid) */
  --sp1:.25rem; --sp2:.5rem; --sp3:.75rem; --sp4:1rem; --sp5:1.25rem;
  --sp6:1.5rem; --sp8:2rem; --sp10:2.5rem; --sp12:3rem; --sp16:4rem;

  /* Radii */
  --r-xs:2px; --r-sm:4px; --r-md:6px; --r-lg:8px;

  /* Shadows */
  --shadow-xs:0 1px 3px rgba(0,0,0,.07);
  --shadow-sm:0 2px 6px rgba(0,0,0,.08);
  --shadow-md:0 4px 12px rgba(0,0,0,.10);
  --shadow-focus:0 0 0 3px rgba(0,0,145,.25);

  /* Motion + border */
  --t:150ms ease; --t-slow:250ms ease;
  --border:1px solid var(--g200);
}
```

### Quick-start rules

```css
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;-webkit-font-smoothing:antialiased;scroll-behavior:smooth}
body{font-family:var(--font);background:var(--white);color:var(--g800);line-height:1.6}
a{color:var(--blue-link);text-decoration:underline;text-underline-offset:3px}
a:hover{color:var(--blue-link-hov)}
.container{width:100%;max-width:1200px;margin-inline:auto;padding-inline:var(--sp6)}
.header{position:sticky;top:0;background:var(--white);border-top:4px solid var(--blue);border-bottom:var(--border)}
.btn{display:inline-flex;align-items:center;gap:var(--sp2);padding:.625rem var(--sp5);border-radius:var(--r-md);font-size:.875rem;font-weight:700;border:2px solid transparent;text-decoration:none;transition:all var(--t)}
.btn--primary{background:var(--blue);color:#fff;border-color:var(--blue)}
.btn--primary:hover{background:var(--blue-hover)}
```

---

## 11. Replication checklist

1. Load **Inter** (400–800) — self-host for sovereignty/CSP.
2. Paste the `:root` tokens.
3. Apply the 4px-blue-top-border header + tricolor identity banner.
4. Use the **shared-border grid** pattern for all card collections.
5. Eyebrow + bold title above each section.
6. Keep surfaces light; allow exactly one blue CTA band.
7. Hover = `--blue-light` background everywhere.
8. Icons: 1.75 stroke-width, `currentColor`, inline SVG sprite.
9. Apply the four responsive breakpoints (1100 / 900 / 768 / 480).
