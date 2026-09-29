// @ts-nocheck
/**
 * 4. Customer Chat Bubble Quote
 * Category: quote
 * ID: quote-chat-bubble
 */

export const init = (c) => {
            const quotes = [
              { msg: "“The new design system components cut our frontend sprint delivery time in half.”", author: "Product Lead · SaaS Platform" },
              { msg: "“Our designers and developers now speak the exact same token vocabulary.”", author: "Design Director · Global Media" },
              { msg: "“Zero CSS regressions during our biggest enterprise customer launch to date.”", author: "Staff Engineer · Enterprise Cloud" }
            ];
            let qIdx = 0;
            let lCount = 18, fCount = 24;
            const bubble = c.querySelector('#qc4-bubble');
            const author = c.querySelector('#qc4-author');
            const likeBtn = c.querySelector('button[data-r="like"]');
            const fireBtn = c.querySelector('button[data-r="fire"]');
            const likeEl = c.querySelector('#r-like');
            const fireEl = c.querySelector('#r-fire');

            bubble?.addEventListener('click', () => {
              qIdx = (qIdx + 1) % quotes.length;
              if (bubble) bubble.textContent = quotes[qIdx].msg;
              if (author) author.textContent = quotes[qIdx].author;
            });

            likeBtn?.addEventListener('click', (e) => {
              e.stopPropagation();
              lCount++;
              if (likeEl) likeEl.textContent = `${lCount}`;
            });

            fireBtn?.addEventListener('click', (e) => {
              e.stopPropagation();
              fCount++;
              if (fireEl) fireEl.textContent = `${fCount}`;
            });
          };
