// @ts-nocheck
/**
 * 4. Segmented Story Reel (Draggable)
 * Category: carousel
 * ID: carousel-story-reel
 */

export const init = (c) => {
            const steps = [
              { tag: "Step 01 / Strategy", title: "Modular Component Architecture", desc: "Every element is atomic, independent, and strictly typed with isolated DOM scopes." },
              { tag: "Step 02 / Engineering", title: "Zero-Runtime CSS Tokens", desc: "Pure Tailwind variables and WCAG 2.1 AA tokens compiled without clientside JS weight." },
              { tag: "Step 03 / Delivery", title: "Autonomous Edge Deployment", desc: "GitOps workflows shipping sub-50ms experiences with instantaneous First Contentful Paint." }
            ];
            let active = 0;
            const stepTag = c.querySelector('#cs4-step-tag');
            const titleEl = c.querySelector('#cs4-title');
            const descEl = c.querySelector('#cs4-desc');
            const bars = c.querySelectorAll('#cs4-bars div');
            const prevBtn = c.querySelector('#cs4-prev-btn');
            const nextBtn = c.querySelector('#cs4-next-btn');
            const dragArea = c.querySelector('#cs4-drag-area');

            const update = () => {
              const s = steps[active];
              if (stepTag) stepTag.textContent = s.tag;
              if (titleEl) titleEl.textContent = s.title;
              if (descEl) descEl.textContent = s.desc;
              bars.forEach((b, i) => {
                b.className = i <= active ? "h-1 bg-ink dark:bg-white transition-all rounded-full" : "h-1 bg-zinc-200 dark:bg-zinc-800 transition-all rounded-full";
              });
            };

            bars.forEach(b => {
              b.addEventListener('click', (e) => {
                e.stopPropagation();
                active = parseInt(b.getAttribute('data-step') || '0', 10);
                update();
              });
            });

            prevBtn?.addEventListener('click', (e) => {
              e.stopPropagation();
              active = (active - 1 + steps.length) % steps.length;
              update();
            });

            nextBtn?.addEventListener('click', (e) => {
              e.stopPropagation();
              active = (active + 1) % steps.length;
              update();
            });

            // Mouse Drag & Touch Swipe implementation
            let startX = 0;
            let isDragging = false;

            dragArea?.addEventListener('mousedown', (e) => {
              if (e.target.tagName === 'BUTTON') return;
              startX = e.clientX;
              isDragging = true;
            });

            window.addEventListener('mouseup', (e) => {
              if (!isDragging) return;
              isDragging = false;
              const diffX = e.clientX - startX;
              if (diffX < -30) {
                active = (active + 1) % steps.length;
                update();
              } else if (diffX > 30) {
                active = (active - 1 + steps.length) % steps.length;
                update();
              }
            });

            dragArea?.addEventListener('touchstart', (e) => {
              startX = e.touches[0].clientX;
            }, { passive: true });

            dragArea?.addEventListener('touchend', (e) => {
              const diffX = e.changedTouches[0].clientX - startX;
              if (diffX < -30) {
                active = (active + 1) % steps.length;
                update();
              } else if (diffX > 30) {
                active = (active - 1 + steps.length) % steps.length;
                update();
              }
            }, { passive: true });
          };
