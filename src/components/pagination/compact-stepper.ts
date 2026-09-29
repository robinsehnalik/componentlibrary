// @ts-nocheck
/**
 * 2. Compact Arrow Stepper
 * Category: pagination
 * ID: pagination-compact-stepper
 */

export const init = (c) => {
            let page = 3;
            const cur = c.querySelector('#p2-cur');
            c.querySelector('#p2-prev')?.addEventListener('click', () => {
              if (page > 1) { page--; if (cur) cur.textContent = `${page}`; }
            });
            c.querySelector('#p2-next')?.addEventListener('click', () => {
              if (page < 18) { page++; if (cur) cur.textContent = `${page}`; }
            });
          };
