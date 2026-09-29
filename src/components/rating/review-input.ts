// @ts-nocheck
/**
 * 10. Review Input with Stars
 * Category: rating
 * ID: rating-review-input
 */

export const init = (c) => {
            const btn = c.querySelector('#inp-submit');
            const inp = c.querySelector('#inp-text');
            const stars = c.querySelectorAll('#inp-stars span');
            const list = c.querySelector('#inp-feedback-list');
            let currentStar = 5;

            stars.forEach(s => {
              s.addEventListener('click', () => {
                currentStar = parseInt(s.getAttribute('data-star') || '5', 10);
                stars.forEach((st, i) => {
                  st.className = i < currentStar ? 'text-amber-400' : 'text-zinc-300 dark:text-zinc-700';
                });
              });
            });

            btn?.addEventListener('click', () => {
              const text = inp ? inp.value.trim() : '';
              if (!text) {
                if (inp) inp.placeholder = 'Please enter a review first!';
                return;
              }
              const row = document.createElement('div');
              row.className = "flex justify-between items-center text-emerald-600 dark:text-emerald-400 font-bold";
              row.innerHTML = `<span>“${text}”</span><span class="text-amber-400">${'★'.repeat(currentStar)}</span>`;
              list?.prepend(row);
              if (inp) inp.value = '';
            });
          };
