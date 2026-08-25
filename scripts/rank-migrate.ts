/**
 * One-shot migration: converts static `rank: N` fields into explicit
 * typed rankVariants ("*" default section), and normalizes existing
 * variant arrays to the closed RubricVersion/GradeName vocabulary.
 *
 *   bun scripts/rank-migrate.ts
 *
 * Idempotent. Verifies globally afterwards: no residual static rank
 * fields. Splices entries in reverse order so spans stay valid.
 */
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Indexed by legacy coarse rank 0..4; out-of-range falls back at use sites.
const NAME = ["Votiva", "Duplex I classis", "Duplex II classis", "Duplex", "Simplex"];
const PREC = [0.5, 6.5, 5, 3.5, 1.5];

const RUBRICS_MAP = new Map<string, string>([
  ['"Rubrics 1960 - 1960"', "R1960"],
  ['"Tridentine - 1570"', "T1570"],
  ["'\"rubrica cisterciensis\"'", "Cist"],
]);

const VALID_RUBRICS = new Set(["*", "R1960", "T1570", "Cist"]);

const NAME_NORM = new Map([["Duplex II. classis", "Duplex II classis"]]);

interface Item {
  rubrics: string;
  name: string;
  precedence: number;
}

function parseItem(line: string): Item | null {
  const start = line.indexOf("{");
  const end = line.lastIndexOf("}");
  if (start < 0 || end < 0 || end <= start) return null;
  let s = line.slice(start + 1, end).trim();

  const rk = s.indexOf("rubrics:");
  if (rk !== 0) return null;
  s = s.slice("rubrics:".length).trimStart();

  const q = s[0];
  if (q !== "'" && q !== '"') return null;
  const close = s.indexOf(q, 1);
  if (close < 0) return null;
  const rawRubrics = s.slice(0, close + 1);
  s = s.slice(close + 1).trimStart();
  if (!s.startsWith(",")) return null;
  s = s.slice(1).trimStart();

  if (!s.startsWith("name:")) return null;
  s = s.slice("name:".length).trimStart();
  const nclose = s.indexOf('"', 1);
  if (!s.startsWith('"') || nclose < 0) return null;
  const name = s.slice(1, nclose);
  s = s.slice(nclose + 1).trimStart();
  if (!s.startsWith(",")) return null;
  s = s.slice(1).trimStart();

  if (!s.startsWith("precedence:")) return null;
  const precedence = Number(s.slice("precedence:".length).replace(/[},\s]/g, ""));
  if (!Number.isFinite(precedence)) return null;

  const code = RUBRICS_MAP.get(rawRubrics) ?? rawRubrics.replaceAll('"', "");
  if (!VALID_RUBRICS.has(code)) throw new Error(`unknown rubrics: ${rawRubrics}`);
  return { rubrics: code, name, precedence };
}

function entrySpans(lines: string[], indent: number): [number, number][] {
  const pat = new RegExp(`^${" ".repeat(indent)}[A-Z][A-Z0-9_]*: \\{`);
  const starts: number[] = [];
  lines.forEach((l, i) => {
    if (pat.test(l)) starts.push(i);
  });
  const spans: [number, number][] = [];
  for (let k = 0; k < starts.length; k++) {
    const s = starts[k];
    let depth = 0;
    let e = -1;
    for (let j = s; j < lines.length; j++) {
      for (const ch of lines[j]) {
        if (ch === "{" || ch === "[") depth++;
        else if (ch === "}" || ch === "]") depth--;
      }
      if (depth <= 0 && j > s) {
        e = j;
        break;
      }
    }
    if (e < 0) throw new Error(`unbalanced entry at line ${s + 1}`);
    spans.push([s, e]);
    while (k + 1 < starts.length && starts[k + 1] <= e) k++; // skip nested
  }
  return spans;
}

