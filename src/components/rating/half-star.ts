// @ts-nocheck
/**
 * 7. Decimal Precision Rating
 * Category: rating
 * ID: rating-half-star
 */

export const init = (c) => {
            const scoreEl = c.querySelector('#dec-score');
            const slider = c.querySelector('#dec-slider');
            const minusBtn = c.querySelector('#dec-minus');
            const plusBtn = c.querySelector('#dec-plus');
            const reviewsEl = c.querySelector('#dec-reviews-count');
            const starsWrap = c.querySelector('#dec-stars-wrap');

            const setScore = (val) => {
              const clamped = Math.max(1.00, Math.min(5.00, val));
              const formatted = clamped.toFixed(2);
              if (scoreEl) scoreEl.textContent = formatted;
              if (slider) slider.value = Math.round(clamped * 100);
              
              const fullStars = Math.floor(clamped);
              const hasHalf = (clamped - fullStars) >= 0.3;
              let starStr = '★'.repeat(fullStars);
              if (hasHalf && fullStars < 5) starStr += '⯪';
              while (starStr.length < 5) starStr += '☆';
              if (starsWrap) starsWrap.innerHTML = `<span>${starStr}</span>`;

              const mockReviews = Math.round(100 + clamped * 12);
              if (reviewsEl) reviewsEl.textContent = `Based on ${mockReviews} verified client reviews`;
            };

            slider?.addEventListener('input', (e) => {
              setScore(parseInt(e.target.value, 10) / 100);
            });

            minusBtn?.addEventListener('click', () => {
              const cur = parseFloat(scoreEl?.textContent || '4.92');
              setScore(cur - 0.10);
            });

            plusBtn?.addEventListener('click', () => {
              const cur = parseFloat(scoreEl?.textContent || '4.92');
              setScore(cur + 0.10);
            });
          };
