// @ts-nocheck
/**
 * 2. Segmented Pill Switcher
 * Category: tabs
 * ID: tabs-segmented-pills
 */

export const init = (c) => {
            const btns = c.querySelectorAll('#pill-switcher .pill-btn');
            const price = c.querySelector('#pill-price');
            const period = c.querySelector('#pill-period');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "px-4 py-1 text-muted hover:text-ink dark:hover:text-white rounded-full cursor-pointer pill-btn";
                });
                b.className = "px-4 py-1 bg-ink text-paper dark:bg-white dark:text-black font-bold rounded-full cursor-pointer pill-btn";
                const p = b.getAttribute('data-price');
                const pd = b.getAttribute('data-period');
                if (price) price.innerHTML = `${p} <span class="text-xs text-muted font-normal">${pd}</span>`;
              });
            });
          };
