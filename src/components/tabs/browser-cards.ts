// @ts-nocheck
/**
 * 6. Browser Style Window Tabs
 * Category: tabs
 * ID: tabs-browser-cards
 */

export const init = (c) => {
            const tabs = c.querySelectorAll('#browser-tab-row .br-tab');
            const content = c.querySelector('#browser-tab-content');
            tabs.forEach(t => {
              t.addEventListener('click', (e) => {
                if (e.target.classList.contains('br-close')) {
                  t.remove();
                  return;
                }
                tabs.forEach(tb => {
                  tb.className = "px-3 py-1.5 text-muted hover:text-ink flex items-center gap-2 cursor-pointer br-tab";
                });
                t.className = "px-3 py-1.5 bg-[color:var(--color-surface)] dark:bg-[#09090b] border-t border-x border-[color:var(--color-border)] font-bold text-ink dark:text-white flex items-center gap-2 cursor-pointer br-tab";
                if (content) content.innerHTML = t.getAttribute('data-code')?.replace(/\n/g, '<br/>') || '';
              });
            });
          };
