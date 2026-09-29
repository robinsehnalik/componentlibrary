// @ts-nocheck
/**
 * 5. Thumbnail Gallery Slider
 * Category: carousel
 * ID: carousel-thumbnail-rail
 */

export const init = (c) => {
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
          };
