// @ts-nocheck
/**
 * 7. Share & Export Flyout
 * Category: popover
 * ID: popover-share-export
 */

export const init = (c) => {
            const btns = c.querySelectorAll('.exp-btn');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                const badge = b.querySelector('.exp-badge');
                const orig = badge?.textContent;
                const msg = b.getAttribute('data-msg');
                if (badge && msg) {
                  badge.textContent = '✓ OK';
                  badge.className = 'exp-badge text-emerald-500 font-bold';
                  setTimeout(() => {
                    badge.textContent = orig || '';
                    badge.className = 'exp-badge text-muted';
                  }, 1200);
                }
              });
            });
          };
