// @ts-nocheck
/**
 * 6. Filter Group Accordion
 * Category: accordion
 * ID: accordion-filter-groups
 */

export const init = (c) => {
            const toggle = c.querySelector('#fg-toggle');
            const body = c.querySelector('#fg-body');
            const arrow = c.querySelector('#fg-arrow');
            toggle?.addEventListener('click', () => {
              body?.classList.toggle('hidden');
              if (arrow) arrow.textContent = body?.classList.contains('hidden') ? '▶' : '▼';
            });
          };
