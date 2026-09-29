// @ts-nocheck
/**
 * 6. Rows per Page Controller
 * Category: pagination
 * ID: pagination-rows-per-page
 */

export const init = (c) => {
            const select = c.querySelector('#p6-select');
            const label = c.querySelector('#p6-label');
            select?.addEventListener('change', (e) => {
              const count = e.target.value;
              if (label) label.textContent = `Showing 1–${count} of 124 results`;
            });
          };
