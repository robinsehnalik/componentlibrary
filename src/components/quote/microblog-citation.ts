// @ts-nocheck
/**
 * 9. Microblog Citation Card
 * Category: quote
 * ID: quote-microblog-citation
 */

export const init = (c) => {
            const likeBtn = c.querySelector('#mb-like');
            const repostBtn = c.querySelector('#mb-repost');
            const saveBtn = c.querySelector('#mb-save');
            const replyBtn = c.querySelector('#mb-reply');
            const shareBtn = c.querySelector('#mb-share');

            const likeCount = c.querySelector('#mb-like-count');
            const repostCount = c.querySelector('#mb-repost-count');
            const saveCount = c.querySelector('#mb-save-count');
            const replyCount = c.querySelector('#mb-reply-count');
            const shareText = c.querySelector('#mb-share-text');

            let likes = 182, liked = false;
            let reposts = 48, reposted = false;
            let saves = 64, saved = false;
            let replies = 14;

            likeBtn?.addEventListener('click', () => {
              liked = !liked;
              likes += liked ? 1 : -1;
              if (likeCount) likeCount.textContent = `${likes}`;
              likeBtn.className = liked ? 'text-red-500 font-bold flex items-center gap-1 cursor-pointer' : 'hover:text-red-500 flex items-center gap-1 cursor-pointer';
            });

            repostBtn?.addEventListener('click', () => {
              reposted = !reposted;
              reposts += reposted ? 1 : -1;
              if (repostCount) repostCount.textContent = `${reposts}`;
              repostBtn.className = reposted ? 'text-emerald-500 font-bold flex items-center gap-1 cursor-pointer' : 'hover:text-emerald-500 flex items-center gap-1 cursor-pointer';
            });

            saveBtn?.addEventListener('click', () => {
              saved = !saved;
              saves += saved ? 1 : -1;
              if (saveCount) saveCount.textContent = `${saves}`;
              saveBtn.className = saved ? 'text-amber-400 font-bold flex items-center gap-1 cursor-pointer' : 'hover:text-amber-400 flex items-center gap-1 cursor-pointer';
            });

            replyBtn?.addEventListener('click', () => {
              replies++;
              if (replyCount) replyCount.textContent = `${replies}`;
            });

            shareBtn?.addEventListener('click', async () => {
              try {
                await navigator.clipboard.writeText('https://ui.studio.dev/post/zero-runtime-tokens');
                if (shareText) {
                  shareText.textContent = 'Link Copied!';
                  setTimeout(() => { shareText.textContent = 'Share'; }, 1500);
                }
              } catch (e) {}
            });
          };
