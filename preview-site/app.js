const catalog = (window.STYLE_CATALOG || []).slice();
const ASSET_VERSION = "2026-04-27-mobile-nav-1";

const state = {
  query: "",
  category: "全部",
  selectedSlug: null,
  demoTheme: "light",
  demoSize: "desktop",
};

const paletteHints = [
  { test: /terracotta|coral|warm orange/i, palette: ["#1f1613", "#f3e3da", "#c97758", "#fbf7f3"] },
  { test: /yellow|binance/i, palette: ["#121212", "#f0b90b", "#f5f5f5", "#1f1f1f"] },
  { test: /emerald|green|mint/i, palette: ["#08110d", "#27e08a", "#d8ffe9", "#0f1c16"] },
  { test: /purple|violet|ultraviolet/i, palette: ["#120c20", "#8b5cf6", "#f4eefe", "#23153e"] },
  { test: /blue|cyan/i, palette: ["#0d1524", "#57a6ff", "#eef6ff", "#11223d"] },
  { test: /red|ferrari/i, palette: ["#160b0b", "#ef4444", "#fff1f1", "#341414"] },
  { test: /cream|paper-white|white space/i, palette: ["#f5f0e7", "#1f1c18", "#dbc8ab", "#fffdf8"] },
  { test: /monochrome|black and white|stark|minimal/i, palette: ["#0f1012", "#ffffff", "#d0d5dd", "#17191d"] },
];

const categoryAccents = {
  "AI 与大模型平台": "#7c3aed",
  "开发工具与 IDE": "#06b6d4",
  "后端、数据库与 DevOps": "#10b981",
  "效率与 SaaS": "#f97316",
  "设计与创意工具": "#ec4899",
  "金融科技与加密": "#facc15",
  "电商与零售": "#fb7185",
  "媒体与消费科技": "#60a5fa",
  "汽车": "#f43f5e",
};

const layouts = [
  { test: /editorial|magazine|broadsheet/i, type: "editorial" },
  { test: /dashboard|data-dense|analytics|trading/i, type: "dashboard" },
  { test: /terminal|code|developer|infrastructure|documentation/i, type: "console" },
  { test: /photography|cinematic|media-rich|full-bleed/i, type: "cinema" },
  { test: /grid|masonry|spreadsheet|structured data/i, type: "grid" },
  { test: /friendly|conversational|playful|illustration/i, type: "friendly" },
];

function byId(id) {
  return document.getElementById(id);
}

function getPalette(style) {
  const match = paletteHints.find((hint) => hint.test.test(style.description));
  if (match) {
    return match.palette;
  }
  const accent = categoryAccents[style.category] || "#8b5cf6";
  return ["#111318", accent, "#f8fafc", "#1b2030"];
}

function getLayout(style) {
  return layouts.find((entry) => entry.test.test(style.description))?.type || "product";
}

function matches(style) {
  const haystack = `${style.name} ${style.category} ${style.description}`.toLowerCase();
  const queryOk = !state.query || haystack.includes(state.query);
  const categoryOk = state.category === "全部" || style.category === state.category;
  return queryOk && categoryOk;
}

function getVisibleStyles() {
  return catalog.filter(matches);
}

function getScreenshotPath(style) {
  return `./screenshots/getdesign-${style.slug}.png?v=${ASSET_VERSION}`;
}

function getDemoPath(style) {
  return `./demos/${style.slug}.html`;
}

function getMirrorPath(style, theme = state.demoTheme) {
  return `./mirrors/${style.slug}-${theme}.html?v=${ASSET_VERSION}`;
}

function getDemoViewportConfig() {
  return state.demoSize === "mobile"
    ? { width: 414, height: 902, shellPadding: 24, minHeight: 540, maxHeight: 860 }
    : { width: 1180, height: 760, shellPadding: 18, minHeight: 420, maxHeight: 800 };
}

function getAvailableDemoHeight(config) {
  const reservedHeight = window.innerWidth <= 720 ? 360 : 320;
  return Math.max(config.minHeight, Math.min(config.maxHeight, window.innerHeight - reservedHeight));
}

