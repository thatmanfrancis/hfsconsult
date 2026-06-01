# 📐 Design Pattern Specification — Hausevo (Shack) & HFS Consult

> **MANDATORY**: Any AI coding assistant, chatbot, or developer working in this workspace **MUST** read and apply this specification completely before writing, modifying, or refactoring any frontend code. No exceptions.

---

## 🎯 Overview

This document defines the complete frontend design language built across two projects:
- **Hausevo** (`/projects/shack`) — verified housing platform
- **HFS Consult** (`/projects/hfsconsult`) — investment consulting firm

Both projects share the same underlying design system: flat, clean, minimal, typographically-strong, and entirely shadow-free. The aesthetic is **premium but restrained** — it communicates trust and authority without heavy decoration.

---

## 🔤 1. Typography

### Font
- **Primary Font**: `Nunito` from Google Fonts (loaded via `next/font/google`)
- **No fallback font stacks** with serif fonts. Only: `system-ui, -apple-system, sans-serif` as a fallback
- **Font setup in `layout.tsx`**:
  ```tsx
  import { Nunito } from "next/font/google";
  const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"], weight: ["300","400","500","600","700","800"] });
  ```
- **Font variable in `globals.css`**:
  ```css
  @theme inline { --font-sans: var(--font-nunito); }
  ```
- The `html` element receives `className={`${nunito.variable} h-full antialiased scroll-smooth`}`

### Font Weight Conventions
| Usage | Weight Class |
|---|---|
| Page headings (h1) | `font-light` + `font-extrabold` (split across spans) |
| Section headings (h2, h3) | `font-extrabold` |
| Body text / descriptions | `font-semibold` |
| Labels, badges, uppercase trackers | `font-black` |
| Nav links, link text | `font-bold` or `font-semibold` |
| Body paragraph text | `font-medium` |

### Heading Pattern
Split `h1` headings into light + bold spans for visual contrast — a core motif across both projects:
```tsx
<h1 className="leading-[1.05] tracking-tight text-zinc-900">
  <span className="block text-4xl sm:text-5xl md:text-6xl font-light text-zinc-500">
    Investing with
  </span>
  <strong className="block text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0D21A5]">
    Clarity & Confidence
  </strong>
</h1>
```

---

## 🚫 2. The Zero-Shadow Policy

**Non-negotiable rule**: There are **absolutely no drop shadows** anywhere on any element in this workspace.

### Prohibited Classes — NEVER use:
- `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`, `shadow-inner`
- Inline `box-shadow: ...` CSS properties
- `filter: drop-shadow(...)`

### How to Create Visual Depth (Without Shadows):
- Use thin, soft borders: `border border-[#B9C7E8]/25` or `border border-zinc-100`
- Use background color contrast between sections (white card on `#f7f9fd` background)
- Use a 2px left colored border stripe on service/feature cards to signal hierarchy
- Use opacity variants of brand colors for filled backgrounds: `bg-[#0D21A5]/5`

---

## 📐 3. Border Radius System

Reject all massive, bloated corner curves. Maintain a clean, structured, consistent radius system:

| Element | Class |
|---|---|
| Major layout cards, grids, modal panels | `rounded-2xl` (16px) |
| Form inputs, textareas, select wrappers | `rounded-xl` |
| Icon containers, stat labels, nav link hovers | `rounded-lg` |
| Primary CTA buttons | `rounded-full` |
| Pill badges, status indicators | `rounded-full` |
| Small icon chips inside cards | `rounded-lg` or `rounded-xl` |

**Never use**: `rounded-[2.5rem]`, `rounded-[3rem]`, `rounded-3xl`, `rounded-4xl`, or any custom `rounded-[Xrem]` values.

---

## 🌐 4. Scrollbar Conventions

- **Rule**: Browser scrollbars remain completely **native and unstyled**.
- **Prohibited**: Never inject `::-webkit-scrollbar`, `::-webkit-scrollbar-track`, or `::-webkit-scrollbar-thumb` CSS rules into `globals.css`.
- Both the Shack and HFS Consult projects leave scrollbars entirely at their system defaults.

---

## 🧭 5. Sticky Header & Navigation

