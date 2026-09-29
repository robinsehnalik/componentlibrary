// @ts-nocheck
/**
 * 2. 10-Point NPS Scale
 * Category: rating
 * ID: rating-nps-scale
 */

export const init = (c) => {
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
          };
