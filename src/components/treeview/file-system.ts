// @ts-nocheck
/**
 * 1. File System Explorer
 * Category: treeview
 * ID: treeview-file-system
 */

export const init = (c) => {
            const folders = c.querySelectorAll('.tv-folder');
            const files = c.querySelectorAll('.tv-file');
            const status = c.querySelector('#tv1-status');

            folders.forEach(f => {
              f.addEventListener('click', () => {
                const target = f.getAttribute('data-target');
                const sub = c.querySelector(`#tv-${target}`);
                const arrow = f.querySelector('.tv-arrow');
                if (sub) {
                  if (sub.classList.contains('hidden')) {
                    sub.classList.remove('hidden');
                    if (arrow) arrow.textContent = '▼';
                  } else {
                    sub.classList.add('hidden');
                    if (arrow) arrow.textContent = '▶';
                  }
                }
              });
            });

            files.forEach(f => {
              f.addEventListener('click', () => {
                files.forEach(fl => fl.classList.remove('text-ink', 'dark:text-white', 'font-bold'));
                f.classList.add('text-ink', 'dark:text-white', 'font-bold');
                const fn = f.getAttribute('data-file');
                if (status && fn) status.textContent = fn;
              });
            });
          };
