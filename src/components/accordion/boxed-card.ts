// @ts-nocheck
/**
 * 8. Boxed Card Accordion
 * Category: accordion
 * ID: accordion-boxed-card
 */

export const init = (c) => {
            const card = c.querySelector('#box-acc');
            const desc = c.querySelector('#box-acc-desc');
            card?.addEventListener('click', () => {
              desc?.classList.toggle('hidden');
            });
          };
