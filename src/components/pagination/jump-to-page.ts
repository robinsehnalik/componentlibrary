// @ts-nocheck
/**
 * 5. Direct Jump-to-Page Input
 * Category: pagination
 * ID: pagination-jump-to-page
 */

export const init = (c) => {
            const inp = c.querySelector('#p5-input');
            const go = c.querySelector('#p5-go');
            const st = c.querySelector('#p5-status');
            go?.addEventListener('click', () => {
              const val = inp?.value;
              if (st && val) st.textContent = `Page: ${val} / 24`;
            });
          };
