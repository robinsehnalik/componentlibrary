// @ts-nocheck
// UI Component Library Registry
// Auto-generated & typed dataset containing all 80+ semantic components across 8 categories

export interface ComponentItem {
  id: string;
  name: string;
  html: string;
  code: string;
  init?: (container: HTMLElement) => void;
}

export interface CategoryMeta {
  name: string;
  subtitle: string;
  desc: string;
}

export const CATEGORIES: Record<string, CategoryMeta> = {
  "carousel": {
    "name": "Carousel",
    "subtitle": "Content slider",
    "desc": "Display multiple slides of content with swiping, scrolling, or button navigation."
  },
  "treeview": {
    "name": "Tree view",
    "subtitle": "Hierarchical explorer",
    "desc": "Display nested hierarchical data such as directory structures, taxonomy, or tables of contents."
  },
  "popover": {
    "name": "Popover",
    "subtitle": "Contextual overlay",
    "desc": "Click-triggered floating overlays for rich contextual menus, flyouts, and interactive panels."
  },
  "rating": {
    "name": "Rating",
    "subtitle": "Feedback & score",
    "desc": "Interactive rating components, star scoring, NPS meters, and satisfaction feedback inputs."
  },
  "accordion": {
    "name": "Accordion",
    "subtitle": "Collapsible disclosure",
    "desc": "Vertical stacks of interactive headers to toggle and reveal collapsible content panels."
  },
  "quote": {
    "name": "Quote",
    "subtitle": "Pull quote & testimonial",
    "desc": "Stylized quotation cards, pull quotes, testimonials, and blockquote citations."
  },
  "pagination": {
    "name": "Pagination",
    "subtitle": "Page navigation",
    "desc": "Page split navigation, step counters, range steppers, and row controllers."
  },
  "tabs": {
    "name": "Tabs",
    "subtitle": "Tabbed interface",
    "desc": "Navigate between multiple panels and states in a compact, organized interface."
  }
};

export const categoryKeys = [
  "carousel",
  "treeview",
  "popover",
  "rating",
  "accordion",
  "quote",
  "pagination",
  "tabs"
] as const;

export type CategoryKey = typeof categoryKeys[number];

