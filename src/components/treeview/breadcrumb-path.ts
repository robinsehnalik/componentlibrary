// @ts-nocheck
/**
 * 8. Breadcrumb Branch Path
 * Category: treeview
 * ID: treeview-breadcrumb-path
 */

export const init = (c) => {
            const crumbs = c.querySelectorAll('.bc-crumb');
            const pathDisplay = c.querySelector('#bc-active-path');
            crumbs.forEach(crumb => {
              crumb.addEventListener('click', () => {
                crumbs.forEach(cr => cr.classList.remove('text-ink', 'dark:text-white', 'font-bold'));
                crumb.classList.add('text-ink', 'dark:text-white', 'font-bold');
                const p = crumb.getAttribute('data-path');
                if (pathDisplay && p) {
                  pathDisplay.innerHTML = `Current URI: <strong class="text-ink dark:text-white">${p}</strong>`;
                }
              });
            });
          };
