// @ts-nocheck
/**
 * 1. Standard Numbered Page Bar
 * Category: pagination
 * ID: pagination-numeric-bar
 */

export const init = (c) => {
            const nums = c.querySelectorAll('#p1-nums .p-num');
            const prev = c.querySelector('#p1-prev');
            const next = c.querySelector('#p1-next');
            let cur = 1;
            const update = () => {
              nums.forEach(n => {
                const page = parseInt(n.getAttribute('data-page') || '1', 10);
                if (page === cur) {
                  n.className = "p-num w-7 h-7 bg-ink text-paper dark:bg-white dark:text-black font-bold flex items-center justify-center cursor-pointer";
                } else {
                  n.className = "p-num w-7 h-7 border border-[color:var(--color-border)] hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center cursor-pointer";
                }
              });
            };
            nums.forEach(n => {
              n.addEventListener('click', () => {
                cur = parseInt(n.getAttribute('data-page') || '1', 10);
                update();
              });
            });
            prev?.addEventListener('click', () => { if (cur > 1) { cur--; update(); } });
            next?.addEventListener('click', () => { if (cur < 12) { cur++; update(); } });
          };
