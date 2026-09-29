// @ts-nocheck
/**
 * 6. Difficulty Level Meter
 * Category: rating
 * ID: rating-difficulty-meter
 */

export const init = (c) => {
            const bars = c.querySelectorAll('#diff-bars div');
            const label = c.querySelector('#diff-label');
            const names = ["Beginner", "Easy", "Intermediate", "Advanced", "Master"];
            bars.forEach(b => {
              b.addEventListener('click', () => {
                const lvl = parseInt(b.getAttribute('data-level') || '4', 10);
                bars.forEach((bar, i) => {
                  bar.className = i < lvl ? "h-3 bg-ink dark:bg-white transition-all" : "h-3 bg-zinc-200 dark:bg-zinc-800 transition-all";
                });
                if (label) label.textContent = `Level ${lvl}/5 (${names[lvl - 1]})`;
              });
            });
          };
