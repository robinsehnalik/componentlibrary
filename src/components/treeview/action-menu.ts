// @ts-nocheck
/**
 * 10. Tree with Context Actions
 * Category: treeview
 * ID: treeview-action-menu
 */

export const init = (c) => {
            const addBtn = c.querySelector('#act-add');
            const delBtn = c.querySelector('#act-del');
            const container = c.querySelector('#tree-subnodes');
            let count = 1;
            addBtn?.addEventListener('click', () => {
              const div = document.createElement('div');
              div.textContent = `📄 token-spec-0${count++}.json`;
              div.className = 'text-emerald-600 dark:text-emerald-400 font-bold';
              container?.appendChild(div);
            });
            delBtn?.addEventListener('click', () => {
              if (container) container.innerHTML = '<div class="text-zinc-400 italic">(Empty folder)</div>';
            });
          };
