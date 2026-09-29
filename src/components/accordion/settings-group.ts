// @ts-nocheck
/**
 * 9. Settings Group Accordion
 * Category: accordion
 * ID: accordion-settings-group
 */

export const init = (c) => {
            const sections = c.querySelectorAll('#set-acc-root .set-section');
            sections.forEach(sec => {
              const header = sec.querySelector('.set-header');
              const content = sec.querySelector('.set-content');
              const icon = sec.querySelector('.set-icon');
              const saveBtn = sec.querySelector('.set-save-btn');
              const saveMsg = sec.querySelector('.set-save-msg');

              header?.addEventListener('click', () => {
                if (content && icon) {
                  content.classList.toggle('hidden');
                  icon.textContent = content.classList.contains('hidden') ? '+' : '−';
                }
              });

              saveBtn?.addEventListener('click', () => {
                if (saveMsg) {
                  saveMsg.classList.remove('hidden');
                  setTimeout(() => { saveMsg.classList.add('hidden'); }, 1500);
                }
              });
            });
          };
