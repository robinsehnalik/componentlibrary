// @ts-nocheck
/**
 * 10. Segmented Slide Navigator
 * Category: carousel
 * ID: carousel-segmented-controls
 */

export const init = (c) => {
            const btns = c.querySelectorAll('#cs10-tabs button');
            const label = c.querySelector('#cs10-label');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "px-3 py-1 border-l border-[color:var(--color-border)] text-muted hover:text-ink dark:hover:text-white cursor-pointer first:border-l-0";
                });
                b.className = "px-3 py-1 bg-ink text-paper dark:bg-white dark:text-black font-bold cursor-pointer border-l border-[color:var(--color-border)] first:border-l-0";
                if (label) label.textContent = `Active Node: ${b.getAttribute('data-node')}`;
              });
            });
          };
