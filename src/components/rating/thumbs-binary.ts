// @ts-nocheck
/**
 * 4. Thumbs Up / Down Binary Vote
 * Category: rating
 * ID: rating-thumbs-binary
 */

export const init = (c) => {
            const up = c.querySelector('#thumb-up');
            const down = c.querySelector('#thumb-down');
            const upCount = c.querySelector('#up-count');
            const downCount = c.querySelector('#down-count');
            let u = 42, d = 1;
            up?.addEventListener('click', () => {
              u++;
              if (upCount) upCount.textContent = `${u}`;
              up.className = "flex-1 py-1.5 border border-emerald-500 bg-emerald-500/20 text-emerald-500 font-bold flex items-center justify-center gap-1.5 cursor-pointer";
            });
            down?.addEventListener('click', () => {
              d++;
              if (downCount) downCount.textContent = `${d}`;
              down.className = "flex-1 py-1.5 border border-red-500 bg-red-500/20 text-red-500 font-bold flex items-center justify-center gap-1.5 cursor-pointer";
            });
          };