export const componentsDB: Record<CategoryKey, ComponentItem[]> = {
      // 1. CAROUSEL
      carousel: [
        {
          id: 'carousel-hero-slide',
          name: '1. Minimal Hero Slider',
          html: `
            <div class="w-full max-w-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-6 text-left relative select-none font-mono">
              <div class="flex items-center justify-between pb-3 mb-4 border-b border-[color:var(--color-border)]/60 text-[10px] text-muted">
                <span class="uppercase tracking-widest">Featured Architecture</span>
                <span id="cs1-counter" class="font-bold text-ink dark:text-white">01 / 03</span>
              </div>
              <div id="cs1-content" class="min-h-[80px] space-y-2">
                <h4 class="text-base font-bold text-ink dark:text-white m-0">Edge Network Cluster</h4>
                <p class="text-xs text-muted leading-relaxed m-0">Distributed deployment across Central European edge nodes with sub-20ms TTFB.</p>
              </div>
              <div class="flex items-center justify-between pt-4 mt-4 border-t border-[color:var(--color-border)]/60">
                <div class="flex gap-1.5 cursor-pointer" id="cs1-dots">
                  <span class="w-2.5 h-2.5 rounded-full bg-ink dark:bg-white transition-all" data-idx="0"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 transition-all" data-idx="1"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 transition-all" data-idx="2"></span>
                </div>
                <div class="flex gap-2">
                  <button id="cs1-prev" class="px-3 py-1 border border-[color:var(--color-border)] text-xs hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">←</button>
                  <button id="cs1-next" class="px-3 py-1 border border-[color:var(--color-border)] text-xs hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">→</button>
                </div>
              </div>
            </div>
          `,
          code: `<div class="w-full max-w-lg border border-border bg-surface p-6 font-mono">\n  <div class="flex justify-between border-b pb-3 text-xs text-muted">\n    <span>Featured Architecture</span>\n    <span>01 / 03</span>\n  </div>\n  <div class="py-4 space-y-2">\n    <h4 class="text-base font-bold text-ink">Edge Network Cluster</h4>\n    <p class="text-xs text-muted">Distributed deployment with sub-20ms TTFB.</p>\n  </div>\n  <div class="flex justify-between items-center pt-3 border-t">\n    <div class="flex gap-1.5"><span class="w-2.5 h-2.5 bg-ink rounded-full"></span></div>\n    <div class="flex gap-2"><button class="border px-3 py-1">←</button><button class="border px-3 py-1">→</button></div>\n  </div>\n</div>`,
          init: (c) => {
            const slides = [
              { title: "Edge Network Cluster", desc: "Distributed deployment across Central European edge nodes with sub-20ms TTFB." },
              { title: "Static Generation Engine", desc: "Pure HTML generation with zero clientside framework hydration overhead." },
              { title: "Autonomous Webhook Flow", desc: "Event-driven microservice dispatching webhooks to n8n pipelines." }
            ];
            let cur = 0;
            const content = c.querySelector('#cs1-content');
            const counter = c.querySelector('#cs1-counter');
            const dots = c.querySelectorAll('#cs1-dots span');
            const update = () => {
              if (content) content.innerHTML = `<h4 class="text-base font-bold text-ink dark:text-white m-0">${slides[cur].title}</h4><p class="text-xs text-muted leading-relaxed m-0">${slides[cur].desc}</p>`;
              if (counter) counter.textContent = `0${cur + 1} / 0${slides.length}`;
              dots.forEach((d, i) => {
                d.className = i === cur ? "w-2.5 h-2.5 rounded-full bg-ink dark:bg-white transition-all" : "w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 transition-all";
              });
            };
            c.querySelector('#cs1-prev')?.addEventListener('click', () => { cur = (cur - 1 + slides.length) % slides.length; update(); });
            c.querySelector('#cs1-next')?.addEventListener('click', () => { cur = (cur + 1) % slides.length; update(); });
            dots.forEach(d => {
              d.addEventListener('click', () => {
                cur = parseInt(d.getAttribute('data-idx') || '0', 10);
                update();
              });
            });
          }
        },
        {
          id: 'carousel-metric-bar',
          name: '2. Metric Stat Carousel',
          html: `
            <div class="w-full max-w-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-5 text-left font-mono select-none space-y-3">
              <div class="flex items-center justify-between text-[10px] text-muted uppercase tracking-widest border-b border-[color:var(--color-border)] pb-2">
                <span>Production Telemetry (<span id="cs2-idx">1</span>/4)</span>
                <div class="flex gap-1">
                  <button id="cs2-prev" class="px-2 py-0.5 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">‹</button>
                  <button id="cs2-next" class="px-2 py-0.5 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">›</button>
                </div>
              </div>
              <div id="cs2-display" class="flex items-center justify-between py-2">
                <div>
                  <span class="text-[10px] text-muted uppercase">First Contentful Paint</span>
                  <div class="text-2xl font-bold text-ink dark:text-white mt-1">0.24s</div>
                </div>
                <span class="px-2 py-1 text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">100 / 100 SCORE</span>
              </div>
            </div>
          `,
          code: `<div class="border border-border p-5 font-mono">\n  <div class="flex justify-between text-xs text-muted border-b pb-2">\n    <span>Production Telemetry</span>\n    <div><button>‹</button><button>›</button></div>\n  </div>\n  <div class="flex justify-between items-center py-2">\n    <div><span class="text-xs text-muted">First Contentful Paint</span><div class="text-2xl font-bold">0.24s</div></div>\n    <span class="text-xs bg-emerald-500/10 text-emerald-500 px-2 py-1">100 / 100 SCORE</span>\n  </div>\n</div>`,
          init: (c) => {
            const metrics = [
              { label: "First Contentful Paint", val: "0.24s", badge: "100 / 100 SCORE", badgeCls: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" },
              { label: "Cumulative Layout Shift", val: "0.000", badge: "ZERO SHIFT", badgeCls: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" },
              { label: "Total Page Weight", val: "42.8 KB", badge: "OPTIMAL", badgeCls: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20" },
              { label: "Interaction to Next Paint", val: "18 ms", badge: "SUB-50MS", badgeCls: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20" }
            ];
            let idx = 0;
            const disp = c.querySelector('#cs2-display');
            const idxSpan = c.querySelector('#cs2-idx');
            const update = () => {
              if (disp) {
                const m = metrics[idx];
                disp.innerHTML = `
                  <div>
                    <span class="text-[10px] text-muted uppercase">${m.label}</span>
                    <div class="text-2xl font-bold text-ink dark:text-white mt-1">${m.val}</div>
                  </div>
                  <span class="px-2 py-1 text-[10px] ${m.badgeCls} border font-bold">${m.badge}</span>
                `;
              }
              if (idxSpan) idxSpan.textContent = `${idx + 1}`;
            };
            c.querySelector('#cs2-prev')?.addEventListener('click', () => { idx = (idx - 1 + metrics.length) % metrics.length; update(); });
            c.querySelector('#cs2-next')?.addEventListener('click', () => { idx = (idx + 1) % metrics.length; update(); });
          }
        },
        {
          id: 'carousel-card-deck',
          name: '3. Card Deck Carousel',
          html: `
            <div class="w-full max-w-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-5 font-mono select-none space-y-4">
              <div class="flex justify-between items-center text-xs">
                <span class="font-bold text-ink dark:text-white uppercase tracking-wider">Project Releases</span>
                <div class="flex gap-1">
                  <button id="cs3-prev" class="px-2 py-1 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">←</button>
                  <button id="cs3-next" class="px-2 py-1 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">→</button>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3" id="cs3-cards">
                <!-- Dynamically populated -->
              </div>
            </div>
          `,
          code: `<div class="border border-border p-5 font-mono">\n  <div class="flex justify-between text-xs font-bold uppercase mb-3">\n    <span>Project Releases</span>\n    <div class="flex gap-1"><button class="border px-2">←</button><button class="border px-2">→</button></div>\n  </div>\n  <div class="grid grid-cols-2 gap-3" id="cards">\n    <div class="border p-3"><span class="text-xs text-muted">v2.4.0</span><div class="font-bold">Design Tokens</div></div>\n  </div>\n</div>`,
          init: (c) => {
            const items = [
              { tag: "v2.4.0", title: "Design Tokens Studio", desc: "Automated sync" },
              { tag: "v2.3.0", title: "Universal i18n Routing", desc: "Zero-latency switching" },
              { tag: "v2.2.0", title: "Edge Performance", desc: "Sub-20ms TTFB" },
              { tag: "v2.1.0", title: "WCAG 2.1 AA", desc: "Strict contrast" }
            ];
            let offset = 0;
            const container = c.querySelector('#cs3-cards');
            const update = () => {
              if (container) {
                const i1 = items[offset % items.length];
                const i2 = items[(offset + 1) % items.length];
                container.innerHTML = `
                  <div class="border border-[color:var(--color-border)] p-3 bg-zinc-50 dark:bg-black/50 hover:border-ink dark:hover:border-white transition-all cursor-pointer">
                    <span class="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold uppercase">${i1.tag}</span>
                    <div class="text-xs font-bold text-ink dark:text-white mt-1">${i1.title}</div>
                    <div class="text-[10px] text-muted mt-0.5">${i1.desc}</div>
                  </div>
                  <div class="border border-[color:var(--color-border)] p-3 bg-zinc-50 dark:bg-black/50 hover:border-ink dark:hover:border-white transition-all cursor-pointer">
                    <span class="text-[9px] text-muted uppercase font-bold">${i2.tag}</span>
                    <div class="text-xs font-bold text-ink dark:text-white mt-1">${i2.title}</div>
                    <div class="text-[10px] text-muted mt-0.5">${i2.desc}</div>
                  </div>
                `;
              }
            };
            c.querySelector('#cs3-prev')?.addEventListener('click', () => { offset = (offset - 1 + items.length) % items.length; update(); });
            c.querySelector('#cs3-next')?.addEventListener('click', () => { offset = (offset + 1) % items.length; update(); });
            update();
          }
        },
        {
          id: 'carousel-story-reel',
          name: '4. Segmented Story Reel (Draggable)',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-5 font-mono select-none space-y-4 text-left cursor-grab active:cursor-grabbing relative" id="cs4-drag-area">
              <div class="grid grid-cols-3 gap-1.5 cursor-pointer" id="cs4-bars">
                <div class="h-1 bg-ink dark:bg-white transition-all rounded-full" data-step="0"></div>
                <div class="h-1 bg-zinc-200 dark:bg-zinc-800 transition-all rounded-full" data-step="1"></div>
                <div class="h-1 bg-zinc-200 dark:bg-zinc-800 transition-all rounded-full" data-step="2"></div>
              </div>
              <div class="space-y-2 min-h-[90px]" id="cs4-content">
                <div class="flex items-center justify-between text-[9px] uppercase tracking-widest text-muted">
                  <span id="cs4-step-tag">Step 01 / Strategy</span>
                  <span class="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold">Swipe / Drag ⇄</span>
                </div>
                <h4 class="text-sm font-bold text-ink dark:text-white m-0" id="cs4-title">Modular Component Architecture</h4>
                <p class="text-xs text-muted leading-relaxed m-0" id="cs4-desc">Every element is atomic, independent, and strictly typed with isolated DOM scopes.</p>
              </div>
              <div class="flex items-center justify-between pt-3 border-t border-[color:var(--color-border)] text-xs">
                <span class="text-[10px] text-muted">Drag card or click arrows</span>
                <div class="flex gap-1.5">
                  <button id="cs4-prev-btn" class="px-2.5 py-1 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">‹ Prev</button>
                  <button id="cs4-next-btn" class="px-2.5 py-1 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">Next ›</button>
                </div>
              </div>
            </div>
          `,
          code: `<div class="w-full max-w-md border border-border bg-surface p-5 font-mono space-y-4">\n  <div class="grid grid-cols-3 gap-1.5">\n    <div class="h-1 bg-ink rounded-full"></div>\n    <div class="h-1 bg-zinc-300 rounded-full"></div>\n    <div class="h-1 bg-zinc-300 rounded-full"></div>\n  </div>\n  <div class="space-y-2">\n    <span class="text-xs text-muted">Step 01 / Strategy</span>\n    <h4 class="text-sm font-bold">Modular Architecture</h4>\n    <p class="text-xs text-muted">Atomic, independent components.</p>\n  </div>\n  <div class="flex justify-between border-t pt-3">\n    <button class="border px-2 py-1">‹ Prev</button>\n    <button class="border px-2 py-1">Next ›</button>\n  </div>\n</div>`,
          init: (c) => {
            const steps = [
              { tag: "Step 01 / Strategy", title: "Modular Component Architecture", desc: "Every element is atomic, independent, and strictly typed with isolated DOM scopes." },
              { tag: "Step 02 / Engineering", title: "Zero-Runtime CSS Tokens", desc: "Pure Tailwind variables and WCAG 2.1 AA tokens compiled without clientside JS weight." },
              { tag: "Step 03 / Delivery", title: "Autonomous Edge Deployment", desc: "GitOps workflows shipping sub-50ms experiences with instantaneous First Contentful Paint." }
            ];
            let active = 0;
            const stepTag = c.querySelector('#cs4-step-tag');
            const titleEl = c.querySelector('#cs4-title');
            const descEl = c.querySelector('#cs4-desc');
            const bars = c.querySelectorAll('#cs4-bars div');
            const prevBtn = c.querySelector('#cs4-prev-btn');
            const nextBtn = c.querySelector('#cs4-next-btn');
            const dragArea = c.querySelector('#cs4-drag-area');

            const update = () => {
              const s = steps[active];
              if (stepTag) stepTag.textContent = s.tag;
              if (titleEl) titleEl.textContent = s.title;
              if (descEl) descEl.textContent = s.desc;
              bars.forEach((b, i) => {
                b.className = i <= active ? "h-1 bg-ink dark:bg-white transition-all rounded-full" : "h-1 bg-zinc-200 dark:bg-zinc-800 transition-all rounded-full";
              });
            };

            bars.forEach(b => {
              b.addEventListener('click', (e) => {
                e.stopPropagation();
                active = parseInt(b.getAttribute('data-step') || '0', 10);
                update();
              });
            });

            prevBtn?.addEventListener('click', (e) => {
              e.stopPropagation();
              active = (active - 1 + steps.length) % steps.length;
              update();
            });

            nextBtn?.addEventListener('click', (e) => {
              e.stopPropagation();
              active = (active + 1) % steps.length;
              update();
            });

            // Mouse Drag & Touch Swipe implementation
            let startX = 0;
            let isDragging = false;

            dragArea?.addEventListener('mousedown', (e) => {
              if (e.target.tagName === 'BUTTON') return;
              startX = e.clientX;
              isDragging = true;
            });

            window.addEventListener('mouseup', (e) => {
              if (!isDragging) return;
              isDragging = false;
              const diffX = e.clientX - startX;
              if (diffX < -30) {
                active = (active + 1) % steps.length;
                update();
              } else if (diffX > 30) {
                active = (active - 1 + steps.length) % steps.length;
                update();
              }
            });

            dragArea?.addEventListener('touchstart', (e) => {
              startX = e.touches[0].clientX;
            }, { passive: true });

            dragArea?.addEventListener('touchend', (e) => {
              const diffX = e.changedTouches[0].clientX - startX;
              if (diffX < -30) {
                active = (active + 1) % steps.length;
                update();
              } else if (diffX > 30) {
                active = (active - 1 + steps.length) % steps.length;
                update();
              }
            }, { passive: true });
          }
        },
        {
          id: 'carousel-thumbnail-rail',
          name: '5. Thumbnail Gallery Slider',
          html: `
            <div class="w-full max-w-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 font-mono select-none space-y-3 text-left">
              <!-- Top Featured Slide -->
              <div class="border border-[color:var(--color-border)] p-5 bg-zinc-50 dark:bg-black/50 space-y-2 relative" id="cs5-featured-box">
                <div class="flex justify-between items-center text-[10px] text-muted">
                  <span id="cs5-tag" class="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">MODULE 01 · TOKENS</span>
                  <span id="cs5-counter" class="font-bold text-ink dark:text-white">01 / 04</span>
                </div>
                <h4 class="text-sm font-bold text-ink dark:text-white m-0" id="cs5-title">Decoupled Design Tokens Studio</h4>
                <p class="text-xs text-muted leading-relaxed m-0" id="cs5-desc">Centralized design token variables compiled to semantic CSS custom properties.</p>
                <div class="flex items-center gap-3 pt-2 text-[10px] text-muted">
                  <span id="cs5-meta-1">WCAG 2.1 AA Compliance</span>
                  <span>·</span>
                  <span id="cs5-meta-2">&lt; 4KB Bundle Weight</span>
                </div>
              </div>

              <!-- Bottom Thumbnail Strip -->
              <div class="grid grid-cols-4 gap-2" id="cs5-thumb-rail">
                <button class="thumb-btn p-2 border border-ink dark:border-white bg-black/5 dark:bg-white/10 text-left transition-all cursor-pointer" data-idx="0">
                  <div class="text-[9px] font-bold text-ink dark:text-white">01. Tokens</div>
                  <div class="text-[8px] text-muted truncate">Design Schema</div>
                </button>
                <button class="thumb-btn p-2 border border-[color:var(--color-border)] text-left hover:border-ink dark:hover:border-white transition-all cursor-pointer opacity-70" data-idx="1">
                  <div class="text-[9px] font-bold text-ink dark:text-white">02. Grids</div>
                  <div class="text-[8px] text-muted truncate">Fluid Layouts</div>
                </button>
                <button class="thumb-btn p-2 border border-[color:var(--color-border)] text-left hover:border-ink dark:hover:border-white transition-all cursor-pointer opacity-70" data-idx="2">
                  <div class="text-[9px] font-bold text-ink dark:text-white">03. Motion</div>
                  <div class="text-[8px] text-muted truncate">60fps Physics</div>
                </button>
                <button class="thumb-btn p-2 border border-[color:var(--color-border)] text-left hover:border-ink dark:hover:border-white transition-all cursor-pointer opacity-70" data-idx="3">
                  <div class="text-[9px] font-bold text-ink dark:text-white">04. Edge</div>
                  <div class="text-[8px] text-muted truncate">Sub-20ms Speed</div>
                </button>
              </div>

              <!-- Prev / Next Controls -->
              <div class="flex justify-between items-center pt-1 text-xs">
                <span class="text-[10px] text-muted">Click thumbnail or arrows</span>
                <div class="flex gap-1.5">
                  <button id="cs5-prev" class="px-2.5 py-1 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">←</button>
                  <button id="cs5-next" class="px-2.5 py-1 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">→</button>
                </div>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono space-y-3">\n  <div class="border p-5 bg-surface space-y-2">\n    <span class="text-xs bg-emerald-500/10 text-emerald-500 px-2 py-0.5">01 · TOKENS</span>\n    <h4 class="font-bold text-sm">Decoupled Design Tokens</h4>\n  </div>\n  <div class="grid grid-cols-4 gap-2">\n    <button class="border p-2 text-left">01. Tokens</button>\n    <button class="border p-2 text-left">02. Grids</button>\n  </div>\n</div>`,
          init: (c) => {
            const gallery = [
              { tag: "MODULE 01 · TOKENS", title: "Decoupled Design Tokens Studio", desc: "Centralized design token variables compiled to semantic CSS custom properties.", m1: "WCAG 2.1 AA Compliance", m2: "< 4KB Bundle Weight" },
              { tag: "MODULE 02 · GRIDS", title: "Responsive Fluid Grid Engine", desc: "Container-query aware components resizing seamlessly from mobile to ultrawide displays.", m1: "Sub-pixel Alignment", m2: "Zero CLS Shifts" },
              { tag: "MODULE 03 · MOTION", title: "Hardware-Accelerated Physics", desc: "Micro-interactions driven by transform3d and cubic-bezier easing curves.", m1: "60fps Transitions", m2: "GPU Composited" },
              { tag: "MODULE 04 · EDGE", title: "Global Edge Node Telemetry", desc: "Instant HTML delivery with sub-20ms latency across Central European edge regions.", m1: "Prague / Frankfurt / Warsaw", m2: "100/100 Lighthouse" }
            ];
            let active = 0;
            const tagEl = c.querySelector('#cs5-tag');
            const counterEl = c.querySelector('#cs5-counter');
            const titleEl = c.querySelector('#cs5-title');
            const descEl = c.querySelector('#cs5-desc');
            const m1El = c.querySelector('#cs5-meta-1');
            const m2El = c.querySelector('#cs5-meta-2');
            const thumbs = c.querySelectorAll('#cs5-thumb-rail .thumb-btn');

            const update = () => {
              const item = gallery[active];
              if (tagEl) tagEl.textContent = item.tag;
              if (counterEl) counterEl.textContent = `0${active + 1} / 0${gallery.length}`;
              if (titleEl) titleEl.textContent = item.title;
              if (descEl) descEl.textContent = item.desc;
              if (m1El) m1El.textContent = item.m1;
              if (m2El) m2El.textContent = item.m2;

              thumbs.forEach((th, i) => {
                if (i === active) {
                  th.className = "thumb-btn p-2 border border-ink dark:border-white bg-black/5 dark:bg-white/10 text-left transition-all cursor-pointer font-bold";
                } else {
                  th.className = "thumb-btn p-2 border border-[color:var(--color-border)] text-left hover:border-ink dark:hover:border-white transition-all cursor-pointer opacity-70 hover:opacity-100";
                }
              });
            };

            thumbs.forEach(th => {
              th.addEventListener('click', () => {
                active = parseInt(th.getAttribute('data-idx') || '0', 10);
                update();
              });
            });

            c.querySelector('#cs5-prev')?.addEventListener('click', () => {
              active = (active - 1 + gallery.length) % gallery.length;
              update();
            });

            c.querySelector('#cs5-next')?.addEventListener('click', () => {
              active = (active + 1) % gallery.length;
              update();
            });
          }
        },
        {
          id: 'carousel-vertical-stack',
          name: '6. Vertical Stack Slider',
          html: `
            <div class="w-full max-w-sm border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 font-mono select-none flex items-center justify-between gap-4 text-left">
              <div class="space-y-1" id="cs6-display">
                <span class="text-[9px] uppercase tracking-widest text-muted">Audit Result (1/3)</span>
                <div class="text-xs font-bold text-ink dark:text-white">Security Headers: A+</div>
                <div class="text-[10px] text-emerald-600 dark:text-emerald-400">Strict-Transport-Security active</div>
              </div>
              <div class="flex flex-col gap-1 border-l border-[color:var(--color-border)] pl-3">
                <button id="cs6-up" class="px-2.5 py-1 border border-[color:var(--color-border)] text-xs hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">▲</button>
                <button id="cs6-down" class="px-2.5 py-1 border border-[color:var(--color-border)] text-xs hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">▼</button>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono flex justify-between items-center">\n  <div>\n    <span class="text-xs text-muted">Audit Result</span>\n    <div class="text-xs font-bold">Security Headers: A+</div>\n  </div>\n  <div class="flex flex-col gap-1 border-l pl-3"><button>▲</button><button>▼</button></div>\n</div>`,
          init: (c) => {
            const audits = [
              { title: "Security Headers: A+", sub: "Strict-Transport-Security active" },
              { title: "Lighthouse Performance: 100", sub: "0.2s First Contentful Paint" },
              { title: "WCAG 2.1 AA Compliance", sub: "Zero contrast violations" }
            ];
            let idx = 0;
            const disp = c.querySelector('#cs6-display');
            const update = () => {
              const a = audits[idx];
              if (disp) {
                disp.innerHTML = `
                  <span class="text-[9px] uppercase tracking-widest text-muted">Audit Result (${idx + 1}/${audits.length})</span>
                  <div class="text-xs font-bold text-ink dark:text-white">${a.title}</div>
                  <div class="text-[10px] text-emerald-600 dark:text-emerald-400">${a.sub}</div>
                `;
              }
            };
            c.querySelector('#cs6-up')?.addEventListener('click', () => { idx = (idx - 1 + audits.length) % audits.length; update(); });
            c.querySelector('#cs6-down')?.addEventListener('click', () => { idx = (idx + 1) % audits.length; update(); });
          }
        },
        {
          id: 'carousel-testimonial-slider',
          name: '7. Client Feedback Slider',
          html: `
            <div class="w-full max-w-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-6 font-mono select-none space-y-4 text-left">
              <!-- Top Score & Rating -->
              <div class="flex justify-between items-center text-[10px] border-b border-[color:var(--color-border)]/60 pb-3">
                <div class="flex items-center gap-2">
                  <span class="text-amber-400 text-sm">★★★★★</span>
                  <span class="text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20">VERIFIED ENTERPRISE</span>
                </div>
                <span id="cs7-counter" class="text-muted font-bold">01 / 03</span>
              </div>

              <!-- Quote Body -->
              <div class="min-h-[75px] flex items-center">
                <p class="text-xs text-ink dark:text-zinc-200 leading-relaxed font-sans italic m-0" id="cs7-quote">
                  “The token architecture cut our UI iteration cycles in half while maintaining strict WCAG 2.1 AA accessibility across all dashboards.”
                </p>
              </div>

              <!-- Footer with Author & Navigation -->
              <div class="flex items-center justify-between pt-3 border-t border-[color:var(--color-border)]/60">
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-[color:var(--color-border)] flex items-center justify-center font-bold text-xs text-ink dark:text-white" id="cs7-avatar">MV</div>
                  <div>
                    <div class="text-xs font-bold text-ink dark:text-white" id="cs7-name">Marcus Vance</div>
                    <div class="text-[10px] text-muted" id="cs7-role">VP of Engineering · CloudScale</div>
                  </div>
                </div>
                <div class="flex gap-2">
                  <button id="cs7-prev" class="px-3 py-1 border border-[color:var(--color-border)] text-xs hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">←</button>
                  <button id="cs7-next" class="px-3 py-1 border border-[color:var(--color-border)] text-xs hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">→</button>
                </div>
              </div>
            </div>
          `,
          code: `<div class="border p-6 font-mono space-y-4">\n  <div class="flex justify-between border-b pb-3 text-xs">\n    <span class="text-amber-400">★★★★★</span>\n    <span class="text-muted">01 / 03</span>\n  </div>\n  <p class="text-xs italic">“The token architecture cut iteration cycles in half...”</p>\n  <div class="flex justify-between items-center border-t pt-3">\n    <div><div class="font-bold text-xs">Marcus Vance</div><div class="text-muted text-xs">VP of Engineering</div></div>\n    <div class="flex gap-1"><button class="border px-2">←</button><button class="border px-2">→</button></div>\n  </div>\n</div>`,
          init: (c) => {
            const reviews = [
              {
                quote: "“The token architecture cut our UI iteration cycles in half while maintaining strict WCAG 2.1 AA accessibility across all dashboards.”",
                name: "Marcus Vance",
                role: "VP of Engineering · CloudScale",
                av: "MV"
              },
              {
                quote: "“Sub-millisecond interaction feedback and zero layout shift gave our core checkout flows a 32% boost in completion rates.”",
                name: "Elena Rostova",
                role: "Head of Product · FinFlow Global",
                av: "ER"
              },
              {
                quote: "“Eliminating third-party runtime JS dependencies dropped our bundle footprint by 140KB with instant First Contentful Paint.”",
                name: "David Lindqvist",
                role: "Lead Architect · Nordic Media Group",
                av: "DL"
              }
            ];
            let idx = 0;
            const quoteEl = c.querySelector('#cs7-quote');
            const nameEl = c.querySelector('#cs7-name');
            const roleEl = c.querySelector('#cs7-role');
            const avatarEl = c.querySelector('#cs7-avatar');
            const counterEl = c.querySelector('#cs7-counter');

            const update = () => {
              const r = reviews[idx];
              if (quoteEl) quoteEl.textContent = r.quote;
              if (nameEl) nameEl.textContent = r.name;
              if (roleEl) roleEl.textContent = r.role;
              if (avatarEl) avatarEl.textContent = r.av;
              if (counterEl) counterEl.textContent = `0${idx + 1} / 0${reviews.length}`;
            };

            c.querySelector('#cs7-prev')?.addEventListener('click', () => {
              idx = (idx - 1 + reviews.length) % reviews.length;
              update();
            });

            c.querySelector('#cs7-next')?.addEventListener('click', () => {
              idx = (idx + 1) % reviews.length;
              update();
            });
          }
        },
        {
          id: 'carousel-product-preview',
          name: '8. Product Feature Switcher',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-5 font-mono select-none space-y-3 text-left">
              <div class="flex justify-between items-center text-xs">
                <span class="text-muted uppercase text-[9px] tracking-wider">Feature Showcase</span>
                <span class="text-ink dark:text-white font-bold" id="cs8-counter">1 of 3</span>
              </div>
              <div class="p-3 bg-zinc-100 dark:bg-zinc-900 border border-[color:var(--color-border)] text-xs text-ink dark:text-white font-bold min-h-[44px] flex items-center" id="cs8-title">
                API Rate Limiting & Edge Caching
              </div>
              <div class="flex gap-2 justify-end">
                <button id="cs8-prev" class="px-3 py-1 text-xs border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">Prev</button>
                <button id="cs8-next" class="px-3 py-1 text-xs border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">Next</button>
              </div>
            </div>
          `,
          code: `<div class="border p-5 font-mono space-y-3">\n  <div class="flex justify-between text-xs"><span class="text-muted">Feature</span><span>1 of 3</span></div>\n  <div class="border p-3 bg-zinc-900 font-bold text-xs">API Rate Limiting</div>\n  <div class="flex gap-2 justify-end"><button class="border px-3 py-1">Prev</button><button class="border px-3 py-1">Next</button></div>\n</div>`,
          init: (c) => {
            const feats = [
              "API Rate Limiting & Edge Caching",
              "Zero-Dependency Token Compilation",
              "Hardware-Accelerated Micro-Interactions"
            ];
            let idx = 0;
            const title = c.querySelector('#cs8-title');
            const counter = c.querySelector('#cs8-counter');
            const update = () => {
              if (title) title.textContent = feats[idx];
              if (counter) counter.textContent = `${idx + 1} of ${feats.length}`;
            };
            c.querySelector('#cs8-prev')?.addEventListener('click', () => { idx = (idx - 1 + feats.length) % feats.length; update(); });
            c.querySelector('#cs8-next')?.addEventListener('click', () => { idx = (idx + 1) % feats.length; update(); });
          }
        },
        {
          id: 'carousel-infinite-ticker',
          name: '9. Stream Marquee Reel',
          html: `
            <div class="w-full max-w-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-5 font-mono select-none space-y-3 text-left">
              <div class="flex justify-between items-center text-[10px] border-b border-[color:var(--color-border)]/60 pb-2.5">
                <span class="text-muted uppercase tracking-wider">Live Edge Telemetry Stream</span>
                <div class="flex items-center gap-1.5">
                  <button id="cs9-toggle" class="px-2 py-0.5 border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold cursor-pointer">● ACTIVE</button>
                  <button id="cs9-shift-left" class="px-2 py-0.5 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">‹</button>
                  <button id="cs9-shift-right" class="px-2 py-0.5 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">›</button>
                </div>
              </div>

              <!-- Marquee Track -->
              <div class="relative overflow-hidden border border-[color:var(--color-border)] bg-zinc-50 dark:bg-black/40 py-3 px-2">
                <div class="flex items-center gap-3 transition-transform duration-300 ease-out" id="cs9-track" style="transform: translateX(0px);">
                  <div class="px-3 py-1.5 border border-[color:var(--color-border)] bg-zinc-100 dark:bg-black/60 shrink-0 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span class="text-ink dark:text-white font-bold text-[11px]">PRG-01</span>
                    <span class="text-[10px] text-muted">14ms</span>
                  </div>
                  <div class="px-3 py-1.5 border border-[color:var(--color-border)] bg-zinc-100 dark:bg-black/60 shrink-0 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span class="text-ink dark:text-white font-bold text-[11px]">FRA-02</span>
                    <span class="text-[10px] text-muted">18ms</span>
                  </div>
                  <div class="px-3 py-1.5 border border-[color:var(--color-border)] bg-zinc-100 dark:bg-black/60 shrink-0 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span class="text-ink dark:text-white font-bold text-[11px]">WAW-01</span>
                    <span class="text-[10px] text-muted">12ms</span>
                  </div>
                  <div class="px-3 py-1.5 border border-[color:var(--color-border)] bg-zinc-100 dark:bg-black/60 shrink-0 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span class="text-ink dark:text-white font-bold text-[11px]">AMS-03</span>
                    <span class="text-[10px] text-muted">16ms</span>
                  </div>
                  <div class="px-3 py-1.5 border border-[color:var(--color-border)] bg-zinc-100 dark:bg-black/60 shrink-0 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span class="text-ink dark:text-white font-bold text-[11px]">LON-01</span>
                    <span class="text-[10px] text-muted">20ms</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-between items-center text-[9px] text-muted">
                <span>99.99% Global Uptime</span>
                <span id="cs9-status-text">Streaming telemetry</span>
              </div>
            </div>
          `,
          code: `<div class="border p-5 font-mono space-y-3">\n  <div class="flex justify-between text-xs"><span>Stream</span><button class="border text-emerald-400">● ACTIVE</button></div>\n  <div class="overflow-hidden border p-3 flex gap-4">\n    <div class="border px-3 py-1.5 flex gap-2"><span>PRG-01</span><span>14ms</span></div>\n    <div class="border px-3 py-1.5 flex gap-2"><span>FRA-02</span><span>18ms</span></div>\n  </div>\n</div>`,
          init: (c) => {
            const track = c.querySelector('#cs9-track');
            const toggle = c.querySelector('#cs9-toggle');
            const leftBtn = c.querySelector('#cs9-shift-left');
            const rightBtn = c.querySelector('#cs9-shift-right');
            const statusText = c.querySelector('#cs9-status-text');

            let offset = 0;
            let active = true;
            let interval = null;

            const shift = (dir) => {
              offset += dir * 110;
              if (offset < -330) offset = 0;
              if (offset > 0) offset = -330;
              if (track) track.style.transform = `translateX(${offset}px)`;
            };

            const startLoop = () => {
              if (interval) clearInterval(interval);
              interval = setInterval(() => {
                if (active) shift(-1);
              }, 2200);
            };

            startLoop();

            toggle?.addEventListener('click', () => {
              active = !active;
              toggle.textContent = active ? '● ACTIVE' : '○ PAUSED';
              toggle.className = active ? 'px-2 py-0.5 border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold cursor-pointer' : 'px-2 py-0.5 border border-zinc-500 text-muted font-bold cursor-pointer';
              if (statusText) statusText.textContent = active ? 'Streaming telemetry' : 'Stream paused';
            });

            leftBtn?.addEventListener('click', () => { shift(1); });
            rightBtn?.addEventListener('click', () => { shift(-1); });
          }
        },
        {
          id: 'carousel-segmented-controls',
          name: '10. Segmented Slide Navigator',
          html: `
            <div class="w-full max-w-sm border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 font-mono select-none space-y-3 text-center">
              <div class="text-xs font-bold text-ink dark:text-white" id="cs10-label">Active Node: Prague Edge (PRG-01)</div>
              <div class="inline-flex border border-[color:var(--color-border)] text-[10px]" id="cs10-tabs">
                <button class="px-3 py-1 bg-ink text-paper dark:bg-white dark:text-black font-bold cursor-pointer" data-node="Prague Edge (PRG-01)">01</button>
                <button class="px-3 py-1 border-l border-[color:var(--color-border)] text-muted hover:text-ink dark:hover:text-white cursor-pointer" data-node="Frankfurt Core (FRA-02)">02</button>
                <button class="px-3 py-1 border-l border-[color:var(--color-border)] text-muted hover:text-ink dark:hover:text-white cursor-pointer" data-node="Warsaw Relay (WAW-01)">03</button>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-center space-y-3">\n  <div class="text-xs font-bold">Active Node: Prague Edge (PRG-01)</div>\n  <div class="inline-flex border text-xs">\n    <button class="bg-ink text-paper px-3 py-1 font-bold">01</button>\n    <button class="border-l px-3 py-1 text-muted">02</button>\n  </div>\n</div>`,
          init: (c) => {
            const btns = c.querySelectorAll('#cs10-tabs button');
            const label = c.querySelector('#cs10-label');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "px-3 py-1 border-l border-[color:var(--color-border)] text-muted hover:text-ink dark:hover:text-white cursor-pointer first:border-l-0";
                });
                b.className = "px-3 py-1 bg-ink text-paper dark:bg-white dark:text-black font-bold cursor-pointer border-l border-[color:var(--color-border)] first:border-l-0";
                if (label) label.textContent = `Active Node: ${b.getAttribute('data-node')}`;
              });
            });
          }
        }
      ],

      // 2. TREE VIEW
      treeview: [
        {
          id: 'treeview-file-system',
          name: '1. File System Explorer',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-1" id="tv1-root">
              <div class="text-[9px] uppercase tracking-widest text-muted border-b border-[color:var(--color-border)] pb-2 mb-2 flex justify-between items-center">
                <span>Project Explorer</span>
                <span class="text-emerald-600 dark:text-emerald-400" id="tv1-status">src/components/TreeView.astro</span>
              </div>
              <div class="tv-folder cursor-pointer flex items-center gap-2 py-1 text-ink dark:text-white font-bold" data-target="src">
                <span class="tv-arrow text-muted">▼</span> 📁 src/
              </div>
              <div class="pl-4 space-y-1" id="tv-src">
                <div class="tv-folder cursor-pointer flex items-center gap-2 py-0.5 text-muted hover:text-ink dark:hover:text-white font-bold" data-target="components">
                  <span class="tv-arrow">▼</span> 📁 components/
                </div>
                <div class="pl-4 space-y-1 text-muted" id="tv-components">
                  <div class="tv-file py-0.5 hover:text-ink dark:hover:text-white cursor-pointer" data-file="src/components/Header.astro">📄 Header.astro</div>
                  <div class="tv-file py-0.5 hover:text-ink dark:hover:text-white cursor-pointer" data-file="src/components/Showcase.astro">📄 Showcase.astro</div>
                  <div class="tv-file py-0.5 text-ink dark:text-white font-bold cursor-pointer" data-file="src/components/TreeView.astro">📄 TreeView.astro ★</div>
                </div>
                <div class="tv-folder cursor-pointer flex items-center gap-2 py-0.5 text-muted hover:text-ink dark:hover:text-white font-bold" data-target="pages">
                  <span class="tv-arrow">▶</span> 📁 pages/
                </div>
                <div class="pl-4 space-y-1 text-muted hidden" id="tv-pages">
                  <div class="tv-file py-0.5 hover:text-ink dark:hover:text-white cursor-pointer" data-file="src/pages/index.astro">📄 index.astro</div>
                  <div class="tv-file py-0.5 hover:text-ink dark:hover:text-white cursor-pointer" data-file="src/pages/projects.astro">📄 projects.astro</div>
                </div>
              </div>
            </div>
          `,
          code: `<div class="border border-border p-4 font-mono text-xs">\n  <div class="text-xs text-muted border-b pb-2 mb-2">Project Explorer</div>\n  <div class="font-bold">📁 src/</div>\n  <div class="pl-4">\n    <div>📁 components/</div>\n    <div class="pl-4 text-muted">\n      <div>📄 Header.astro</div>\n      <div>📄 TreeView.astro</div>\n    </div>\n  </div>\n</div>`,
          init: (c) => {
            const folders = c.querySelectorAll('.tv-folder');
            const files = c.querySelectorAll('.tv-file');
            const status = c.querySelector('#tv1-status');

            folders.forEach(f => {
              f.addEventListener('click', () => {
                const target = f.getAttribute('data-target');
                const sub = c.querySelector(`#tv-${target}`);
                const arrow = f.querySelector('.tv-arrow');
                if (sub) {
                  if (sub.classList.contains('hidden')) {
                    sub.classList.remove('hidden');
                    if (arrow) arrow.textContent = '▼';
                  } else {
                    sub.classList.add('hidden');
                    if (arrow) arrow.textContent = '▶';
                  }
                }
              });
            });

            files.forEach(f => {
              f.addEventListener('click', () => {
                files.forEach(fl => fl.classList.remove('text-ink', 'dark:text-white', 'font-bold'));
                f.classList.add('text-ink', 'dark:text-white', 'font-bold');
                const fn = f.getAttribute('data-file');
                if (status && fn) status.textContent = fn;
              });
            });
          }
        },
        {
          id: 'treeview-json-inspector',
          name: '2. JSON Data Node Inspector',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-1">
              <div class="text-[9px] uppercase tracking-widest text-muted border-b border-[color:var(--color-border)] pb-2 mb-2">JSON Schema (Click keys to collapse)</div>
              <div>{</div>
              <div class="pl-4 cursor-pointer hover:text-ink" id="json-proj">
                <span class="text-muted">"project":</span> <span class="text-emerald-600 dark:text-emerald-400">"Component Library"</span>,
              </div>
              <div class="pl-4">
                <div class="cursor-pointer hover:text-ink flex items-center gap-1.5 font-bold" id="json-cat-toggle">
                  <span>▼</span> <span class="text-muted">"categories":</span> [
                </div>
                <div class="pl-4 text-zinc-500 space-y-0.5" id="json-cat-body">
                  <div>"carousel", "treeview", "popover",</div>
                  <div>"rating", "accordion", "quote",</div>
                  <div>"pagination", "tabs"</div>
                </div>
                <div>],</div>
              </div>
              <div class="pl-4 cursor-pointer hover:text-ink" id="json-tokens">
                <span class="text-muted">"strictTokens":</span> <span class="text-purple-600 dark:text-purple-400 font-bold">true</span>
              </div>
              <div>}</div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs">\n  <div>{</div>\n  <div class="pl-4"><span class="text-muted">"project":</span> <span class="text-emerald-400">"Component Library"</span>,</div>\n  <div class="pl-4"><span class="text-muted">"strictTokens":</span> <span class="text-purple-400">true</span></div>\n  <div>}</div>\n</div>`,
          init: (c) => {
            const toggle = c.querySelector('#json-cat-toggle');
            const body = c.querySelector('#json-cat-body');
            toggle?.addEventListener('click', () => {
              if (body) {
                body.classList.toggle('hidden');
                const arrow = toggle.querySelector('span');
                if (arrow) arrow.textContent = body.classList.contains('hidden') ? '▶' : '▼';
              }
            });
          }
        },
        {
          id: 'treeview-rbac-permissions',
          name: '3. RBAC Permission Hierarchy',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-2">
              <div class="text-[9px] uppercase tracking-widest text-muted border-b border-[color:var(--color-border)] pb-1.5 flex justify-between">
                <span>Role Permissions</span>
                <span id="rbac-count" class="text-emerald-600 dark:text-emerald-400 font-bold">2/2 Active</span>
              </div>
              <div class="space-y-1.5">
                <label class="flex items-center gap-2 font-bold text-ink dark:text-white cursor-pointer">
                  <input type="checkbox" id="rbac-parent" checked class="rounded-none accent-black dark:accent-white cursor-pointer" />
                  <span>Admin Cluster Permissions</span>
                </label>
                <div class="pl-6 space-y-1 text-muted text-[11px]" id="rbac-children">
                  <label class="flex items-center gap-2 cursor-pointer hover:text-ink dark:hover:text-white">
                    <input type="checkbox" checked class="rbac-child rounded-none accent-black dark:accent-white cursor-pointer" />
                    <span>deploy:production</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer hover:text-ink dark:hover:text-white">
                    <input type="checkbox" checked class="rbac-child rounded-none accent-black dark:accent-white cursor-pointer" />
                    <span>billing:manage</span>
                  </label>
                </div>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-2">\n  <label class="flex items-center gap-2 font-bold">\n    <input type="checkbox" checked /> <span>Admin Cluster Permissions</span>\n  </label>\n  <div class="pl-6 space-y-1 text-muted">\n    <label class="flex items-center gap-2"><input type="checkbox" checked /> <span>deploy:production</span></label>\n  </div>\n</div>`,
          init: (c) => {
            const parent = c.querySelector('#rbac-parent');
            const children = c.querySelectorAll('.rbac-child');
            const count = c.querySelector('#rbac-count');

            const update = () => {
              const checked = Array.from(children).filter(ch => ch.checked).length;
              if (count) count.textContent = `${checked}/${children.length} Active`;
              if (parent) parent.checked = checked === children.length;
            };

            parent?.addEventListener('change', () => {
              children.forEach(ch => { ch.checked = parent.checked; });
              update();
            });

            children.forEach(ch => {
              ch.addEventListener('change', () => { update(); });
            });
          }
        },
        {
          id: 'treeview-toc',
          name: '4. Nested Table of Contents',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-1" id="toc-root">
              <div class="text-[9px] uppercase tracking-widest text-muted border-b border-[color:var(--color-border)] pb-2 mb-2">Interactive Outline</div>
              <div class="toc-item font-bold text-ink dark:text-white cursor-pointer hover:underline" data-sec="1. Architecture Overview">1. Architecture Overview</div>
              <div class="toc-item pl-4 text-muted hover:text-ink dark:hover:text-white py-0.5 cursor-pointer" data-sec="1.1 Zero-Runtime CSS Tokens">1.1 Zero-Runtime CSS Tokens</div>
              <div class="toc-item pl-4 text-ink dark:text-white font-bold py-0.5 border-l-2 border-ink dark:border-white pl-3.5 cursor-pointer" data-sec="1.2 Component Isolation">1.2 Component Isolation ★</div>
              <div class="toc-item pl-4 text-muted hover:text-ink dark:hover:text-white py-0.5 cursor-pointer" data-sec="1.3 State Primitives">1.3 State Primitives</div>
              <div class="toc-item font-bold text-ink dark:text-white pt-2 cursor-pointer hover:underline" data-sec="2. Deployment Guide">2. Deployment Guide</div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-1">\n  <div class="font-bold">1. Architecture Overview</div>\n  <div class="pl-4 text-muted">1.1 Zero-Runtime CSS Tokens</div>\n  <div class="pl-4 font-bold border-l-2 pl-3">1.2 Component Isolation</div>\n</div>`,
          init: (c) => {
            const items = c.querySelectorAll('.toc-item');
            items.forEach(it => {
              it.addEventListener('click', () => {
                items.forEach(i => {
                  i.classList.remove('font-bold', 'text-ink', 'dark:text-white', 'border-l-2', 'border-ink', 'dark:border-white', 'pl-3.5');
                  i.classList.add('text-muted');
                });
                it.classList.remove('text-muted');
                it.classList.add('font-bold', 'text-ink', 'dark:text-white', 'border-l-2', 'border-ink', 'dark:border-white', 'pl-3.5');
              });
            });
          }
        },
        {
          id: 'treeview-db-schema',
          name: '5. Database Schema Tree',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-2">
              <div class="text-[9px] uppercase tracking-widest text-muted border-b border-[color:var(--color-border)] pb-2">PostgreSQL Tables (Click to toggle)</div>
              <div>
                <div class="db-table font-bold text-ink dark:text-white cursor-pointer flex items-center gap-1.5" data-table="users">
                  <span class="db-arrow">▼</span> 🗄️ users (3 columns)
                </div>
                <div class="pl-5 text-muted space-y-0.5 text-[11px]" id="db-users">
                  <div>🔑 id <span class="text-[9px] opacity-60">(UUID, PK)</span></div>
                  <div>🏷️ email <span class="text-[9px] opacity-60">(VARCHAR, UNIQUE)</span></div>
                  <div>🕒 created_at <span class="text-[9px] opacity-60">(TIMESTAMPTZ)</span></div>
                </div>
              </div>
              <div>
                <div class="db-table font-bold text-muted hover:text-ink dark:hover:text-white cursor-pointer flex items-center gap-1.5" data-table="audit">
                  <span class="db-arrow">▶</span> 🗄️ audit_logs (4 columns)
                </div>
                <div class="pl-5 text-muted space-y-0.5 text-[11px] hidden" id="db-audit">
                  <div>🔑 log_id <span class="text-[9px] opacity-60">(BIGINT, PK)</span></div>
                  <div>👤 user_id <span class="text-[9px] opacity-60">(UUID, FK)</span></div>
                  <div>⚡ action <span class="text-[9px] opacity-60">(TEXT)</span></div>
                </div>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-1">\n  <div class="font-bold">▼ 🗄️ users</div>\n  <div class="pl-5 text-muted">\n    <div>🔑 id (UUID, PK)</div>\n    <div>🏷️ email (VARCHAR)</div>\n  </div>\n</div>`,
          init: (c) => {
            const tables = c.querySelectorAll('.db-table');
            tables.forEach(t => {
              t.addEventListener('click', () => {
                const target = t.getAttribute('data-table');
                const list = c.querySelector(`#db-${target}`);
                const arrow = t.querySelector('.db-arrow');
                if (list) {
                  list.classList.toggle('hidden');
                  if (arrow) arrow.textContent = list.classList.contains('hidden') ? '▶' : '▼';
                }
              });
            });
          }
        },
        {
          id: 'treeview-taxonomy-filter',
          name: '6. Category Taxonomy Filter',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-2">
              <div class="text-[9px] uppercase tracking-widest text-muted border-b border-[color:var(--color-border)] pb-2 flex justify-between">
                <span>Taxonomy Branches</span>
                <span id="tax-active" class="text-emerald-600 dark:text-emerald-400 font-bold">1 Filter Active</span>
              </div>
              <div class="font-bold text-ink dark:text-white">▼ Frontend Engineering</div>
              <div class="pl-4 space-y-1.5 text-muted text-[11px]" id="tax-list">
                <label class="flex items-center gap-2 cursor-pointer font-bold text-ink dark:text-white">
                  <input type="checkbox" checked class="tax-box accent-black dark:accent-white cursor-pointer" />
                  <span>Layouts & Grids (14)</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer hover:text-ink dark:hover:text-white">
                  <input type="checkbox" class="tax-box accent-black dark:accent-white cursor-pointer" />
                  <span>Micro-Interactions (8)</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer hover:text-ink dark:hover:text-white">
                  <input type="checkbox" class="tax-box accent-black dark:accent-white cursor-pointer" />
                  <span>Responsive Navbars (6)</span>
                </label>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-1">\n  <div class="font-bold">▼ Frontend</div>\n  <div class="pl-4 text-muted">\n    <div class="font-bold text-ink">● Layouts (14)</div>\n    <div>● Navbars (6)</div>\n  </div>\n</div>`,
          init: (c) => {
            const boxes = c.querySelectorAll('.tax-box');
            const activeSpan = c.querySelector('#tax-active');
            boxes.forEach(b => {
              b.addEventListener('change', () => {
                const checked = Array.from(boxes).filter(bx => bx.checked).length;
                if (activeSpan) activeSpan.textContent = `${checked} Filter${checked === 1 ? '' : 's'} Active`;
              });
            });
          }
        },
        {
          id: 'treeview-git-branches',
          name: '7. Git Branch & Commit Tree',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-2">
              <div class="text-[9px] uppercase tracking-widest text-muted border-b border-[color:var(--color-border)] pb-1.5 flex justify-between">
                <span>Git Branches (Click to checkout)</span>
                <span id="git-head" class="text-emerald-600 dark:text-emerald-400 font-bold">HEAD: feature/8-categories</span>
              </div>
              <div class="git-branch flex items-center gap-2 text-muted hover:text-ink dark:hover:text-white cursor-pointer py-1" data-branch="main (e4a89c1)">
                <span class="w-2 h-2 rounded-full bg-zinc-400"></span> main <span class="text-[10px] opacity-60">(e4a89c1)</span>
              </div>
              <div class="pl-4 border-l border-[color:var(--color-border)] ml-1 space-y-1 text-muted text-[11px]">
                <div class="git-branch flex items-center gap-2 text-ink dark:text-white font-bold cursor-pointer py-0.5" data-branch="feature/8-categories (HEAD)">
                  <span>└─</span> feature/8-categories <span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">[HEAD]</span>
                </div>
                <div class="git-branch flex items-center gap-2 text-muted hover:text-ink dark:hover:text-white cursor-pointer py-0.5" data-branch="fix/i18n-routing (b18c0a2)">
                  <span>└─</span> fix/i18n-routing
                </div>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-2">\n  <div class="font-bold flex items-center gap-2">\n    <span class="w-2 h-2 rounded-full bg-emerald-500"></span> main\n  </div>\n  <div class="pl-4 border-l ml-1 text-muted">\n    <div>└─ feature/8-categories [HEAD]</div>\n  </div>\n</div>`,
          init: (c) => {
            const branches = c.querySelectorAll('.git-branch');
            const headSpan = c.querySelector('#git-head');
            branches.forEach(b => {
              b.addEventListener('click', () => {
                branches.forEach(br => br.classList.remove('font-bold', 'text-ink', 'dark:text-white'));
                b.classList.add('font-bold', 'text-ink', 'dark:text-white');
                const brName = b.getAttribute('data-branch');
                if (headSpan && brName) headSpan.textContent = `HEAD: ${brName}`;
              });
            });
          }
        },
        {
          id: 'treeview-breadcrumb-path',
          name: '8. Breadcrumb Branch Path',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-2">
              <div class="flex items-center gap-2 flex-wrap text-muted" id="bc-container">
                <span class="bc-crumb hover:text-ink dark:hover:text-white cursor-pointer" data-path="/root">root</span>
                <span>/</span>
                <span class="bc-crumb hover:text-ink dark:hover:text-white cursor-pointer" data-path="/root/projects">projects</span>
                <span>/</span>
                <span class="bc-crumb text-ink dark:text-white font-bold cursor-pointer" data-path="/root/projects/component-library">component-library</span>
              </div>
              <div class="text-[10px] text-muted border-t border-[color:var(--color-border)] pt-2" id="bc-active-path">
                Current URI: <strong class="text-ink dark:text-white">/root/projects/component-library</strong>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs flex gap-2">\n  <span class="text-muted">root</span>\n  <span class="text-muted">/</span>\n  <span class="text-muted">projects</span>\n  <span class="text-muted">/</span>\n  <span class="font-bold text-ink">component-library</span>\n</div>`,
          init: (c) => {
            const crumbs = c.querySelectorAll('.bc-crumb');
            const pathDisplay = c.querySelector('#bc-active-path');
            crumbs.forEach(crumb => {
              crumb.addEventListener('click', () => {
                crumbs.forEach(cr => cr.classList.remove('text-ink', 'dark:text-white', 'font-bold'));
                crumb.classList.add('text-ink', 'dark:text-white', 'font-bold');
                const p = crumb.getAttribute('data-path');
                if (pathDisplay && p) {
                  pathDisplay.innerHTML = `Current URI: <strong class="text-ink dark:text-white">${p}</strong>`;
                }
              });
            });
          }
        },
        {
          id: 'treeview-milestone-tree',
          name: '9. Task Milestone Tree',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-2">
              <div class="text-[9px] uppercase tracking-widest text-muted border-b border-[color:var(--color-border)] pb-2 flex justify-between">
                <span>Milestones</span>
                <span id="ms-progress" class="text-emerald-600 dark:text-emerald-400 font-bold">2/3 Done</span>
              </div>
              <div class="font-bold text-ink dark:text-white">Sprint 04: Component Expansion</div>
              <div class="pl-4 space-y-1.5 text-[11px]" id="ms-tasks">
                <div class="ms-item flex items-center gap-2 cursor-pointer" data-done="true">
                  <span class="ms-icon text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                  <span class="ms-text line-through text-muted">8 Category Architecture</span>
                </div>
                <div class="ms-item flex items-center gap-2 cursor-pointer" data-done="true">
                  <span class="ms-icon text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                  <span class="ms-text line-through text-muted">Full Multilingual Support</span>
                </div>
                <div class="ms-item flex items-center gap-2 cursor-pointer" data-done="false">
                  <span class="ms-icon text-amber-500 font-bold">●</span>
                  <span class="ms-text text-ink dark:text-white font-bold">Zero-dependency Client Logic</span>
                </div>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-1">\n  <div class="font-bold">Sprint 04: Component Expansion</div>\n  <div class="pl-4 text-xs">\n    <div class="text-emerald-400">✓ 8 Categories</div>\n    <div class="text-emerald-400">✓ Multilingual</div>\n  </div>\n</div>`,
          init: (c) => {
            const items = c.querySelectorAll('.ms-item');
            const progress = c.querySelector('#ms-progress');
            items.forEach(it => {
              it.addEventListener('click', () => {
                const isDone = it.getAttribute('data-done') === 'true';
                it.setAttribute('data-done', isDone ? 'false' : 'true');
                const icon = it.querySelector('.ms-icon');
                const text = it.querySelector('.ms-text');
                if (isDone) {
                  if (icon) { icon.textContent = '●'; icon.className = 'ms-icon text-amber-500 font-bold'; }
                  if (text) { text.className = 'ms-text text-ink dark:text-white font-bold'; }
                } else {
                  if (icon) { icon.textContent = '✓'; icon.className = 'ms-icon text-emerald-600 dark:text-emerald-400 font-bold'; }
                  if (text) { text.className = 'ms-text line-through text-muted'; }
                }
                const totalDone = Array.from(items).filter(i => i.getAttribute('data-done') === 'true').length;
                if (progress) progress.textContent = `${totalDone}/${items.length} Done`;
              });
            });
          }
        },
        {
          id: 'treeview-action-menu',
          name: '10. Tree with Context Actions',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-2">
              <div class="flex items-center justify-between p-2 bg-black/5 dark:bg-white/5 border border-[color:var(--color-border)]">
                <span class="font-bold text-ink dark:text-white" id="node-name">📁 design-tokens/</span>
                <div class="flex gap-1.5">
                  <button id="act-add" class="px-2 py-0.5 text-[10px] border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">+ New File</button>
                  <button id="act-del" class="px-2 py-0.5 text-[10px] border border-red-500/40 text-red-500 hover:bg-red-500/10 cursor-pointer">Clear</button>
                </div>
              </div>
              <div class="pl-4 space-y-1 text-muted text-[11px]" id="tree-subnodes">
                <div>📄 colors.json</div>
                <div>📄 typography.json</div>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs">\n  <div class="flex justify-between items-center border p-2">\n    <span class="font-bold">📁 design-tokens/</span>\n    <div class="flex gap-1"><button class="border px-1 text-xs">+ New</button></div>\n  </div>\n</div>`,
          init: (c) => {
            const addBtn = c.querySelector('#act-add');
            const delBtn = c.querySelector('#act-del');
            const container = c.querySelector('#tree-subnodes');
            let count = 1;
            addBtn?.addEventListener('click', () => {
              const div = document.createElement('div');
              div.textContent = `📄 token-spec-0${count++}.json`;
              div.className = 'text-emerald-600 dark:text-emerald-400 font-bold';
              container?.appendChild(div);
            });
            delBtn?.addEventListener('click', () => {
              if (container) container.innerHTML = '<div class="text-zinc-400 italic">(Empty folder)</div>';
            });
          }
        }
      ],

      // 3. POPOVER
      popover: [
        {
          id: 'popover-user-profile',
          name: '1. User Profile Flyout',
          html: `
            <div class="relative inline-block text-left font-mono" id="pop1-root">
              <button id="pop1-btn" class="px-4 py-2.5 border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] text-xs font-bold text-ink dark:text-white hover:bg-black/5 dark:hover:bg-white/10 flex items-center gap-2 cursor-pointer shadow-sm">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>alex.rivera</span>
                <span class="text-[9px] text-muted">▼</span>
              </button>
              <div id="pop1-panel" class="absolute left-0 mt-2 w-64 border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] shadow-2xl p-4 text-xs space-y-3 z-30 hidden">
                <div class="border-b border-[color:var(--color-border)] pb-2">
                  <div class="font-bold text-ink dark:text-white">Alex Rivera</div>
                  <div class="text-[10px] text-muted">lead.architect@enterprise.io</div>
                </div>
                <div class="space-y-1.5 text-muted text-[11px]" id="pop1-menu-items">
                  <button class="w-full text-left py-1 hover:text-ink dark:hover:text-white cursor-pointer flex justify-between"><span>Profile Settings</span> <span class="text-[9px] opacity-60">⌘,</span></button>
                  <button class="w-full text-left py-1 hover:text-ink dark:hover:text-white cursor-pointer flex justify-between"><span>API Access Tokens</span> <span class="text-[9px] opacity-60">2 Active</span></button>
                  <button class="w-full text-left py-1 hover:text-ink dark:hover:text-white cursor-pointer flex justify-between"><span>Audit Log</span> <span class="text-[9px] opacity-60">100% OK</span></button>
                </div>
                <div class="border-t border-[color:var(--color-border)] pt-2 flex justify-between items-center" id="pop1-footer">
                  <button id="pop1-signout" class="text-[10px] text-red-500 hover:underline cursor-pointer font-bold">Sign out</button>
                  <span id="pop1-status" class="text-[9px] text-muted">Session: Active</span>
                </div>
              </div>
            </div>
          `,
          code: `<div class="relative inline-block font-mono text-xs">\n  <button class="border px-4 py-2 font-bold flex items-center gap-2">\n    <span class="w-2 h-2 bg-emerald-500 rounded-full"></span>\n    <span>alex.rivera</span>\n  </button>\n  <div class="absolute mt-2 w-64 border bg-surface p-4 shadow-xl">\n    <div class="font-bold">Alex Rivera</div>\n    <div class="text-xs text-muted">lead.architect@enterprise.io</div>\n  </div>\n</div>`,
          init: (c) => {
            const btn = c.querySelector('#pop1-btn');
            const panel = c.querySelector('#pop1-panel');
            const signout = c.querySelector('#pop1-signout');
            const status = c.querySelector('#pop1-status');
            btn?.addEventListener('click', (e) => {
              e.stopPropagation();
              panel?.classList.toggle('hidden');
            });
            signout?.addEventListener('click', () => {
              if (status) {
                status.textContent = 'Signed out ✓';
                status.className = 'text-[9px] text-emerald-500 font-bold';
              }
              setTimeout(() => { panel?.classList.add('hidden'); }, 800);
            });
          }
        },
        {
          id: 'popover-shortcut-palette',
          name: '2. Shortcut Menu Popover',
          html: `
            <div class="w-full max-w-sm border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-2.5">
              <div class="text-[9px] uppercase tracking-widest text-muted border-b border-[color:var(--color-border)] pb-1.5 flex justify-between">
                <span>Keyboard Shortcuts</span>
                <span id="sc-feedback" class="text-emerald-600 dark:text-emerald-400 font-bold">Click to trigger</span>
              </div>
              <button class="sc-btn w-full flex justify-between items-center text-ink dark:text-white p-1 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer" data-name="Quick Search">
                <span>Quick Search</span>
                <kbd class="px-1.5 py-0.5 border border-[color:var(--color-border)] bg-zinc-100 dark:bg-zinc-800 text-[10px]">⌘K</kbd>
              </button>
              <button class="sc-btn w-full flex justify-between items-center text-ink dark:text-white p-1 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer" data-name="Toggle Theme">
                <span>Toggle Theme</span>
                <kbd class="px-1.5 py-0.5 border border-[color:var(--color-border)] bg-zinc-100 dark:bg-zinc-800 text-[10px]">⌘T</kbd>
              </button>
              <button class="sc-btn w-full flex justify-between items-center text-ink dark:text-white p-1 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer" data-name="Copy Code">
                <span>Copy Code</span>
                <kbd class="px-1.5 py-0.5 border border-[color:var(--color-border)] bg-zinc-100 dark:bg-zinc-800 text-[10px]">⌘C</kbd>
              </button>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-2">\n  <div class="flex justify-between">\n    <span>Quick Search</span>\n    <kbd class="border px-1 text-xs">⌘K</kbd>\n  </div>\n</div>`,
          init: (c) => {
            const btns = c.querySelectorAll('.sc-btn');
            const feedback = c.querySelector('#sc-feedback');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                const name = b.getAttribute('data-name');
                if (feedback && name) {
                  feedback.textContent = `Triggered: ${name}!`;
                  setTimeout(() => { feedback.textContent = 'Click to trigger'; }, 1500);
                }
              });
            });
          }
        },
        {
          id: 'popover-destructive-confirm',
          name: '3. Destructive Action Confirmation',
          html: `
            <div class="w-full max-w-sm border border-red-500/40 bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-3" id="del-root">
              <div class="font-bold text-red-500">⚠️ Confirm Repository Deletion</div>
              <p class="text-[11px] text-muted leading-relaxed m-0" id="del-msg">This action will immediately destroy all build artifacts and deployment logs. Cannot be undone.</p>
              <div class="flex justify-end gap-2 pt-1" id="del-actions">
                <button id="del-cancel" class="px-3 py-1 border border-[color:var(--color-border)] text-xs hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">Cancel</button>
                <button id="del-confirm" class="px-3 py-1 bg-red-600 text-white font-bold text-xs hover:bg-red-700 cursor-pointer">Delete Forever</button>
              </div>
            </div>
          `,
          code: `<div class="border border-red-500/40 p-4 font-mono text-xs space-y-3">\n  <div class="font-bold text-red-500">⚠️ Confirm Deletion</div>\n  <p class="text-xs text-muted">This action cannot be undone.</p>\n  <div class="flex justify-end gap-2">\n    <button class="border px-3 py-1">Cancel</button>\n    <button class="bg-red-600 text-white font-bold px-3 py-1">Delete</button>\n  </div>\n</div>`,
          init: (c) => {
            const cancelBtn = c.querySelector('#del-cancel');
            const confirmBtn = c.querySelector('#del-confirm');
            const msg = c.querySelector('#del-msg');
            const actions = c.querySelector('#del-actions');
            confirmBtn?.addEventListener('click', () => {
              if (msg) msg.textContent = '✓ Repository successfully deleted.';
              if (actions) actions.innerHTML = '<button id="del-reset" class="px-3 py-1 border border-[color:var(--color-border)] text-xs cursor-pointer">Reset Demo</button>';
              c.querySelector('#del-reset')?.addEventListener('click', () => {
                if (msg) msg.textContent = 'This action will immediately destroy all build artifacts and deployment logs. Cannot be undone.';
                if (actions) actions.innerHTML = '<button id="del-cancel" class="px-3 py-1 border border-[color:var(--color-border)] text-xs cursor-pointer">Cancel</button><button id="del-confirm" class="px-3 py-1 bg-red-600 text-white font-bold text-xs cursor-pointer">Delete Forever</button>';
              });
            });
            cancelBtn?.addEventListener('click', () => {
              if (msg) msg.textContent = 'Deletion cancelled.';
              setTimeout(() => {
                if (msg) msg.textContent = 'This action will immediately destroy all build artifacts and deployment logs. Cannot be undone.';
              }, 1200);
            });
          }
        },
        {
          id: 'popover-notification-feed',
          name: '4. Notification Feed Popover',
          html: `
            <div class="w-full max-w-sm border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-3">
              <div class="flex justify-between items-center border-b border-[color:var(--color-border)] pb-2">
                <span class="font-bold text-ink dark:text-white uppercase text-[10px]">Alerts</span>
                <button id="notif-clear" class="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold hover:underline cursor-pointer">2 UNREAD (Mark Read)</button>
              </div>
              <div class="space-y-2" id="notif-items">
                <div class="border-l-2 border-emerald-500 pl-3 space-y-0.5">
                  <div class="font-bold text-ink dark:text-white">Build succeeded</div>
                  <div class="text-[10px] text-muted">153 pages generated in 1.4s</div>
                </div>
                <div class="border-l-2 border-emerald-500 pl-3 space-y-0.5">
                  <div class="font-bold text-ink dark:text-white">Audit completed</div>
                  <div class="text-[10px] text-muted">100% Performance index</div>
                </div>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-3">\n  <div class="flex justify-between border-b pb-2 font-bold">\n    <span>Alerts</span>\n    <span class="text-emerald-500 text-xs">2 NEW</span>\n  </div>\n  <div class="border-l-2 border-emerald-500 pl-3">\n    <div class="font-bold">Build succeeded</div>\n  </div>\n</div>`,
          init: (c) => {
            const clearBtn = c.querySelector('#notif-clear');
            const items = c.querySelectorAll('#notif-items > div');
            clearBtn?.addEventListener('click', () => {
              clearBtn.textContent = '0 UNREAD (All Read)';
              items.forEach(it => {
                it.className = "border-l-2 border-[color:var(--color-border)] pl-3 space-y-0.5 text-muted opacity-60";
              });
            });
          }
        },
        {
          id: 'popover-theme-palette',
          name: '5. Color Theme Palette Picker',
          html: `
            <div class="w-full max-w-xs border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-3" id="theme-pop-box">
              <div class="flex justify-between text-[9px] uppercase tracking-widest text-muted">
                <span>Select Accent Token</span>
                <span id="theme-selected" class="font-bold text-ink dark:text-white">Monochrome</span>
              </div>
              <div class="grid grid-cols-4 gap-2" id="theme-swatches">
                <button class="h-8 bg-zinc-900 border-2 border-white cursor-pointer" data-color="Monochrome" data-border="border-white"></button>
                <button class="h-8 bg-emerald-500 border border-transparent cursor-pointer" data-color="Emerald" data-border="border-emerald-500"></button>
                <button class="h-8 bg-blue-600 border border-transparent cursor-pointer" data-color="Cobalt" data-border="border-blue-500"></button>
                <button class="h-8 bg-amber-500 border border-transparent cursor-pointer" data-color="Amber" data-border="border-amber-500"></button>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-3">\n  <span class="text-xs text-muted">Accent Token</span>\n  <div class="grid grid-cols-4 gap-2">\n    <button class="w-8 h-8 bg-black border-2 border-white"></button>\n    <button class="w-8 h-8 bg-emerald-500"></button>\n  </div>\n</div>`,
          init: (c) => {
            const swatches = c.querySelectorAll('#theme-swatches button');
            const selectedSpan = c.querySelector('#theme-selected');
            const box = c.querySelector('#theme-pop-box');
            swatches.forEach(s => {
              s.addEventListener('click', () => {
                const color = s.getAttribute('data-color');
                if (selectedSpan && color) selectedSpan.textContent = color;
                swatches.forEach(sw => sw.classList.remove('border-2', 'border-white', 'border-ink', 'scale-105'));
                s.classList.add('border-2', 'border-white', 'scale-105');
              });
            });
          }
        },
        {
          id: 'popover-filter-sort',
          name: '6. Filter & Sort Settings',
          html: `
            <div class="w-full max-w-xs border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-3">
              <div class="flex justify-between text-[9px] uppercase tracking-widest text-muted">
                <span>Sort Criteria</span>
                <span id="sort-active" class="font-bold text-ink dark:text-white">Date (Newest)</span>
              </div>
              <div class="space-y-1.5 text-[11px]" id="sort-options">
                <label class="flex items-center gap-2 cursor-pointer font-bold text-ink dark:text-white">
                  <input type="radio" name="sort" value="Date (Newest)" checked class="accent-black dark:accent-white cursor-pointer" /> Date (Newest first)
                </label>
                <label class="flex items-center gap-2 cursor-pointer text-muted hover:text-ink dark:hover:text-white">
                  <input type="radio" name="sort" value="Complexity (Low)" class="accent-black dark:accent-white cursor-pointer" /> Complexity (Low to High)
                </label>
                <label class="flex items-center gap-2 cursor-pointer text-muted hover:text-ink dark:hover:text-white">
                  <input type="radio" name="sort" value="Popularity (High)" class="accent-black dark:accent-white cursor-pointer" /> Popularity (Most Used)
                </label>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-2">\n  <label class="flex items-center gap-2 font-bold">\n    <input type="radio" checked /> Date (Newest first)\n  </label>\n</div>`,
          init: (c) => {
            const radios = c.querySelectorAll('#sort-options input');
            const sortActive = c.querySelector('#sort-active');
            radios.forEach(r => {
              r.addEventListener('change', () => {
                if (sortActive) sortActive.textContent = r.value;
              });
            });
          }
        },
        {
          id: 'popover-share-export',
          name: '7. Share & Export Flyout',
          html: `
            <div class="w-full max-w-xs border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-2">
              <span class="text-[9px] uppercase tracking-widest text-muted border-b border-[color:var(--color-border)] pb-1.5 block">Export Options</span>
              <button class="exp-btn w-full text-left py-1 hover:text-ink dark:hover:text-white cursor-pointer flex justify-between" data-msg="Copied link!">
                <span>Copy Shareable URL</span> <span class="exp-badge text-muted">↗</span>
              </button>
              <button class="exp-btn w-full text-left py-1 hover:text-ink dark:hover:text-white cursor-pointer flex justify-between" data-msg="Exported MD!">
                <span>Export as Markdown</span> <span class="exp-badge text-muted">.MD</span>
              </button>
              <button class="exp-btn w-full text-left py-1 hover:text-ink dark:hover:text-white cursor-pointer flex justify-between" data-msg="Exported JSON!">
                <span>Export as JSON</span> <span class="exp-badge text-muted">.JSON</span>
              </button>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-2">\n  <button class="w-full flex justify-between"><span>Copy Shareable URL</span> <span>↗</span></button>\n  <button class="w-full flex justify-between"><span>Export as JSON</span> <span>.JSON</span></button>\n</div>`,
          init: (c) => {
            const btns = c.querySelectorAll('.exp-btn');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                const badge = b.querySelector('.exp-badge');
                const orig = badge?.textContent;
                const msg = b.getAttribute('data-msg');
                if (badge && msg) {
                  badge.textContent = '✓ OK';
                  badge.className = 'exp-badge text-emerald-500 font-bold';
                  setTimeout(() => {
                    badge.textContent = orig || '';
                    badge.className = 'exp-badge text-muted';
                  }, 1200);
                }
              });
            });
          }
        },
        {
          id: 'popover-term-glossary',
          name: '8. Inline Term Glossary',
          html: `
            <div class="w-full max-w-sm border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-3">
              <div class="flex gap-2 border-b border-[color:var(--color-border)] pb-2" id="gloss-tabs">
                <button class="font-bold text-ink dark:text-white underline cursor-pointer" data-term="ttfb">TTFB</button>
                <button class="text-muted hover:text-ink cursor-pointer" data-term="fcp">FCP</button>
                <button class="text-muted hover:text-ink cursor-pointer" data-term="cls">CLS</button>
              </div>
              <div id="gloss-content" class="space-y-1">
                <div class="font-bold text-ink dark:text-white flex items-center gap-1.5">
                  <span>📖 TTFB</span> <span class="text-[10px] text-muted">(Time to First Byte)</span>
                </div>
                <p class="text-[11px] text-muted leading-relaxed m-0">The duration from client HTTP request dispatch to the initial packet arrival from edge cache.</p>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-1.5">\n  <div class="font-bold">📖 TTFB (Time to First Byte)</div>\n  <p class="text-xs text-muted">The duration from HTTP request to first byte received.</p>\n</div>`,
          init: (c) => {
            const terms = {
              ttfb: { title: "📖 TTFB", sub: "(Time to First Byte)", desc: "The duration from client HTTP request dispatch to the initial packet arrival from edge cache." },
              fcp: { title: "⚡ FCP", sub: "(First Contentful Paint)", desc: "Measures the time from when the page starts loading to when any part of the page's content is rendered." },
              cls: { title: "📐 CLS", sub: "(Cumulative Layout Shift)", desc: "Measures visual stability by quantifying how often users experience unexpected layout shifts." }
            };
            const btns = c.querySelectorAll('#gloss-tabs button');
            const content = c.querySelector('#gloss-content');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "text-muted hover:text-ink dark:hover:text-white cursor-pointer";
                });
                b.className = "font-bold text-ink dark:text-white underline cursor-pointer";
                const tKey = b.getAttribute('data-term');
                const tData = terms[tKey];
                if (content && tData) {
                  content.innerHTML = `
                    <div class="font-bold text-ink dark:text-white flex items-center gap-1.5">
                      <span>${tData.title}</span> <span class="text-[10px] text-muted">${tData.sub}</span>
                    </div>
                    <p class="text-[11px] text-muted leading-relaxed m-0">${tData.desc}</p>
                  `;
                }
              });
            });
          }
        },
        {
          id: 'popover-volume-slider',
          name: '9. Audio & Volume Control',
          html: `
            <div class="w-full max-w-xs border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-3">
              <div class="flex justify-between text-[10px] text-muted">
                <span id="vol-icon">🔊 Output Level</span>
                <span id="vol-val" class="text-ink dark:text-white font-bold">85%</span>
              </div>
              <input type="range" id="vol-slider" min="0" max="100" value="85" class="w-full accent-black dark:accent-white cursor-pointer" />
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-3">\n  <div class="flex justify-between"><span>Output Level</span><span class="font-bold">85%</span></div>\n  <input type="range" min="0" max="100" value="85" class="w-full" />\n</div>`,
          init: (c) => {
            const slider = c.querySelector('#vol-slider');
            const valSpan = c.querySelector('#vol-val');
            const iconSpan = c.querySelector('#vol-icon');
            slider?.addEventListener('input', (e) => {
              const val = e.target.value;
              if (valSpan) valSpan.textContent = `${val}%`;
              if (iconSpan) {
                if (val == 0) iconSpan.textContent = '🔇 Muted';
                else if (val < 50) iconSpan.textContent = '🔉 Output Level';
                else iconSpan.textContent = '🔊 Output Level';
              }
            });
          }
        },
        {
          id: 'popover-mini-cart',
          name: '10. Mini Cart Quick View',
          html: `
            <div class="w-full max-w-sm border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-3">
              <div class="flex justify-between items-center border-b border-[color:var(--color-border)] pb-2 font-bold text-ink dark:text-white">
                <span>Enterprise UI Kit License</span>
                <span id="cart-total">$499</span>
              </div>
              <div class="flex justify-between items-center text-[11px] text-muted">
                <span>Developer Seats:</span>
                <div class="flex items-center gap-2">
                  <button id="cart-dec" class="w-6 h-6 border border-[color:var(--color-border)] flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">-</button>
                  <span id="cart-qty" class="font-bold text-ink dark:text-white">1</span>
                  <button id="cart-inc" class="w-6 h-6 border border-[color:var(--color-border)] flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">+</button>
                </div>
              </div>
              <button id="cart-checkout" class="w-full py-2 bg-ink text-paper dark:bg-white dark:text-black font-bold uppercase tracking-wider text-[11px] cursor-pointer">Checkout →</button>
              <div id="cart-status" class="text-[10px] text-center text-muted hidden"></div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-3">\n  <div class="flex justify-between font-bold"><span>Enterprise License</span><span>$499</span></div>\n  <button class="w-full py-2 bg-ink text-paper font-bold uppercase">Checkout →</button>\n</div>`,
          init: (c) => {
            let qty = 1;
            const price = 499;
            const qtySpan = c.querySelector('#cart-qty');
            const totalSpan = c.querySelector('#cart-total');
            const checkout = c.querySelector('#cart-checkout');
            const status = c.querySelector('#cart-status');
            const update = () => {
              if (qtySpan) qtySpan.textContent = `${qty}`;
              if (totalSpan) totalSpan.textContent = `$${qty * price}`;
            };
            c.querySelector('#cart-inc')?.addEventListener('click', () => { qty++; update(); });
            c.querySelector('#cart-dec')?.addEventListener('click', () => { if (qty > 1) qty--; update(); });
            checkout?.addEventListener('click', () => {
              if (status) {
                status.classList.remove('hidden');
                status.innerHTML = `<span class="text-emerald-500 font-bold">✓ Ready:</span> ${qty} seat(s) reserved ($${qty * price})`;
                setTimeout(() => { status.classList.add('hidden'); }, 2000);
              }
            });
          }
        }
      ],

      // 4. RATING
      rating: [
        {
          id: 'rating-5-star',
          name: '1. Interactive 5-Star Rating',
          html: `
            <div class="w-full max-w-sm border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-5 text-center font-mono select-none space-y-3" id="rt1-container">
              <div class="text-[9px] uppercase tracking-widest text-muted">Developer Experience (Click to rate)</div>
              <div class="flex justify-center gap-2 text-2xl text-zinc-300 dark:text-zinc-700 cursor-pointer" id="rt1-stars">
                <span class="star hover:text-amber-400 transition-colors text-amber-400" data-val="1">★</span>
                <span class="star hover:text-amber-400 transition-colors text-amber-400" data-val="2">★</span>
                <span class="star hover:text-amber-400 transition-colors text-amber-400" data-val="3">★</span>
                <span class="star hover:text-amber-400 transition-colors text-amber-400" data-val="4">★</span>
                <span class="star hover:text-amber-400 transition-colors text-amber-400" data-val="5">★</span>
              </div>
              <div class="text-xs font-bold text-ink dark:text-white" id="rt1-score">5.0 / 5.0 (Exceptional)</div>
            </div>
          `,
          code: `<div class="border p-5 font-mono text-center space-y-3">\n  <div class="text-xs text-muted">Developer Experience</div>\n  <div class="flex justify-center gap-2 text-2xl text-amber-400">\n    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>\n  </div>\n  <div class="text-xs font-bold">5.0 / 5.0</div>\n</div>`,
          init: (c) => {
            const stars = c.querySelectorAll('#rt1-stars .star');
            const score = c.querySelector('#rt1-score');
            const labels = ["Poor", "Fair", "Good", "Great", "Exceptional"];
            stars.forEach(s => {
              s.addEventListener('click', () => {
                const val = parseInt(s.getAttribute('data-val') || '5', 10);
                stars.forEach((st, i) => {
                  st.className = i < val ? "star hover:text-amber-400 transition-colors text-amber-400" : "star hover:text-amber-400 transition-colors text-zinc-300 dark:text-zinc-700";
                });
                if (score) score.textContent = `${val}.0 / 5.0 (${labels[val - 1]})`;
              });
            });
          }
        },
        {
          id: 'rating-nps-scale',
          name: '2. 10-Point NPS Scale',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-5 text-left font-mono select-none space-y-3">
              <div class="flex justify-between text-[9px] uppercase tracking-widest text-muted">
                <span>Net Promoter Score</span>
                <span id="nps-label" class="text-emerald-600 dark:text-emerald-400 font-bold">Promoter (10/10)</span>
              </div>
              <div class="grid grid-cols-10 gap-1 text-center text-xs" id="rt2-buttons">
                <button class="nps-btn py-2 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer" data-val="1">1</button>
                <button class="nps-btn py-2 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer" data-val="2">2</button>
                <button class="nps-btn py-2 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer" data-val="3">3</button>
                <button class="nps-btn py-2 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer" data-val="4">4</button>
                <button class="nps-btn py-2 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer" data-val="5">5</button>
                <button class="nps-btn py-2 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer" data-val="6">6</button>
                <button class="nps-btn py-2 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer" data-val="7">7</button>
                <button class="nps-btn py-2 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer" data-val="8">8</button>
                <button class="nps-btn py-2 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer" data-val="9">9</button>
                <button class="nps-btn py-2 bg-ink text-paper dark:bg-white dark:text-black font-bold border border-ink dark:border-white cursor-pointer" data-val="10">10</button>
              </div>
              <div class="flex justify-between text-[9px] text-muted">
                <span>0-6 Detractor</span>
                <span>7-8 Passive</span>
                <span>9-10 Promoter</span>
              </div>
            </div>
          `,
          code: `<div class="border p-5 font-mono text-xs space-y-3">\n  <span class="text-xs text-muted">Net Promoter Score</span>\n  <div class="grid grid-cols-10 gap-1 text-center">\n    <button class="border py-2">1</button>...<button class="bg-ink text-paper py-2 font-bold">10</button>\n  </div>\n</div>`,
          init: (c) => {
            const btns = c.querySelectorAll('#rt2-buttons .nps-btn');
            const label = c.querySelector('#nps-label');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "nps-btn py-2 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer";
                });
                b.className = "nps-btn py-2 bg-ink text-paper dark:bg-white dark:text-black font-bold border border-ink dark:border-white cursor-pointer";
                const val = parseInt(b.getAttribute('data-val') || '10', 10);
                if (label) {
                  if (val <= 6) { label.textContent = `Detractor (${val}/10)`; label.className = 'text-red-500 font-bold'; }
                  else if (val <= 8) { label.textContent = `Passive (${val}/10)`; label.className = 'text-amber-500 font-bold'; }
                  else { label.textContent = `Promoter (${val}/10)`; label.className = 'text-emerald-500 font-bold'; }
                }
              });
            });
          }
        },
        {
          id: 'rating-sentiment-row',
          name: '3. Sentiment Feedback Row',
          html: `
            <div class="w-full max-w-sm border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-5 text-center font-mono select-none space-y-3">
              <div class="text-[9px] uppercase tracking-widest text-muted" id="sent-title">Selected: Rocket Speed 🚀</div>
              <div class="flex justify-center gap-4 text-2xl cursor-pointer" id="sent-emojis">
                <button class="sent-btn opacity-40 hover:opacity-100 transition-all" data-label="Terrible 😞">😞</button>
                <button class="sent-btn opacity-40 hover:opacity-100 transition-all" data-label="Neutral 😐">😐</button>
                <button class="sent-btn opacity-40 hover:opacity-100 transition-all" data-label="Satisfied 🙂">🙂</button>
                <button class="sent-btn opacity-100 scale-125 transition-all" data-label="Rocket Speed 🚀">🚀</button>
              </div>
            </div>
          `,
          code: `<div class="border p-5 font-mono text-center space-y-3">\n  <span class="text-xs text-muted">Deployment sentiment</span>\n  <div class="flex justify-center gap-4 text-2xl">\n    <button>😞</button><button>😐</button><button>🙂</button><button class="scale-125">🚀</button>\n  </div>\n</div>`,
          init: (c) => {
            const btns = c.querySelectorAll('#sent-emojis .sent-btn');
            const title = c.querySelector('#sent-title');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "sent-btn opacity-40 hover:opacity-100 transition-all";
                });
                b.className = "sent-btn opacity-100 scale-125 transition-all";
                if (title) title.textContent = `Selected: ${b.getAttribute('data-label')}`;
              });
            });
          }
        },
        {
          id: 'rating-thumbs-binary',
          name: '4. Thumbs Up / Down Binary Vote',
          html: `
            <div class="w-full max-w-xs border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-3">
              <span class="text-[9px] uppercase tracking-widest text-muted">Was this helpful?</span>
              <div class="flex gap-2">
                <button id="thumb-up" class="flex-1 py-1.5 border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center gap-1.5 cursor-pointer">
                  👍 Yes (<span id="up-count">42</span>)
                </button>
                <button id="thumb-down" class="flex-1 py-1.5 border border-[color:var(--color-border)] text-muted hover:text-ink dark:hover:text-white flex items-center justify-center gap-1.5 cursor-pointer">
                  👎 No (<span id="down-count">1</span>)
                </button>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-3">\n  <span class="text-xs text-muted">Was this helpful?</span>\n  <div class="flex gap-2">\n    <button class="flex-1 border border-emerald-500 bg-emerald-500/10 py-1.5 font-bold">👍 Yes (42)</button>\n    <button class="flex-1 border py-1.5 text-muted">👎 No (1)</button>\n  </div>\n</div>`,
          init: (c) => {
            const up = c.querySelector('#thumb-up');
            const down = c.querySelector('#thumb-down');
            const upCount = c.querySelector('#up-count');
            const downCount = c.querySelector('#down-count');
            let u = 42, d = 1;
            up?.addEventListener('click', () => {
              u++;
              if (upCount) upCount.textContent = `${u}`;
              up.className = "flex-1 py-1.5 border border-emerald-500 bg-emerald-500/20 text-emerald-500 font-bold flex items-center justify-center gap-1.5 cursor-pointer";
            });
            down?.addEventListener('click', () => {
              d++;
              if (downCount) downCount.textContent = `${d}`;
              down.className = "flex-1 py-1.5 border border-red-500 bg-red-500/20 text-red-500 font-bold flex items-center justify-center gap-1.5 cursor-pointer";
            });
          }
        },
        {
          id: 'rating-multi-category',
          name: '5. Multi-Category Rating Breakdown',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-5 text-left font-mono select-none text-xs space-y-3" id="scorecard-root">
              <div class="text-[9px] uppercase tracking-widest text-muted border-b border-[color:var(--color-border)] pb-2 flex justify-between items-center">
                <span>Interactive Scorecard (Click to adjust)</span>
                <span class="font-bold text-ink dark:text-white" id="sc-overall">OVERALL: 4.9 / 5.0</span>
              </div>
              <div class="space-y-2" id="sc-categories">
                <div class="flex justify-between items-center p-1.5 border border-transparent hover:border-[color:var(--color-border)] transition-all">
                  <span class="font-bold text-ink dark:text-white">Code Cleanliness</span>
                  <div class="flex items-center gap-2">
                    <div class="flex gap-1 text-amber-400 cursor-pointer sc-stars" data-cat="code" data-score="5">
                      <span data-s="1">★</span><span data-s="2">★</span><span data-s="3">★</span><span data-s="4">★</span><span data-s="5">★</span>
                    </div>
                    <span class="font-bold text-ink dark:text-white w-7 text-right sc-val">5.0</span>
                  </div>
                </div>
                <div class="flex justify-between items-center p-1.5 border border-transparent hover:border-[color:var(--color-border)] transition-all">
                  <span class="font-bold text-ink dark:text-white">Page Speed (LCP)</span>
                  <div class="flex items-center gap-2">
                    <div class="flex gap-1 text-amber-400 cursor-pointer sc-stars" data-cat="speed" data-score="5">
                      <span data-s="1">★</span><span data-s="2">★</span><span data-s="3">★</span><span data-s="4">★</span><span data-s="5">★</span>
                    </div>
                    <span class="font-bold text-ink dark:text-white w-7 text-right sc-val">5.0</span>
                  </div>
                </div>
                <div class="flex justify-between items-center p-1.5 border border-transparent hover:border-[color:var(--color-border)] transition-all">
                  <span class="font-bold text-ink dark:text-white">Accessibility (WCAG)</span>
                  <div class="flex items-center gap-2">
                    <div class="flex gap-1 text-amber-400 cursor-pointer sc-stars" data-cat="a11y" data-score="4">
                      <span data-s="1">★</span><span data-s="2">★</span><span data-s="3">★</span><span data-s="4">★</span><span data-s="5" class="text-zinc-300 dark:text-zinc-700">★</span>
                    </div>
                    <span class="font-bold text-ink dark:text-white w-7 text-right sc-val">4.0</span>
                  </div>
                </div>
              </div>
              <div class="text-[9px] text-muted border-t border-[color:var(--color-border)] pt-2 flex justify-between">
                <span>Weighted Arithmetic Mean</span>
                <span class="text-emerald-500 font-bold" id="sc-status">Optimal Architecture</span>
              </div>
            </div>
          `,
          code: `<div class="border p-5 font-mono text-xs space-y-3">\n  <div class="flex justify-between border-b pb-2"><span>Scorecard</span><span class="font-bold">Overall: 4.9/5.0</span></div>\n  <div class="flex justify-between"><span>Code Cleanliness</span><span class="text-amber-400">★★★★★ 5.0</span></div>\n  <div class="flex justify-between"><span>Page Speed</span><span class="text-amber-400">★★★★★ 5.0</span></div>\n</div>`,
          init: (c) => {
            const starGroups = c.querySelectorAll('#sc-categories .sc-stars');
            const overallEl = c.querySelector('#sc-overall');
            const statusEl = c.querySelector('#sc-status');
            const scores = { code: 5, speed: 5, a11y: 4 };

            const updateOverall = () => {
              const vals = Object.values(scores);
              const avg = (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1);
              if (overallEl) overallEl.textContent = `OVERALL: ${avg} / 5.0`;
              if (statusEl) {
                if (avg >= 4.5) { statusEl.textContent = 'Optimal Architecture (100%)'; statusEl.className = 'text-emerald-500 font-bold'; }
                else if (avg >= 3.5) { statusEl.textContent = 'Acceptable (Good)'; statusEl.className = 'text-amber-500 font-bold'; }
                else { statusEl.textContent = 'Needs Refactoring'; statusEl.className = 'text-red-500 font-bold'; }
              }
            };

            starGroups.forEach(group => {
              const cat = group.getAttribute('data-cat');
              const valEl = group.parentElement?.querySelector('.sc-val');
              const stars = group.querySelectorAll('span');

              stars.forEach(st => {
                st.addEventListener('click', () => {
                  const sVal = parseInt(st.getAttribute('data-s') || '5', 10);
                  if (cat) scores[cat] = sVal;
                  if (valEl) valEl.textContent = `${sVal}.0`;

                  stars.forEach((s, idx) => {
                    s.className = idx < sVal ? 'text-amber-400' : 'text-zinc-300 dark:text-zinc-700';
                  });

                  updateOverall();
                });
              });
            });
          }
        },
        {
          id: 'rating-difficulty-meter',
          name: '6. Difficulty Level Meter',
          html: `
            <div class="w-full max-w-xs border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-2">
              <div class="flex justify-between text-[10px]">
                <span class="text-muted uppercase">Difficulty (Click level)</span>
                <span id="diff-label" class="font-bold text-ink dark:text-white">Level 4/5 (Advanced)</span>
              </div>
              <div class="grid grid-cols-5 gap-1.5 cursor-pointer" id="diff-bars">
                <div class="h-3 bg-ink dark:bg-white transition-all" data-level="1"></div>
                <div class="h-3 bg-ink dark:bg-white transition-all" data-level="2"></div>
                <div class="h-3 bg-ink dark:bg-white transition-all" data-level="3"></div>
                <div class="h-3 bg-ink dark:bg-white transition-all" data-level="4"></div>
                <div class="h-3 bg-zinc-200 dark:bg-zinc-800 transition-all" data-level="5"></div>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-2">\n  <div class="flex justify-between"><span class="text-muted">Difficulty</span><span class="font-bold">Level 4/5</span></div>\n  <div class="grid grid-cols-5 gap-1"><div class="h-2 bg-ink"></div><div class="h-2 bg-ink"></div></div>\n</div>`,
          init: (c) => {
            const bars = c.querySelectorAll('#diff-bars div');
            const label = c.querySelector('#diff-label');
            const names = ["Beginner", "Easy", "Intermediate", "Advanced", "Master"];
            bars.forEach(b => {
              b.addEventListener('click', () => {
                const lvl = parseInt(b.getAttribute('data-level') || '4', 10);
                bars.forEach((bar, i) => {
                  bar.className = i < lvl ? "h-3 bg-ink dark:bg-white transition-all" : "h-3 bg-zinc-200 dark:bg-zinc-800 transition-all";
                });
                if (label) label.textContent = `Level ${lvl}/5 (${names[lvl - 1]})`;
              });
            });
          }
        },
        {
          id: 'rating-half-star',
          name: '7. Decimal Precision Rating',
          html: `
            <div class="w-full max-w-sm border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-5 text-center font-mono select-none space-y-3">
              <div class="text-4xl font-bold text-ink dark:text-white" id="dec-score">4.92</div>
              <div class="flex justify-center items-center gap-1.5 text-amber-400 text-lg" id="dec-stars-wrap">
                <span>★★★★★</span>
              </div>
              <div class="text-[9px] text-muted uppercase tracking-wider" id="dec-reviews-count">Based on 148 verified client reviews</div>
              
              <!-- Interactive Precision Scrubber Controls -->
              <div class="pt-2 border-t border-[color:var(--color-border)]/60 space-y-2">
                <div class="flex justify-between items-center text-[10px] text-muted">
                  <span>Fine Adjust Score:</span>
                  <div class="flex gap-1.5">
                    <button id="dec-minus" class="px-2 py-0.5 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">-0.10</button>
                    <button id="dec-plus" class="px-2 py-0.5 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">+0.10</button>
                  </div>
                </div>
                <input type="range" id="dec-slider" min="100" max="500" value="492" class="w-full accent-amber-400 cursor-pointer" />
              </div>
            </div>
          `,
          code: `<div class="border p-5 font-mono text-center space-y-3">\n  <div class="text-4xl font-bold">4.92</div>\n  <div class="text-amber-400 text-lg">★★★★★</div>\n  <div class="text-xs text-muted">148 verified reviews</div>\n  <input type="range" min="100" max="500" value="492" class="w-full accent-amber-400" />\n</div>`,
          init: (c) => {
            const scoreEl = c.querySelector('#dec-score');
            const slider = c.querySelector('#dec-slider');
            const minusBtn = c.querySelector('#dec-minus');
            const plusBtn = c.querySelector('#dec-plus');
            const reviewsEl = c.querySelector('#dec-reviews-count');
            const starsWrap = c.querySelector('#dec-stars-wrap');

            const setScore = (val) => {
              const clamped = Math.max(1.00, Math.min(5.00, val));
              const formatted = clamped.toFixed(2);
              if (scoreEl) scoreEl.textContent = formatted;
              if (slider) slider.value = Math.round(clamped * 100);
              
              const fullStars = Math.floor(clamped);
              const hasHalf = (clamped - fullStars) >= 0.3;
              let starStr = '★'.repeat(fullStars);
              if (hasHalf && fullStars < 5) starStr += '⯪';
              while (starStr.length < 5) starStr += '☆';
              if (starsWrap) starsWrap.innerHTML = `<span>${starStr}</span>`;

              const mockReviews = Math.round(100 + clamped * 12);
              if (reviewsEl) reviewsEl.textContent = `Based on ${mockReviews} verified client reviews`;
            };

            slider?.addEventListener('input', (e) => {
              setScore(parseInt(e.target.value, 10) / 100);
            });

            minusBtn?.addEventListener('click', () => {
              const cur = parseFloat(scoreEl?.textContent || '4.92');
              setScore(cur - 0.10);
            });

            plusBtn?.addEventListener('click', () => {
              const cur = parseFloat(scoreEl?.textContent || '4.92');
              setScore(cur + 0.10);
            });
          }
        },
        {
          id: 'rating-satisfaction-slider',
          name: '8. Satisfaction Percentage Slider',
          html: `
            <div class="w-full max-w-sm border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-3">
              <div class="flex justify-between">
                <span class="text-muted uppercase text-[10px]">Satisfaction</span>
                <span id="sat-val" class="text-emerald-600 dark:text-emerald-400 font-bold">98% Satisfied</span>
              </div>
              <input type="range" id="sat-slider" min="0" max="100" value="98" class="w-full accent-emerald-500 cursor-pointer" />
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-3">\n  <div class="flex justify-between"><span>Satisfaction</span><span class="font-bold text-emerald-400">98%</span></div>\n  <input type="range" min="0" max="100" value="98" class="w-full accent-emerald-500" />\n</div>`,
          init: (c) => {
            const slider = c.querySelector('#sat-slider');
            const satVal = c.querySelector('#sat-val');
            slider?.addEventListener('input', (e) => {
              const val = e.target.value;
              if (satVal) {
                if (val >= 80) { satVal.textContent = `${val}% Highly Satisfied`; satVal.className = 'text-emerald-500 font-bold'; }
                else if (val >= 50) { satVal.textContent = `${val}% Neutral`; satVal.className = 'text-amber-500 font-bold'; }
                else { satVal.textContent = `${val}% Unsatisfied`; satVal.className = 'text-red-500 font-bold'; }
              }
            });
          }
        },
        {
          id: 'rating-dot-matrix',
          name: '9. Minimalist Dot Matrix Rating',
          html: `
            <div class="w-full max-w-xs border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-2">
              <span class="text-[9px] uppercase tracking-widest text-muted">Test Coverage Score</span>
              <div class="flex items-center gap-1.5 cursor-pointer" id="dot-matrix-row">
                <span class="w-3.5 h-3.5 bg-ink dark:bg-white" data-dot="1"></span>
                <span class="w-3.5 h-3.5 bg-ink dark:bg-white" data-dot="2"></span>
                <span class="w-3.5 h-3.5 bg-ink dark:bg-white" data-dot="3"></span>
                <span class="w-3.5 h-3.5 bg-ink dark:bg-white" data-dot="4"></span>
                <span class="w-3.5 h-3.5 border border-[color:var(--color-border)]" data-dot="5"></span>
                <span id="dot-percent" class="ml-2 font-bold text-ink dark:text-white">80%</span>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-2">\n  <span class="text-xs text-muted">Code Coverage</span>\n  <div class="flex items-center gap-1.5"><span class="w-3 h-3 bg-ink"></span><span class="w-3 h-3 bg-ink"></span><span class="w-3 h-3 border"></span><span>80%</span></div>\n</div>`,
          init: (c) => {
            const dots = c.querySelectorAll('#dot-matrix-row > span[data-dot]');
            const pct = c.querySelector('#dot-percent');
            dots.forEach(d => {
              d.addEventListener('click', () => {
                const val = parseInt(d.getAttribute('data-dot') || '4', 10);
                dots.forEach((dot, i) => {
                  dot.className = i < val ? "w-3.5 h-3.5 bg-ink dark:bg-white" : "w-3.5 h-3.5 border border-[color:var(--color-border)]";
                });
                if (pct) pct.textContent = `${val * 20}%`;
              });
            });
          }
        },
        {
          id: 'rating-review-input',
          name: '10. Review Input with Stars',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-5 text-left font-mono select-none text-xs space-y-3">
              <div class="flex justify-between items-center border-b border-[color:var(--color-border)] pb-2">
                <span class="font-bold text-ink dark:text-white uppercase text-[10px]">Submit Component Rating</span>
                <div class="text-amber-400 text-base cursor-pointer flex gap-1" id="inp-stars">
                  <span data-star="1">★</span><span data-star="2">★</span><span data-star="3">★</span><span data-star="4">★</span><span data-star="5">★</span>
                </div>
              </div>
              <div class="flex gap-2">
                <input type="text" id="inp-text" placeholder="Add architectural review notes..." class="flex-1 border border-[color:var(--color-border)] bg-zinc-50 dark:bg-black/50 px-3 py-1.5 text-xs outline-none focus:border-ink dark:focus:border-white" />
                <button id="inp-submit" class="px-4 py-1.5 bg-ink text-paper dark:bg-white dark:text-black font-bold uppercase text-[10px] cursor-pointer">Submit</button>
              </div>
              <div id="inp-feedback-list" class="space-y-1.5 pt-2 border-t border-[color:var(--color-border)]/60 text-[11px] text-muted">
                <div class="flex justify-between items-center text-ink dark:text-white">
                  <span>“Sub-20ms TTFB across edge nodes is remarkable.”</span>
                  <span class="text-amber-400 font-bold">★★★★★</span>
                </div>
              </div>
            </div>
          `,
          code: `<div class="border p-5 font-mono text-xs space-y-3">\n  <div class="flex justify-between"><span class="font-bold">Rating</span><span class="text-amber-400">★★★★★</span></div>\n  <input type="text" placeholder="Review notes..." class="w-full border p-2 text-xs" />\n  <button class="bg-ink text-paper px-4 py-1.5 font-bold uppercase">Submit</button>\n</div>`,
          init: (c) => {
            const btn = c.querySelector('#inp-submit');
            const inp = c.querySelector('#inp-text');
            const stars = c.querySelectorAll('#inp-stars span');
            const list = c.querySelector('#inp-feedback-list');
            let currentStar = 5;

            stars.forEach(s => {
              s.addEventListener('click', () => {
                currentStar = parseInt(s.getAttribute('data-star') || '5', 10);
                stars.forEach((st, i) => {
                  st.className = i < currentStar ? 'text-amber-400' : 'text-zinc-300 dark:text-zinc-700';
                });
              });
            });

            btn?.addEventListener('click', () => {
              const text = inp ? inp.value.trim() : '';
              if (!text) {
                if (inp) inp.placeholder = 'Please enter a review first!';
                return;
              }
              const row = document.createElement('div');
              row.className = "flex justify-between items-center text-emerald-600 dark:text-emerald-400 font-bold";
              row.innerHTML = `<span>“${text}”</span><span class="text-amber-400">${'★'.repeat(currentStar)}</span>`;
              list?.prepend(row);
              if (inp) inp.value = '';
            });
          }
        }
      ],

      // 5. ACCORDION
      accordion: [
        {
          id: 'accordion-minimalist-faq',
          name: '1. Minimalist FAQ Accordion',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] divide-y divide-[color:var(--color-border)] text-left font-mono select-none text-xs" id="acc1-root">
              <div class="acc-item">
                <button class="w-full px-5 py-3.5 flex justify-between items-center text-ink dark:text-white font-bold hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer acc-trigger">
                  <span>How does zero-runtime architecture work?</span>
                  <span class="acc-icon text-muted text-sm">+</span>
                </button>
                <div class="acc-body px-5 pb-4 text-muted text-[11px] leading-relaxed hidden">
                  All interactive widgets compile to lightweight semantic HTML and standard Web APIs, avoiding multi-megabyte JavaScript bundles.
                </div>
              </div>
              <div class="acc-item">
                <button class="w-full px-5 py-3.5 flex justify-between items-center text-ink dark:text-white font-bold hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer acc-trigger">
                  <span>Can I adapt these to custom branding?</span>
                  <span class="acc-icon text-muted text-sm">-</span>
                </button>
                <div class="acc-body px-5 pb-4 text-muted text-[11px] leading-relaxed">
                  Yes. Every component uses semantic CSS tokens and Tailwind utility classes, allowing full rebranding of colors, typography, borders, and animations in minutes.
                </div>
              </div>
            </div>
          `,
          code: `<div class="border divide-y font-mono text-xs">\n  <div>\n    <button class="w-full p-4 flex justify-between font-bold"><span>How does it work?</span><span>+</span></button>\n    <div class="p-4 text-muted text-xs">All components compile to lightweight HTML.</div>\n  </div>\n</div>`,
          init: (c) => {
            const triggers = c.querySelectorAll('.acc-trigger');
            triggers.forEach(t => {
              t.addEventListener('click', () => {
                const item = t.closest('.acc-item');
                const body = item?.querySelector('.acc-body');
                const icon = item?.querySelector('.acc-icon');
                if (body && icon) {
                  if (body.classList.contains('hidden')) {
                    body.classList.remove('hidden');
                    icon.textContent = '-';
                  } else {
                    body.classList.add('hidden');
                    icon.textContent = '+';
                  }
                }
              });
            });
          }
        },
        {
          id: 'accordion-numbered-steps',
          name: '2. Numbered Step-by-Step Expander',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] divide-y divide-[color:var(--color-border)] text-left font-mono select-none text-xs">
              <div class="p-4 space-y-1 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 acc-step" data-step="1">
                <div class="flex items-center gap-2 font-bold text-ink dark:text-white">
                  <span class="text-[10px] text-muted">01.</span> Token Definition & Tokens Studio
                </div>
                <p class="text-[11px] text-muted pl-6 m-0 acc-step-body">Define typography scales, monochrome palettes, and border radius variables.</p>
              </div>
              <div class="p-4 space-y-1 bg-black/5 dark:bg-white/5 cursor-pointer acc-step" data-step="2">
                <div class="flex items-center gap-2 font-bold text-ink dark:text-white">
                  <span class="text-[10px] text-muted">02.</span> Component Scaffold & Isolation
                </div>
                <p class="text-[11px] text-muted pl-6 m-0 acc-step-body">Build self-contained Astro/HTML components with strict DOM lifecycle boundaries.</p>
              </div>
            </div>
          `,
          code: `<div class="border divide-y font-mono text-xs">\n  <div class="p-4"><div class="font-bold">01. Token Definition</div><p class="text-xs text-muted pl-6">Define typography and palette.</p></div>\n</div>`,
          init: (c) => {
            const steps = c.querySelectorAll('.acc-step');
            steps.forEach(s => {
              s.addEventListener('click', () => {
                const body = s.querySelector('.acc-step-body');
                body?.classList.toggle('hidden');
              });
            });
          }
        },
        {
          id: 'accordion-independent-multi',
          name: '3. Multi-Item Independent Expander',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-2.5" id="multi-acc-root">
              <div class="flex justify-between items-center text-[10px] text-muted border-b border-[color:var(--color-border)] pb-2">
                <span>SYSTEM SECURITY DISCLOSURES</span>
                <button id="multi-acc-all" class="text-ink dark:text-white font-bold hover:underline cursor-pointer">Expand All</button>
              </div>
              <div class="space-y-2" id="multi-acc-list">
                <div class="border border-[color:var(--color-border)] p-3 cursor-pointer hover:border-ink dark:hover:border-white transition-all multi-panel">
                  <div class="flex justify-between items-center font-bold text-ink dark:text-white">
                    <span>Edge Security & TLS 1.3</span>
                    <span class="panel-icon text-muted">+</span>
                  </div>
                  <div class="text-[11px] text-muted mt-2 hidden panel-body">
                    Strict CSP headers, automated HTTPS certificates, and DDoS mitigation active across European edge nodes.
                  </div>
                </div>
                <div class="border border-[color:var(--color-border)] p-3 cursor-pointer hover:border-ink dark:hover:border-white transition-all multi-panel">
                  <div class="flex justify-between items-center font-bold text-ink dark:text-white">
                    <span>Telemetry & Zero Tracking</span>
                    <span class="panel-icon text-muted">+</span>
                  </div>
                  <div class="text-[11px] text-muted mt-2 hidden panel-body">
                    Zero third-party cookies or tracker scripts. All performance logs are strictly anonymized and GDPR compliant.
                  </div>
                </div>
                <div class="border border-[color:var(--color-border)] p-3 cursor-pointer hover:border-ink dark:hover:border-white transition-all multi-panel">
                  <div class="flex justify-between items-center font-bold text-ink dark:text-white">
                    <span>Data Backup & Redundancy</span>
                    <span class="panel-icon text-muted">+</span>
                  </div>
                  <div class="text-[11px] text-muted mt-2 hidden panel-body">
                    Point-in-time PostgreSQL recovery with daily encrypted snapshots stored in multi-region cold storage.
                  </div>
                </div>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-2">\n  <div class="border p-3 cursor-pointer"><div class="font-bold flex justify-between"><span>Edge Security</span><span>+</span></div><div class="text-muted mt-2">Strict CSP headers.</div></div>\n</div>`,
          init: (c) => {
            const panels = c.querySelectorAll('#multi-acc-list .multi-panel');
            const toggleAllBtn = c.querySelector('#multi-acc-all');
            let allExpanded = false;

            panels.forEach(p => {
              p.addEventListener('click', () => {
                const body = p.querySelector('.panel-body');
                const icon = p.querySelector('.panel-icon');
                if (body && icon) {
                  body.classList.toggle('hidden');
                  icon.textContent = body.classList.contains('hidden') ? '+' : '−';
                }
              });
            });

            toggleAllBtn?.addEventListener('click', () => {
              allExpanded = !allExpanded;
              toggleAllBtn.textContent = allExpanded ? 'Collapse All' : 'Expand All';
              panels.forEach(p => {
                const body = p.querySelector('.panel-body');
                const icon = p.querySelector('.panel-icon');
                if (body && icon) {
                  if (allExpanded) {
                    body.classList.remove('hidden');
                    icon.textContent = '−';
                  } else {
                    body.classList.add('hidden');
                    icon.textContent = '+';
                  }
                }
              });
            });
          }
        },
        {
          id: 'accordion-code-disclosure',
          name: '4. Code & Output Disclosure',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-2">
              <div class="flex justify-between items-center font-bold text-ink dark:text-white cursor-pointer" id="code-disc-toggle">
                <span>Tailwind Configuration</span>
                <span class="text-[9px] text-emerald-600 dark:text-emerald-400">▼ tailwind.config.mjs</span>
              </div>
              <pre class="bg-zinc-100 dark:bg-black p-3 border border-[color:var(--color-border)] text-[10px] text-muted overflow-x-auto" id="code-disc-body">theme: &#123; extend: &#123; colors: &#123; ink: '#09090b' &#125; &#125; &#125;</pre>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-2">\n  <div class="flex justify-between font-bold"><span>Config</span><span>tailwind.config.mjs</span></div>\n  <pre class="bg-black p-3 border text-xs">theme: { ... }</pre>\n</div>`,
          init: (c) => {
            const toggle = c.querySelector('#code-disc-toggle');
            const body = c.querySelector('#code-disc-body');
            toggle?.addEventListener('click', () => {
              body?.classList.toggle('hidden');
            });
          }
        },
        {
          id: 'accordion-pricing-spec',
          name: '5. Pricing Tier Feature Accordion',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] divide-y divide-[color:var(--color-border)] text-left font-mono select-none text-xs">
              <div class="p-3 flex justify-between items-center font-bold text-ink dark:text-white cursor-pointer" id="spec-acc-toggle">
                <span>Enterprise SLA Details</span>
                <span id="spec-arrow" class="text-muted">▲</span>
              </div>
              <div class="p-3 bg-zinc-50 dark:bg-black/30 space-y-1 text-[11px] text-muted" id="spec-acc-body">
                <div>✓ 99.99% Guaranteed Edge Uptime</div>
                <div>✓ 1-Hour Urgent Response SLA</div>
                <div>✓ Dedicated Cloud Architect</div>
              </div>
            </div>
          `,
          code: `<div class="border divide-y font-mono text-xs">\n  <div class="p-3 font-bold flex justify-between"><span>Enterprise SLA</span><span>▲</span></div>\n  <div class="p-3 text-muted"><div>✓ 99.99% Uptime</div></div>\n</div>`,
          init: (c) => {
            const toggle = c.querySelector('#spec-acc-toggle');
            const body = c.querySelector('#spec-acc-body');
            const arrow = c.querySelector('#spec-arrow');
            toggle?.addEventListener('click', () => {
              body?.classList.toggle('hidden');
              if (arrow) arrow.textContent = body?.classList.contains('hidden') ? '▼' : '▲';
            });
          }
        },
        {
          id: 'accordion-filter-groups',
          name: '6. Filter Group Accordion',
          html: `
            <div class="w-full max-w-xs border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-3 text-left font-mono select-none text-xs space-y-2">
              <div class="font-bold text-ink dark:text-white flex justify-between cursor-pointer" id="fg-toggle">
                <span>Framework Filter</span>
                <span id="fg-arrow" class="text-muted">▼</span>
              </div>
              <div class="space-y-1 text-muted text-[11px]" id="fg-body">
                <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked /> Astro (Static)</label>
                <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked /> Vanilla HTML/CSS</label>
              </div>
            </div>
          `,
          code: `<div class="border p-3 font-mono text-xs space-y-2">\n  <div class="font-bold flex justify-between"><span>Framework</span><span>▼</span></div>\n  <div class="space-y-1 text-muted"><label><input type="checkbox" checked /> Astro</label></div>\n</div>`,
          init: (c) => {
            const toggle = c.querySelector('#fg-toggle');
            const body = c.querySelector('#fg-body');
            const arrow = c.querySelector('#fg-arrow');
            toggle?.addEventListener('click', () => {
              body?.classList.toggle('hidden');
              if (arrow) arrow.textContent = body?.classList.contains('hidden') ? '▶' : '▼';
            });
          }
        },
        {
          id: 'accordion-deployment-logs',
          name: '7. Deployment Build Log Accordion',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-3 text-left font-mono select-none text-xs space-y-2">
              <div class="flex items-center justify-between text-ink dark:text-white font-bold cursor-pointer" id="log-toggle">
                <span class="flex items-center gap-2"><span class="w-2 h-2 bg-emerald-500 rounded-full"></span> Build Stage 02: Static Pages</span>
                <span class="text-muted text-[10px]">1.2s ▼</span>
              </div>
              <div class="text-[10px] text-muted pl-4 border-l border-[color:var(--color-border)] ml-1 space-y-0.5" id="log-body">
                <div>[10:45:01] Compiled 153 static routes</div>
                <div>[10:45:02] Pagefind search index generated (154 documents)</div>
              </div>
            </div>
          `,
          code: `<div class="border p-3 font-mono text-xs space-y-2">\n  <div class="font-bold flex items-center gap-2"><span class="w-2 h-2 bg-emerald-500 rounded-full"></span> Build Stage 02</div>\n  <div class="text-xs text-muted pl-4 border-l">Compiled 153 static routes</div>\n</div>`,
          init: (c) => {
            const toggle = c.querySelector('#log-toggle');
            const body = c.querySelector('#log-body');
            toggle?.addEventListener('click', () => {
              body?.classList.toggle('hidden');
            });
          }
        },
        {
          id: 'accordion-boxed-card',
          name: '8. Boxed Card Accordion',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-3">
              <div class="border border-[color:var(--color-border)] p-3 space-y-1 cursor-pointer hover:border-ink dark:hover:border-white transition-all" id="box-acc">
                <div class="font-bold text-ink dark:text-white flex justify-between">
                  <span>API Gateway Routing</span>
                  <span class="text-[10px] text-muted">Click to toggle</span>
                </div>
                <div class="text-[11px] text-muted" id="box-acc-desc">Cloudflare Workers reverse proxy routing requests dynamically.</div>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs">\n  <div class="border p-3"><div class="font-bold">API Gateway</div><div class="text-xs text-muted">Cloudflare Workers routing.</div></div>\n</div>`,
          init: (c) => {
            const card = c.querySelector('#box-acc');
            const desc = c.querySelector('#box-acc-desc');
            card?.addEventListener('click', () => {
              desc?.classList.toggle('hidden');
            });
          }
        },
        {
          id: 'accordion-settings-group',
          name: '9. Settings Group Accordion',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] divide-y divide-[color:var(--color-border)] text-left font-mono select-none text-xs" id="set-acc-root">
              <!-- Section 1 -->
              <div class="set-section">
                <div class="p-3.5 font-bold text-ink dark:text-white flex justify-between items-center cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 set-header">
                  <span>1. Webhook Integrations</span>
                  <span class="set-icon text-muted">+</span>
                </div>
                <div class="p-3.5 bg-zinc-50 dark:bg-black/40 text-[11px] text-muted space-y-2.5 hidden set-content">
                  <div>Endpoint URL: <code class="text-ink dark:text-white">https://api.domain.com/v1/webhook</code></div>
                  <div class="flex items-center gap-2">
                    <button class="px-2.5 py-1 bg-ink text-paper dark:bg-white dark:text-black font-bold text-[10px] cursor-pointer set-save-btn">Save Webhook</button>
                    <span class="text-[10px] text-emerald-500 font-bold hidden set-save-msg">Saved ✓</span>
                  </div>
                </div>
              </div>
              <!-- Section 2 -->
              <div class="set-section">
                <div class="p-3.5 font-bold text-ink dark:text-white flex justify-between items-center cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 set-header">
                  <span>2. API Rate Limiting</span>
                  <span class="set-icon text-muted">+</span>
                </div>
                <div class="p-3.5 bg-zinc-50 dark:bg-black/40 text-[11px] text-muted space-y-2.5 hidden set-content">
                  <div>Max Requests: <strong class="text-ink dark:text-white">1,000 req / min</strong></div>
                  <div class="flex items-center gap-2">
                    <button class="px-2.5 py-1 bg-ink text-paper dark:bg-white dark:text-black font-bold text-[10px] cursor-pointer set-save-btn">Update Limits</button>
                    <span class="text-[10px] text-emerald-500 font-bold hidden set-save-msg">Saved ✓</span>
                  </div>
                </div>
              </div>
              <!-- Section 3 -->
              <div class="set-section">
                <div class="p-3.5 font-bold text-ink dark:text-white flex justify-between items-center cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 set-header">
                  <span>3. Audit Logging Retention</span>
                  <span class="set-icon text-muted">+</span>
                </div>
                <div class="p-3.5 bg-zinc-50 dark:bg-black/40 text-[11px] text-muted space-y-2.5 hidden set-content">
                  <div>Retention Period: <strong class="text-ink dark:text-white">90 Days (Cold Storage)</strong></div>
                  <div class="flex items-center gap-2">
                    <button class="px-2.5 py-1 bg-ink text-paper dark:bg-white dark:text-black font-bold text-[10px] cursor-pointer set-save-btn">Apply Policy</button>
                    <span class="text-[10px] text-emerald-500 font-bold hidden set-save-msg">Saved ✓</span>
                  </div>
                </div>
              </div>
            </div>
          `,
          code: `<div class="border divide-y font-mono text-xs">\n  <div>\n    <div class="p-3 font-bold flex justify-between"><span>Webhooks</span><span>+</span></div>\n    <div class="p-3 text-muted">Endpoint: https://api.domain.com</div>\n  </div>\n</div>`,
          init: (c) => {
            const sections = c.querySelectorAll('#set-acc-root .set-section');
            sections.forEach(sec => {
              const header = sec.querySelector('.set-header');
              const content = sec.querySelector('.set-content');
              const icon = sec.querySelector('.set-icon');
              const saveBtn = sec.querySelector('.set-save-btn');
              const saveMsg = sec.querySelector('.set-save-msg');

              header?.addEventListener('click', () => {
                if (content && icon) {
                  content.classList.toggle('hidden');
                  icon.textContent = content.classList.contains('hidden') ? '+' : '−';
                }
              });

              saveBtn?.addEventListener('click', () => {
                if (saveMsg) {
                  saveMsg.classList.remove('hidden');
                  setTimeout(() => { saveMsg.classList.add('hidden'); }, 1500);
                }
              });
            });
          }
        },
        {
          id: 'accordion-nested-sub',
          name: '10. Nested Sub-Accordion',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-2">
              <div class="font-bold text-ink dark:text-white cursor-pointer" id="nested-p-toggle">▼ Core Components</div>
              <div class="pl-4 border-l border-[color:var(--color-border)] ml-1 space-y-2" id="nested-p-body">
                <div class="font-bold text-muted cursor-pointer" id="nested-c-toggle">▼ Buttons</div>
                <div class="pl-4 text-[11px] text-muted space-y-1" id="nested-c-body">
                  <div>• Primary Monochrome Button</div>
                  <div>• Ghost Outline Button</div>
                </div>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-2">\n  <div class="font-bold">▼ Core Components</div>\n  <div class="pl-4 border-l">\n    <div class="font-bold text-muted">▼ Buttons</div>\n    <div class="pl-4 text-xs text-muted"><div>• Primary Button</div></div>\n  </div>\n</div>`,
          init: (c) => {
            const pToggle = c.querySelector('#nested-p-toggle');
            const pBody = c.querySelector('#nested-p-body');
            const cToggle = c.querySelector('#nested-c-toggle');
            const cBody = c.querySelector('#nested-c-body');

            pToggle?.addEventListener('click', () => { pBody?.classList.toggle('hidden'); });
            cToggle?.addEventListener('click', () => { cBody?.classList.toggle('hidden'); });
          }
        }
      ],

      // 6. QUOTE
      quote: [
        {
          id: 'quote-executive-card',
          name: '1. Executive Testimonial Card',
          html: `
            <div class="w-full max-w-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-6 text-left font-mono select-none space-y-4">
              <div class="flex justify-between items-center text-[10px] text-muted border-b border-[color:var(--color-border)] pb-2.5">
                <span class="text-amber-400 font-bold text-sm">★★★★★</span>
                <span id="qc1-counter" class="font-bold text-ink dark:text-white">01 / 03</span>
              </div>
              <p class="text-xs text-ink dark:text-zinc-200 leading-relaxed font-sans italic m-0 min-h-[60px] flex items-center" id="qc1-text">
                “The modular token architecture cut our frontend release cycles in half while ensuring zero layout shifts across high-traffic user dashboards.”
              </p>
              <div class="flex items-center justify-between pt-3 border-t border-[color:var(--color-border)]">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 border border-[color:var(--color-border)] flex items-center justify-center font-bold text-xs text-ink dark:text-white" id="qc1-avatar">SJ</div>
                  <div>
                    <div class="text-xs font-bold text-ink dark:text-white" id="qc1-name">Sarah Jenkins</div>
                    <div class="text-[10px] text-muted" id="qc1-role">VP of Engineering · Vector Analytics</div>
                  </div>
                </div>
                <div class="flex gap-1.5">
                  <button id="qc1-prev" class="px-2.5 py-1 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">←</button>
                  <button id="qc1-next" class="px-2.5 py-1 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">→</button>
                </div>
              </div>
            </div>
          `,
          code: `<div class="border p-6 font-mono space-y-4">\n  <span class="text-amber-400">★★★★★</span>\n  <p class="text-xs italic">“The modular token architecture cut our release cycles in half...”</p>\n  <div class="flex justify-between items-center border-t pt-3">\n    <div class="font-bold text-xs">Sarah Jenkins · VP of Engineering</div>\n    <div class="flex gap-1"><button class="border px-2">←</button><button class="border px-2">→</button></div>\n  </div>\n</div>`,
          init: (c) => {
            const data = [
              { quote: "“The modular token architecture cut our frontend release cycles in half while ensuring zero layout shifts across high-traffic user dashboards.”", name: "Sarah Jenkins", role: "VP of Engineering · Vector Analytics", av: "SJ" },
              { quote: "“Migrating to pure semantic static generation dropped our P99 server latency from 1.2s to 38ms globally with instant First Contentful Paint.”", name: "Marcus Vance", role: "Head of Infrastructure · Apex Cloud", av: "MV" },
              { quote: "“Clean, zero-dependency components with strict TypeScript types eliminated 90% of UI regression bugs in production.”", name: "Liam Thorne", role: "Director of Product · FinFlow", av: "LT" }
            ];
            let idx = 0;
            const text = c.querySelector('#qc1-text');
            const name = c.querySelector('#qc1-name');
            const role = c.querySelector('#qc1-role');
            const avatar = c.querySelector('#qc1-avatar');
            const counter = c.querySelector('#qc1-counter');
            const update = () => {
              const d = data[idx];
              if (text) text.textContent = d.quote;
              if (name) name.textContent = d.name;
              if (role) role.textContent = d.role;
              if (avatar) avatar.textContent = d.av;
              if (counter) counter.textContent = `0${idx + 1} / 0${data.length}`;
            };
            c.querySelector('#qc1-prev')?.addEventListener('click', () => { idx = (idx - 1 + data.length) % data.length; update(); });
            c.querySelector('#qc1-next')?.addEventListener('click', () => { idx = (idx + 1) % data.length; update(); });
          }
        },
        {
          id: 'quote-pullquote-large',
          name: '2. Editorial Monospace Pull Quote',
          html: `
            <div class="w-full max-w-md border-l-2 border-[color:var(--color-ink)] dark:border-white pl-5 py-2 text-left select-none space-y-2 font-mono cursor-pointer" id="qc2-card">
              <p class="text-sm font-bold text-ink dark:text-white leading-snug m-0" id="qc2-text">
                “Clarity over complexity. Software should be built to have a long, low-maintenance lifetime.”
              </p>
              <div class="text-[10px] text-muted uppercase tracking-widest pt-1 flex justify-between">
                <span id="qc2-author">— System Design Philosophy</span>
                <span class="text-emerald-500 font-bold">Click to cycle ↻</span>
              </div>
            </div>
          `,
          code: `<div class="border-l-2 border-ink pl-5 py-2 font-mono">\n  <p class="text-sm font-bold">“Clarity over complexity. Built for a long lifetime.”</p>\n  <span class="text-xs text-muted">— System Design Philosophy</span>\n</div>`,
          init: (c) => {
            const quotes = [
              { text: "“Clarity over complexity. Software should be built to have a long, low-maintenance lifetime.”", author: "— System Design Philosophy" },
              { text: "“Zero external runtime dependencies is the ultimate performance guarantee.”", author: "— Engineering Principle" },
              { text: "“Every single byte shipped to the client must earn its place on the wire.”", author: "— Web Performance Rule" }
            ];
            let idx = 0;
            const card = c.querySelector('#qc2-card');
            const text = c.querySelector('#qc2-text');
            const author = c.querySelector('#qc2-author');
            card?.addEventListener('click', () => {
              idx = (idx + 1) % quotes.length;
              if (text) text.textContent = quotes[idx].text;
              if (author) author.textContent = quotes[idx].author;
            });
          }
        },
        {
          id: 'quote-brutalist-ascii',
          name: '3. Brutalist ASCII Quote Box',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-2.5" id="ascii-q-root">
              <div class="text-muted text-[10px]" id="ascii-top">+------------------------------------------+</div>
              <p class="text-ink dark:text-white font-bold leading-relaxed m-0 px-1" id="ascii-text">
                "Zero dependencies is not a limitation — it's the ultimate performance guarantee."
              </p>
              <div class="text-muted text-[10px]" id="ascii-bot">+------------------------------------------+</div>
              <div class="flex justify-between items-center pt-1 text-[10px]">
                <button id="ascii-border-btn" class="px-2 py-0.5 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">Change Style (1/3)</button>
                <button id="ascii-copy-btn" class="px-2 py-0.5 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">Copy ASCII</button>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-2">\n  <div class="text-muted text-xs">+------------------------------------------+</div>\n  <p class="font-bold">"Zero dependencies is the ultimate performance guarantee."</p>\n  <div class="text-muted text-xs">+------------------------------------------+</div>\n</div>`,
          init: (c) => {
            const borders = [
              { top: "+------------------------------------------+", bot: "+------------------------------------------+" },
              { top: "/* ======================================== */", bot: "/* ======================================== */" },
              { top: "# ---------------------------------------- #", bot: "# ---------------------------------------- #" }
            ];
            let bIdx = 0;
            const topEl = c.querySelector('#ascii-top');
            const botEl = c.querySelector('#ascii-bot');
            const styleBtn = c.querySelector('#ascii-border-btn');
            const copyBtn = c.querySelector('#ascii-copy-btn');
            const textEl = c.querySelector('#ascii-text');

            styleBtn?.addEventListener('click', () => {
              bIdx = (bIdx + 1) % borders.length;
              if (topEl) topEl.textContent = borders[bIdx].top;
              if (botEl) botEl.textContent = borders[bIdx].bot;
              if (styleBtn) styleBtn.textContent = `Change Style (${bIdx + 1}/${borders.length})`;
            });

            copyBtn?.addEventListener('click', async () => {
              try {
                const quoteText = textEl?.textContent?.trim() || '';
                await navigator.clipboard.writeText(`${borders[bIdx].top}\n${quoteText}\n${borders[bIdx].bot}`);
                copyBtn.textContent = 'Copied!';
                copyBtn.className = 'px-2 py-0.5 border border-emerald-500 text-emerald-500 font-bold';
                setTimeout(() => {
                  copyBtn.textContent = 'Copy ASCII';
                  copyBtn.className = 'px-2 py-0.5 border border-[color:var(--color-border)]';
                }, 1500);
              } catch (e) {}
            });
          }
        },
        {
          id: 'quote-chat-bubble',
          name: '4. Customer Chat Bubble Quote',
          html: `
            <div class="w-full max-w-sm text-left font-mono select-none space-y-2" id="chat-bubble-root">
              <div class="border border-[color:var(--color-border)] bg-zinc-100 dark:bg-zinc-900 p-4 text-xs text-ink dark:text-white leading-relaxed cursor-pointer hover:border-ink transition-all" id="qc4-bubble">
                “The new design system components cut our frontend sprint delivery time in half.”
              </div>
              <div class="flex justify-between items-center text-[10px] text-muted px-1">
                <span id="qc4-author">Product Lead · SaaS Platform</span>
                <div class="flex gap-2" id="qc4-reactions">
                  <button class="hover:scale-125 transition-transform cursor-pointer" data-r="like">👍 <span id="r-like">18</span></button>
                  <button class="hover:scale-125 transition-transform cursor-pointer" data-r="fire">🔥 <span id="r-fire">24</span></button>
                </div>
              </div>
            </div>
          `,
          code: `<div class="font-mono text-xs space-y-2">\n  <div class="border bg-zinc-900 p-4 text-xs">“The new design system cut sprint delivery time in half.”</div>\n  <div class="text-xs text-muted flex justify-between"><span>Product Lead</span><div>👍 18</div></div>\n</div>`,
          init: (c) => {
            const quotes = [
              { msg: "“The new design system components cut our frontend sprint delivery time in half.”", author: "Product Lead · SaaS Platform" },
              { msg: "“Our designers and developers now speak the exact same token vocabulary.”", author: "Design Director · Global Media" },
              { msg: "“Zero CSS regressions during our biggest enterprise customer launch to date.”", author: "Staff Engineer · Enterprise Cloud" }
            ];
            let qIdx = 0;
            let lCount = 18, fCount = 24;
            const bubble = c.querySelector('#qc4-bubble');
            const author = c.querySelector('#qc4-author');
            const likeBtn = c.querySelector('button[data-r="like"]');
            const fireBtn = c.querySelector('button[data-r="fire"]');
            const likeEl = c.querySelector('#r-like');
            const fireEl = c.querySelector('#r-fire');

            bubble?.addEventListener('click', () => {
              qIdx = (qIdx + 1) % quotes.length;
              if (bubble) bubble.textContent = quotes[qIdx].msg;
              if (author) author.textContent = quotes[qIdx].author;
            });

            likeBtn?.addEventListener('click', (e) => {
              e.stopPropagation();
              lCount++;
              if (likeEl) likeEl.textContent = `${lCount}`;
            });

            fireBtn?.addEventListener('click', (e) => {
              e.stopPropagation();
              fCount++;
              if (fireEl) fireEl.textContent = `${fCount}`;
            });
          }
        },
        {
          id: 'quote-copyable-citation',
          name: '5. Interactive Copy Citation Quote',
          html: `
            <div class="w-full max-w-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-6 text-left font-mono select-none space-y-4" id="cite-card-root">
              <!-- Top Pill & Index -->
              <div class="flex justify-between items-center text-[10px] border-b border-[color:var(--color-border)]/60 pb-3">
                <span class="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-ink dark:text-white font-bold border border-[color:var(--color-border)] uppercase tracking-wider" id="cite-topic">DESIGN PHILOSOPHY · PRINCIPLE 10</span>
                <span class="text-muted font-bold" id="cite-counter">01 / 03</span>
              </div>

              <!-- Quote Body with Large Serif Mark -->
              <div class="space-y-2 min-h-[70px]">
                <p class="text-sm text-ink dark:text-white font-sans italic leading-relaxed m-0" id="cite-quote">
                  “Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects.”
                </p>
              </div>

              <!-- Author Info & Actions -->
              <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[color:var(--color-border)]/60">
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-[color:var(--color-border)] flex items-center justify-center font-bold text-xs text-ink dark:text-white" id="cite-avatar">DR</div>
                  <div>
                    <div class="text-xs font-bold text-ink dark:text-white" id="cite-author">Dieter Rams</div>
                    <div class="text-[10px] text-muted" id="cite-source">10 Principles for Good Design · Braun</div>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <button id="cite-prev" class="px-2.5 py-1 border border-[color:var(--color-border)] text-xs hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">←</button>
                  <button id="cite-next" class="px-2.5 py-1 border border-[color:var(--color-border)] text-xs hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">→</button>
                  <button id="cite-copy-btn" class="px-3 py-1 bg-ink text-paper dark:bg-white dark:text-black font-bold text-[10px] uppercase tracking-wider cursor-pointer">Copy Citation</button>
                </div>
              </div>
            </div>
          `,
          code: `<div class="border p-6 font-mono space-y-4">\n  <span class="text-xs font-bold bg-zinc-800 px-2 py-0.5">DESIGN PHILOSOPHY</span>\n  <p class="text-sm font-sans italic">“Good design is as little design as possible...”</p>\n  <div class="flex justify-between items-center border-t pt-3">\n    <div class="font-bold text-xs">Dieter Rams</div>\n    <button class="bg-white text-black px-3 py-1 font-bold text-xs">Copy Citation</button>\n  </div>\n</div>`,
          init: (c) => {
            const citations = [
              {
                topic: "DESIGN PHILOSOPHY · PRINCIPLE 10",
                quote: "“Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects.”",
                author: "Dieter Rams",
                source: "10 Principles for Good Design · Braun",
                av: "DR"
              },
              {
                topic: "ARCHITECTURAL CLARITY",
                quote: "“Simplicity is not the lack of clutter, that's a consequence of simplicity. Simplicity somehow essentially describes the purpose and place of an object.”",
                author: "Jony Ive",
                source: "Chief Design Officer · Apple Industrial Design",
                av: "JI"
              },
              {
                topic: "SYSTEMS & DISCIPLINE",
                quote: "“Styles come and go. Good design is a language, not a style. If you can design one thing, you can design everything.”",
                author: "Massimo Vignelli",
                source: "The Vignelli Canon · Unimark International",
                av: "MV"
              }
            ];
            let idx = 0;
            const topicEl = c.querySelector('#cite-topic');
            const quoteEl = c.querySelector('#cite-quote');
            const authorEl = c.querySelector('#cite-author');
            const sourceEl = c.querySelector('#cite-source');
            const avatarEl = c.querySelector('#cite-avatar');
            const counterEl = c.querySelector('#cite-counter');
            const copyBtn = c.querySelector('#cite-copy-btn');

            const update = () => {
              const item = citations[idx];
              if (topicEl) topicEl.textContent = item.topic;
              if (quoteEl) quoteEl.textContent = item.quote;
              if (authorEl) authorEl.textContent = item.author;
              if (sourceEl) sourceEl.textContent = item.source;
              if (avatarEl) avatarEl.textContent = item.av;
              if (counterEl) counterEl.textContent = `0${idx + 1} / 0${citations.length}`;
            };

            c.querySelector('#cite-prev')?.addEventListener('click', () => {
              idx = (idx - 1 + citations.length) % citations.length;
              update();
            });

            c.querySelector('#cite-next')?.addEventListener('click', () => {
              idx = (idx + 1) % citations.length;
              update();
            });

            copyBtn?.addEventListener('click', async () => {
              try {
                const item = citations[idx];
                await navigator.clipboard.writeText(`${item.quote} — ${item.author} (${item.source})`);
                copyBtn.textContent = 'Copied ✓';
                copyBtn.className = 'px-3 py-1 bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-wider';
                setTimeout(() => {
                  copyBtn.textContent = 'Copy Citation';
                  copyBtn.className = 'px-3 py-1 bg-ink text-paper dark:bg-white dark:text-black font-bold text-[10px] uppercase tracking-wider cursor-pointer';
                }, 1500);
              } catch (e) {}
            });
          }
        },
        {
          id: 'quote-side-by-side',
          name: '6. Side-by-Side Impact Quote',
          html: `
            <div class="w-full max-w-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-5 text-left font-mono select-none space-y-4" id="sbs-root">
              <!-- Benchmark Category Switcher -->
              <div class="flex items-center justify-between gap-2 border-b border-[color:var(--color-border)]/60 pb-3">
                <div class="flex gap-1" id="sbs-tabs">
                  <button class="px-2.5 py-1 bg-ink text-paper dark:bg-white dark:text-black font-bold text-[10px] cursor-pointer sbs-tab" data-tab="0">Load Speed</button>
                  <button class="px-2.5 py-1 border border-[color:var(--color-border)] text-muted hover:text-ink dark:hover:text-white text-[10px] cursor-pointer sbs-tab" data-tab="1">JS Payload</button>
                  <button class="px-2.5 py-1 border border-[color:var(--color-border)] text-muted hover:text-ink dark:hover:text-white text-[10px] cursor-pointer sbs-tab" data-tab="2">Lighthouse</button>
                </div>
                <span class="text-[9px] text-emerald-500 font-bold" id="sbs-delta">-95% REDUCTION</span>
              </div>

              <!-- Side-by-Side Comparison Grid -->
              <div class="grid grid-cols-2 gap-4 divide-x divide-[color:var(--color-border)]/60">
                <div class="space-y-1.5">
                  <span class="text-[9px] text-muted uppercase tracking-wider flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-red-500"></span> Legacy Monolith
                  </span>
                  <div class="text-2xl font-bold text-red-500" id="sbs-before-val">4.20s</div>
                  <div class="text-[10px] text-muted leading-tight" id="sbs-before-desc">Heavy JavaScript hydration client bundle.</div>
                </div>
                <div class="pl-4 space-y-1.5">
                  <span class="text-[9px] text-muted uppercase tracking-wider flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Component Library
                  </span>
                  <div class="text-2xl font-bold text-emerald-500" id="sbs-after-val">0.21s</div>
                  <div class="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold leading-tight" id="sbs-after-desc">Zero-runtime static HTML + CSS tokens.</div>
                </div>
              </div>

              <!-- Interactive Network Simulator Slider -->
              <div class="pt-3 border-t border-[color:var(--color-border)]/60 space-y-2">
                <div class="flex justify-between items-center text-[10px] text-muted">
                  <span>Network Simulation: <strong class="text-ink dark:text-white" id="sbs-net-label">Fast Edge CDN (14ms)</strong></span>
                  <span class="text-[9px]">Drag to test latency</span>
                </div>
                <input type="range" id="sbs-net-slider" min="1" max="3" value="1" class="w-full accent-emerald-500 cursor-pointer" />
              </div>
            </div>
          `,
          code: `<div class="border p-5 font-mono space-y-4">\n  <div class="flex gap-2 border-b pb-3">\n    <button class="bg-white text-black px-2.5 py-1 text-xs font-bold">Load Speed</button>\n    <button class="border px-2.5 py-1 text-xs">JS Payload</button>\n  </div>\n  <div class="grid grid-cols-2 gap-4 divide-x">\n    <div><div class="text-red-500 text-2xl font-bold">4.20s</div></div>\n    <div class="pl-4"><div class="text-emerald-500 text-2xl font-bold">0.21s</div></div>\n  </div>\n</div>`,
          init: (c) => {
            const tabs = c.querySelectorAll('#sbs-tabs .sbs-tab');
            const deltaEl = c.querySelector('#sbs-delta');
            const beforeValEl = c.querySelector('#sbs-before-val');
            const beforeDescEl = c.querySelector('#sbs-before-desc');
            const afterValEl = c.querySelector('#sbs-after-val');
            const afterDescEl = c.querySelector('#sbs-after-desc');
            const netSlider = c.querySelector('#sbs-net-slider');
            const netLabel = c.querySelector('#sbs-net-label');

            let currentCategory = 0;
            let currentNetMultiplier = 1;

            const data = [
              {
                delta: "-95% REDUCTION",
                beforeBase: 4.20,
                beforeUnit: "s",
                beforeDesc: "Heavy JavaScript hydration client bundle.",
                afterBase: 0.21,
                afterUnit: "s",
                afterDesc: "Zero-runtime static HTML + CSS tokens."
              },
              {
                delta: "100% ELIMINATED",
                beforeBase: 1840,
                beforeUnit: " KB",
                beforeDesc: "React/Vue runtime bundles + node modules.",
                afterBase: 0,
                afterUnit: " KB",
                afterDesc: "Pure semantic HTML with zero JS overhead."
              },
              {
                delta: "+52 POINTS GAIN",
                beforeBase: 48,
                beforeUnit: " / 100",
                beforeDesc: "Poor LCP and INP blocking metrics.",
                afterBase: 100,
                afterUnit: " / 100",
                afterDesc: "Perfect 100/100 Core Web Vitals score."
              }
            ];

            const networks = [
              { label: "Fast Edge CDN (14ms)", factor: 1.0 },
              { label: "4G Mobile Network (120ms)", factor: 1.8 },
              { label: "Slow 3G Simulated (450ms)", factor: 3.4 }
            ];

            const update = () => {
              const d = data[currentCategory];
              if (deltaEl) deltaEl.textContent = d.delta;
              if (beforeDescEl) beforeDescEl.textContent = d.beforeDesc;
              if (afterDescEl) afterDescEl.textContent = d.afterDesc;

              if (currentCategory === 0) {
                const bVal = (d.beforeBase * currentNetMultiplier).toFixed(2);
                const aVal = (d.afterBase * currentNetMultiplier).toFixed(2);
                if (beforeValEl) beforeValEl.textContent = `${bVal}${d.beforeUnit}`;
                if (afterValEl) afterValEl.textContent = `${aVal}${d.afterUnit}`;
              } else {
                if (beforeValEl) beforeValEl.textContent = `${d.beforeBase}${d.beforeUnit}`;
                if (afterValEl) afterValEl.textContent = `${d.afterBase}${d.afterUnit}`;
              }
            };

            tabs.forEach(t => {
              t.addEventListener('click', () => {
                currentCategory = parseInt(t.getAttribute('data-tab') || '0', 10);
                tabs.forEach(tab => {
                  tab.className = "px-2.5 py-1 border border-[color:var(--color-border)] text-muted hover:text-ink dark:hover:text-white text-[10px] cursor-pointer sbs-tab";
                });
                t.className = "px-2.5 py-1 bg-ink text-paper dark:bg-white dark:text-black font-bold text-[10px] cursor-pointer sbs-tab";
                update();
              });
            });

            netSlider?.addEventListener('input', (e) => {
              const val = parseInt(e.target.value, 10) - 1;
              const net = networks[val];
              currentNetMultiplier = net.factor;
              if (netLabel) netLabel.textContent = net.label;
              update();
            });
          }
        },
        {
          id: 'quote-metric-pill',
          name: '7. Highlighted Metric Pill Quote',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-3" id="metric-pill-root">
              <div class="flex gap-2 flex-wrap" id="mp-pills">
                <button class="px-2.5 py-1 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 font-bold text-[10px] cursor-pointer mp-btn" data-m="0">99.99% RELIABILITY</button>
                <button class="px-2.5 py-1 border border-[color:var(--color-border)] text-muted hover:text-ink dark:hover:text-white text-[10px] cursor-pointer mp-btn" data-m="1">14MS LATENCY</button>
                <button class="px-2.5 py-1 border border-[color:var(--color-border)] text-muted hover:text-ink dark:hover:text-white text-[10px] cursor-pointer mp-btn" data-m="2">0KB RUNTIME</button>
              </div>
              <p class="text-ink dark:text-zinc-200 leading-relaxed m-0 text-xs italic min-h-[40px] flex items-center" id="mp-quote">
                “Zero downtime deployments powered by GitOps pipelines and static Astro generation.”
              </p>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-2">\n  <span class="bg-emerald-500/10 text-emerald-500 px-2 py-1 font-bold text-xs">99.99% RELIABILITY</span>\n  <p class="text-xs text-muted">“Zero downtime deployments...”</p>\n</div>`,
          init: (c) => {
            const data = [
              "“Zero downtime deployments powered by GitOps pipelines and static Astro generation.”",
              "“Distributed edge nodes in Central Europe route incoming requests in under 14ms.”",
              "“Pure CSS design tokens compile without clientside JavaScript execution overhead.”"
            ];
            const btns = c.querySelectorAll('#mp-pills .mp-btn');
            const quoteEl = c.querySelector('#mp-quote');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                const mIdx = parseInt(b.getAttribute('data-m') || '0', 10);
                btns.forEach(btn => {
                  btn.className = "px-2.5 py-1 border border-[color:var(--color-border)] text-muted hover:text-ink dark:hover:text-white text-[10px] cursor-pointer mp-btn";
                });
                b.className = "px-2.5 py-1 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 font-bold text-[10px] cursor-pointer mp-btn";
                if (quoteEl) quoteEl.textContent = data[mIdx];
              });
            });
          }
        },
        {
          id: 'quote-serif-editorial',
          name: '8. Minimal Centered Editorial Quote',
          html: `
            <div class="w-full max-w-md p-6 text-center select-none space-y-3 cursor-pointer border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b]" id="serif-q-box">
              <p class="text-base font-serif italic text-ink dark:text-white m-0" id="sq-text">“Simplicity is prerequisite for reliability.”</p>
              <div class="flex justify-center items-center gap-2 text-[10px] font-mono text-muted uppercase tracking-widest">
                <span id="sq-author">— Edsger W. Dijkstra</span>
                <span class="text-emerald-500 font-bold">↻ Click to cycle</span>
              </div>
            </div>
          `,
          code: `<div class="p-6 text-center space-y-2 font-mono">\n  <p class="text-base font-serif italic">“Simplicity is prerequisite for reliability.”</p>\n  <span class="text-xs text-muted">— Edsger W. Dijkstra</span>\n</div>`,
          init: (c) => {
            const quotes = [
              { text: "“Simplicity is prerequisite for reliability.”", author: "— Edsger W. Dijkstra" },
              { text: "“Premature optimization is the root of all evil in programming.”", author: "— Donald E. Knuth" },
              { text: "“There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies.”", author: "— C.A.R. Hoare" }
            ];
            let idx = 0;
            const box = c.querySelector('#serif-q-box');
            const textEl = c.querySelector('#sq-text');
            const authorEl = c.querySelector('#sq-author');
            box?.addEventListener('click', () => {
              idx = (idx + 1) % quotes.length;
              if (textEl) textEl.textContent = quotes[idx].text;
              if (authorEl) authorEl.textContent = quotes[idx].author;
            });
          }
        },
        {
          id: 'quote-microblog-citation',
          name: '9. Microblog Citation Card',
          html: `
            <div class="w-full max-w-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-5 text-left font-mono select-none space-y-3" id="microblog-root">
              <!-- Author Header -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center font-bold text-xs text-black shadow-sm">
                    SYS
                  </div>
                  <div>
                    <div class="flex items-center gap-1.5">
                      <span class="font-bold text-xs text-ink dark:text-white">System Architecture Core</span>
                      <span class="text-emerald-500 text-xs" title="Verified System">✓</span>
                    </div>
                    <div class="text-[10px] text-muted">@designsystems_io · 2h ago</div>
                  </div>
                </div>
                <span class="text-[10px] px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">PRODUCTION TELEMETRY</span>
              </div>

              <!-- Post Body -->
              <p class="text-xs text-ink dark:text-zinc-200 font-sans leading-relaxed m-0">
                We eliminated 180KB of clientside runtime hydration by switching to isolated CSS design tokens. Result: sub-20ms interaction response, zero CLS shifts, and 100/100 Core Web Vitals across every viewport.
              </p>

              <!-- Attached Telemetry Pill -->
              <div class="p-2.5 bg-zinc-50 dark:bg-black/50 border border-[color:var(--color-border)] flex items-center justify-between text-[10px] text-muted">
                <span>⚡ TTFB: <strong>14ms</strong></span>
                <span>🛡️ CSP: <strong>Strict</strong></span>
                <span>📦 Bundle: <strong>0 KB JS</strong></span>
                <span class="text-emerald-500 font-bold">100/100 OK</span>
              </div>

              <!-- Interactive Actions Bar -->
              <div class="flex items-center justify-between text-[11px] text-muted border-t border-[color:var(--color-border)]/60 pt-2.5">
                <div class="flex gap-4">
                  <button id="mb-reply" class="hover:text-ink dark:hover:text-white flex items-center gap-1 cursor-pointer">
                    💬 <span id="mb-reply-count">14</span>
                  </button>
                  <button id="mb-repost" class="hover:text-emerald-500 flex items-center gap-1 cursor-pointer">
                    🔁 <span id="mb-repost-count">48</span>
                  </button>
                  <button id="mb-like" class="hover:text-red-500 flex items-center gap-1 cursor-pointer">
                    ♥ <span id="mb-like-count">182</span>
                  </button>
                  <button id="mb-save" class="hover:text-amber-400 flex items-center gap-1 cursor-pointer">
                    🔖 <span id="mb-save-count">64</span>
                  </button>
                </div>
                <button id="mb-share" class="hover:text-ink dark:hover:text-white cursor-pointer text-[10px]">
                  ↗ <span id="mb-share-text">Share</span>
                </button>
              </div>
            </div>
          `,
          code: `<div class="border p-5 font-mono space-y-3">\n  <div class="flex justify-between items-center">\n    <div class="flex items-center gap-2"><div class="w-8 h-8 rounded-full bg-emerald-500"></div><div><div class="font-bold text-xs">System Architecture</div><div class="text-xs text-muted">@designsystems_io</div></div></div>\n  </div>\n  <p class="text-xs">Zero-runtime CSS tokens boost performance.</p>\n</div>`,
          init: (c) => {
            const likeBtn = c.querySelector('#mb-like');
            const repostBtn = c.querySelector('#mb-repost');
            const saveBtn = c.querySelector('#mb-save');
            const replyBtn = c.querySelector('#mb-reply');
            const shareBtn = c.querySelector('#mb-share');

            const likeCount = c.querySelector('#mb-like-count');
            const repostCount = c.querySelector('#mb-repost-count');
            const saveCount = c.querySelector('#mb-save-count');
            const replyCount = c.querySelector('#mb-reply-count');
            const shareText = c.querySelector('#mb-share-text');

            let likes = 182, liked = false;
            let reposts = 48, reposted = false;
            let saves = 64, saved = false;
            let replies = 14;

            likeBtn?.addEventListener('click', () => {
              liked = !liked;
              likes += liked ? 1 : -1;
              if (likeCount) likeCount.textContent = `${likes}`;
              likeBtn.className = liked ? 'text-red-500 font-bold flex items-center gap-1 cursor-pointer' : 'hover:text-red-500 flex items-center gap-1 cursor-pointer';
            });

            repostBtn?.addEventListener('click', () => {
              reposted = !reposted;
              reposts += reposted ? 1 : -1;
              if (repostCount) repostCount.textContent = `${reposts}`;
              repostBtn.className = reposted ? 'text-emerald-500 font-bold flex items-center gap-1 cursor-pointer' : 'hover:text-emerald-500 flex items-center gap-1 cursor-pointer';
            });

            saveBtn?.addEventListener('click', () => {
              saved = !saved;
              saves += saved ? 1 : -1;
              if (saveCount) saveCount.textContent = `${saves}`;
              saveBtn.className = saved ? 'text-amber-400 font-bold flex items-center gap-1 cursor-pointer' : 'hover:text-amber-400 flex items-center gap-1 cursor-pointer';
            });

            replyBtn?.addEventListener('click', () => {
              replies++;
              if (replyCount) replyCount.textContent = `${replies}`;
            });

            shareBtn?.addEventListener('click', async () => {
              try {
                await navigator.clipboard.writeText('https://ui.studio.dev/post/zero-runtime-tokens');
                if (shareText) {
                  shareText.textContent = 'Link Copied!';
                  setTimeout(() => { shareText.textContent = 'Share'; }, 1500);
                }
              } catch (e) {}
            });
          }
        },
        {
          id: 'quote-case-study-impact',
          name: '10. Case Study Impact Verdict',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-5 text-left font-mono select-none text-xs space-y-3" id="verdict-root">
              <div class="flex justify-between items-center border-b border-[color:var(--color-border)] pb-2">
                <span class="text-[9px] uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold" id="v-badge">CASE STUDY #01 · FINTECH</span>
                <button id="v-cycle-btn" class="text-[10px] text-ink dark:text-white font-bold hover:underline cursor-pointer">Next Case Study (1/3) →</button>
              </div>
              <p class="text-ink dark:text-white font-bold leading-relaxed m-0 text-xs min-h-[38px] flex items-center" id="v-text">
                “Delivered 3 weeks ahead of schedule with 100% test coverage and zero UI regressions.”
              </p>
              <div class="flex justify-between items-center text-[10px] text-muted border-t border-[color:var(--color-border)] pt-2">
                <span id="v-meta">Verified Business Impact</span>
                <span class="text-emerald-500 font-bold" id="v-stat">+42% Checkout Completion</span>
              </div>
            </div>
          `,
          code: `<div class="border p-5 font-mono text-xs space-y-3">\n  <div class="text-emerald-500 font-bold text-xs">CASE STUDY · FINTECH</div>\n  <p class="font-bold">“Delivered 3 weeks ahead of schedule with zero regressions.”</p>\n</div>`,
          init: (c) => {
            const cases = [
              { badge: "CASE STUDY #01 · FINTECH", text: "“Delivered 3 weeks ahead of schedule with 100% test coverage and zero UI regressions.”", meta: "Verified Business Impact", stat: "+42% Checkout Completion" },
              { badge: "CASE STUDY #02 · LOGISTICS", text: "“Unified design tokens eliminated UI fragmentation across 14 internal fleet management dashboards.”", meta: "Developer Efficiency", stat: "50% Faster Feature Delivery" },
              { badge: "CASE STUDY #03 · SAAS PLATFORM", text: "“Dropping clientside JS hydration boosted our organic search Core Web Vitals rankings by 68 positions.”", meta: "Organic Performance", stat: "100/100 Mobile Lighthouse" }
            ];
            let idx = 0;
            const btn = c.querySelector('#v-cycle-btn');
            const badge = c.querySelector('#v-badge');
            const text = c.querySelector('#v-text');
            const meta = c.querySelector('#v-meta');
            const stat = c.querySelector('#v-stat');

            btn?.addEventListener('click', () => {
              idx = (idx + 1) % cases.length;
              const item = cases[idx];
              if (badge) badge.textContent = item.badge;
              if (text) text.textContent = item.text;
              if (meta) meta.textContent = item.meta;
              if (stat) stat.textContent = item.stat;
              if (btn) btn.textContent = `Next Case Study (${idx + 1}/${cases.length}) →`;
            });
          }
        }
      ],

      // 7. PAGINATION
      pagination: [
        {
          id: 'pagination-numeric-bar',
          name: '1. Standard Numbered Page Bar',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left select-none flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
              <button id="p1-prev" class="px-3 py-1.5 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">← Prev</button>
              <div class="flex items-center gap-1" id="p1-nums">
                <button class="p-num w-7 h-7 bg-ink text-paper dark:bg-white dark:text-black font-bold flex items-center justify-center cursor-pointer" data-page="1">1</button>
                <button class="p-num w-7 h-7 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center cursor-pointer" data-page="2">2</button>
                <button class="p-num w-7 h-7 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center cursor-pointer" data-page="3">3</button>
                <span class="px-1 text-muted">...</span>
                <button class="p-num w-7 h-7 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center cursor-pointer" data-page="12">12</button>
              </div>
              <button id="p1-next" class="px-3 py-1.5 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">Next →</button>
            </div>
          `,
          code: `<div class="flex items-center gap-1 font-mono text-xs">\n  <button class="border px-3 py-1">Prev</button>\n  <button class="bg-ink text-paper w-7 h-7">1</button>\n  <button class="border w-7 h-7">2</button>\n  <button class="border px-3 py-1">Next</button>\n</div>`,
          init: (c) => {
            const nums = c.querySelectorAll('#p1-nums .p-num');
            const prev = c.querySelector('#p1-prev');
            const next = c.querySelector('#p1-next');
            let cur = 1;
            const update = () => {
              nums.forEach(n => {
                const page = parseInt(n.getAttribute('data-page') || '1', 10);
                if (page === cur) {
                  n.className = "p-num w-7 h-7 bg-ink text-paper dark:bg-white dark:text-black font-bold flex items-center justify-center cursor-pointer";
                } else {
                  n.className = "p-num w-7 h-7 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center cursor-pointer";
                }
              });
            };
            nums.forEach(n => {
              n.addEventListener('click', () => {
                cur = parseInt(n.getAttribute('data-page') || '1', 10);
                update();
              });
            });
            prev?.addEventListener('click', () => { if (cur > 1) { cur--; update(); } });
            next?.addEventListener('click', () => { if (cur < 12) { cur++; update(); } });
          }
        },
        {
          id: 'pagination-compact-stepper',
          name: '2. Compact Arrow Stepper',
          html: `
            <div class="inline-flex items-center border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] font-mono text-xs select-none">
              <button id="p2-prev" class="px-3 py-1.5 border-r border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">←</button>
              <span class="px-4 py-1.5 text-muted">Page <strong id="p2-cur" class="text-ink dark:text-white">3</strong> of 18</span>
              <button id="p2-next" class="px-3 py-1.5 border-l border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">→</button>
            </div>
          `,
          code: `<div class="inline-flex border font-mono text-xs">\n  <button class="px-3 py-1 border-r">←</button>\n  <span class="px-4">Page 3 of 18</span>\n  <button class="px-3 py-1 border-l">→</button>\n</div>`,
          init: (c) => {
            let page = 3;
            const cur = c.querySelector('#p2-cur');
            c.querySelector('#p2-prev')?.addEventListener('click', () => {
              if (page > 1) { page--; if (cur) cur.textContent = `${page}`; }
            });
            c.querySelector('#p2-next')?.addEventListener('click', () => {
              if (page < 18) { page++; if (cur) cur.textContent = `${page}`; }
            });
          }
        },
        {
          id: 'pagination-segmented-pills',
          name: '3. Segmented Pill Stepper',
          html: `
            <div class="inline-flex p-1 bg-zinc-100 dark:bg-zinc-900 border border-[color:var(--color-border)] text-xs font-mono select-none" id="p3-pills">
              <button class="px-3 py-1 bg-ink text-paper dark:bg-white dark:text-black font-bold cursor-pointer">1</button>
              <button class="px-3 py-1 text-muted hover:text-ink cursor-pointer">2</button>
              <button class="px-3 py-1 text-muted hover:text-ink cursor-pointer">3</button>
              <button class="px-3 py-1 text-muted hover:text-ink cursor-pointer">4</button>
            </div>
          `,
          code: `<div class="inline-flex p-1 border font-mono text-xs">\n  <button class="bg-ink text-paper px-3 py-1">1</button>\n  <button class="px-3 py-1 text-muted">2</button>\n</div>`,
          init: (c) => {
            const btns = c.querySelectorAll('#p3-pills button');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "px-3 py-1 text-muted hover:text-ink dark:hover:text-white cursor-pointer";
                });
                b.className = "px-3 py-1 bg-ink text-paper dark:bg-white dark:text-black font-bold cursor-pointer";
              });
            });
          }
        },
        {
          id: 'pagination-minimal-dots',
          name: '4. Minimal Dot Pagination',
          html: `
            <div class="flex items-center gap-2 p-3 font-mono select-none cursor-pointer" id="p4-dots">
              <span class="w-6 h-2 bg-ink dark:bg-white rounded-full transition-all" data-d="0"></span>
              <span class="w-2 h-2 bg-zinc-300 dark:bg-zinc-700 rounded-full transition-all" data-d="1"></span>
              <span class="w-2 h-2 bg-zinc-300 dark:bg-zinc-700 rounded-full transition-all" data-d="2"></span>
              <span class="w-2 h-2 bg-zinc-300 dark:bg-zinc-700 rounded-full transition-all" data-d="3"></span>
            </div>
          `,
          code: `<div class="flex items-center gap-2 font-mono">\n  <span class="w-6 h-1.5 bg-ink rounded-full"></span>\n  <span class="w-2 h-1.5 bg-zinc-700 rounded-full"></span>\n</div>`,
          init: (c) => {
            const dots = c.querySelectorAll('#p4-dots span');
            dots.forEach((d, idx) => {
              d.addEventListener('click', () => {
                dots.forEach((dot, i) => {
                  dot.className = i === idx ? "w-6 h-2 bg-ink dark:bg-white rounded-full transition-all" : "w-2 h-2 bg-zinc-300 dark:bg-zinc-700 rounded-full transition-all";
                });
              });
            });
          }
        },
        {
          id: 'pagination-jump-to-page',
          name: '5. Direct Jump-to-Page Input',
          html: `
            <div class="w-full max-w-sm border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 font-mono select-none text-xs flex items-center justify-between gap-3">
              <span class="text-muted" id="p5-status">Page: 7 / 24</span>
              <div class="flex gap-2">
                <input type="number" id="p5-input" value="7" min="1" max="24" class="w-14 border border-[color:var(--color-border)] p-1 text-center bg-zinc-50 dark:bg-black text-xs outline-none" />
                <button id="p5-go" class="px-3 py-1 bg-ink text-paper dark:bg-white dark:text-black font-bold cursor-pointer">Go</button>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs flex justify-between items-center">\n  <span>Jump to:</span>\n  <div class="flex gap-2"><input type="number" value="7" class="w-12 border text-center" /><button class="bg-ink text-paper px-3 py-1">Go</button></div>\n</div>`,
          init: (c) => {
            const inp = c.querySelector('#p5-input');
            const go = c.querySelector('#p5-go');
            const st = c.querySelector('#p5-status');
            go?.addEventListener('click', () => {
              const val = inp?.value;
              if (st && val) st.textContent = `Page: ${val} / 24`;
            });
          }
        },
        {
          id: 'pagination-rows-per-page',
          name: '6. Rows per Page Controller',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 font-mono select-none text-xs flex justify-between items-center">
              <span class="text-muted" id="p6-label">Showing 1–10 of 124 results</span>
              <div class="flex items-center gap-2">
                <span class="text-muted">Rows:</span>
                <select id="p6-select" class="border border-[color:var(--color-border)] bg-zinc-50 dark:bg-black p-1 text-xs outline-none cursor-pointer">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs flex justify-between items-center">\n  <span class="text-muted">1-10 of 124</span>\n  <select class="border p-1 text-xs"><option>10</option><option>25</option></select>\n</div>`,
          init: (c) => {
            const select = c.querySelector('#p6-select');
            const label = c.querySelector('#p6-label');
            select?.addEventListener('change', (e) => {
              const count = e.target.value;
              if (label) label.textContent = `Showing 1–${count} of 124 results`;
            });
          }
        },
        {
          id: 'pagination-infinite-stepper',
          name: '7. Load More Stepper',
          html: `
            <div class="w-full max-w-sm text-center font-mono select-none space-y-2">
              <button id="p7-load" class="w-full py-2.5 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 text-xs font-bold text-ink dark:text-white uppercase tracking-wider cursor-pointer">
                Load 10 More Components ↓
              </button>
              <div class="text-[9px] text-muted" id="p7-count">Showing 10 of 80 variants</div>
            </div>
          `,
          code: `<div class="font-mono text-center space-y-2">\n  <button class="w-full py-2 border font-bold text-xs uppercase">Load 10 More ↓</button>\n  <span class="text-xs text-muted">Showing 20 of 80</span>\n</div>`,
          init: (c) => {
            let loaded = 10;
            const btn = c.querySelector('#p7-load');
            const count = c.querySelector('#p7-count');
            btn?.addEventListener('click', () => {
              if (loaded < 80) {
                loaded += 10;
                if (count) count.textContent = `Showing ${loaded} of 80 variants`;
                if (loaded === 80 && btn) {
                  btn.textContent = 'All 80 Variants Loaded ✓';
                  btn.className = 'w-full py-2.5 border border-emerald-500 text-emerald-500 text-xs font-bold uppercase';
                }
              }
            });
          }
        },
        {
          id: 'pagination-alphabetical-index',
          name: '8. Alphabetical A-Z Index Bar',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-3 font-mono select-none text-[11px] flex justify-between gap-1 overflow-x-auto" id="p8-letters">
              <button class="font-bold text-ink dark:text-white underline cursor-pointer">A</button>
              <button class="text-muted hover:text-ink cursor-pointer">B</button>
              <button class="text-muted hover:text-ink cursor-pointer">C</button>
              <button class="text-muted hover:text-ink cursor-pointer">D</button>
              <button class="text-muted hover:text-ink cursor-pointer">E</button>
              <button class="text-muted hover:text-ink cursor-pointer">F</button>
              <span class="text-muted">...</span>
              <button class="text-muted hover:text-ink cursor-pointer">Z</button>
            </div>
          `,
          code: `<div class="border p-3 font-mono text-xs flex justify-between">\n  <button class="font-bold underline">A</button><button class="text-muted">B</button>...<button class="text-muted">Z</button>\n</div>`,
          init: (c) => {
            const btns = c.querySelectorAll('#p8-letters button');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => btn.className = "text-muted hover:text-ink dark:hover:text-white cursor-pointer");
                b.className = "font-bold text-ink dark:text-white underline cursor-pointer";
              });
            });
          }
        },
        {
          id: 'pagination-step-breadcrumb',
          name: '9. Workflow Step Breadcrumb',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 font-mono select-none text-xs flex items-center justify-between" id="p9-steps">
              <button class="font-bold text-emerald-600 dark:text-emerald-400 cursor-pointer step-btn" data-s="1">✓ 1. Config</button>
              <span class="text-muted">→</span>
              <button class="font-bold text-ink dark:text-white border-b-2 border-ink dark:border-white pb-0.5 cursor-pointer step-btn" data-s="2">2. Preview</button>
              <span class="text-muted">→</span>
              <button class="text-muted hover:text-ink cursor-pointer step-btn" data-s="3">3. Deploy</button>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs flex justify-between">\n  <span class="text-emerald-400">✓ 1. Config</span><span>→</span><span class="font-bold border-b-2">2. Preview</span><span>→</span><span class="text-muted">3. Deploy</span>\n</div>`,
          init: (c) => {
            const btns = c.querySelectorAll('#p9-steps .step-btn');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => btn.className = "text-muted hover:text-ink dark:hover:text-white cursor-pointer step-btn");
                b.className = "font-bold text-ink dark:text-white border-b-2 border-ink dark:border-white pb-0.5 cursor-pointer step-btn";
              });
            });
          }
        },
        {
          id: 'pagination-brutalist-nav',
          name: '10. Brutalist Monospace Navigator',
          html: `
            <div class="inline-flex border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] font-mono text-xs select-none">
              <button id="p10-prev" class="px-3 py-1.5 border-r border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 font-bold cursor-pointer">[ &lt; PREV ]</button>
              <span class="px-4 py-1.5 text-ink dark:text-white font-bold" id="p10-counter">[ 04 / 20 ]</span>
              <button id="p10-next" class="px-3 py-1.5 border-l border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 font-bold cursor-pointer">[ NEXT &gt; ]</button>
            </div>
          `,
          code: `<div class="inline-flex border font-mono text-xs">\n  <button class="border-r px-3 py-1.5 font-bold">[ < PREV ]</button>\n  <span class="px-4 py-1.5 font-bold">[ 04 / 20 ]</span>\n  <button class="border-l px-3 py-1.5 font-bold">[ NEXT > ]</button>\n</div>`,
          init: (c) => {
            let cur = 4;
            const counter = c.querySelector('#p10-counter');
            const update = () => {
              if (counter) counter.textContent = `[ ${cur < 10 ? '0' + cur : cur} / 20 ]`;
            };
            c.querySelector('#p10-prev')?.addEventListener('click', () => { if (cur > 1) { cur--; update(); } });
            c.querySelector('#p10-next')?.addEventListener('click', () => { if (cur < 20) { cur++; update(); } });
          }
        }
      ],

      // 8. TABS
      tabs: [
        {
          id: 'tabs-underline-nav',
          name: '1. Animated Underline Tabs',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-5 text-left font-mono select-none space-y-4">
              <div class="flex border-b border-[color:var(--color-border)] gap-6 text-xs" id="nav-tabs-bar">
                <button class="pb-2.5 font-bold text-ink dark:text-white border-b-2 border-ink dark:border-white cursor-pointer tab-trigger" data-tab="overview">Overview</button>
                <button class="pb-2.5 text-muted hover:text-ink dark:hover:text-white border-b-2 border-transparent cursor-pointer tab-trigger" data-tab="spec">Specifications</button>
                <button class="pb-2.5 text-muted hover:text-ink dark:hover:text-white border-b-2 border-transparent cursor-pointer tab-trigger" data-tab="telemetry">Telemetry</button>
              </div>
              <div class="min-h-[70px] text-xs text-muted font-mono leading-relaxed" id="nav-tabs-content">
                High-throughput edge architecture with zero runtime bloat and instant First Contentful Paint.
              </div>
            </div>
          `,
          code: `<div class="border border-border p-5 font-mono">\n  <div class="flex border-b gap-6 text-xs">\n    <button class="border-b-2 border-ink pb-2 font-bold">Overview</button>\n    <button class="pb-2 text-muted">Specifications</button>\n  </div>\n  <div class="pt-4 text-xs text-muted">High-throughput edge architecture...</div>\n</div>`,
          init: (container) => {
            const triggers = container.querySelectorAll('.tab-trigger');
            const content = container.querySelector('#nav-tabs-content');
            const data = {
              overview: "High-throughput edge architecture with zero runtime bloat and instant First Contentful Paint.",
              spec: "WCAG 2.1 AA Compliance, 60fps hardware-accelerated transitions, < 4KB CSS token footprint.",
              telemetry: "Real-time edge cluster latency: 14ms (Prague node). Memory footprint: 12MB."
            };
            triggers.forEach(btn => {
              btn.addEventListener('click', () => {
                const key = btn.getAttribute('data-tab');
                triggers.forEach(t => {
                  t.className = "pb-2.5 text-muted hover:text-ink dark:hover:text-white border-b-2 border-transparent cursor-pointer tab-trigger";
                });
                btn.className = "pb-2.5 font-bold text-ink dark:text-white border-b-2 border-ink dark:border-white cursor-pointer tab-trigger";
                if (content && key && data[key]) {
                  content.textContent = data[key];
                }
              });
            });
          }
        },
        {
          id: 'tabs-segmented-pills',
          name: '2. Segmented Pill Switcher',
          html: `
            <div class="w-full max-w-sm border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-5 text-center font-mono select-none space-y-4">
              <div class="inline-flex p-1 bg-zinc-100 dark:bg-black border border-[color:var(--color-border)] text-xs rounded-full" id="pill-switcher">
                <button class="px-4 py-1 bg-ink text-paper dark:bg-white dark:text-black font-bold rounded-full cursor-pointer pill-btn" data-price="$49" data-period="/ month">Monthly</button>
                <button class="px-4 py-1 text-muted hover:text-ink dark:hover:text-white rounded-full cursor-pointer pill-btn" data-price="$39" data-period="/ month (Billed annually)">Annual (Save 20%)</button>
              </div>
              <div class="text-2xl font-bold text-ink dark:text-white" id="pill-price">$49 <span class="text-xs text-muted font-normal" id="pill-period">/ month</span></div>
            </div>
          `,
          code: `<div class="inline-flex p-1 border rounded-full bg-black font-mono text-xs">\n  <button class="px-4 py-1 bg-white text-black font-bold rounded-full">Monthly</button>\n  <button class="px-4 py-1 text-muted rounded-full">Annual</button>\n</div>`,
          init: (c) => {
            const btns = c.querySelectorAll('#pill-switcher .pill-btn');
            const price = c.querySelector('#pill-price');
            const period = c.querySelector('#pill-period');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "px-4 py-1 text-muted hover:text-ink dark:hover:text-white rounded-full cursor-pointer pill-btn";
                });
                b.className = "px-4 py-1 bg-ink text-paper dark:bg-white dark:text-black font-bold rounded-full cursor-pointer pill-btn";
                const p = b.getAttribute('data-price');
                const pd = b.getAttribute('data-period');
                if (price) price.innerHTML = `${p} <span class="text-xs text-muted font-normal">${pd}</span>`;
              });
            });
          }
        },
        {
          id: 'tabs-boxed-code-preview',
          name: '3. Code & Preview Boxed Tabs',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] text-left font-mono select-none text-xs">
              <div class="flex border-b border-[color:var(--color-border)] bg-zinc-100/60 dark:bg-black/40" id="code-tabs-bar">
                <button class="px-4 py-2 bg-[color:var(--color-surface)] dark:bg-[#09090b] border-r border-[color:var(--color-border)] font-bold text-ink dark:text-white cursor-pointer ctab-btn" data-view="Active rendered component preview area.">Preview</button>
                <button class="px-4 py-2 text-muted hover:text-ink border-r border-[color:var(--color-border)] cursor-pointer ctab-btn" data-view="&lt;button class=&quot;border px-4 py-2 font-mono&quot;&gt;Click&lt;/button&gt;">HTML</button>
                <button class="px-4 py-2 text-muted hover:text-ink cursor-pointer ctab-btn" data-view="export const Button = () => &lt;button className=&quot;btn&quot;&gt;Click&lt;/button&gt;;">React / TSX</button>
              </div>
              <div class="p-4 text-xs text-muted min-h-[60px]" id="code-tabs-content">
                Active rendered component preview area.
              </div>
            </div>
          `,
          code: `<div class="border font-mono text-xs">\n  <div class="flex border-b bg-zinc-900">\n    <button class="px-4 py-2 border-r font-bold bg-surface">Preview</button>\n    <button class="px-4 py-2 text-muted">HTML</button>\n  </div>\n  <div class="p-4">Content</div>\n</div>`,
          init: (c) => {
            const btns = c.querySelectorAll('#code-tabs-bar .ctab-btn');
            const content = c.querySelector('#code-tabs-content');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "px-4 py-2 text-muted hover:text-ink border-r border-[color:var(--color-border)] cursor-pointer ctab-btn last:border-r-0";
                });
                b.className = "px-4 py-2 bg-[color:var(--color-surface)] dark:bg-[#09090b] border-r border-[color:var(--color-border)] font-bold text-ink dark:text-white cursor-pointer ctab-btn last:border-r-0";
                if (content) content.textContent = b.getAttribute('data-view') || '';
              });
            });
          }
        },
        {
          id: 'tabs-vertical-sidebar',
          name: '4. Vertical Sidebar Tabs',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] grid grid-cols-3 divide-x divide-[color:var(--color-border)] text-left font-mono select-none text-xs">
              <div class="p-2 space-y-1 bg-zinc-50 dark:bg-black/30" id="vtabs-sidebar">
                <button class="w-full text-left px-2 py-1.5 bg-black/5 dark:bg-white/10 font-bold text-ink dark:text-white cursor-pointer vtab-btn" data-info="General project configurations and domain routing settings.">General</button>
                <button class="w-full text-left px-2 py-1.5 text-muted hover:text-ink cursor-pointer vtab-btn" data-info="TLS 1.3 certificates, CSP headers, and RBAC authentication rules.">Security</button>
                <button class="w-full text-left px-2 py-1.5 text-muted hover:text-ink cursor-pointer vtab-btn" data-info="Invoice history, payment methods, and automated billing receipts.">Billing</button>
              </div>
              <div class="col-span-2 p-4 text-xs text-muted min-h-[80px]" id="vtabs-content">
                General project configurations and domain routing settings.
              </div>
            </div>
          `,
          code: `<div class="border grid grid-cols-3 divide-x font-mono text-xs">\n  <div class="p-2 space-y-1"><button class="w-full text-left p-1.5 font-bold">General</button><button class="w-full text-left p-1.5 text-muted">Security</button></div>\n  <div class="col-span-2 p-4">Settings panel</div>\n</div>`,
          init: (c) => {
            const btns = c.querySelectorAll('#vtabs-sidebar .vtab-btn');
            const content = c.querySelector('#vtabs-content');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "w-full text-left px-2 py-1.5 text-muted hover:text-ink dark:hover:text-white cursor-pointer vtab-btn";
                });
                b.className = "w-full text-left px-2 py-1.5 bg-black/5 dark:bg-white/10 font-bold text-ink dark:text-white cursor-pointer vtab-btn";
                if (content) content.textContent = b.getAttribute('data-info') || '';
              });
            });
          }
        },
        {
          id: 'tabs-counter-badge',
          name: '5. Icon + Counter Badge Tabs',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-3">
              <div class="flex border-b border-[color:var(--color-border)] gap-4 pb-2" id="badge-tabs-bar">
                <button class="flex items-center gap-1.5 font-bold text-ink dark:text-white border-b-2 border-ink dark:border-white pb-2 cursor-pointer btab-btn" data-list="12 incoming client messages queued for deployment.">
                  <span>Inbox</span>
                  <span class="px-1.5 py-0.2 bg-ink text-paper dark:bg-white dark:text-black text-[9px] rounded-full font-bold">12</span>
                </button>
                <button class="flex items-center gap-1.5 text-muted hover:text-ink pb-2 border-b-2 border-transparent cursor-pointer btab-btn" data-list="48 archived project audit reports stored in S3.">
                  <span>Archived</span>
                  <span class="px-1.5 py-0.2 bg-zinc-200 dark:bg-zinc-800 text-[9px] rounded-full">48</span>
                </button>
              </div>
              <div class="text-xs text-muted" id="badge-tabs-content">
                12 incoming client messages queued for deployment.
              </div>
            </div>
          `,
          code: `<div class="flex gap-4 font-mono text-xs border-b pb-2">\n  <button class="font-bold flex items-center gap-1.5"><span>Inbox</span><span class="bg-white text-black px-1.5 rounded-full text-xs">12</span></button>\n  <button class="text-muted">Archived</button>\n</div>`,
          init: (c) => {
            const btns = c.querySelectorAll('#badge-tabs-bar .btab-btn');
            const content = c.querySelector('#badge-tabs-content');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "flex items-center gap-1.5 text-muted hover:text-ink pb-2 border-b-2 border-transparent cursor-pointer btab-btn";
                });
                b.className = "flex items-center gap-1.5 font-bold text-ink dark:text-white border-b-2 border-ink dark:border-white pb-2 cursor-pointer btab-btn";
                if (content) content.textContent = b.getAttribute('data-list') || '';
              });
            });
          }
        },
        {
          id: 'tabs-browser-cards',
          name: '6. Browser Style Window Tabs',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] text-left font-mono select-none text-xs">
              <div class="flex border-b border-[color:var(--color-border)] bg-zinc-100 dark:bg-black/50 px-2 pt-2 gap-1" id="browser-tab-row">
                <div class="px-3 py-1.5 bg-[color:var(--color-surface)] dark:bg-[#09090b] border-t border-x border-[color:var(--color-border)] font-bold text-ink dark:text-white flex items-center gap-2 cursor-pointer br-tab" data-code="&lt;!-- Astro Component --&gt;\n&lt;ComponentLibraryShowcase /&gt;">
                  <span>Showcase.astro</span>
                  <button class="text-[9px] text-muted hover:text-ink br-close">✕</button>
                </div>
                <div class="px-3 py-1.5 text-muted hover:text-ink flex items-center gap-2 cursor-pointer br-tab" data-code="/* Global Design Tokens */\n:root { --color-ink: #09090b; }">
                  <span>styles.css</span>
                  <button class="text-[9px] text-muted hover:text-ink br-close">✕</button>
                </div>
              </div>
              <div class="p-4 text-xs text-muted min-h-[60px]" id="browser-tab-content">
                &lt;!-- Astro Component --&gt;<br/>&lt;ComponentLibraryShowcase /&gt;
              </div>
            </div>
          `,
          code: `<div class="border font-mono text-xs">\n  <div class="flex border-b bg-zinc-900 px-2 pt-2 gap-1">\n    <div class="border-t border-x px-3 py-1.5 font-bold flex items-center gap-2"><span>Showcase.astro</span><button>✕</button></div>\n  </div>\n</div>`,
          init: (c) => {
            const tabs = c.querySelectorAll('#browser-tab-row .br-tab');
            const content = c.querySelector('#browser-tab-content');
            tabs.forEach(t => {
              t.addEventListener('click', (e) => {
                if (e.target.classList.contains('br-close')) {
                  t.remove();
                  return;
                }
                tabs.forEach(tb => {
                  tb.className = "px-3 py-1.5 text-muted hover:text-ink flex items-center gap-2 cursor-pointer br-tab";
                });
                t.className = "px-3 py-1.5 bg-[color:var(--color-surface)] dark:bg-[#09090b] border-t border-x border-[color:var(--color-border)] font-bold text-ink dark:text-white flex items-center gap-2 cursor-pointer br-tab";
                if (content) content.innerHTML = t.getAttribute('data-code')?.replace(/\n/g, '<br/>') || '';
              });
            });
          }
        },
        {
          id: 'tabs-nested-dual',
          name: '7. Nested Dual-Level Tabs',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-3">
              <div class="flex gap-4 border-b border-[color:var(--color-border)] pb-2 font-bold text-ink dark:text-white" id="nested-top-bar">
                <button class="underline decoration-2 underline-offset-4 cursor-pointer ntop-btn text-ink dark:text-white" data-mode="frontend">Frontend</button>
                <button class="text-muted hover:text-ink dark:hover:text-white cursor-pointer ntop-btn" data-mode="backend">Backend</button>
                <button class="text-muted hover:text-ink dark:hover:text-white cursor-pointer ntop-btn" data-mode="infra">Infrastructure</button>
              </div>
              <div class="flex flex-wrap gap-2" id="nested-sub-bar">
                <!-- Injected dynamically -->
              </div>
              <div class="p-3 bg-zinc-100 dark:bg-black/60 border border-[color:var(--color-border)] rounded text-[11px] font-mono leading-relaxed min-h-[90px]" id="nested-tabs-content">
                <!-- Preview content -->
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs space-y-3">\n  <div class="flex gap-4 border-b pb-2 font-bold">\n    <button class="underline">Frontend</button>\n    <button class="text-muted">Backend</button>\n  </div>\n  <div class="flex gap-2" id="sub-tabs">\n    <button class="border px-2.5 py-1 font-bold">UI Primitives</button>\n  </div>\n  <div class="p-3 bg-black/60 font-mono text-xs" id="content">...</div>\n</div>`,
          init: (c) => {
            const data = {
              frontend: [
                { id: 'primitives', label: 'UI Primitives', snippet: '<Button variant="monochrome" size="md" />\n<Input type="search" placeholder="Filter..." />\n<Modal title="Confirm Action" />' },
                { id: 'tokens', label: 'Design Tokens', snippet: '--color-ink: #09090b;\n--color-paper: #fcfbf9;\n--font-mono: "Geist Mono", monospace;\n--border-radius: 2px;' },
                { id: 'view-transitions', label: 'Transitions', snippet: '@keyframes slideIn {\n  from { opacity: 0; transform: translateY(6px); }\n  to { opacity: 1; transform: translateY(0); }\n}' }
              ],
              backend: [
                { id: 'endpoints', label: 'REST Endpoints', snippet: 'GET  /api/v1/metrics -> 200 OK (3.2ms)\nPOST /api/v1/deploy  -> 202 Accepted\nGET  /api/v1/health  -> 200 OK (edge_cache=HIT)' },
                { id: 'sql', label: 'Postgres SQL', snippet: 'SELECT service, p99_latency_ms, error_rate\nFROM cluster_telemetry\nWHERE timestamp > NOW() - INTERVAL 1 HOUR\nORDER BY p99_latency_ms DESC;' },
                { id: 'middleware', label: 'Edge Middleware', snippet: 'export default async function middleware(req) {\n  const token = req.headers.get("Authorization");\n  if (!verifyToken(token)) return new Response(null, { status: 401 });\n}' }
              ],
              infra: [
                { id: 'cdn', label: 'Edge CDN', snippet: 'Cache-Control: public, max-age=31536000, immutable\nEdge-Region: fra1 (Frankfurt, EU)\nTTL: 86400s | Purge-Hook: enabled' },
                { id: 'tls', label: 'TLS 1.3 Security', snippet: 'Cipher: TLS_AES_256_GCM_SHA384\nStrict-Transport-Security: max-age=63072000; includeSubDomains; preload\nX-Frame-Options: DENY' },
                { id: 'docker', label: 'Docker Compose', snippet: 'services:\n  edge-gateway:\n    image: nginx:alpine\n    ports: ["443:443"]\n    restart: unless-stopped' }
              ]
            };

            let currentCategory = 'frontend';
            let currentSubIndex = 0;

            const topBtns = c.querySelectorAll('#nested-top-bar .ntop-btn');
            const subBar = c.querySelector('#nested-sub-bar');
            const contentBox = c.querySelector('#nested-tabs-content');

            const renderSubTabs = () => {
              if (!subBar || !contentBox) return;
              const subItems = data[currentCategory] || [];
              if (currentSubIndex >= subItems.length) currentSubIndex = 0;

              subBar.innerHTML = subItems.map((item, idx) => {
                const isActive = idx === currentSubIndex;
                const activeClasses = "bg-ink text-paper dark:bg-white dark:text-black font-bold border-ink dark:border-white shadow-sm";
                const inactiveClasses = "bg-black/5 dark:bg-white/5 text-muted hover:text-ink dark:hover:text-white border-transparent";
                return `<button class="px-2.5 py-1 text-[10px] rounded transition-colors border cursor-pointer nsub-btn ${isActive ? activeClasses : inactiveClasses}" data-idx="${idx}">${item.label}</button>`;
              }).join('');

              const activeItem = subItems[currentSubIndex];
              if (activeItem) {
                contentBox.innerHTML = `<pre class="text-ink dark:text-zinc-200 whitespace-pre font-mono text-[11px] leading-relaxed overflow-x-auto">${activeItem.snippet}</pre>`;
              }

              subBar.querySelectorAll('.nsub-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                  currentSubIndex = parseInt(btn.getAttribute('data-idx') || '0', 10);
                  renderSubTabs();
                });
              });
            };

            topBtns.forEach(b => {
              b.addEventListener('click', () => {
                topBtns.forEach(btn => {
                  btn.className = "text-muted hover:text-ink dark:hover:text-white cursor-pointer ntop-btn";
                });
                b.className = "underline decoration-2 underline-offset-4 font-bold text-ink dark:text-white cursor-pointer ntop-btn";
                currentCategory = b.getAttribute('data-mode') || 'frontend';
                currentSubIndex = 0;
                renderSubTabs();
              });
            });

            renderSubTabs();
          }
        },
        {
          id: 'tabs-equal-grid',
          name: '8. Equal-Width Grid Tabs',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] text-center font-mono select-none text-xs">
              <div class="grid grid-cols-3 divide-x divide-[color:var(--color-border)] border-b border-[color:var(--color-border)]" id="grid-tab-bar">
                <button class="py-2.5 font-bold bg-[color:var(--color-ink)] text-[color:var(--color-paper)] dark:bg-white dark:text-black cursor-pointer gtab-btn" data-stage="Build Stage: 153 pages compiled in 1.4s.">Build</button>
                <button class="py-2.5 text-muted hover:text-ink cursor-pointer gtab-btn" data-stage="Test Stage: 84 unit tests passed with 100% coverage.">Test</button>
                <button class="py-2.5 text-muted hover:text-ink cursor-pointer gtab-btn" data-stage="Deploy Stage: Deployed to global edge CDN nodes.">Deploy</button>
              </div>
              <div class="p-4 text-xs text-muted" id="grid-tab-output">Build Stage: 153 pages compiled in 1.4s.</div>
            </div>
          `,
          code: `<div class="border font-mono text-xs">\n  <div class="grid grid-cols-3 divide-x border-b">\n    <button class="py-2.5 bg-white text-black font-bold">Build</button>\n    <button class="py-2.5 text-muted">Test</button>\n    <button class="py-2.5 text-muted">Deploy</button>\n  </div>\n</div>`,
          init: (c) => {
            const btns = c.querySelectorAll('#grid-tab-bar .gtab-btn');
            const output = c.querySelector('#grid-tab-output');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "py-2.5 text-muted hover:text-ink dark:hover:text-white cursor-pointer gtab-btn";
                });
                b.className = "py-2.5 font-bold bg-[color:var(--color-ink)] text-[color:var(--color-paper)] dark:bg-white dark:text-black cursor-pointer gtab-btn";
                if (output) output.textContent = b.getAttribute('data-stage') || '';
              });
            });
          }
        },
        {
          id: 'tabs-status-indicators',
          name: '9. Status Indicator Tabs',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-4 text-left font-mono select-none text-xs space-y-3">
              <div class="flex gap-4 border-b border-[color:var(--color-border)] pb-2 text-xs" id="status-tabs-row">
                <button class="flex items-center gap-1.5 font-bold text-ink dark:text-white border-b-2 border-ink dark:border-white pb-2 cursor-pointer stab-btn" data-count="8 active nodes running in Frankfurt and Prague.">
                  <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Active (8)
                </button>
                <button class="flex items-center gap-1.5 text-muted hover:text-ink pb-2 border-b-2 border-transparent cursor-pointer stab-btn" data-count="2 deployment pipelines pending approval.">
                  <span class="w-2 h-2 rounded-full bg-amber-500"></span> Pending (2)
                </button>
              </div>
              <div class="text-xs text-muted" id="status-tabs-info">
                8 active nodes running in Frankfurt and Prague.
              </div>
            </div>
          `,
          code: `<div class="border p-4 font-mono text-xs">\n  <div class="flex gap-4 border-b pb-2">\n    <button class="font-bold flex items-center gap-1.5"><span class="w-2 h-2 bg-emerald-500 rounded-full"></span> Active (8)</button>\n    <button class="text-muted flex items-center gap-1.5"><span class="w-2 h-2 bg-amber-500 rounded-full"></span> Pending (2)</button>\n  </div>\n</div>`,
          init: (c) => {
            const btns = c.querySelectorAll('#status-tabs-row .stab-btn');
            const info = c.querySelector('#status-tabs-info');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "flex items-center gap-1.5 text-muted hover:text-ink pb-2 border-b-2 border-transparent cursor-pointer stab-btn";
                });
                b.className = "flex items-center gap-1.5 font-bold text-ink dark:text-white border-b-2 border-ink dark:border-white pb-2 cursor-pointer stab-btn";
                if (info) info.textContent = b.getAttribute('data-count') || '';
              });
            });
          }
        },
        {
          id: 'tabs-minimal-index',
          name: '10. Minimalist Index Numbered Tabs',
          html: `
            <div class="w-full max-w-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] dark:bg-[#09090b] p-5 text-left font-mono select-none space-y-4">
              <div class="flex gap-6 text-xs border-b border-[color:var(--color-border)] pb-2.5" id="idx-tabs-row">
                <button class="font-bold text-ink dark:text-white border-b-2 border-ink dark:border-white pb-2.5 cursor-pointer itab-btn" data-txt="01. Architectural specifications and data flow pipelines.">01. ARCHITECTURE</button>
                <button class="text-muted hover:text-ink pb-2.5 border-b-2 border-transparent cursor-pointer itab-btn" data-txt="02. OpenAPI 3.1 contracts with strict TypeScript interfaces.">02. API CONTRACTS</button>
                <button class="text-muted hover:text-ink pb-2.5 border-b-2 border-transparent cursor-pointer itab-btn" data-txt="03. Real-time telemetry, response latency, and memory footprint.">03. METRICS</button>
              </div>
              <div class="text-xs text-muted" id="idx-tabs-text">01. Architectural specifications and data flow pipelines.</div>
            </div>
          `,
          code: `<div class="border p-5 font-mono text-xs space-y-3">\n  <div class="flex gap-6 border-b pb-2">\n    <button class="font-bold border-b-2">01. ARCHITECTURE</button>\n    <button class="text-muted">02. API CONTRACTS</button>\n  </div>\n</div>`,
          init: (c) => {
            const btns = c.querySelectorAll('#idx-tabs-row .itab-btn');
            const txt = c.querySelector('#idx-tabs-text');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "text-muted hover:text-ink pb-2.5 border-b-2 border-transparent cursor-pointer itab-btn";
                });
                b.className = "font-bold text-ink dark:text-white border-b-2 border-ink dark:border-white pb-2.5 cursor-pointer itab-btn";
                if (txt) txt.textContent = b.getAttribute('data-txt') || '';
              });
            });
          }
        }
      ]
    };
