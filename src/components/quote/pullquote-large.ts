// @ts-nocheck
/**
 * 2. Editorial Monospace Pull Quote
 * Category: quote
 * ID: quote-pullquote-large
 */

export const init = (c) => {
            const quotes = [
              { text: "“Clarity over complexity. Software should be built to have a long, low-maintenance lifetime.”", author: "— System Design Philosophy" },
              { text: "“Zero external runtime dependencies is the ultimate performance guarantee.”", author: "— Engineering Principle" },
              { text: "“Every single byte shipped to the client must earn its place on the wire.”", author: "— Web Performance Rule" }
            ];
            let idx = 0;
            const card = c.querySelector('#qc2-card');
            const text = c.querySelector('#qc2-text');
            const author = c.querySelector('#qc2-author');
            card?.addEventListener('click', () => {
              idx = (idx + 1) % quotes.length;
              if (text) text.textContent = quotes[idx].text;
              if (author) author.textContent = quotes[idx].author;
            });
          };
