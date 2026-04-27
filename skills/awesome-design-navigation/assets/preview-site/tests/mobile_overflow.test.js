const { execFileSync } = require("child_process");
const path = require("path");

const root = path.resolve(__dirname, "..");
const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const probe = `file:///${path
  .join(root, "tests", "mobile-overflow-probe.html")
  .replace(/\\/g, "/")
  .replace(/^\/mnt\/c\//, "C:/")}`;

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

for (const style of ["claude", "cohere"]) {
  const dom = execFileSync(
    chrome,
    [
      "--headless",
      "--disable-gpu",
      "--allow-file-access-from-files",
      "--window-size=900,1200",
      "--virtual-time-budget=6000",
      "--dump-dom",
      `${probe}?style=${style}`,
    ],
    { encoding: "utf8" }
  );

  const match = dom.match(/<pre id="result">([\s\S]*?)<\/pre>/);
  assert(match, `Probe did not emit mobile overflow metrics for ${style}`);

  const metrics = JSON.parse(match[1].replace(/&quot;/g, '"'));
  assert(
    metrics.appScrollWidth <= metrics.appClientWidth,
    `[${style}] Expected app shell to avoid horizontal overflow, got ${metrics.appScrollWidth} > ${metrics.appClientWidth}`
  );
  assert(
    metrics.demoScrollWidth <= metrics.demoClientWidth,
    `[${style}] Expected mobile demo iframe to avoid horizontal overflow, got ${metrics.demoScrollWidth} > ${metrics.demoClientWidth}`
  );
  assert(
    metrics.demoBodyScrollWidth <= metrics.demoBodyClientWidth,
    `[${style}] Expected mobile demo body to avoid horizontal overflow, got ${metrics.demoBodyScrollWidth} > ${metrics.demoBodyClientWidth}`
  );
  assert(
    metrics.horizontalScrollerCount === 0,
    `[${style}] Expected no inner horizontal scrollers, found ${metrics.horizontalScrollerCount}: ${JSON.stringify(metrics.horizontalScrollers)}`
  );
  assert(
    metrics.clippedVisibleElementCount === 0,
    `[${style}] Expected no clipped visible elements, found ${metrics.clippedVisibleElementCount}: ${JSON.stringify(metrics.clippedVisibleElements)}`
  );
  assert(
    metrics.staleSourceControlCount === 0,
    `[${style}] Expected stale source controls to be hidden in mobile preview, found ${metrics.staleSourceControlCount}: ${JSON.stringify(metrics.staleSourceControls)}`
  );
  assert(
    metrics.visibleGithubNavControlCount === 0,
    `[${style}] Expected GitHub nav pill to be hidden in mobile preview, found ${metrics.visibleGithubNavControlCount}: ${JSON.stringify(metrics.visibleGithubNavControls)}`
  );
  assert(
    metrics.overflowingNavControlCount === 0,
    `[${style}] Expected visible nav controls to stay inside the phone viewport, found ${metrics.overflowingNavControlCount}: ${JSON.stringify(metrics.overflowingNavControls)}`
  );
  assert(
    metrics.frameWidthNumber === 414,
    `[${style}] Expected mobile frame width 414, got ${metrics.frameWidthNumber}`
  );
  assert(
    metrics.frameHeightNumber === 902,
    `[${style}] Expected mobile frame height 902, got ${metrics.frameHeightNumber}`
  );
  assert(
    Math.abs(metrics.frameAspect - 19.6 / 9) < 0.002,
    `[${style}] Expected mobile frame aspect ratio near 19.6:9, got ${metrics.frameAspect}`
  );
}

console.log("PASS mobile_overflow");
