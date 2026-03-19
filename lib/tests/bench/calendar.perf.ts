import { performance } from "node:perf_hooks";
import {
  __clearCalendarCacheForBenchmarks,
  getCalendar,
} from "../../getCalendar";

const YEARS = Array.from({ length: 13 }, (_, i) => 2024 + i);
const WARMUP_RUNS = 3;
const MEASURED_RUNS = 11;
const INNER_REPEATS = 3;

function runColdWorkload() {
  let checksum = 0;
  const start = performance.now();

  for (let repeat = 0; repeat < INNER_REPEATS; repeat++) {
    __clearCalendarCacheForBenchmarks();

    for (const year of YEARS) {
      const calendar = getCalendar(year);
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

  __clearCalendarCacheForBenchmarks();
  for (const year of YEARS) {
    getCalendar(year);
  }

  const start = performance.now();

  for (let repeat = 0; repeat < INNER_REPEATS; repeat++) {
    for (const year of YEARS) {
      const calendar = getCalendar(year);
      checksum += calendar.length;
      checksum += calendar[0]?.mass.length ?? 0;
      checksum += calendar[calendar.length - 1]?.mass.length ?? 0;
    }
  }

  const elapsedMs = performance.now() - start;
  return { elapsedMs, checksum };
}

function median(values: number[]) {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1]! + sorted[mid]!) / 2
    : sorted[mid]!;
}

function mean(values: number[]) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function stddev(values: number[]) {
  const avg = mean(values);
  const variance =
    values.reduce((sum, value) => sum + (value - avg) ** 2, 0) / values.length;
  return Math.sqrt(variance);
}

function percentile(values: number[], p: number) {
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.min(
    sorted.length - 1,
    Math.ceil((p / 100) * sorted.length) - 1,
  );
  return sorted[index]!;
}

let checksumSink = 0;

for (let i = 0; i < WARMUP_RUNS; i++) {
  const cold = runColdWorkload();
  const hot = runHotWorkload();
  checksumSink += cold.checksum + hot.checksum;
}

const coldSamples: number[] = [];
const hotSamples: number[] = [];

for (let i = 0; i < MEASURED_RUNS; i++) {
  const cold = runColdWorkload();
  const hot = runHotWorkload();

  coldSamples.push(cold.elapsedMs);
  hotSamples.push(hot.elapsedMs);
  checksumSink += cold.checksum + hot.checksum;
}

const totalMs = median(coldSamples);
const meanMs = mean(coldSamples);
const p90Ms = percentile(coldSamples, 90);
const stddevMs = stddev(coldSamples);
const hotMs = median(hotSamples);

console.log(`METRIC total_ms=${totalMs.toFixed(3)}`);
console.log(`METRIC mean_ms=${meanMs.toFixed(3)}`);
console.log(`METRIC p90_ms=${p90Ms.toFixed(3)}`);
console.log(`METRIC stddev_ms=${stddevMs.toFixed(3)}`);
console.log(`METRIC hot_ms=${hotMs.toFixed(3)}`);
console.log(`METRIC checksum=${checksumSink}`);
