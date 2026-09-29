// @ts-nocheck
/**
 * 10. Minimalist Index Numbered Tabs
 * Category: tabs
 * ID: tabs-minimal-index
 */

export const init = (c) => {
            const btns = c.querySelectorAll('#idx-tabs-row .itab-btn');
            const txt = c.querySelector('#idx-tabs-text');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "text-muted hover:text-ink pb-2.5 border-b-2 border-transparent cursor-pointer itab-btn";
                });
                b.className = "font-bold text-ink dark:text-white border-b-2 border-ink dark:border-white pb-2.5 cursor-pointer itab-btn";
                if (txt) txt.textContent = b.getAttribute('data-txt') || '';
              });
            });
          };
