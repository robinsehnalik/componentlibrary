// @ts-nocheck
/**
 * 3. Sentiment Feedback Row
 * Category: rating
 * ID: rating-sentiment-row
 */

export const init = (c) => {
            const btns = c.querySelectorAll('#sent-emojis .sent-btn');
            const title = c.querySelector('#sent-title');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "sent-btn opacity-40 hover:opacity-100 transition-all";
                });
                b.className = "sent-btn opacity-100 scale-125 transition-all";
                if (title) title.textContent = `Selected: ${b.getAttribute('data-label')}`;
              });
            });
          };
