import './styles/main.css';
import {
  componentsDB,
  CATEGORIES,
  categoryKeys,
  type CategoryKey,
  type ComponentItem
} from './components/registry';

// App State
let activeCategory: CategoryKey = 'carousel';
let activeComponentId = componentsDB.carousel[0]?.id || '';
let searchQuery = '';
let isCodeExpanded = false;

// DOM Elements
const categoryBar = document.getElementById('cl-category-bar') as HTMLElement | null;
const categoryNameEl = document.getElementById('cl-current-category-name') as HTMLElement | null;
const categoryDescEl = document.getElementById('cl-current-category-desc') as HTMLElement | null;
const componentsListEl = document.getElementById('cl-components-list') as HTMLElement | null;
const variantCountEl = document.getElementById('cl-variant-count') as HTMLElement | null;
const searchInput = document.getElementById('cl-search-input') as HTMLInputElement | null;
const clearSearchBtn = document.getElementById('cl-clear-search') as HTMLButtonElement | null;
const activeTitleEl = document.getElementById('cl-active-title') as HTMLElement | null;
const livePreview = document.getElementById('cl-live-preview') as HTMLElement | null;
const codeBlock = document.getElementById('cl-code-block') as HTMLElement | null;
const codeLines = document.getElementById('cl-code-lines') as HTMLElement | null;
const copyBtn = document.getElementById('cl-copy-btn') as HTMLButtonElement | null;
const expandBtn = document.getElementById('cl-expand-btn') as HTMLButtonElement | null;
const expandLabel = document.getElementById('cl-expand-label') as HTMLElement | null;
const codePanel = document.getElementById('cl-code-panel') as HTMLElement | null;
const themeToggleBtn = document.getElementById('cl-theme-toggle') as HTMLButtonElement | null;
const themeIcon = document.getElementById('theme-icon') as HTMLElement | null;
const viewportBtns = document.querySelectorAll<HTMLButtonElement>('.viewport-btn');

/**
 * Initialize theme from localStorage or system preference
 */
function initTheme(): void {
  const savedTheme = localStorage.getItem('cl_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;

  if (isDark) {
    document.documentElement.classList.add('dark');
    if (themeIcon) themeIcon.textContent = '☀️';
  } else {
    document.documentElement.classList.remove('dark');
    if (themeIcon) themeIcon.textContent = '🌙';
  }

  themeToggleBtn?.addEventListener('click', () => {
    const isNowDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('cl_theme', isNowDark ? 'dark' : 'light');
    if (themeIcon) themeIcon.textContent = isNowDark ? '☀️' : '🌙';
  });
}

/**
 * Syntax Highlighter for HTML & Tailwind CSS
 */
function highlightCode(rawHtml: string): string {
  let escaped = rawHtml
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Highlight HTML Comments
  escaped = escaped.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="syntax-comment">$1</span>');

  // Highlight HTML Tags & Attributes
  escaped = escaped.replace(
    /(&lt;\/?)([a-zA-Z0-9\-]+)([\s\S]*?)(\/?&gt;)/g,
    (_match, open, tagName, attrs, close) => {
      const highlightedAttrs = attrs.replace(
        /([a-zA-Z0-9\-:@]+)(="([^"]*)")?/g,
        (_aMatch: string, attrName: string, _equalsVal: string, attrVal: string) => {
          if (attrVal !== undefined) {
            return `<span class="syntax-attr">${attrName}</span>=<span class="syntax-val">"${attrVal}"</span>`;
          }
          return `<span class="syntax-attr">${attrName}</span>`;
        }
      );
      return `${open}<span class="syntax-tag">${tagName}</span>${highlightedAttrs}${close}`;
    }
  );

  return escaped;
}


/**
 * Render Category Navigation Tabs (Header bar)
 */
