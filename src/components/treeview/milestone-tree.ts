// @ts-nocheck
/**
 * 9. Task Milestone Tree
 * Category: treeview
 * ID: treeview-milestone-tree
 */

export const init = (c) => {
            const items = c.querySelectorAll('.ms-item');
            const progress = c.querySelector('#ms-progress');
            items.forEach(it => {
              it.addEventListener('click', () => {
                const isDone = it.getAttribute('data-done') === 'true';
                it.setAttribute('data-done', isDone ? 'false' : 'true');
                const icon = it.querySelector('.ms-icon');
                const text = it.querySelector('.ms-text');
                if (isDone) {
                  if (icon) { icon.textContent = '●'; icon.className = 'ms-icon text-amber-500 font-bold'; }
                  if (text) { text.className = 'ms-text text-ink dark:text-white font-bold'; }
                } else {
                  if (icon) { icon.textContent = '✓'; icon.className = 'ms-icon text-emerald-600 dark:text-emerald-400 font-bold'; }
                  if (text) { text.className = 'ms-text line-through text-muted'; }
                }
                const totalDone = Array.from(items).filter(i => i.getAttribute('data-done') === 'true').length;
                if (progress) progress.textContent = `${totalDone}/${items.length} Done`;
              });
            });
          };
