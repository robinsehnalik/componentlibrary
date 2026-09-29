// @ts-nocheck
/**
 * 2. Numbered Step-by-Step Expander
 * Category: accordion
 * ID: accordion-numbered-steps
 */

export const init = (c) => {
            const steps = c.querySelectorAll('.acc-step');
            steps.forEach(s => {
              s.addEventListener('click', () => {
                const body = s.querySelector('.acc-step-body');
                body?.classList.toggle('hidden');
              });
            });
          };
