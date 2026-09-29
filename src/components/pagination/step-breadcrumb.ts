// @ts-nocheck
/**
 * 9. Workflow Step Breadcrumb
 * Category: pagination
 * ID: pagination-step-breadcrumb
 */

export const init = (c) => {
            const btns = c.querySelectorAll('#p9-steps .step-btn');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => btn.className = "text-muted hover:text-ink dark:hover:text-white cursor-pointer step-btn");
                b.className = "font-bold text-ink dark:text-white border-b-2 border-ink dark:border-white pb-0.5 cursor-pointer step-btn";
              });
            });
          };
