// @ts-nocheck
/**
 * 6. Filter & Sort Settings
 * Category: popover
 * ID: popover-filter-sort
 */

export const init = (c) => {
            const radios = c.querySelectorAll('#sort-options input');
            const sortActive = c.querySelector('#sort-active');
            radios.forEach(r => {
              r.addEventListener('change', () => {
                if (sortActive) sortActive.textContent = r.value;
              });
            });
          };
