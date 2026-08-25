import { performance } from "node:perf_hooks";
import { CalendarStore } from "../../calendarStore";

const YEARS = Array.from({ length: 13 }, (_, i) => 2024 + i);
const WARMUP_RUNS = 3;
const MEASURED_RUNS = 11;
const INNER_REPEATS = 3;
const EDITION = "62" as const;

/** Dedicated store so workloads control cache lifetime without touching app state. */
const benchStore = new CalendarStore();

const APP_YEAR = 2026;
const APP_NEXT_YEAR = 2027;
const APP_READ_REPEATS = 4;
const APP_NOVENA_DATES = [
  "2026-01-02",
  "2026-02-14",
  "2026-03-25",
  "2026-04-10",
  "2026-05-31",
  "2026-06-24",
  "2026-07-16",
  "2026-08-15",
  "2026-09-29",
  "2026-10-07",
  "2026-11-02",
  "2026-12-16",
];
const APP_DAY_KEYS = [
  "2026-01-01",
  "2026-01-06",
  "2026-02-02",
  "2026-02-14",
  "2026-02-24",
  "2026-03-08",
  "2026-03-25",
  "2026-04-05",
  "2026-04-12",
  "2026-05-01",
  "2026-05-31",
  "2026-06-24",
  "2026-07-16",
  "2026-08-15",
  "2026-09-14",
  "2026-10-07",
  "2026-11-01",
  "2026-11-30",
  "2026-12-08",
  "2026-12-24",
  "2026-12-25",
  "2026-12-31",
  "2027-01-01",
  "2027-01-06",
];

function runColdWorkload() {
  let checksum = 0;
  const start = performance.now();

  for (let repeat = 0; repeat < INNER_REPEATS; repeat++) {
    benchStore.clear();

    for (const year of YEARS) {
      const calendar = benchStore.getDays(year, EDITION);
      checksum += calendar.length;
      checksum += calendar[0]?.mass.length ?? 0;
      checksum += calendar[calendar.length - 1]?.mass.length ?? 0;
    }
  }

  const elapsedMs = performance.now() - start;
  return { elapsedMs, checksum };
}

function runHotWorkload() {
  let checksum = 0;

  benchStore.clear();
  for (const year of YEARS) {
    benchStore.getDays(year, EDITION);
  }

  const start = performance.now();

  for (let repeat = 0; repeat < INNER_REPEATS; repeat++) {
    for (const year of YEARS) {
      const calendar = benchStore.getDays(year, EDITION);
      checksum += calendar.length;
      checksum += calendar[0]?.mass.length ?? 0;
      checksum += calendar[calendar.length - 1]?.mass.length ?? 0;
    }
  }

  const elapsedMs = performance.now() - start;
  return { elapsedMs, checksum };
}

function runAppWorkload() {
  let checksum = 0;
  const start = performance.now();

  benchStore.clear();

  // Provider behavior around December: current year + next year
  const providerCalendar = [
    ...benchStore.getDays(APP_YEAR, EDITION),
    ...benchStore.getDays(APP_NEXT_YEAR, EDITION),
  ];
  checksum += providerCalendar.length;

  // Repeated day/season reads while date updates over time
  for (let i = 0; i < APP_READ_REPEATS; i++) {
    for (const dayKey of APP_DAY_KEYS) {
      const day = benchStore.getDay(dayKey, EDITION);
      checksum += day?.mass.length ?? 0;

      const season = benchStore.getSeason(dayKey, EDITION);
      checksum += season ? season.length : 0;
    }
  }

  // Novena screen behavior
  for (const dateKey of APP_NOVENA_DATES) {
    checksum += benchStore.getNovenas(dateKey, EDITION).length;
  }

  const elapsedMs = performance.now() - start;
  return { elapsedMs, checksum };
}

function median(values: number[]) {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1]! + sorted[mid]!) / 2 : sorted[mid]!;
}

function mean(values: number[]) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function stddev(values: number[]) {
  const avg = mean(values);
  const variance = values.reduce((sum, value) => sum + (value - avg) ** 2, 0) / values.length;
  return Math.sqrt(variance);
}

function percentile(values: number[], p: number) {
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.min(sorted.length - 1, Math.ceil((p / 100) * sorted.length) - 1);
  return sorted[index]!;
}

let checksumSink = 0;

for (let i = 0; i < WARMUP_RUNS; i++) {
  const cold = runColdWorkload();
  const app = runAppWorkload();
  const hot = runHotWorkload();
  checksumSink += cold.checksum + app.checksum + hot.checksum;
}

const totalSamples: number[] = [];
const coldSamples: number[] = [];
const appSamples: number[] = [];
const hotSamples: number[] = [];

for (let i = 0; i < MEASURED_RUNS; i++) {
  const cold = runColdWorkload();
  const app = runAppWorkload();
  const hot = runHotWorkload();

  totalSamples.push(cold.elapsedMs + app.elapsedMs);
  coldSamples.push(cold.elapsedMs);
  appSamples.push(app.elapsedMs);
  hotSamples.push(hot.elapsedMs);
  checksumSink += cold.checksum + app.checksum + hot.checksum;
}

const totalMs = median(totalSamples);
const meanMs = mean(totalSamples);
const p90Ms = percentile(totalSamples, 90);
const stddevMs = stddev(totalSamples);
const coldMs = median(coldSamples);
const appMs = median(appSamples);
const hotMs = median(hotSamples);

console.log(`METRIC total_ms=${totalMs.toFixed(3)}`);
console.log(`METRIC mean_ms=${meanMs.toFixed(3)}`);
console.log(`METRIC p90_ms=${p90Ms.toFixed(3)}`);
console.log(`METRIC stddev_ms=${stddevMs.toFixed(3)}`);
console.log(`METRIC cold_ms=${coldMs.toFixed(3)}`);
console.log(`METRIC app_ms=${appMs.toFixed(3)}`);
console.log(`METRIC hot_ms=${hotMs.toFixed(3)}`);
console.log(`METRIC checksum=${checksumSink}`);
