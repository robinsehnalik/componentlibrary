// @ts-nocheck
/**
 * 3. Card Deck Carousel
 * Category: carousel
 * ID: carousel-card-deck
 */

export const init = (c) => {
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
          };
