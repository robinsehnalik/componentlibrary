// @ts-nocheck
/**
 * 3. Code & Preview Boxed Tabs
 * Category: tabs
 * ID: tabs-boxed-code-preview
 */

export const init = (c) => {
            const btns = c.querySelectorAll('#code-tabs-bar .ctab-btn');
            const content = c.querySelector('#code-tabs-content');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "px-4 py-2 text-muted hover:text-ink border-r border-[color:var(--color-border)] cursor-pointer ctab-btn last:border-r-0";
                });
                b.className = "px-4 py-2 bg-[color:var(--color-surface)] dark:bg-[#09090b] border-r border-[color:var(--color-border)] font-bold text-ink dark:text-white cursor-pointer ctab-btn last:border-r-0";
                if (content) content.textContent = b.getAttribute('data-view') || '';
              });
            });
          };
