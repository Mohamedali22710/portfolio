---
name: Systematic Engineering (with Reference-Driven Visual Enhancements)
colors:
  surface: '#12161D'
  surface-dim: '#10131a'
  surface-bright: '#363941'
  surface-container-lowest: '#0A0D12'
  surface-container-low: '#141821'
  surface-container: '#181D26'
  surface-container-high: '#202633'
  surface-container-highest: '#2B3242'
  on-surface: '#e0e2ec'
  on-surface-variant: '#c1c6d6'
  inverse-surface: '#e0e2ec'
  inverse-on-surface: '#2d3038'
  outline: '#8b919f'
  outline-variant: '#414753'
  surface-tint: '#3E8EFF'
  primary: '#3E8EFF'
  on-primary: '#002f65'
  primary-container: '#2563EB'
  on-primary-container: '#dbeafe'
  inverse-primary: '#005cba'
  secondary: '#c3c6d0'
  on-secondary: '#2d3038'
  secondary-container: '#454951'
  on-secondary-container: '#b5b8c2'
  tertiary: '#38BDF8'
  on-tertiary: '#003549'
  tertiary-container: '#0284C7'
  on-tertiary-container: '#e0f2fe'
  error: '#F87171'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d7e3ff'
  primary-fixed-dim: '#aac7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#00458e'
  secondary-fixed: '#dfe2ec'
  secondary-fixed-dim: '#c3c6d0'
  on-secondary-fixed: '#181c23'
  on-secondary-fixed-variant: '#43474f'
  tertiary-fixed: '#e0f2fe'
  tertiary-fixed-dim: '#38BDF8'
  on-tertiary-fixed: '#001f2e'
  on-tertiary-fixed-variant: '#004c6d'
  background: '#0A0D12'
  on-background: '#e0e2ec'
  surface-variant: '#1A1F28'
  bg: '#0A0D12'
  surface-elevated: '#1A1F28'
  border: '#232A35'
  border-strong: '#2E3644'
  text-primary: '#EDEFF2'
  text-secondary: '#9AA3B2'
  text-muted: '#5C6675'
  accent-hover: '#63A6FF'
  accent-soft: '#3E8EFF14'
  accent-cyan: '#38BDF8'
  success: '#34D399'
  warning: '#FBBF24'
typography:
  display:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.05'
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.05'
    letterSpacing: -0.03em
  h1:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1-mobile:
    fontFamily: Inter
    fontSize: 34px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h2-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: '0'
  h3-mobile:
    fontFamily: Inter
    fontSize: 19px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-mobile:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  caption-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  caption-mono-mobile:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter-desktop: 24px
  margin-desktop: 24px
  gutter-tablet: 20px
  margin-tablet: 32px
  gutter-mobile: 16px
  margin-mobile: 20px
  section-gap-desktop: 128px
  section-gap-mobile: 72px
---

# Mohamed Ali — Developer Portfolio
### Design Specification for Stitch (Updated with Reference-Driven System)

**Type:** Premium personal portfolio, dark navy-first, SaaS/developer-grade quality
**Subject:** Backend / Full-Stack Developer with a GIS background
**One-line brief:** *Mohamed Ali is a serious backend/full-stack engineer who designs and builds reliable software systems — not a template-generated dev portfolio.*

---

## 0. Design Thesis

Everything on this page should read as **disciplined engineering with modern developer aesthetic**. The signature motif is a **live system-status language** — monospace labels, uptime/status indicators, and "operational" states — reused across the hero, GitHub section, and footer.

Gradients are strictly restricted to deliberate accent highlights (hero name text, primary CTA button, section heading highlight, service icon tiles, and the info box in Education). The hero features a blurred dark code-screen background with a dark overlay. Light glow and hover lift are allowed on cards and the circular profile photo.

---

## 1. Design Tokens