function migrateFile(path: string, indent: number): number {
  const lines = readFileSync(path, "utf8").split("\n");
  const pad = " ".repeat(indent);
  const rankLine = new RegExp(`^${pad}  rank: (\\d),$`);
  const varStartPrefix = `${pad}  rankVariants: [`;
  const anyClose = /^\s*\],$/;

  const spans = entrySpans(lines, indent);
  let converted = 0;

  // process in reverse so splices never invalidate pending spans
  for (let k = spans.length - 1; k >= 0; k--) {
    const [s0, e0] = spans[k];

    let rankIdx = -1;
    let rankN = NaN;
    let flexIdx = -1;
    let varS = -1;
    let varE = -1;
    for (let i = s0; i <= e0; i++) {
      const l = lines[i];
      const rm = l.match(rankLine);
      if (rm) {
        rankIdx = i;
        rankN = Number(rm[1]);
      }
      if (l.includes("flexibility:")) flexIdx = i;
      if (l.startsWith(varStartPrefix)) varS = i;
      if (varS >= 0 && varE < 0 && anyClose.test(l)) varE = i;
    }
    if (rankIdx < 0 && varS < 0) continue;

    const items: Item[] = [];
    if (varS >= 0) {
      for (let i = varS + 1; i < varE; i++) {
        const it = parseItem(lines[i]);
        if (it) items.push({ ...it, name: NAME_NORM.get(it.name) ?? it.name });
      }
    }

    const map = new Map<string, Item>();
    for (const it of items) map.set(it.rubrics, it); // last per code wins
    // An explicit "*" section is authoritative; synthesize one only when
    // the entry had no variants at all.
    if (!map.has("*")) {
      map.set("*", {
        rubrics: "*",
        name: NAME[rankN] ?? "Simplex",
        precedence: PREC[rankN] ?? 1.5,
      });
    }

    const ordered: string[] = ["*"];
    for (const c of map.keys()) if (c !== "*") ordered.push(c);

    const pad6 = " ".repeat(indent + 6);
    const pad4 = " ".repeat(indent + 3);
    const blockLines = [
      `${pad}  rankVariants: [`,
      ...ordered.map(
        (c) =>
          `${pad6}{ rubrics: "${c}", name: "${map.get(c)!.name}", precedence: ${map.get(c)!.precedence} },`,
      ),
      pad4 + "],",
    ];

    if (varS >= 0) {
      lines.splice(varS, varE - varS + 1, ...blockLines);
      if (rankIdx > varS) {
        // rank removed as part of the same range replacement
      } else {
        lines.splice(rankIdx, 1);
      }
    } else {
      lines.splice(flexIdx + 1, 0, ...blockLines);
      lines.splice(rankIdx + blockLines.length, 1);
    }
    converted++;
  }

  // self-verify
  const txt = lines.join("\n");
  for (const m of txt.matchAll(/rubrics: ("(?:[^"]|\\")*")/g)) {
    const code = m[1].replaceAll('"', "");
    if (!VALID_RUBRICS.has(code)) throw new Error(`${path}: bad rubrics ${m[1]}`);
  }
  if (converted) writeFileSync(path, txt);
  return converted;
}

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const e of readdirSync(dir)) {
    const full = join(dir, e);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (e.endsWith(".ts")) out.push(full);
  }
  return out;
}

function migrateOverrides(path: string): number {
  const src = readFileSync(path, "utf8");
  const parts = src.split("{ after: ");
  let count = 0;
  const out = parts.map((seg, i) => {
    if (i === 0) return seg;
    const bIdx = seg.indexOf("mass: {");
    if (bIdx < 0) return seg;
    const bodyStart = bIdx + "mass: {".length;
    const bodyEnd = seg.indexOf("\n} },");
    if (bodyEnd < 0) return seg;
    let body = seg.slice(bodyStart, bodyEnd);
    const propLines = body.split("\n");

    let rankIdx = -1;
    let rankN = NaN;
    let varS = -1;
    let varE = -1;
    propLines.forEach((l, j) => {
      const rm = l.match(/^    rank: (\d),$/);
      if (rm) {
        rankIdx = j;
        rankN = Number(rm[1]);
      }
      if (l === "    rankVariants: [") varS = j;
      if (l === "    ]," && varS >= 0 && varE < 0) varE = j;
    });
    if (rankIdx < 0 && varS < 0) return seg;

    const items: Item[] = [];
    if (varS >= 0) {
      for (let j = varS + 1; j < varE; j++) {
        const it = parseItem(propLines[j]);
        if (it) items.push(it);
      }
    }
    const map = new Map<string, Item>();
    for (const it of items) map.set(it.rubrics, it);
    if (!map.has("*")) {
      map.set("*", {
        rubrics: "*",
        name: NAME[rankN] ?? "Simplex",
        precedence: PREC[rankN] ?? 1.5,
      });
    }
    const finalItems = [...map.values()].sort((a) => (a.rubrics === "*" ? -1 : 0));
    const body2 =
      finalItems
        .map((it) => {
          const p = String(it.precedence);
          return `    { rubrics: "${it.rubrics}", name: "${it.name}", precedence: ${p} },`;
        })
        .join("\n") + "\n";
    const newBody =
      propLines.slice(0, varS >= 0 ? varS : rankIdx).join("\n") +
      (varS >= 0 ? "" : "\n") +
      "    rankVariants: [\n" +
      body2 +
      "    ]," +
      "\n" +
      propLines.slice((varE >= 0 ? varE : rankIdx) + 1).join("\n");
    count++;
    return seg.slice(0, bodyStart) + newBody + seg.slice(bodyEnd);
  });
  writeFileSync(path, out.join("{ after: "));
  return count;
}

let total = 0;
total += migrateOverrides("lib/calendars/overrides.ts");
for (const f of walk("lib/observances")) total += migrateFile(f, 2);
console.log("entries migrated:", total);

let residual = 0;
for (const f of [...walk("lib/observances"), "lib/calendars/overrides.ts"]) {
  for (const line of readFileSync(f, "utf8").split("\n")) {
    if (/^\s*rank: \d,$/.test(line)) residual++;
  }
}
if (residual) throw new Error(`${residual} static rank lines remain`);
console.log("verification ok: no static rank fields remain");
