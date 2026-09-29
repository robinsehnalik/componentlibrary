// @ts-nocheck
/**
 * 4. Nested Table of Contents
 * Category: treeview
 * ID: treeview-toc
 */

export const init = (c) => {
            const items = c.querySelectorAll('.toc-item');
            items.forEach(it => {
              it.addEventListener('click', () => {
                items.forEach(i => {
                  i.classList.remove('font-bold', 'text-ink', 'dark:text-white', 'border-l-2', 'border-ink', 'dark:border-white', 'pl-3.5');
                  i.classList.add('text-muted');
                });
                it.classList.remove('text-muted');
                it.classList.add('font-bold', 'text-ink', 'dark:text-white', 'border-l-2', 'border-ink', 'dark:border-white', 'pl-3.5');
              });
            });
          };
