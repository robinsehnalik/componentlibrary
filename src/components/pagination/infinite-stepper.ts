// @ts-nocheck
/**
 * 7. Load More Stepper
 * Category: pagination
 * ID: pagination-infinite-stepper
 */

export const init = (c) => {
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
          };
