// @ts-nocheck
/**
 * 5. Icon + Counter Badge Tabs
 * Category: tabs
 * ID: tabs-counter-badge
 */

export const init = (c) => {
            const btns = c.querySelectorAll('#badge-tabs-bar .btab-btn');
            const content = c.querySelector('#badge-tabs-content');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "flex items-center gap-1.5 text-muted hover:text-ink pb-2 border-b-2 border-transparent cursor-pointer btab-btn";
                });
                b.className = "flex items-center gap-1.5 font-bold text-ink dark:text-white border-b-2 border-ink dark:border-white pb-2 cursor-pointer btab-btn";
                if (content) content.textContent = b.getAttribute('data-list') || '';
              });
            });
          };
