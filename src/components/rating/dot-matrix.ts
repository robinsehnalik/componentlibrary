// @ts-nocheck
/**
 * 9. Minimalist Dot Matrix Rating
 * Category: rating
 * ID: rating-dot-matrix
 */

export const init = (c) => {
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
          };
