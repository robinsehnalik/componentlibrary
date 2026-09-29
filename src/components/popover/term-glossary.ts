// @ts-nocheck
/**
 * 8. Inline Term Glossary
 * Category: popover
 * ID: popover-term-glossary
 */

export const init = (c) => {
            const terms = {
              ttfb: { title: "📖 TTFB", sub: "(Time to First Byte)", desc: "The duration from client HTTP request dispatch to the initial packet arrival from edge cache." },
              fcp: { title: "⚡ FCP", sub: "(First Contentful Paint)", desc: "Measures the time from when the page starts loading to when any part of the page's content is rendered." },
              cls: { title: "📐 CLS", sub: "(Cumulative Layout Shift)", desc: "Measures visual stability by quantifying how often users experience unexpected layout shifts." }
            };
            const btns = c.querySelectorAll('#gloss-tabs button');
            const content = c.querySelector('#gloss-content');
            btns.forEach(b => {
              b.addEventListener('click', () => {
                btns.forEach(btn => {
                  btn.className = "text-muted hover:text-ink dark:hover:text-white cursor-pointer";
                });
                b.className = "font-bold text-ink dark:text-white underline cursor-pointer";
                const tKey = b.getAttribute('data-term');
                const tData = terms[tKey];
                if (content && tData) {
                  content.innerHTML = `
                    <div class="font-bold text-ink dark:text-white flex items-center gap-1.5">
                      <span>${tData.title}</span> <span class="text-[10px] text-muted">${tData.sub}</span>
                    </div>
                    <p class="text-[11px] text-muted leading-relaxed m-0">${tData.desc}</p>
                  `;
                }
              });
            });
          };
