// @ts-nocheck
/**
 * 8. Alphabetical A-Z Index Bar
 * Category: pagination
 * ID: pagination-alphabetical-index
 */

export const init = (c) => {
            const btns = c.querySelectorAll('#p8-letters button');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => btn.className = "text-muted hover:text-ink dark:hover:text-white cursor-pointer");
                b.className = "font-bold text-ink dark:text-white underline cursor-pointer";
              });
            });
          };
