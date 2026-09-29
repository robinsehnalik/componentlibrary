// @ts-nocheck
/**
 * 2. Shortcut Menu Popover
 * Category: popover
 * ID: popover-shortcut-palette
 */

export const init = (c) => {
            const btns = c.querySelectorAll('.sc-btn');
            const feedback = c.querySelector('#sc-feedback');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                const name = b.getAttribute('data-name');
                if (feedback && name) {
                  feedback.textContent = `Triggered: ${name}!`;
                  setTimeout(() => { feedback.textContent = 'Click to trigger'; }, 1500);
                }
              });
            });
          };