### 1.1 Color

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#0A0D12` | Page background — dark navy near-black, faint blue undertone |
| `--surface` | `#12161D` | Cards, section panels |
| `--surface-elevated` | `#1A1F28` | Modals, hovered cards, nav containers |
| `--border` | `#232A35` | Hairline borders, dividers |
| `--border-strong` | `#2E3644` | Hover borders, focus outlines |
| `--text-primary` | `#EDEFF2` | Headlines, primary copy |
| `--text-secondary` | `#9AA3B2` | Body copy, descriptions |
| `--text-muted` | `#5C6675` | Captions, timestamps, labels |
| `--accent` | `#3E8EFF` | Primary accent — electric blue |
| `--accent-hover` | `#63A6FF` | Hover/active state of accent |
| `--accent-soft` | `#3E8EFF14` (8% alpha) | Accent tints, badge backgrounds |
| `--accent-cyan` | `#38BDF8` | Cyan tint for gradient pairing with electric blue |
| `--success` | `#34D399` | "Operational" / status-good indicator |
| `--warning` | `#FBBF24` | In-progress states |
| `--error` | `#F87171` | Errors, destructive actions |

*Note on Gradients:* Only electric blue (`#3E8EFF`) to cyan (`#38BDF8`) gradients are permitted. No orange, red, or purple gradients.

### 1.2 Typography

- **Body / UI face:** Inter — weights 400, 500, 600, 700
- **Display face:** Inter, weight 700–800, tight tracking (-0.02em to -0.04em)
- **Utility / mono face:** JetBrains Mono — weights 400, 500. Reserved for: nav logo mark, status labels, tech badges, timeline dates, stat numbers, section eyebrows.

### 1.3 Spacing & Grid

- Base unit: **8px**. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Desktop container: max-width 1240px, 24px side gutter, 12-column grid, 24px gutter.
- Section vertical rhythm: 128px between major sections desktop, 72px mobile.

### 1.4 Radius & Elevation

- Radius scale: `rounded-sm` (4px), `rounded-btn` (8px–12px for buttons), `rounded-card` (12px for standard cards), `rounded-lg` (16px), and `rounded-full` (pills: filter chips, nav items, status pills, badges, tech chips, level pills, and the centered nav container).
- Shadows & Glow:
  - `--shadow-sm: 0 1px 2px rgba(0,0,0,0.4)`
  - `--shadow-md: 0 8px 24px rgba(0,0,0,0.35)`
  - `--shadow-accent: 0 0 0 1px #3E8EFF, 0 8px 24px rgba(62,142,255,0.15)`
  - Light glow and hover lift on cards and the circular profile photo.

### 1.5 Motion

