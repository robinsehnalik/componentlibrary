// @ts-nocheck
/**
 * 9. Stream Marquee Reel
 * Category: carousel
 * ID: carousel-infinite-ticker
 */

export const init = (c) => {
            const track = c.querySelector('#cs9-track');
            const toggle = c.querySelector('#cs9-toggle');
            const leftBtn = c.querySelector('#cs9-shift-left');
            const rightBtn = c.querySelector('#cs9-shift-right');
            const statusText = c.querySelector('#cs9-status-text');

            let offset = 0;
            let active = true;
            let interval = null;

            const shift = (dir) => {
              offset += dir * 110;
              if (offset < -330) offset = 0;
              if (offset > 0) offset = -330;
              if (track) track.style.transform = `translateX(${offset}px)`;
            };

            const startLoop = () => {
              if (interval) clearInterval(interval);
              interval = setInterval(() => {
                if (active) shift(-1);
              }, 2200);
            };

            startLoop();

            toggle?.addEventListener('click', () => {
              active = !active;
              toggle.textContent = active ? '● ACTIVE' : '○ PAUSED';
              toggle.className = active ? 'px-2 py-0.5 border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold cursor-pointer' : 'px-2 py-0.5 border border-zinc-500 text-muted font-bold cursor-pointer';
              if (statusText) statusText.textContent = active ? 'Streaming telemetry' : 'Stream paused';
            });

            leftBtn?.addEventListener('click', () => { shift(1); });
            rightBtn?.addEventListener('click', () => { shift(-1); });
          };
