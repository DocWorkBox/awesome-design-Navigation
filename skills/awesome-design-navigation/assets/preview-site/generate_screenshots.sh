#!/usr/bin/env bash
set -euo pipefail

ROOT="/mnt/c/Users/47575/Documents/Codex/2026-04-17-https-github-com-voltagent-awesome-design/preview-site"
DATA_FILE="$ROOT/styles-data.js"
OUT_DIR="$ROOT/screenshots"
CHROME="/mnt/c/Program Files/Google/Chrome/Application/chrome.exe"

mkdir -p "$OUT_DIR"

while IFS=$'\t' read -r slug url; do
  out="$OUT_DIR/getdesign-$slug.png"
  if [ -f "$out" ]; then
    echo "skip $slug"
    continue
  fi

  out_win=$(wslpath -w "$out")
  echo "capture $slug"
  timeout 45s "$CHROME" \
    --headless=new \
    --disable-gpu \
    --hide-scrollbars \
    --window-size=1440,1600 \
    --screenshot="$out_win" \
    "$url" >/dev/null 2>&1 || {
      echo "failed $slug"
      rm -f "$out"
    }
done < <(python3 - <<'PY'
import re
from pathlib import Path

text = Path("/mnt/c/Users/47575/Documents/Codex/2026-04-17-https-github-com-voltagent-awesome-design/preview-site/styles-data.js").read_text()
for slug, url in re.findall(r'slug: "([^"]+)".+?sourceUrl: "([^"]+)"', text):
    print(f"{slug}\t{url}")
PY
)
