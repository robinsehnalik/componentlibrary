// @ts-nocheck
/**
 * 7. Highlighted Metric Pill Quote
 * Category: quote
 * ID: quote-metric-pill
 */

export const init = (c) => {
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
          };
