// @ts-nocheck
/**
 * 9. Status Indicator Tabs
 * Category: tabs
 * ID: tabs-status-indicators
 */

export const init = (c) => {
            const btns = c.querySelectorAll('#status-tabs-row .stab-btn');
            const info = c.querySelector('#status-tabs-info');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "flex items-center gap-1.5 text-muted hover:text-ink pb-2 border-b-2 border-transparent cursor-pointer stab-btn";
                });
                b.className = "flex items-center gap-1.5 font-bold text-ink dark:text-white border-b-2 border-ink dark:border-white pb-2 cursor-pointer stab-btn";
                if (info) info.textContent = b.getAttribute('data-count') || '';
              });
            });
          };
