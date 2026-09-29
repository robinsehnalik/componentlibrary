// @ts-nocheck
/**
 * 3. Segmented Pill Stepper
 * Category: pagination
 * ID: pagination-segmented-pills
 */

export const init = (c) => {
            const btns = c.querySelectorAll('#p3-pills button');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "px-3 py-1 text-muted hover:text-ink dark:hover:text-white cursor-pointer";
                });
                b.className = "px-3 py-1 bg-ink text-paper dark:bg-white dark:text-black font-bold cursor-pointer";
              });
            });
          };
