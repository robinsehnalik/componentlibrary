// @ts-nocheck
/**
 * 10. Brutalist Monospace Navigator
 * Category: pagination
 * ID: pagination-brutalist-nav
 */

export const init = (c) => {
            let cur = 4;
            const counter = c.querySelector('#p10-counter');
            const update = () => {
              if (counter) counter.textContent = `[ ${cur < 10 ? '0' + cur : cur} / 20 ]`;
            };
            c.querySelector('#p10-prev')?.addEventListener('click', () => { if (cur > 1) { cur--; update(); } });
            c.querySelector('#p10-next')?.addEventListener('click', () => { if (cur < 20) { cur++; update(); } });
          };
