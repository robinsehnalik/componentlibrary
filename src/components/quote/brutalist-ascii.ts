// @ts-nocheck
/**
 * 3. Brutalist ASCII Quote Box
 * Category: quote
 * ID: quote-brutalist-ascii
 */

export const init = (c) => {
            const borders = [
              { top: "+------------------------------------------+", bot: "+------------------------------------------+" },
              { top: "/* ======================================== */", bot: "/* ======================================== */" },
              { top: "# ---------------------------------------- #", bot: "# ---------------------------------------- #" }
            ];
            let bIdx = 0;
            const topEl = c.querySelector('#ascii-top');
            const botEl = c.querySelector('#ascii-bot');
            const styleBtn = c.querySelector('#ascii-border-btn');
            const copyBtn = c.querySelector('#ascii-copy-btn');
            const textEl = c.querySelector('#ascii-text');

            styleBtn?.addEventListener('click', () => {
              bIdx = (bIdx + 1) % borders.length;
              if (topEl) topEl.textContent = borders[bIdx].top;
              if (botEl) botEl.textContent = borders[bIdx].bot;
              if (styleBtn) styleBtn.textContent = `Change Style (${bIdx + 1}/${borders.length})`;
            });

            copyBtn?.addEventListener('click', async () => {
              try {
                const quoteText = textEl?.textContent?.trim() || '';
                await navigator.clipboard.writeText(`${borders[bIdx].top}\n${quoteText}\n${borders[bIdx].bot}`);
                copyBtn.textContent = 'Copied!';
                copyBtn.className = 'px-2 py-0.5 border border-emerald-500 text-emerald-500 font-bold';
                setTimeout(() => {
                  copyBtn.textContent = 'Copy ASCII';
                  copyBtn.className = 'px-2 py-0.5 border border-[color:var(--color-border)]';
                }, 1500);
              } catch (e) {}
            });
          };
