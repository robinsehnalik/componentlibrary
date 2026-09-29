// @ts-nocheck
/**
 * 5. Pricing Tier Feature Accordion
 * Category: accordion
 * ID: accordion-pricing-spec
 */

export const init = (c) => {
            const toggle = c.querySelector('#spec-acc-toggle');
            const body = c.querySelector('#spec-acc-body');
            const arrow = c.querySelector('#spec-arrow');
            toggle?.addEventListener('click', () => {
              body?.classList.toggle('hidden');
              if (arrow) arrow.textContent = body?.classList.contains('hidden') ? '▼' : '▲';
            });
          };
