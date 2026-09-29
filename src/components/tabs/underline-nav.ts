// @ts-nocheck
/**
 * 1. Animated Underline Tabs
 * Category: tabs
 * ID: tabs-underline-nav
 */

export const init = (container) => {
            const triggers = container.querySelectorAll('.tab-trigger');
            const content = container.querySelector('#nav-tabs-content');
            const data = {
              overview: "High-throughput edge architecture with zero runtime bloat and instant First Contentful Paint.",
              spec: "WCAG 2.1 AA Compliance, 60fps hardware-accelerated transitions, < 4KB CSS token footprint.",
              telemetry: "Real-time edge cluster latency: 14ms (Prague node). Memory footprint: 12MB."
            };
            triggers.forEach(btn => {
              btn.addEventListener('click', () => {
                const key = btn.getAttribute('data-tab');
                triggers.forEach(t => {
                  t.className = "pb-2.5 text-muted hover:text-ink dark:hover:text-white border-b-2 border-transparent cursor-pointer tab-trigger";
                });
                btn.className = "pb-2.5 font-bold text-ink dark:text-white border-b-2 border-ink dark:border-white cursor-pointer tab-trigger";
                if (content && key && data[key]) {
                  content.textContent = data[key];
                }
              });
            });
          };
