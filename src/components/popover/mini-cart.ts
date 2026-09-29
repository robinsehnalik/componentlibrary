// @ts-nocheck
/**
 * 10. Mini Cart Quick View
 * Category: popover
 * ID: popover-mini-cart
 */

export const init = (c) => {
            let qty = 1;
            const price = 499;
            const qtySpan = c.querySelector('#cart-qty');
            const totalSpan = c.querySelector('#cart-total');
            const checkout = c.querySelector('#cart-checkout');
            const status = c.querySelector('#cart-status');
            const update = () => {
              if (qtySpan) qtySpan.textContent = `${qty}`;
              if (totalSpan) totalSpan.textContent = `$${qty * price}`;
            };
            c.querySelector('#cart-inc')?.addEventListener('click', () => { qty++; update(); });
            c.querySelector('#cart-dec')?.addEventListener('click', () => { if (qty > 1) qty--; update(); });
            checkout?.addEventListener('click', () => {
              if (status) {
                status.classList.remove('hidden');
                status.innerHTML = `<span class="text-emerald-500 font-bold">✓ Ready:</span> ${qty} seat(s) reserved ($${qty * price})`;
                setTimeout(() => { status.classList.add('hidden'); }, 2000);
              }
            });
          };
