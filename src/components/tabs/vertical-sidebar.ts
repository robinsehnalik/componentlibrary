// @ts-nocheck
/**
 * 4. Vertical Sidebar Tabs
 * Category: tabs
 * ID: tabs-vertical-sidebar
 */

export const init = (c) => {
            const btns = c.querySelectorAll('#vtabs-sidebar .vtab-btn');
            const content = c.querySelector('#vtabs-content');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "w-full text-left px-2 py-1.5 text-muted hover:text-ink dark:hover:text-white cursor-pointer vtab-btn";
                });
                b.className = "w-full text-left px-2 py-1.5 bg-black/5 dark:bg-white/10 font-bold text-ink dark:text-white cursor-pointer vtab-btn";
                if (content) content.textContent = b.getAttribute('data-info') || '';
              });
            });
          };