function updateDemoViewport() {
  const shell = byId("demo-frame-shell");
  const viewport = byId("demo-viewport");
  const frame = byId("demo-frame");
  if (!shell || !viewport || !frame) {
    return;
  }

  const config = getDemoViewportConfig();
  shell.style.height = "";
  viewport.style.width = "";
  viewport.style.height = "";
  viewport.style.transform = "";
  frame.style.width = "";
  frame.style.height = "";
  frame.style.transform = "";

  const availableWidth = Math.max(280, shell.clientWidth - config.shellPadding * 2);
  const availableHeight = getAvailableDemoHeight(config);
  const widthScale = availableWidth / config.width;
  const heightScale = availableHeight / config.height;
  const scale = Math.min(1, Math.max(0.28, Math.min(widthScale, heightScale)));

  viewport.style.width = `${Math.round(config.width * scale)}px`;
  viewport.style.height = `${Math.round(config.height * scale)}px`;
  viewport.style.transform = "";
  shell.style.height = `${Math.round(config.height * scale) + config.shellPadding * 2}px`;
  frame.style.width = `${config.width}px`;
  frame.style.height = `${config.height}px`;
  frame.style.transform = `scale(${scale})`;
}

function applyDemoFrameMode() {
  const frame = byId("demo-frame");
  const doc = frame?.contentDocument;
  if (!doc) {
    return;
  }

  doc.querySelectorAll("a, button").forEach((element) => {
    const label = element.textContent?.trim().replace(/\s+/g, " ") || "";
    const href = element.getAttribute("href") || "";
    if (/view source|source|原始|来源/i.test(label) || /design-md/i.test(href)) {
      element.remove();
    }
  });

  const existing = doc.getElementById("codex-mobile-preview-fit");
  if (state.demoSize !== "mobile") {
    existing?.remove();
    return;
  }

  const style = existing || doc.createElement("style");
  style.id = "codex-mobile-preview-fit";
  style.textContent = `
    html,
    body {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
      overflow-x: hidden !important;
    }

    body {
      font-size: clamp(15px, 4.2vw, 18px) !important;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box !important;
    }

    *::-webkit-scrollbar:horizontal {
      width: 0 !important;
      height: 0 !important;
      display: none !important;
    }

    body,
    main,
    section,
    header,
    nav,
    footer,
    article,
    div {
      min-width: 0 !important;
      max-width: 100% !important;
      overflow-x: hidden !important;
    }

    nav,
    header,
    .nav,
    .header {
      display: flex !important;
      flex-wrap: wrap !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 10px 12px !important;
      width: 100% !important;
      padding: 14px 18px !important;
    }

    .nav-left,
    [class*="nav-left"],
    .nav-brand,
    [class*="nav-brand"] {
      display: flex !important;
      flex-wrap: wrap !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 8px !important;
      min-width: 0 !important;
      max-width: 100% !important;
    }

    .nav-links,
    [class*="nav-links"] {
      display: none !important;
    }

    .nav-github,
    [class*="github"] {
      display: none !important;
    }

    .nav-cta,
    [class*="nav-cta"] {
      flex: 0 1 auto !important;
      max-width: 128px !important;
      padding: 9px 12px !important;
      font-size: clamp(12px, 3.5vw, 14px) !important;
      white-space: normal !important;
    }

    .hero,
    [class*="hero"] {
      padding: 72px 24px 56px !important;
    }

    .hero h1,
    [class*="hero"] h1 {
      font-size: clamp(40px, 11vw, 52px) !important;
      line-height: 1.05 !important;
      letter-spacing: -0.04em !important;
      max-width: 100% !important;
    }

    .hero p,
    [class*="hero"] p {
      font-size: clamp(16px, 4.8vw, 22px) !important;
      max-width: 100% !important;
    }

    .hero-buttons,
    [class*="hero-buttons"],
    .button-row,
    [class*="button-row"] {
      display: flex !important;
      flex-wrap: wrap !important;
      justify-content: center !important;
      gap: 12px !important;
    }

    .color-grid,
    .card-grid,
    .elevation-grid,
    [class*="grid"] {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      gap: 16px !important;
    }

    img,
    svg,
    canvas,
    video,
    table,
    pre {
      max-width: 100% !important;
    }

    pre,
    code,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    button {
      overflow-wrap: anywhere !important;
    }

    pre,
    code {
      white-space: pre-wrap !important;
    }
  `;

  if (!existing) {
    doc.head.appendChild(style);
  }
}

