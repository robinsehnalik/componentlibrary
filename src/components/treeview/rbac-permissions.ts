// @ts-nocheck
/**
 * 3. RBAC Permission Hierarchy
 * Category: treeview
 * ID: treeview-rbac-permissions
 */

export const init = (c) => {
            const parent = c.querySelector('#rbac-parent');
            const children = c.querySelectorAll('.rbac-child');
            const count = c.querySelector('#rbac-count');

            const update = () => {
              const checked = Array.from(children).filter(ch => ch.checked).length;
              if (count) count.textContent = `${checked}/${children.length} Active`;
              if (parent) parent.checked = checked === children.length;
            };

            parent?.addEventListener('change', () => {
              children.forEach(ch => { ch.checked = parent.checked; });
              update();
            });

            children.forEach(ch => {
              ch.addEventListener('change', () => { update(); });
            });
          };
