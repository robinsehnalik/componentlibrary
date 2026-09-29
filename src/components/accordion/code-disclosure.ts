// @ts-nocheck
/**
 * 4. Code & Output Disclosure
 * Category: accordion
 * ID: accordion-code-disclosure
 */

export const init = (c) => {
            const toggle = c.querySelector('#code-disc-toggle');
            const body = c.querySelector('#code-disc-body');
            toggle?.addEventListener('click', () => {
              body?.classList.toggle('hidden');
            });
          };
