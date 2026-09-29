// @ts-nocheck
/**
 * 7. Client Feedback Slider
 * Category: carousel
 * ID: carousel-testimonial-slider
 */

export const init = (c) => {
            const reviews = [
              {
                quote: "“The token architecture cut our UI iteration cycles in half while maintaining strict WCAG 2.1 AA accessibility across all dashboards.”",
                name: "Marcus Vance",
                role: "VP of Engineering · CloudScale",
                av: "MV"
              },
              {
                quote: "“Sub-millisecond interaction feedback and zero layout shift gave our core checkout flows a 32% boost in completion rates.”",
                name: "Elena Rostova",
                role: "Head of Product · FinFlow Global",
                av: "ER"
              },
              {
                quote: "“Eliminating third-party runtime JS dependencies dropped our bundle footprint by 140KB with instant First Contentful Paint.”",
                name: "David Lindqvist",
                role: "Lead Architect · Nordic Media Group",
                av: "DL"
              }
            ];
            let idx = 0;
            const quoteEl = c.querySelector('#cs7-quote');
            const nameEl = c.querySelector('#cs7-name');
            const roleEl = c.querySelector('#cs7-role');
            const avatarEl = c.querySelector('#cs7-avatar');
            const counterEl = c.querySelector('#cs7-counter');

            const update = () => {
              const r = reviews[idx];
              if (quoteEl) quoteEl.textContent = r.quote;
              if (nameEl) nameEl.textContent = r.name;
              if (roleEl) roleEl.textContent = r.role;
              if (avatarEl) avatarEl.textContent = r.av;
              if (counterEl) counterEl.textContent = `0${idx + 1} / 0${reviews.length}`;
            };

            c.querySelector('#cs7-prev')?.addEventListener('click', () => {
              idx = (idx - 1 + reviews.length) % reviews.length;
              update();
            });

            c.querySelector('#cs7-next')?.addEventListener('click', () => {
              idx = (idx + 1) % reviews.length;
              update();
            });
          };
