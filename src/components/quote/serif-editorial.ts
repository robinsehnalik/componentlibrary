// @ts-nocheck
/**
 * 8. Minimal Centered Editorial Quote
 * Category: quote
 * ID: quote-serif-editorial
 */

export const init = (c) => {
            const quotes = [
              { text: "“Simplicity is prerequisite for reliability.”", author: "— Edsger W. Dijkstra" },
              { text: "“Premature optimization is the root of all evil in programming.”", author: "— Donald E. Knuth" },
              { text: "“There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies.”", author: "— C.A.R. Hoare" }
            ];
            let idx = 0;
            const box = c.querySelector('#serif-q-box');
            const textEl = c.querySelector('#sq-text');
            const authorEl = c.querySelector('#sq-author');
            box?.addEventListener('click', () => {
              idx = (idx + 1) % quotes.length;
              if (textEl) textEl.textContent = quotes[idx].text;
              if (authorEl) authorEl.textContent = quotes[idx].author;
            });
          };
