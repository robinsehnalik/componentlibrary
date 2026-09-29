// @ts-nocheck
/**
 * 4. Minimal Dot Pagination
 * Category: pagination
 * ID: pagination-minimal-dots
 */

export const init = (c) => {
            const dots = c.querySelectorAll('#p4-dots span');
            dots.forEach((d, idx) => {
              d.addEventListener('click', () => {
                dots.forEach((dot, i) => {
                  dot.className = i === idx ? "w-6 h-2 bg-ink dark:bg-white rounded-full transition-all" : "w-2 h-2 bg-zinc-300 dark:bg-zinc-700 rounded-full transition-all";
                });
              });
            });
          };
