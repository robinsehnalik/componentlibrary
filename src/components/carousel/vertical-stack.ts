// @ts-nocheck
/**
 * 6. Vertical Stack Slider
 * Category: carousel
 * ID: carousel-vertical-stack
 */

export const init = (c) => {
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
          };
