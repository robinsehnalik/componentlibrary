// @ts-nocheck
/**
 * 7. Git Branch & Commit Tree
 * Category: treeview
 * ID: treeview-git-branches
 */

export const init = (c) => {
            const branches = c.querySelectorAll('.git-branch');
            const headSpan = c.querySelector('#git-head');
            branches.forEach(b => {
              b.addEventListener('click', () => {
                branches.forEach(br => br.classList.remove('font-bold', 'text-ink', 'dark:text-white'));
                b.classList.add('font-bold', 'text-ink', 'dark:text-white');
                const brName = b.getAttribute('data-branch');
                if (headSpan && brName) headSpan.textContent = `HEAD: ${brName}`;
              });
            });
          };
