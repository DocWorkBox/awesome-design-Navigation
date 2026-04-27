const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const catalogSource = fs.readFileSync(path.join(root, "styles-data.js"), "utf8");
const appSource = fs.readFileSync(path.join(root, "app.js"), "utf8");
const sandbox = { window: {} };
vm.runInNewContext(catalogSource, sandbox);

const catalog = sandbox.window.STYLE_CATALOG || [];
const demosDir = path.join(root, "demos");
function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(fs.existsSync(demosDir), "Missing demos directory");

const demoFiles = fs
  .readdirSync(demosDir)
  .filter((file) => file.endsWith(".html"));

assert(
  demoFiles.length === catalog.length,
  `Expected ${catalog.length} demo files, found ${demoFiles.length}`
);

assert(
  fs.existsSync(path.join(demosDir, "claude.html")),
  "Missing demos/claude.html"
);

assert(
  appSource.includes("preview-link"),
  "Overview renderer does not contain preview-link action"
);
assert(
  !appSource.includes("detail-link"),
  "Overview still contains stale source link wiring"
);

const overviewHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
assert(
  !overviewHtml.includes("打开来源"),
  "Overview still renders the external source button"
);

const claudeDemo = fs.readFileSync(path.join(demosDir, "claude.html"), "utf8");
assert(
  claudeDemo.includes("preview-frame"),
  "Claude demo page missing interactive iframe"
);
assert(
  claudeDemo.includes("../mirrors/claude-light.html"),
  "Claude demo page is not wired to local mirrored preview"
);
assert(
  claudeDemo.includes("../mirrors/claude-dark.html"),
  "Claude demo page missing local dark mirrored preview wiring"
);
assert(
  !claudeDemo.includes("打开原始规范页") && !claudeDemo.includes("source-link"),
  "Claude demo still renders the stale original spec button"
);
assert(
  fs.existsSync(path.join(root, "mirrors", "claude-light.html")),
  "Missing mirrored light preview for Claude"
);
assert(
  fs.existsSync(path.join(root, "mirrors", "claude-dark.html")),
  "Missing mirrored dark preview for Claude"
);

console.log("PASS interactive_demos");
