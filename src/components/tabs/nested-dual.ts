// @ts-nocheck
/**
 * 7. Nested Dual-Level Tabs
 * Category: tabs
 * ID: tabs-nested-dual
 */

export const init = (c) => {
            const data = {
              frontend: [
                { id: 'primitives', label: 'UI Primitives', snippet: '<Button variant="monochrome" size="md" />\n<Input type="search" placeholder="Filter..." />\n<Modal title="Confirm Action" />' },
                { id: 'tokens', label: 'Design Tokens', snippet: '--color-ink: #09090b;\n--color-paper: #fcfbf9;\n--font-mono: "Geist Mono", monospace;\n--border-radius: 2px;' },
                { id: 'view-transitions', label: 'Transitions', snippet: '@keyframes slideIn {\n  from { opacity: 0; transform: translateY(6px); }\n  to { opacity: 1; transform: translateY(0); }\n}' }
              ],
              backend: [
                { id: 'endpoints', label: 'REST Endpoints', snippet: 'GET  /api/v1/metrics -> 200 OK (3.2ms)\nPOST /api/v1/deploy  -> 202 Accepted\nGET  /api/v1/health  -> 200 OK (edge_cache=HIT)' },
                { id: 'sql', label: 'Postgres SQL', snippet: 'SELECT service, p99_latency_ms, error_rate\nFROM cluster_telemetry\nWHERE timestamp > NOW() - INTERVAL 1 HOUR\nORDER BY p99_latency_ms DESC;' },
                { id: 'middleware', label: 'Edge Middleware', snippet: 'export default async function middleware(req) {\n  const token = req.headers.get("Authorization");\n  if (!verifyToken(token)) return new Response(null, { status: 401 });\n}' }
              ],
              infra: [
                { id: 'cdn', label: 'Edge CDN', snippet: 'Cache-Control: public, max-age=31536000, immutable\nEdge-Region: fra1 (Frankfurt, EU)\nTTL: 86400s | Purge-Hook: enabled' },
                { id: 'tls', label: 'TLS 1.3 Security', snippet: 'Cipher: TLS_AES_256_GCM_SHA384\nStrict-Transport-Security: max-age=63072000; includeSubDomains; preload\nX-Frame-Options: DENY' },
                { id: 'docker', label: 'Docker Compose', snippet: 'services:\n  edge-gateway:\n    image: nginx:alpine\n    ports: ["443:443"]\n    restart: unless-stopped' }
              ]
            };

            let currentCategory = 'frontend';
            let currentSubIndex = 0;

            const topBtns = c.querySelectorAll('#nested-top-bar .ntop-btn');
            const subBar = c.querySelector('#nested-sub-bar');
            const contentBox = c.querySelector('#nested-tabs-content');

            const renderSubTabs = () => {
              if (!subBar || !contentBox) return;
              const subItems = data[currentCategory] || [];
              if (currentSubIndex >= subItems.length) currentSubIndex = 0;

              subBar.innerHTML = subItems.map((item, idx) => {
                const isActive = idx === currentSubIndex;
                const activeClasses = "bg-ink text-paper dark:bg-white dark:text-black font-bold border-ink dark:border-white shadow-sm";
                const inactiveClasses = "bg-black/5 dark:bg-white/5 text-muted hover:text-ink dark:hover:text-white border-transparent";
                return `<button class="px-2.5 py-1 text-[10px] rounded transition-colors border cursor-pointer nsub-btn ${isActive ? activeClasses : inactiveClasses}" data-idx="${idx}">${item.label}</button>`;
              }).join('');

              const activeItem = subItems[currentSubIndex];
              if (activeItem) {
                contentBox.innerHTML = `<pre class="text-ink dark:text-zinc-200 whitespace-pre font-mono text-[11px] leading-relaxed overflow-x-auto">${activeItem.snippet}</pre>`;
              }

              subBar.querySelectorAll('.nsub-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                  currentSubIndex = parseInt(btn.getAttribute('data-idx') || '0', 10);
                  renderSubTabs();
                });
              });
            };

            topBtns.forEach(b => {
              b.addEventListener('click', () => {
                topBtns.forEach(btn => {
                  btn.className = "text-muted hover:text-ink dark:hover:text-white cursor-pointer ntop-btn";
                });
                b.className = "underline decoration-2 underline-offset-4 font-bold text-ink dark:text-white cursor-pointer ntop-btn";
                currentCategory = b.getAttribute('data-mode') || 'frontend';
                currentSubIndex = 0;
                renderSubTabs();
              });
            });

            renderSubTabs();
          };
