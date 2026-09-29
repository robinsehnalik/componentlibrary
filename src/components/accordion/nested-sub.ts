// @ts-nocheck
/**
 * 10. Nested Sub-Accordion
 * Category: accordion
 * ID: accordion-nested-sub
 */

export const init = (c) => {
            const pToggle = c.querySelector('#nested-p-toggle');
            const pBody = c.querySelector('#nested-p-body');
            const cToggle = c.querySelector('#nested-c-toggle');
            const cBody = c.querySelector('#nested-c-body');

            pToggle?.addEventListener('click', () => { pBody?.classList.toggle('hidden'); });
            cToggle?.addEventListener('click', () => { cBody?.classList.toggle('hidden'); });
          };
