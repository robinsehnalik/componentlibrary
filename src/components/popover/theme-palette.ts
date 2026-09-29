// @ts-nocheck
/**
 * 5. Color Theme Palette Picker
 * Category: popover
 * ID: popover-theme-palette
 */

export const init = (c) => {
            const swatches = c.querySelectorAll('#theme-swatches button');
            const selectedSpan = c.querySelector('#theme-selected');
            const box = c.querySelector('#theme-pop-box');
            swatches.forEach(s => {
              s.addEventListener('click', () => {
                const color = s.getAttribute('data-color');
                if (selectedSpan && color) selectedSpan.textContent = color;
                swatches.forEach(sw => sw.classList.remove('border-2', 'border-white', 'border-ink', 'scale-105'));
                s.classList.add('border-2', 'border-white', 'scale-105');
              });
            });
          };