function renderCategoryBar(): void {
  if (!categoryBar) return;
  categoryBar.innerHTML = '';

  categoryKeys.forEach((key, index) => {
    const cat = CATEGORIES[key];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('data-category-key', key);
    
    const isActive = key === activeCategory;
    btn.className = `cl-category-btn px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-all duration-200 cursor-pointer border rounded-none whitespace-nowrap flex items-center gap-1.5 ${
      isActive
        ? 'bg-ink text-paper dark:bg-white dark:text-black border-ink dark:border-white font-bold'
        : 'bg-transparent text-muted border-transparent hover:border-border hover:text-ink'
    }`;

    btn.innerHTML = `
      <span class="text-[8px] opacity-60">0${index + 1}.</span>
      <span>${cat.name}</span>
    `;

    btn.addEventListener('click', () => {
      if (activeCategory === key && !searchQuery) return;
      activeCategory = key;
      const firstComp = componentsDB[key][0];
      if (firstComp) {
        activeComponentId = firstComp.id;
      }
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
      updateUrlHash();
      renderCategoryBar();
      renderShowcase();
    });

    categoryBar.appendChild(btn);
  });
}

/**
 * Filter components based on search query
 */
function getFilteredComponents(): { item: ComponentItem; category: CategoryKey }[] {
  if (!searchQuery.trim()) {
    return (componentsDB[activeCategory] || []).map(item => ({ item, category: activeCategory }));
  }

  const q = searchQuery.toLowerCase().trim();
  const results: { item: ComponentItem; category: CategoryKey }[] = [];

  for (const catKey of categoryKeys) {
    const list = componentsDB[catKey] || [];
    for (const item of list) {
      if (
        item.name.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q) ||
        catKey.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q)
      ) {
        results.push({ item, category: catKey });
      }
    }
  }

  return results;
}

/**
 * Render Components List (Left sidebar)
 */
function renderComponentsList(): void {
  if (!componentsListEl) return;
  componentsListEl.innerHTML = '';

  const filtered = getFilteredComponents();

  if (variantCountEl) {
    variantCountEl.textContent = `(${filtered.length} variant${filtered.length === 1 ? '' : 's'})`;
  }

  if (filtered.length === 0) {
    componentsListEl.innerHTML = `
      <div class="p-6 text-center text-xs font-mono text-muted space-y-2">
        <div>No matching components found.</div>
        <div class="text-[10px] opacity-60">Try searching for "hero", "rating", "tabs", or "accordion"</div>
      </div>
    `;
    return;
  }

  filtered.forEach(({ item, category }) => {
    const isActive = item.id === activeComponentId;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('data-id', item.id);
    btn.setAttribute('data-category', category);

    btn.className = `cl-item-btn w-full text-left p-3 font-mono text-xs transition-all duration-150 cursor-pointer flex flex-col gap-1 border-l-2 ${
      isActive
        ? 'bg-black/5 dark:bg-white/10 border-ink dark:border-white font-bold text-ink dark:text-white'
        : 'border-transparent text-muted hover:text-ink dark:hover:text-zinc-200 hover:bg-black/[0.02] dark:hover:bg-white/[0.03]'
    }`;

    btn.innerHTML = `
      <div class="flex items-center justify-between w-full">
        <span class="truncate">${item.name}</span>
        ${isActive ? '<span class="text-emerald-500 text-[10px]">●</span>' : ''}
      </div>
      <div class="text-[9px] text-muted flex items-center justify-between">
        <span>#${item.id}</span>
        ${searchQuery ? `<span class="uppercase tracking-widest text-[8px] bg-black/5 dark:bg-white/10 px-1 py-0.2">${category}</span>` : ''}
      </div>
    `;

    btn.addEventListener('click', () => {
      activeCategory = category;
      activeComponentId = item.id;
      updateUrlHash();
      renderCategoryBar();
      renderShowcase();
    });

    componentsListEl.appendChild(btn);
  });
}

/**
 * Render Live Component Canvas & Code Panel
 */
