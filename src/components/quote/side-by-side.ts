// @ts-nocheck
/**
 * 6. Side-by-Side Impact Quote
 * Category: quote
 * ID: quote-side-by-side
 */

export const init = (c) => {
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
          };