function syncUrlState() {
  const url = new URL(window.location.href);
  if (state.selectedSlug) {
    url.searchParams.set("style", state.selectedSlug);
  }
  url.searchParams.set("demoTheme", state.demoTheme);
  url.searchParams.set("demoSize", state.demoSize);
  window.history.replaceState({}, "", url);
}

function createPreviewMarkup(style, layout = getLayout(style)) {
  const [bg, accent, text, surface] = getPalette(style);
  const title = style.name.toUpperCase();
  const fallback = (() => {
  if (layout === "editorial") {
    return `
      <div class="mini-artboard editorial" style="--bg:${bg};--accent:${accent};--text:${text};--surface:${surface}">
        <div class="mini-topline"></div>
        <div class="mini-title">${title}</div>
        <div class="mini-columns">
          <div></div><div></div><div></div>
        </div>
      </div>`;
  }
  if (layout === "dashboard") {
    return `
      <div class="mini-artboard dashboard" style="--bg:${bg};--accent:${accent};--text:${text};--surface:${surface}">
        <div class="mini-bars"><span></span><span></span><span></span><span></span></div>
        <div class="mini-panels"><div></div><div></div><div></div></div>
      </div>`;
  }
  if (layout === "console") {
    return `
      <div class="mini-artboard console" style="--bg:${bg};--accent:${accent};--text:${text};--surface:${surface}">
        <div class="mini-code">$ build --style ${style.slug}</div>
        <div class="mini-code subtle">rendering visual system...</div>
        <div class="mini-progress"><span></span></div>
      </div>`;
  }
  if (layout === "cinema") {
    return `
      <div class="mini-artboard cinema" style="--bg:${bg};--accent:${accent};--text:${text};--surface:${surface}">
        <div class="mini-frame"></div>
        <div class="mini-caption">${style.category}</div>
      </div>`;
  }
  if (layout === "grid") {
    return `
      <div class="mini-artboard grid" style="--bg:${bg};--accent:${accent};--text:${text};--surface:${surface}">
        <div class="mini-grid"><span></span><span></span><span></span><span></span><span></span><span></span></div>
      </div>`;
  }
  if (layout === "friendly") {
    return `
      <div class="mini-artboard friendly" style="--bg:${bg};--accent:${accent};--text:${text};--surface:${surface}">
        <div class="mini-bubble bubble-a"></div>
        <div class="mini-bubble bubble-b"></div>
        <div class="mini-pill-row"><span></span><span></span><span></span></div>
      </div>`;
  }
  return `
    <div class="mini-artboard product" style="--bg:${bg};--accent:${accent};--text:${text};--surface:${surface}">
      <div class="mini-hero"></div>
      <div class="mini-card-row"><span></span><span></span></div>
      <div class="mini-button"></div>
    </div>`;
  })();

  return `
    <div class="preview-shot">
      <img
        class="preview-image"
        src="${getScreenshotPath(style)}"
        alt="${style.name} 风格截图"
        loading="lazy"
        onload="this.nextElementSibling.style.display='none'"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"
      />
      <div class="preview-fallback">${fallback}</div>
    </div>`;
}

function renderFilters() {
  const container = byId("category-filters");
  const categories = ["全部", ...new Set(catalog.map((item) => item.category))];
  byId("category-count").textContent = String(categories.length - 1);
  container.innerHTML = categories
    .map(
      (category) => `
        <button
          type="button"
          class="filter-chip ${state.category === category ? "is-active" : ""}"
          data-category="${category}"
        >
          ${category}
        </button>`
    )
    .join("");

  container.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      renderAll();
    });
  });
}

