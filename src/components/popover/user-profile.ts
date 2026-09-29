// @ts-nocheck
/**
 * 1. User Profile Flyout
 * Category: popover
 * ID: popover-user-profile
 */

export const init = (c) => {
            const btn = c.querySelector('#pop1-btn');
            const panel = c.querySelector('#pop1-panel');
            const signout = c.querySelector('#pop1-signout');
            const status = c.querySelector('#pop1-status');
            btn?.addEventListener('click', (e) => {
              e.stopPropagation();
              panel?.classList.toggle('hidden');
            });
            signout?.addEventListener('click', () => {
              if (status) {
                status.textContent = 'Signed out ✓';
                status.className = 'text-[9px] text-emerald-500 font-bold';
              }
              setTimeout(() => { panel?.classList.add('hidden'); }, 800);
            });
          };
