const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const vm = require("vm");

const root = __dirname;
const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const source = fs.readFileSync(path.join(root, "styles-data.js"), "utf8");
const sandbox = { window: {} };
vm.runInNewContext(source, sandbox);
const catalog = sandbox.window.STYLE_CATALOG || [];

const mirrorsDir = path.join(root, "mirrors");
const screenshotsDir = path.join(root, "screenshots");
fs.mkdirSync(screenshotsDir, { recursive: true });

function winPath(filePath) {
  return filePath.replace(/^\/mnt\/([a-z])\//i, (_, drive) => `${drive.toUpperCase()}:\\`).replaceAll("/", "\\");
}

for (const style of catalog) {
  const input = path.join(mirrorsDir, `${style.slug}-light.html`);
  const output = path.join(screenshotsDir, `getdesign-${style.slug}.png`);
  if (!fs.existsSync(input)) {
    console.error(`skip ${style.slug}: missing mirror`);
    continue;
  }

  execFileSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--window-size=1280,900",
      `--screenshot=${winPath(output)}`,
      `file:///${winPath(input).replaceAll("\\", "/")}`,
    ],
    {
      stdio: "ignore",
    }
  );

  console.log(`preview ${style.slug}`);
}

