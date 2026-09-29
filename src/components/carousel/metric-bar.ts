// @ts-nocheck
/**
 * 2. Metric Stat Carousel
 * Category: carousel
 * ID: carousel-metric-bar
 */

export const init = (c) => {
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
          };
