// @ts-nocheck
/**
 * 1. Minimalist FAQ Accordion
 * Category: accordion
 * ID: accordion-minimalist-faq
 */

export const init = (c) => {
            const triggers = c.querySelectorAll('.acc-trigger');
            triggers.forEach(t => {
              t.addEventListener('click', () => {
                const item = t.closest('.acc-item');
                const body = item?.querySelector('.acc-body');
                const icon = item?.querySelector('.acc-icon');
                if (body && icon) {
                  if (body.classList.contains('hidden')) {
                    body.classList.remove('hidden');
                    icon.textContent = '-';
                  } else {
                    body.classList.add('hidden');
                    icon.textContent = '+';
                  }
                }
              });
            });
          };