function renderGallery() {
  const grid = byId("gallery-grid");
  const visible = getVisibleStyles();
  byId("result-count").textContent = `匹配到 ${visible.length} 种风格`;

  grid.innerHTML = visible
    .map((style) => {
      const selected = style.slug === state.selectedSlug;
      return `
        <article class="style-card ${selected ? "is-selected" : ""}" data-slug="${style.slug}">
          <div class="style-preview">${createPreviewMarkup(style)}</div>
          <div class="style-card-body">
            <div class="style-card-meta">
              <span class="style-category">${style.category}</span>
              <span class="style-slug">${style.slug}</span>
            </div>
            <h3>${style.name}</h3>
            <p>${style.description}</p>
            <div class="style-card-actions">
              <a
                class="preview-link"
                href="${getDemoPath(style)}"
                data-preview-link="${style.slug}"
              >预览 demo</a>
            </div>
          </div>
        </article>`;
    })
    .join("");

  grid.querySelectorAll("[data-preview-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });

  grid.querySelectorAll("[data-slug]").forEach((card) => {
    card.addEventListener("click", () => {
      selectStyle(card.dataset.slug);
    });
  });

  if (!visible.some((style) => style.slug === state.selectedSlug) && visible[0]) {
    state.selectedSlug = visible[0].slug;
  }
}

function renderDetail() {
  const style = catalog.find((item) => item.slug === state.selectedSlug) || catalog[0];
  if (!style) {
    return;
  }

  const [bg, accent, text, surface] = getPalette(style);
  byId("selected-name").textContent = style.name;
  byId("banner-name").textContent = style.name;
  byId("banner-category").textContent = style.category;
  byId("banner-key").textContent = style.slug;
  byId("banner-summary").textContent = `风格已选中，可直接用于下一次页面生成。`;
  byId("detail-category").textContent = style.category;
  byId("detail-name").textContent = style.name;
  byId("detail-description").textContent = style.description;
  byId("detail-choice").textContent = `当前风格键：${style.slug}`;
  byId("detail-usage").textContent = `下一次你只要说“按 ${style.name} 风格做”，我就会基于当前选择继续。`;
  byId("live-demo-title").textContent = `${style.name} 实时 Demo`;
  byId("demo-open").href = getDemoPath(style);

  const frameShell = byId("demo-frame-shell");
  frameShell.classList.toggle("is-mobile", state.demoSize === "mobile");

  const frame = byId("demo-frame");
  frame.src = getMirrorPath(style);
  byId("demo-status").textContent = `当前：${state.demoTheme === "light" ? "浅色" : "深色"} / ${state.demoSize === "desktop" ? "桌面" : "移动"}`;
  updateDemoViewport();

  document.querySelectorAll("[data-demo-theme]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.demoTheme === state.demoTheme);
  });
  document.querySelectorAll("[data-demo-size]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.demoSize === state.demoSize);
  });
}

function selectStyle(slug) {
  state.selectedSlug = slug;
  syncUrlState();
  window.localStorage.setItem("design-md-selected-style", slug);
  renderAll();
}

function bindGlobalEvents() {
  byId("search-input").addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderAll();
  });

  byId("copy-choice").addEventListener("click", async () => {
    const value = state.selectedSlug || "";
    try {
      await navigator.clipboard.writeText(value);
      byId("detail-choice").textContent = `已复制风格键：${value}`;
    } catch {
      byId("detail-choice").textContent = `风格键：${value}`;
    }
  });

  document.querySelectorAll("[data-demo-theme]").forEach((button) => {
    button.addEventListener("click", () => {
      state.demoTheme = button.dataset.demoTheme;
      syncUrlState();
      renderDetail();
    });
  });

  document.querySelectorAll("[data-demo-size]").forEach((button) => {
    button.addEventListener("click", () => {
      state.demoSize = button.dataset.demoSize;
      syncUrlState();
      renderDetail();
    });
  });

  byId("demo-reload").addEventListener("click", () => {
    const frame = byId("demo-frame");
    frame.src = frame.src;
  });

  byId("demo-frame").addEventListener("load", () => {
    applyDemoFrameMode();
  });

  window.addEventListener("resize", () => {
    updateDemoViewport();
  });
}

function initializeSelection() {
  const url = new URL(window.location.href);
  const urlStyle = url.searchParams.get("style");
  const urlTheme = url.searchParams.get("demoTheme");
  const urlSize = url.searchParams.get("demoSize");
  const stored = window.localStorage.getItem("design-md-selected-style");
  const fallback = catalog[0]?.slug || null;
  const preferred = [urlStyle, stored, fallback].find((slug) =>
    catalog.some((style) => style.slug === slug)
  );
  state.selectedSlug = preferred;
  if (urlTheme === "light" || urlTheme === "dark") {
    state.demoTheme = urlTheme;
  }
  if (urlSize === "desktop" || urlSize === "mobile") {
    state.demoSize = urlSize;
  }
}

function renderAll() {
  renderFilters();
  renderGallery();
  renderDetail();
}

function init() {
  byId("style-count").textContent = String(catalog.length);
  initializeSelection();
  bindGlobalEvents();
  renderAll();
  syncUrlState();
}

init();
