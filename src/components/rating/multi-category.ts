// @ts-nocheck
/**
 * 5. Multi-Category Rating Breakdown
 * Category: rating
 * ID: rating-multi-category
 */

export const init = (c) => {
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
          };
