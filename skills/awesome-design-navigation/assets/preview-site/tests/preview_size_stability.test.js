const { execFileSync } = require("child_process");
const path = require("path");

const root = path.resolve(__dirname, "..");
const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const probe = `file:///${path
  .join(root, "tests", "preview-size-stability-probe.html")
  .replace(/\\/g, "/")
  .replace(/^\/mnt\/c\//, "C:/")}`;

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const dom = execFileSync(
  chrome,
  [
    "--headless",
    "--disable-gpu",
    "--allow-file-access-from-files",
    "--window-size=1500,1100",
    "--virtual-time-budget=9000",
    "--dump-dom",
    probe,
  ],
  { encoding: "utf8" }
);

const match = dom.match(/<pre id="result">([\s\S]*?)<\/pre>/);
assert(match, "Probe did not emit preview size stability metrics");

const { metrics } = JSON.parse(match[1].replace(/&quot;/g, '"'));
assert(metrics.length >= 2, "Probe did not collect enough size samples");

const first = metrics[0];
for (const sample of metrics) {
  assert(
    Math.abs(sample.viewportWidth - first.viewportWidth) <= 2,
    `Preview viewport width drifted after ${sample.slug}: ${sample.viewportWidth} vs ${first.viewportWidth}`
  );
  assert(
    Math.abs(sample.viewportHeight - first.viewportHeight) <= 2,
    `Preview viewport height drifted after ${sample.slug}: ${sample.viewportHeight} vs ${first.viewportHeight}`
  );
  assert(
    Math.abs(sample.shellHeight - first.shellHeight) <= 2,
    `Preview shell height drifted after ${sample.slug}: ${sample.shellHeight} vs ${first.shellHeight}`
  );
  assert(
    sample.documentScrollWidth <= sample.documentClientWidth,
    `Outer document overflowed after ${sample.slug}: ${sample.documentScrollWidth} > ${sample.documentClientWidth}`
  );
}

console.log("PASS preview_size_stability");
