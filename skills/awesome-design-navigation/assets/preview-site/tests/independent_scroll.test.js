const { execFileSync } = require("child_process");
const path = require("path");

const root = path.resolve(__dirname, "..");
const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const probe = `file:///${path
  .join(root, "tests", "independent-scroll-probe.html")
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
    "--window-size=2100,1200",
    "--virtual-time-budget=6000",
    "--dump-dom",
    probe,
  ],
  { encoding: "utf8" }
);

const match = dom.match(/<pre id="result">([\s\S]*?)<\/pre>/);
assert(match, "Probe did not emit independent scroll metrics");

const metrics = JSON.parse(match[1].replace(/&quot;/g, '"'));
for (const key of ["gallery", "detail"]) {
  const panel = metrics[key];
  assert(panel.position === "sticky", `${key} panel should stay pinned while its own content scrolls`);
  assert(panel.overflowY === "auto", `${key} panel should scroll independently, got overflow-y ${panel.overflowY}`);
  assert(panel.clientHeight < panel.scrollHeight, `${key} panel should have scrollable content`);
  assert(panel.clientHeight < metrics.windowHeight, `${key} panel should fit inside viewport height`);
}

console.log("PASS independent_scroll");
