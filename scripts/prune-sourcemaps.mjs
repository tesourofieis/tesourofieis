// Removes *.map from dist/ — Cloudflare Workers Assets rejects any single
// asset over 25 MB (stale web sourcemaps have exceeded that), and maps are
// dead weight in production hosting. Invoked without dash-flags because
// alchemy's command plumbing routes through npm arg parsing, which eats
// flags like `-name` / `-delete`.
import { readdirSync, rmSync } from "node:fs";

function walk(dir) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const p = `${dir}/${entry.name}`;
    if (entry.isDirectory()) walk(p);
    else if (entry.name.endsWith(".map")) rmSync(p);
  }
}

walk("dist");
