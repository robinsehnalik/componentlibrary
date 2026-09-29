// @ts-nocheck
/**
 * 4. Notification Feed Popover
 * Category: popover
 * ID: popover-notification-feed
 */

export const init = (c) => {
            const clearBtn = c.querySelector('#notif-clear');
            const items = c.querySelectorAll('#notif-items > div');
            clearBtn?.addEventListener('click', () => {
              clearBtn.textContent = '0 UNREAD (All Read)';
              items.forEach(it => {
                it.className = "border-l-2 border-[color:var(--color-border)] pl-3 space-y-0.5 text-muted opacity-60";
              });
            });
          };
