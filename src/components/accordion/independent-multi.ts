// @ts-nocheck
/**
 * 3. Multi-Item Independent Expander
 * Category: accordion
 * ID: accordion-independent-multi
 */

export const init = (c) => {
            const panels = c.querySelectorAll('#multi-acc-list .multi-panel');
            const toggleAllBtn = c.querySelector('#multi-acc-all');
            let allExpanded = false;

            panels.forEach(p => {
              p.addEventListener('click', () => {
                const body = p.querySelector('.panel-body');
                const icon = p.querySelector('.panel-icon');
                if (body && icon) {
                  body.classList.toggle('hidden');
                  icon.textContent = body.classList.contains('hidden') ? '+' : '−';
                }
              });
            });

            toggleAllBtn?.addEventListener('click', () => {
              allExpanded = !allExpanded;
              toggleAllBtn.textContent = allExpanded ? 'Collapse All' : 'Expand All';
              panels.forEach(p => {
                const body = p.querySelector('.panel-body');
                const icon = p.querySelector('.panel-icon');
                if (body && icon) {
                  if (allExpanded) {
                    body.classList.remove('hidden');
                    icon.textContent = '−';
                  } else {
                    body.classList.add('hidden');
                    icon.textContent = '+';
                  }
                }
              });
            });
          };
