# ⚡ UI Component Library

> **Zero-dependency, copy-paste UI component collection built with Semantic HTML, Tailwind CSS, and minimal vanilla JavaScript.**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38bdf8.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0+-646cff.svg)](https://vitejs.dev/)
[![WCAG](https://img.shields.io/badge/WCAG-2.1_AA-emerald.svg)](https://www.w3.org/WAI/WCAG21/quickref/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🎯 Philosophy

Modern frontend development often defaults to bloated component libraries wrapped in heavy framework runtimes. This repository provides a **clean, practical, copy-paste alternative** inspired by the minimalism of *shadcn/ui* and *Tailwind UI*, but engineered for **pure vanilla-first interoperability**.

* **Copy-Paste First** — No npm package lock-in. Pick the exact component markup and drop it into your project.
* **100% Semantic HTML & ARIA** — Built with native HTML5 tags, complete `role`, `aria-*` attributes, and roving tabindex keyboard interactions.
* **Tailwind CSS & CSS Tokens** — Styled using atomic Tailwind utilities mapped to decoupled CSS variables (`--color-surface`, `--color-border`, `--color-ink`, `--color-muted`).
* **Zero-Framework Vanilla JS** — Lightweight, self-contained TypeScript handlers (< 1KB per component) that work seamlessly in React, Vue, Astro, Svelte, Django, Laravel, Rails, or pure HTML.

---

## 📂 Repository Structure

```text
├── src/
│   ├── components/                # 8 Categories · 80 Copy-ready components
│   │   ├── accordion/             # FAQ disclosures, numbered expanders, nested accordions
│   │   ├── carousel/              # Hero sliders, metric carousels, draggable reels
│   │   ├── pagination/            # Numeric bars, steppers, load more, jump-to-page
│   │   ├── popover/               # Context flyouts, shortcut menus, confirmation boxes
│   │   ├── quote/                 # Editorial pull quotes, testimonial cards, citations
│   │   ├── rating/                # 5-star ratings, NPS meters, sentiment reactions
│   │   ├── tabs/                  # Underline nav, segmented pills, vertical sidebars
│   │   ├── treeview/              # File trees, JSON inspectors, RBAC hierarchies
│   │   └── registry.ts            # Typed registry index of all components
│   ├── styles/
│   │   └── main.css               # Tailwind directives + root CSS custom properties
│   └── main.ts                    # Showcase interactive preview application
├── index.html                     # Local interactive component browser & sandbox
├── package.json                   # Scripts: dev, build, preview, typecheck
├── tailwind.config.js             # Theme tokens with light & dark mode
├── tsconfig.json                  # Strict TypeScript configuration
└── vite.config.ts                 # Vite dev server & bundler config
```

---

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/robinsehnalik/componentlibrary.git
cd componentlibrary

# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

### 2. Launch Local Interactive Showcase

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore all 80 components with live interactive state, viewport resizing, dark/light theme switching, and 1-click code copying.

### 3. Build for Production

```bash
pnpm build
```

---

## 🧩 Component Directory

The library contains **8 core categories** and **80 interactive variants**:

| Category | Count | Key Variants | Description |
| :--- | :---: | :--- | :--- |
| **Carousel** | 10 | Hero Slider, Telemetry Stat, Card Deck, Story Reel, Thumb Gallery, Marquee Reel | High-performance content sliders, swipe reels, and infinite stream tickers |
| **Tree View** | 10 | File Explorer, JSON Inspector, RBAC Permissions, Table of Contents, Git Tree | Expandable hierarchical explorers with keyboard navigation |
| **Popover** | 10 | Profile Flyout, Shortcut Palette, Confirm Box, Feed Popover, Color Palette | Click-triggered overlays, context menus, and floating utility sheets |
| **Rating** | 10 | 5-Star Rating, 10-Point NPS, Sentiment Reaction, Decimal Half-Star, Multi-tier | Interactive scoring meters, feedback rows, and satisfaction sliders |
| **Accordion** | 10 | Minimalist FAQ, Step-by-Step, Independent Multi, Code Output, Log Accordion | Collapsible disclosure panels with smooth CSS transitions |
| **Quote** | 10 | Executive Card, Editorial Pull Quote, ASCII Brutalist, Chat Bubble, Metric Pill | Testimonial cards, blockquotes, and citation formats |
| **Pagination** | 10 | Numeric Page Bar, Compact Stepper, Segmented Pills, Load More, A-Z Index | Page split controllers, row selectors, and workflow step navigators |
| **Tabs** | 10 | Underline Navigation, Segmented Pills, Boxed Code, Vertical Sidebar, Badges | Panel switchers with state preservation and keyboard controls |

---

## 💻 How to Use in Any Stack

### Pure HTML & Tailwind CSS
Copy the `.html` file from `src/components/<category>/<variant>.html` and include the matching initialization script from `.ts`.

```html
<!-- Example: tabs-segmented-pills.html -->
<div class="inline-flex border border-border p-1 bg-surface font-mono" id="my-tabs">
  <button class="px-3 py-1 bg-ink text-paper font-bold" data-tab="1">Overview</button>
  <button class="px-3 py-1 text-muted hover:text-ink" data-tab="2">Metrics</button>
</div>

<script>
  // Vanilla JS interaction
  const container = document.getElementById('my-tabs');
  const buttons = container.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.className = 'px-3 py-1 text-muted hover:text-ink cursor-pointer');
      btn.className = 'px-3 py-1 bg-ink text-paper font-bold cursor-pointer';
    });
  });
</script>
```

### Astro / Svelte / Vue / React
Because components use semantic standard HTML and standard CSS classes, you can drop them straight into any template:

#### In Astro:
```astro
---
// src/components/Accordion.astro
---
<div class="border border-border divide-y divide-border font-mono">
  <details class="group p-4 open:bg-black/5">
    <summary class="cursor-pointer font-bold flex justify-between items-center">
      <span>What is the bundle weight?</span>
      <span class="group-open:rotate-180 transition-transform">▼</span>
    </summary>
    <p class="pt-2 text-xs text-muted">Zero runtime overhead. Pure HTML and Tailwind.</p>
  </details>
</div>
```

#### In React / Next.js:
```tsx
import React, { useState } from 'react';

export function MetricCarousel() {
  const [active, setActive] = useState(0);
  const metrics = [
    { label: 'First Contentful Paint', val: '0.24s', badge: '100 SCORE' },
    { label: 'Interaction to Next Paint', val: '18ms', badge: 'OPTIMAL' },
  ];

  return (
    <div className="border border-border bg-surface p-5 font-mono">
      <div className="flex justify-between border-b pb-2 text-xs text-muted">
        <span>Production Telemetry ({active + 1}/{metrics.length})</span>
        <div className="flex gap-1">
          <button onClick={() => setActive((active - 1 + metrics.length) % metrics.length)} className="border px-2">‹</button>
          <button onClick={() => setActive((active + 1) % metrics.length)} className="border px-2">›</button>
        </div>
      </div>
      <div className="flex justify-between items-center py-3">
        <div>
          <span className="text-xs text-muted">{metrics[active].label}</span>
          <div className="text-2xl font-bold">{metrics[active].val}</div>
        </div>
        <span className="text-xs bg-emerald-500/10 text-emerald-500 px-2 py-1 font-bold">{metrics[active].badge}</span>
      </div>
    </div>
  );
}
```

---

## 🎨 Design Tokens & Customization

The components rely on 5 fundamental CSS tokens defined in `src/styles/main.css`:

```css
:root {
  --color-paper: #ffffff;    /* Base canvas background */
  --color-surface: #fafafa;  /* Elevated cards, panels */
  --color-border: #e4e4e7;   /* Subtle divider borders */
  --color-ink: #09090b;      /* Primary text and high-contrast accents */
  --color-muted: #71717a;    /* Secondary metadata and helper labels */
}

.dark {
  --color-paper: #09090b;
  --color-surface: #121215;
  --color-border: #27272a;
  --color-ink: #f4f4f5;
  --color-muted: #a1a1aa;
}
```

In `tailwind.config.js`, these are mapped cleanly to standard utility names:
`bg-paper`, `bg-surface`, `border-border`, `text-ink`, `text-muted`.

---

## ♿ Accessibility (WCAG 2.1 AA)

All interactive components adhere to [W3C WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/):
- **Keyboard Navigation**: Arrows `ArrowLeft`/`ArrowRight` for carousels & tabs, `Space`/`Enter` for expandable accordions.
- **Focus Management**: Explicit `:focus-visible` styling with high-contrast outlines.
- **Color Contrast**: 4.5:1 minimum contrast ratio across all light and dark variants.

---

## 🛠️ Scripts & Developer Tooling

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Start local Vite dev server at `http://localhost:3000` |
| `pnpm build` | Typecheck with `tsc` and create optimized production build in `dist/` |
| `pnpm preview` | Locally preview the production build |
| `pnpm typecheck` | Run TypeScript compiler strict verification without emitting files |
| `pnpm format` | Format repository code using Prettier |

---

## 📄 License

Distributed under the **MIT License**. Free for personal and commercial use.
