// @ts-nocheck
/**
 * 8. Equal-Width Grid Tabs
 * Category: tabs
 * ID: tabs-equal-grid
 */

export const init = (c) => {
            const btns = c.querySelectorAll('#grid-tab-bar .gtab-btn');
            const output = c.querySelector('#grid-tab-output');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "py-2.5 text-muted hover:text-ink dark:hover:text-white cursor-pointer gtab-btn";
                });
                b.className = "py-2.5 font-bold bg-[color:var(--color-ink)] text-[color:var(--color-paper)] dark:bg-white dark:text-black cursor-pointer gtab-btn";
                if (output) output.textContent = b.getAttribute('data-stage') || '';
              });
            });
          };
