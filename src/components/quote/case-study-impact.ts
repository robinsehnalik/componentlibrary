// @ts-nocheck
/**
 * 10. Case Study Impact Verdict
 * Category: quote
 * ID: quote-case-study-impact
 */

export const init = (c) => {
            const cases = [
              { badge: "CASE STUDY #01 · FINTECH", text: "“Delivered 3 weeks ahead of schedule with 100% test coverage and zero UI regressions.”", meta: "Verified Business Impact", stat: "+42% Checkout Completion" },
              { badge: "CASE STUDY #02 · LOGISTICS", text: "“Unified design tokens eliminated UI fragmentation across 14 internal fleet management dashboards.”", meta: "Developer Efficiency", stat: "50% Faster Feature Delivery" },
              { badge: "CASE STUDY #03 · SAAS PLATFORM", text: "“Dropping clientside JS hydration boosted our organic search Core Web Vitals rankings by 68 positions.”", meta: "Organic Performance", stat: "100/100 Mobile Lighthouse" }
            ];
            let idx = 0;
            const btn = c.querySelector('#v-cycle-btn');
            const badge = c.querySelector('#v-badge');
            const text = c.querySelector('#v-text');
            const meta = c.querySelector('#v-meta');
            const stat = c.querySelector('#v-stat');

            btn?.addEventListener('click', () => {
              idx = (idx + 1) % cases.length;
              const item = cases[idx];
              if (badge) badge.textContent = item.badge;
              if (text) text.textContent = item.text;
              if (meta) meta.textContent = item.meta;
              if (stat) stat.textContent = item.stat;
              if (btn) btn.textContent = `Next Case Study (${idx + 1}/${cases.length}) →`;
            });
          };
