// @ts-nocheck
/**
 * 5. Database Schema Tree
 * Category: treeview
 * ID: treeview-db-schema
 */

export const init = (c) => {
            const tables = c.querySelectorAll('.db-table');
            tables.forEach(t => {
              t.addEventListener('click', () => {
                const target = t.getAttribute('data-table');
                const list = c.querySelector(`#db-${target}`);
                const arrow = t.querySelector('.db-arrow');
                if (list) {
                  list.classList.toggle('hidden');
                  if (arrow) arrow.textContent = list.classList.contains('hidden') ? '▶' : '▼';
                }
              });
            });
          };
