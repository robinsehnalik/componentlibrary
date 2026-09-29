// @ts-nocheck
/**
 * 1. Minimal Hero Slider
 * Category: carousel
 * ID: carousel-hero-slide
 */

export const init = (c) => {
            const slides = [
              { title: "Edge Network Cluster", desc: "Distributed deployment across Central European edge nodes with sub-20ms TTFB." },
              { title: "Static Generation Engine", desc: "Pure HTML generation with zero clientside framework hydration overhead." },
              { title: "Autonomous Webhook Flow", desc: "Event-driven microservice dispatching webhooks to n8n pipelines." }
            ];
            let cur = 0;
            const content = c.querySelector('#cs1-content');
            const counter = c.querySelector('#cs1-counter');
            const dots = c.querySelectorAll('#cs1-dots span');
            const update = () => {
              if (content) content.innerHTML = `<h4 class="text-base font-bold text-ink dark:text-white m-0">${slides[cur].title}</h4><p class="text-xs text-muted leading-relaxed m-0">${slides[cur].desc}</p>`;
              if (counter) counter.textContent = `0${cur + 1} / 0${slides.length}`;
              dots.forEach((d, i) => {
                d.className = i === cur ? "w-2.5 h-2.5 rounded-full bg-ink dark:bg-white transition-all" : "w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 transition-all";
              });
            };
            c.querySelector('#cs1-prev')?.addEventListener('click', () => { cur = (cur - 1 + slides.length) % slides.length; update(); });
            c.querySelector('#cs1-next')?.addEventListener('click', () => { cur = (cur + 1) % slides.length; update(); });
            dots.forEach(d => {
              d.addEventListener('click', () => {
                cur = parseInt(d.getAttribute('data-idx') || '0', 10);
                update();
              });
            });
          };
