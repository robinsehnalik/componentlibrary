// @ts-nocheck
/**
 * 8. Product Feature Switcher
 * Category: carousel
 * ID: carousel-product-preview
 */

export const init = (c) => {
            const feats = [
              "API Rate Limiting & Edge Caching",
              "Zero-Dependency Token Compilation",
              "Hardware-Accelerated Micro-Interactions"
            ];
            let idx = 0;
            const title = c.querySelector('#cs8-title');
            const counter = c.querySelector('#cs8-counter');
            const update = () => {
              if (title) title.textContent = feats[idx];
              if (counter) counter.textContent = `${idx + 1} of ${feats.length}`;
            };
            c.querySelector('#cs8-prev')?.addEventListener('click', () => { idx = (idx - 1 + feats.length) % feats.length; update(); });
            c.querySelector('#cs8-next')?.addEventListener('click', () => { idx = (idx + 1) % feats.length; update(); });
          };
