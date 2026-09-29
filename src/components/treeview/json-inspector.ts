// @ts-nocheck
/**
 * 2. JSON Data Node Inspector
 * Category: treeview
 * ID: treeview-json-inspector
 */

export const init = (c) => {
            const toggle = c.querySelector('#json-cat-toggle');
            const body = c.querySelector('#json-cat-body');
            toggle?.addEventListener('click', () => {
              if (body) {
                body.classList.toggle('hidden');
                const arrow = toggle.querySelector('span');
                if (arrow) arrow.textContent = body.classList.contains('hidden') ? '▶' : '▼';
              }
            });
          };
