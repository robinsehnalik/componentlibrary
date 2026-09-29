// @ts-nocheck
/**
 * 1. Interactive 5-Star Rating
 * Category: rating
 * ID: rating-5-star
 */

export const init = (c) => {
            const stars = c.querySelectorAll('#rt1-stars .star');
            const score = c.querySelector('#rt1-score');
            const labels = ["Poor", "Fair", "Good", "Great", "Exceptional"];
            stars.forEach(s => {
              s.addEventListener('click', () => {
                const val = parseInt(s.getAttribute('data-val') || '5', 10);
                stars.forEach((st, i) => {
                  st.className = i < val ? "star hover:text-amber-400 transition-colors text-amber-400" : "star hover:text-amber-400 transition-colors text-zinc-300 dark:text-zinc-700";
                });
                if (score) score.textContent = `${val}.0 / 5.0 (${labels[val - 1]})`;
              });
            });
          };
