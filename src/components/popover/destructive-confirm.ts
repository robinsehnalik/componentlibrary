// @ts-nocheck
/**
 * 3. Destructive Action Confirmation
 * Category: popover
 * ID: popover-destructive-confirm
 */

export const init = (c) => {
            const cancelBtn = c.querySelector('#del-cancel');
            const confirmBtn = c.querySelector('#del-confirm');
            const msg = c.querySelector('#del-msg');
            const actions = c.querySelector('#del-actions');
            confirmBtn?.addEventListener('click', () => {
              if (msg) msg.textContent = '✓ Repository successfully deleted.';
              if (actions) actions.innerHTML = '<button id="del-reset" class="px-3 py-1 border border-[color:var(--color-border)] text-xs cursor-pointer">Reset Demo</button>';
              c.querySelector('#del-reset')?.addEventListener('click', () => {
                if (msg) msg.textContent = 'This action will immediately destroy all build artifacts and deployment logs. Cannot be undone.';
                if (actions) actions.innerHTML = '<button id="del-cancel" class="px-3 py-1 border border-[color:var(--color-border)] text-xs cursor-pointer">Cancel</button><button id="del-confirm" class="px-3 py-1 bg-red-600 text-white font-bold text-xs cursor-pointer">Delete Forever</button>';
              });
            });
            cancelBtn?.addEventListener('click', () => {
              if (msg) msg.textContent = 'Deletion cancelled.';
              setTimeout(() => {
                if (msg) msg.textContent = 'This action will immediately destroy all build artifacts and deployment logs. Cannot be undone.';
              }, 1200);
            });
          };