- Duration: 150ms (micro/hover), 250ms (reveal), 400ms (page-level).
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` for reveals; `ease` for hovers.
- Strictly respects `prefers-reduced-motion`.

---

## 2. Signature Element

**"System Status" language.** A small monospace status pill appears in hero, header, GitHub section, and footer.

---

## 3. Site Map & Section-by-Section Spec

### 3.1 Header (hero.png)
Fixed top. Left: small rounded-square avatar + name + subtitle. Center: one rounded-full outlined container with nav pills (Home, About, Education, Services, Projects, Contact). Right: green-dot "Available" pill + square theme/terminal toggle button. Mobile: hamburger with slide-down menu. On `/projects` pages use the simpler header from `project.png` (name left, plain links center, toggle and a green outlined "Contact via WhatsApp" button right).

### 3.2 Hero (hero.png, hero2.png)
Blurred dark code-screen background with a dark overlay. Centered circular photo (`assets/mohamed.jpg`) with cyan ring, small glowing green status dot top-right, 2 tiny floating dots. Heading "Hi, I'm Mohamed" with blue-cyan gradient on the name. Subtitle "Backend Developer | Full-Stack Developer" in colored segments. Description in a rounded bordered card with highlighted keywords (scalable, REST APIs, Node.js, TypeScript, PostgreSQL, MongoDB). Action buttons: "View My Work" (blue gradient), "Get In Touch" (outlined), "Download CV" (gray, download icon).

### 3.3 About
Short narrative story + 4 stat cards from `STATS`.

### 3.4 Education (Screenshot_2026-11-07_000303.png)
Left card with gradient icon, institution, specialization, graduation year, location, and gradient info box. Right: grid of skill chips + 2 feature cards with icons. Content sourced from CV placeholders in `mockData.en.ts`.

### 3.5 Services (serv.png, serves.png)
Small pill badge "Services I Offer", big gradient heading "Professional Services", subtitle, 3 cards: tinted icon square, "Popular" badge on the first card, title, description, green-check list, divider, full-width "Discuss Your Project →" button. Services: Backend & API Development, Full-Stack Web Development, GIS & Web Mapping. NO prices.

### 3.6 Skills (skills.png)
4-column responsive grid. Card: icon square (top-left), circular progress ring indicator (top-right, filled by level: Advanced = 95%, Working Knowledge = 80%; no percentage text), title, one-line description, divider, uppercase category label, level pill with check icon. Hover: lift + title turns accent blue.

### 3.7 Featured Projects
The 3 featured projects using the same cards as `/projects`, plus a "View all projects" button.

### 3.8 Contact & Footer
Contact form with direct channels + Footer with live telemetry status strip.

### 3.9 /projects Page (project.png)
Large rounded search bar. Filter chips with live counts: All Projects, Backend, Full Stack, APIs, GIS (active = filled blue). Grid of cards: 16:9 image with overlaid category pill and blue "Featured" pill, title, 2-line description, outlined tech chips with "+N more", blue "View Project →" link. Search + filters work together with animated reflow. Branded fallback placeholder when no screenshot exists.

### 3.10 /projects/:slug Page (projectdetieles.png)
Left: big H1, short description, "Project Media" carousel (counter "1 / N", fullscreen modal button), then Problem, Solution, Architecture, Key Features, Challenges, What I Learned. Right (sticky): "Project Details" card with Category, Technologies Used chips, "View Live Project" (primary, external icon), "View Source Code" (outlined, GitHub icon). If a URL is missing, hide the corresponding button. Mobile: details card moves above the content.

---

## 9. Overrides (reference-driven)

The following overrides formally resolve all historical design rules in favor of the reference screenshots:

1. **Pills Allowed:** Filter chips, nav items, status pills, badges, tech chips, level pills, and the main navbar pill container are allowed to use `rounded-full`. Content cards remain `rounded-card` (12px), and buttons are `rounded-btn` (8px–12px).
2. **Gradient Usage:** Gradients are allowed strictly on:
   - Hero name text ("Mohamed" in `from-[#3E8EFF] to-[#38BDF8]`)
   - Primary CTA button ("View My Work")
   - Section heading highlight (e.g. "Professional Services")
   - Service icon tiles
   - Education info box
   All gradients must strictly use the palette's accent blue (`#3E8EFF`) and cyan tint (`#38BDF8`). No orange, red, or purple gradients are permitted (orange and purple from reference screenshots are discarded in favor of the project's electric blue / cyan palette).
3. **Circular Progress Rings:** Circular SVG progress rings are permitted on technical skill cards, with stroke length representing proficiency level (`Advanced` = 95%, `Working Knowledge` = 80%). No numeric percentage text inside the ring; the visual stroke speaks for itself.
4. **Hero Background:** Replaced single radial glow with a blurred dark code-screen background overlaid with a dark navy scrim (`#0A0D12` at 85% opacity).
5. **Hero Portrait Frame:** Replaced rectangular frame with a centered circular profile photo (`assets/mohamed.jpg`) framed by a cyan glowing ring, glowing green status dot top-right, and subtle floating accents. Face is completely unmanipulated and preserved in its natural sharpness.
6. **Card Glow and Lift:** Subtle accent glow (`box-shadow: 0 8px 30px rgba(62,142,255,0.12)`) and gentle hover lift (`-translate-y-1`) are allowed on cards.
7. **System Status Integrity:** Monospace labels, live telemetry badges, and the footer operational status strip remain preserved as the authentic engineering signature.

