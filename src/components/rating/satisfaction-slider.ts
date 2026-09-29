// @ts-nocheck
/**
 * 8. Satisfaction Percentage Slider
 * Category: rating
 * ID: rating-satisfaction-slider
 */

export const init = (c) => {
            const slider = c.querySelector('#sat-slider');
            const satVal = c.querySelector('#sat-val');
            slider?.addEventListener('input', (e) => {
              const val = e.target.value;
              if (satVal) {
                if (val >= 80) { satVal.textContent = `${val}% Highly Satisfied`; satVal.className = 'text-emerald-500 font-bold'; }
                else if (val >= 50) { satVal.textContent = `${val}% Neutral`; satVal.className = 'text-amber-500 font-bold'; }
                else { satVal.textContent = `${val}% Unsatisfied`; satVal.className = 'text-red-500 font-bold'; }
              }
            });
          };
