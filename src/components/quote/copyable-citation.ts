// @ts-nocheck
/**
 * 5. Interactive Copy Citation Quote
 * Category: quote
 * ID: quote-copyable-citation
 */

export const init = (c) => {
            const citations = [
              {
                topic: "DESIGN PHILOSOPHY · PRINCIPLE 10",
                quote: "“Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects.”",
                author: "Dieter Rams",
                source: "10 Principles for Good Design · Braun",
                av: "DR"
              },
              {
                topic: "ARCHITECTURAL CLARITY",
                quote: "“Simplicity is not the lack of clutter, that's a consequence of simplicity. Simplicity somehow essentially describes the purpose and place of an object.”",
                author: "Jony Ive",
                source: "Chief Design Officer · Apple Industrial Design",
                av: "JI"
              },
              {
                topic: "SYSTEMS & DISCIPLINE",
                quote: "“Styles come and go. Good design is a language, not a style. If you can design one thing, you can design everything.”",
                author: "Massimo Vignelli",
                source: "The Vignelli Canon · Unimark International",
                av: "MV"
              }
            ];
            let idx = 0;
            const topicEl = c.querySelector('#cite-topic');
            const quoteEl = c.querySelector('#cite-quote');
            const authorEl = c.querySelector('#cite-author');
            const sourceEl = c.querySelector('#cite-source');
            const avatarEl = c.querySelector('#cite-avatar');
            const counterEl = c.querySelector('#cite-counter');
            const copyBtn = c.querySelector('#cite-copy-btn');

            const update = () => {
              const item = citations[idx];
              if (topicEl) topicEl.textContent = item.topic;
              if (quoteEl) quoteEl.textContent = item.quote;
              if (authorEl) authorEl.textContent = item.author;
              if (sourceEl) sourceEl.textContent = item.source;
              if (avatarEl) avatarEl.textContent = item.av;
              if (counterEl) counterEl.textContent = `0${idx + 1} / 0${citations.length}`;
            };

            c.querySelector('#cite-prev')?.addEventListener('click', () => {
              idx = (idx - 1 + citations.length) % citations.length;
              update();
            });

            c.querySelector('#cite-next')?.addEventListener('click', () => {
              idx = (idx + 1) % citations.length;
              update();
            });

            copyBtn?.addEventListener('click', async () => {
              try {
                const item = citations[idx];
                await navigator.clipboard.writeText(`${item.quote} — ${item.author} (${item.source})`);
                copyBtn.textContent = 'Copied ✓';
                copyBtn.className = 'px-3 py-1 bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-wider';
                setTimeout(() => {
                  copyBtn.textContent = 'Copy Citation';
                  copyBtn.className = 'px-3 py-1 bg-ink text-paper dark:bg-white dark:text-black font-bold text-[10px] uppercase tracking-wider cursor-pointer';
                }, 1500);
              } catch (e) {}
            });
          };
