// @ts-nocheck
/**
 * 7. Deployment Build Log Accordion
 * Category: accordion
 * ID: accordion-deployment-logs
 */

export const init = (c) => {
            const toggle = c.querySelector('#log-toggle');
            const body = c.querySelector('#log-body');
            toggle?.addEventListener('click', () => {
              body?.classList.toggle('hidden');
            });
          };
