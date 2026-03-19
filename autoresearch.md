# Autoresearch: Calendar performance

## Objective
Optimize the liturgical calendar generation path in `lib/` by reducing runtime for repeated `getCalendar(year)` calls over realistic year ranges.

## Metrics
- **Primary**: `total_ms` (ms, lower is better)
- **Secondary**: `mean_ms`, `p90_ms`, `stddev_ms`, `checksum`

## How to Run
`./autoresearch.sh` — runs `lib/tests/bench/calendar.perf.ts` and outputs `METRIC name=value` lines.

## Files in Scope
- `lib/calendar.ts` — core calendar construction and conflict resolution logic
- `lib/getCalendar.ts` — public API wrapper around calendar generation
- `lib/observanceManager.ts` — observance lookup/indexing used during generation
- `lib/tests/bench/calendar.perf.ts` — benchmark workload used for optimization loop

## Off Limits
- `src/` UI and app routes
- External dependencies (`package.json`/lockfile)
- Liturgical semantics and ranking rules

## Constraints
- Keep liturgical output behavior intact.
- Calendar tests must pass (`lib/tests/calendar`).
- No new dependencies.

## What's Been Tried
- Created a deterministic benchmark workload (`calendar.perf.ts`) that measures median runtime across repeated multi-year generations and emits machine-readable metrics.
- Added `autoresearch.sh` runner.
- Added `autoresearch.checks.sh` to enforce calendar test pass after benchmark improvements.
- Baseline and optimization loop to follow.
