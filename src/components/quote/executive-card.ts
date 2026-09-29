// @ts-nocheck
/**
 * 1. Executive Testimonial Card
 * Category: quote
 * ID: quote-executive-card
 */

export const init = (c) => {
            const data = [
              { quote: "“The modular token architecture cut our frontend release cycles in half while ensuring zero layout shifts across high-traffic user dashboards.”", name: "Sarah Jenkins", role: "VP of Engineering · Vector Analytics", av: "SJ" },
              { quote: "“Migrating to pure semantic static generation dropped our P99 server latency from 1.2s to 38ms globally with instant First Contentful Paint.”", name: "Marcus Vance", role: "Head of Infrastructure · Apex Cloud", av: "MV" },
              { quote: "“Clean, zero-dependency components with strict TypeScript types eliminated 90% of UI regression bugs in production.”", name: "Liam Thorne", role: "Director of Product · FinFlow", av: "LT" }
            ];
            let idx = 0;
            const text = c.querySelector('#qc1-text');
            const name = c.querySelector('#qc1-name');
            const role = c.querySelector('#qc1-role');
            const avatar = c.querySelector('#qc1-avatar');
            const counter = c.querySelector('#qc1-counter');
            const update = () => {
              const d = data[idx];
              if (text) text.textContent = d.quote;
              if (name) name.textContent = d.name;
              if (role) role.textContent = d.role;
              if (avatar) avatar.textContent = d.av;
              if (counter) counter.textContent = `0${idx + 1} / 0${data.length}`;
            };
            c.querySelector('#qc1-prev')?.addEventListener('click', () => { idx = (idx - 1 + data.length) % data.length; update(); });
            c.querySelector('#qc1-next')?.addEventListener('click', () => { idx = (idx + 1) % data.length; update(); });
          };