function renderPreviewAndCode(): void {
  const currentCategoryList = componentsDB[activeCategory] || [];
  let item = currentCategoryList.find(c => c.id === activeComponentId);

  if (!item) {
    // Look across all categories in search mode
    for (const cat of categoryKeys) {
      const found = componentsDB[cat].find(c => c.id === activeComponentId);
      if (found) {
        item = found;
        activeCategory = cat;
        break;
      }
    }
  }

  if (!item && currentCategoryList[0]) {
    item = currentCategoryList[0];
    activeComponentId = item.id;
  }

  if (!item) return;

  // 1. Update Header / Meta
  const catMeta = CATEGORIES[activeCategory];
  if (categoryNameEl) categoryNameEl.textContent = catMeta.name;
  if (categoryDescEl) categoryDescEl.textContent = `— ${catMeta.desc}`;
  if (activeTitleEl) activeTitleEl.textContent = item.name;

  // 2. Inject HTML into Live Canvas & Mount Vanilla JS
  if (livePreview) {
    livePreview.innerHTML = item.html;
    if (typeof item.init === 'function') {
      try {
        item.init(livePreview);
      } catch (err) {
        console.error(`Error initializing component [${item.id}]:`, err);
      }
    }
  }

  // 3. Render Code Box with Syntax Highlighting
  const rawCode = item.code || item.html.trim();
  if (codeBlock) {
    codeBlock.innerHTML = highlightCode(rawCode);
  }

  if (codeLines) {
    const lineCount = rawCode.split('\n').length;
    codeLines.textContent = `(${lineCount} lines)`;
  }
}

/**
 * Render entire showcase state
 */
function renderShowcase(): void {
  renderComponentsList();
  renderPreviewAndCode();
}

/**
 * Update URL Hash for deep linking
 */
function updateUrlHash(): void {
  window.location.hash = `${activeCategory}/${activeComponentId}`;
}

/**
 * Parse URL Hash on initial load
 */
function parseUrlHash(): void {
  const hash = window.location.hash.replace(/^#/, '');
  if (!hash) return;

  const [cat, id] = hash.split('/');
  if (cat && (categoryKeys as readonly string[]).includes(cat)) {
    activeCategory = cat as CategoryKey;
    if (id && componentsDB[activeCategory].some(c => c.id === id)) {
      activeComponentId = id;
    }
  }
}

/**
 * Setup Global Event Handlers
 */
function setupEvents(): void {
  // Search input with debounce
  let searchTimer: ReturnType<typeof setTimeout>;
  searchInput?.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      searchQuery = (e.target as HTMLInputElement).value;
      if (clearSearchBtn) {
        if (searchQuery) {
          clearSearchBtn.classList.remove('hidden');
        } else {
          clearSearchBtn.classList.add('hidden');
        }
      }
      renderShowcase();
    }, 150);
  });

  clearSearchBtn?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.classList.add('hidden');
    renderShowcase();
  });

  // Viewport Switcher
  viewportBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const width = btn.getAttribute('data-width') || '100%';
      if (livePreview) {
        livePreview.style.maxWidth = width;
      }
      viewportBtns.forEach(b => {
        b.className = 'viewport-btn px-2 py-0.5 border border-border text-muted hover:text-ink hover:border-ink cursor-pointer';
      });
      btn.className = 'viewport-btn px-2 py-0.5 border border-ink dark:border-white bg-ink text-paper dark:bg-white dark:text-black font-bold cursor-pointer';
    });
  });

  // Expand / Collapse Code Drawer
  expandBtn?.addEventListener('click', () => {
    isCodeExpanded = !isCodeExpanded;
    if (codePanel) {
      if (isCodeExpanded) {
        codePanel.style.height = '520px';
        if (expandLabel) expandLabel.textContent = 'Collapse Code ↘';
      } else {
        codePanel.style.height = '360px';
        if (expandLabel) expandLabel.textContent = 'Expand Code ↗';
      }
    }
  });

  // Copy Code Button
  copyBtn?.addEventListener('click', () => {
    const list = componentsDB[activeCategory] || [];
    const item = list.find(c => c.id === activeComponentId) || list[0];
    if (!item) return;

    const codeToCopy = item.code || item.html.trim();

    navigator.clipboard.writeText(codeToCopy).then(() => {
      if (copyBtn) {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<span class="text-emerald-500 font-bold">✓ Copied!</span>';
        copyBtn.classList.add('border-emerald-500');
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          copyBtn.classList.remove('border-emerald-500');
        }, 1800);
      }
    }).catch(err => {
      console.error('Failed to copy code to clipboard:', err);
    });
  });

  // Handle browser back/forward buttons
  window.addEventListener('hashchange', () => {
    parseUrlHash();
    renderCategoryBar();
    renderShowcase();
  });
}

/**
 * Application Bootstrap
 */
function init(): void {
  initTheme();
  parseUrlHash();
  renderCategoryBar();
  renderShowcase();
  setupEvents();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
