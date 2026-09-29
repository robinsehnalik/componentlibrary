// @ts-nocheck
/**
 * 6. Category Taxonomy Filter
 * Category: treeview
 * ID: treeview-taxonomy-filter
 */

export const init = (c) => {
            const boxes = c.querySelectorAll('.tax-box');
            const activeSpan = c.querySelector('#tax-active');
            boxes.forEach(b => {
              b.addEventListener('change', () => {
                const checked = Array.from(boxes).filter(bx => bx.checked).length;
                if (activeSpan) activeSpan.textContent = `${checked} Filter${checked === 1 ? '' : 's'} Active`;
              });
            });
          };