### Structure
The header is a **full-width sticky bar** mounted at the very top of the viewport. Never float or nest it inside a card, and never apply glassmorphism or margins to it.

```tsx
<header className="w-full bg-white border-b border-[#B9C7E8]/20 sticky top-0 z-50">
  <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16 w-full">
    {/* Logo */}
    {/* Desktop nav links */}
    {/* CTA button */}
    {/* Mobile hamburger */}
  </nav>
  {/* Mobile dropdown panel (below the nav, inside the header) */}
</header>
```

### Key Rules:
- Height: fixed at `h-16`
- Background: flat `bg-white`, no transparency, no blur
- Bottom border: `border-b border-[#B9C7E8]/20` or `border-b border-zinc-100`
- **No shadow** (`shadow-sm` and above are prohibited)
- Nav links use `hover:bg-zinc-50 rounded-lg` for hover state
- Active links use `text-zinc-900` (darker text, not a background highlight)
- CTA button: `rounded-full bg-[#0D21A5] hover:bg-[#0D21A5]/85 text-white font-bold text-xs px-5 py-2.5`

### Mobile Hamburger (Exact Shack Pattern):
```tsx
<button className="md:hidden flex flex-col gap-1.5 p-2">
  <span className={`block h-0.5 w-5 bg-zinc-900 transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
  <span className={`block h-0.5 w-5 bg-zinc-900 transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
  <span className={`block h-0.5 w-5 bg-zinc-900 transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
</button>
```

### Mobile Menu Panel:
```tsx
<div className="md:hidden border-t border-zinc-100 bg-white px-6 py-4 flex flex-col gap-1 w-full">
  {/* Nav buttons with: px-3 py-2.5 text-xs font-bold hover:bg-zinc-50 rounded-lg */}
  {/* CTA button at bottom: rounded-full bg-[#0D21A5] */}
</div>
```

---

## 📦 6. Page Layout Architecture

### Overall Structure
```
<div className="min-h-screen flex flex-col bg-[#f7f9fd] font-sans antialiased">
  <header /> {/* Sticky full-width */}
  <main className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-10 py-10 flex flex-col gap-16">
    {/* Sections stacked vertically with gap-16 between them */}
  </main>
  <footer /> {/* Full-width, white, border-top */}
</div>
```

### Key Rules:
- **Never** wrap the entire landing page inside a rounded outer container card
- The background is a flat `#f7f9fd` — sections sit directly on it
- Sections are separated by `border-t border-[#B9C7E8]/10` dividers, not visual gaps
- Max content width: `max-w-6xl`
- Horizontal padding: `px-6 md:px-10`

---

## ⚡ 7. Icons — Inline SVG Only

- **Rule**: All icons are written as hand-crafted inline SVGs. No external icon packages.
- **Prohibited**: `lucide-react`, `@heroicons/react`, `react-icons`, `font-awesome`, etc.
- **Stroke conventions**: `strokeWidth="2"` for body icons, `strokeWidth="2.5"` for interactive icons, `strokeWidth="3"` for label/label icon pairs
- **Size**: typically `width="13"` to `width="20"` depending on context
- Example pattern for a nav icon:
  ```tsx
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
  ```

---

## 📋 8. Interactive Strategy Planner (Shack Search Bar Pattern)

The search/selector bar pattern mirrors Shack's homepage search widget exactly:

```tsx
<div className="bg-white rounded-2xl border border-[#B9C7E8]/35 p-2 flex flex-col md:flex-row items-stretch md:items-center gap-2">
  {/* Each selector block */}
  <div className="flex-1 flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-[#B9C7E8]/20">
    <div className="flex flex-col gap-1 w-full">
      <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
        {/* inline SVG icon */}
        Label
      </span>
      <select className="bg-transparent text-sm font-extrabold outline-none cursor-pointer text-zinc-800 w-full border-0 p-0 focus:ring-0">
        {/* options */}
      </select>
    </div>
  </div>
  {/* Action button at the end */}
  <button className="h-14 md:w-14 rounded-xl bg-[#0D21A5] text-white ...">
    {/* Search/submit SVG icon */}
  </button>
</div>
```

---

## 📝 9. Forms & Inputs

```tsx
<input
  className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#B9C7E8] focus:bg-white transition-all text-zinc-800"
/>
<textarea
  className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#B9C7E8] focus:bg-white transition-all text-zinc-800 resize-none"
/>
```

### Key Rules:
- No shadow on focus or default state
- Transition only applies to `border-color` and `background`
- Labels: `text-[9.5px] font-black text-zinc-400 uppercase tracking-widest`
- Submit buttons: `rounded-full bg-[#0D21A5] text-white font-bold text-xs py-3.5`

---

## 🃏 10. Card Patterns

### Standard Content Card
```tsx
<div className="bg-white p-6 rounded-2xl border border-[#B9C7E8]/25">
  {/* Content */}
</div>
```

### Feature/Service Card (with left accent stripe)
```tsx
<div className="bg-white p-6 rounded-2xl border border-[#B9C7E8]/25 relative overflow-hidden">
  <div className="absolute top-0 left-0 w-2 h-full bg-[#0D21A5]" /> {/* or #D1D067 or #B9C7E8 */}
  <div className="pl-1"> {/* Content offset from stripe */}
  </div>
</div>
```

### Dark Brand Card (Vision/CTA panels)
```tsx
<div className="bg-[#0D21A5] text-white p-8 rounded-2xl border border-[#B9C7E8]/25">
  {/* White/gold text content */}
</div>
```

---

## 🔘 11. Button Conventions

| Type | Classes |
|---|---|
| Primary CTA | `rounded-full bg-[#0D21A5] hover:bg-[#0D21A5]/85 text-white font-bold text-xs px-6 py-3.5` |
| Secondary/Ghost | `rounded-full bg-[#B9C7E8]/20 hover:bg-[#B9C7E8]/40 border border-[#B9C7E8]/30 text-[#0D21A5] font-bold text-xs px-6 py-3.5` |
| Text-only link | `text-[9px] font-black uppercase tracking-widest text-[#0D21A5] hover:text-[#D1D067]` |
| Destructive/Muted | `border border-zinc-200 rounded-full text-zinc-500 hover:bg-zinc-50` |

---

## 🦶 12. Footer

```tsx
<footer className="w-full bg-white border-t border-[#B9C7E8]/20 py-8">
  <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
    {/* Logo + brand name */}
    {/* Copyright text: text-[10px] font-bold text-zinc-400 */}
    {/* Back-to-top button: rounded-lg bg-zinc-50 border h-8 w-8 */}
  </div>
</footer>
```

---

## 🏷️ 13. Brand Palette — HFS Consult

| Token | Hex | Usage |
|---|---|---|
| `hfs-blue` | `#0D21A5` | Headings, primary CTA, dark card backgrounds, active states |
| `hfs-lavender` | `#B9C7E8` | Borders (`/25`), card outlines, background fills (`/20`), dividers (`/10`) |
| `hfs-gold` | `#D1D067` | Accent badges, left-border stripes, trust marks, secondary illustrations |

---

## 🏷️ 14. Brand Palette — Hausevo (Shack)

| Token | Hex / Tailwind | Usage |
|---|---|---|
| Foreground | `zinc-900` | Headings, strong text |
| Muted text | `zinc-500`, `zinc-400` | Body text, descriptions |
| Background | `#f5f5f5` | Page background |
| Borders | `zinc-100`, `zinc-200` | Dividers, card borders |
| CTA | `zinc-900` background | Primary action buttons |
| Hover states | `zinc-50` background | Nav links, dropdown items |

---

## 🚫 15. What is ALWAYS Prohibited

| Item | Why |
|---|---|
| `shadow-*` classes of any kind | Zero-shadow policy |
| `rounded-[Xrem]` custom values above `2xl` | Excessive border radius |
| External icon packages | SVG-only policy |
| Glassmorphism on the sticky header | Flat header convention |
| Custom `::-webkit-scrollbar` CSS | Native browser scrollbars only |
| Floating/nested header cards with margin | Exact Shack sticky header structure required |
| `backdrop-filter` or `blur` on the navbar | Flat header — no effects |
