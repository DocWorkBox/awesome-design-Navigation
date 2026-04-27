const { execFileSync } = require("child_process");
const path = require("path");

const root = path.resolve(__dirname, "..");
const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const probe = `file:///${path
  .join(root, "tests", "layout-overflow-probe.html")
  .replace(/\\/g, "/")
  .replace(/^\/mnt\/c\//, "C:/")}`;

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

for (const width of [2100, 1500, 1280, 1180]) {
  const dom = execFileSync(
    chrome,
    [
      "--headless",
      "--disable-gpu",
      "--allow-file-access-from-files",
      `--window-size=${width},1300`,
      "--virtual-time-budget=5000",
      "--dump-dom",
      `${probe}?width=${width}`,
    ],
    { encoding: "utf8" }
  );

  const match = dom.match(/<pre id="result">([\s\S]*?)<\/pre>/);
  assert(match, `Probe did not emit layout metrics for ${width}px`);

  const metrics = JSON.parse(match[1].replace(/&quot;/g, '"'));
  assert(
    metrics.scrollWidth <= metrics.innerWidth,
    `[${width}px] Expected no horizontal overflow, got scrollWidth ${metrics.scrollWidth} > innerWidth ${metrics.innerWidth}`
  );
  assert(
    metrics.bodyScrollWidth <= metrics.bodyClientWidth,
    `[${width}px] Expected body to avoid horizontal overflow, got ${metrics.bodyScrollWidth} > ${metrics.bodyClientWidth}`
  );
  assert(
    metrics.detailWidth <= metrics.layoutWidth,
    `[${width}px] Detail panel overflows layout: detail ${metrics.detailWidth}, layout ${metrics.layoutWidth}`
  );
}

console.log("PASS layout_overflow");
