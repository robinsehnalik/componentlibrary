// @ts-nocheck
/**
 * 9. Audio & Volume Control
 * Category: popover
 * ID: popover-volume-slider
 */

export const init = (c) => {
            const slider = c.querySelector('#vol-slider');
            const valSpan = c.querySelector('#vol-val');
            const iconSpan = c.querySelector('#vol-icon');
            slider?.addEventListener('input', (e) => {
              const val = e.target.value;
              if (valSpan) valSpan.textContent = `${val}%`;
              if (iconSpan) {
                if (val == 0) iconSpan.textContent = '🔇 Muted';
                else if (val < 50) iconSpan.textContent = '🔉 Output Level';
                else iconSpan.textContent = '🔊 Output Level';
              }
            });
          };
