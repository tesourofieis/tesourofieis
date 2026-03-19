# Autoresearch: Calendar performance

## Objective
Optimize the liturgical calendar path in `lib/`, with primary focus on **cold generation cost** (`getCalendar(year)` when cache is cleared) while tracking hot-cache lookups separately.

## Metrics
- **Primary**: `total_ms` (ms, lower is better, cold path median)
- **Secondary**: `mean_ms`, `p90_ms`, `stddev_ms`, `hot_ms`, `checksum`

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
- Created deterministic benchmark + runner/check scripts; baseline: `total_ms=2685.842`.
- ✅ `MassManager.calcRank`: replaced repeated `parseLocalDate()` + loop checks with direct `yyyy-MM-dd` slice checks.
- ✅ `lib/utils.ts`: replaced date-fns `format/parse` with specialized local `yyyy-MM-dd` helpers.
- ✅ `MassManager`: precomputed/cached filtered collections (`easter`, `temporaSunday`, ember subsets, sancti classes) to avoid repeated `.filter()` scans.
- ✅ `MassManager.match`: rewrote hot-path branching to avoid per-call array wrapping.
- ✅ `MassManager.match` (array criteria): added `WeakMap`-cached ID sets for repeated criteria lists.
- ✅ `calendar.ts`: micro-optimizations in empty calendar build + sancti day month/day extraction.
- ✅ `getCalendar.ts`: added year-level `Calendar` instance cache and direct `Calendar.get(date)` access for `getCalendarDay`/`getSeason`.
- ❌ Discarded: shared `ConcurrencyResolver` singleton (no gain).
- ❌ Discarded: loop-based dedup rewrites in `calendar.ts` (regressed).
- ❌ Discarded: allocation-free tempora selection rewrite in `resolveConcurrency` (regressed).
- Prior workload became cache-hit dominant after `getCalendar` caching (`total_ms=0.079`), so benchmark was revised to measure cold path (cache cleared each repeat) and track `hot_ms` separately.
- Cold-path re-baseline after workload change: `total_ms=90.988`.
- ✅ Folded season assignment into `buildEmptyCalendar` (removed separate season pass).
- ✅ Cached parsed dates in `parseLocalDate`.
- ✅ Added rolling fallback anchor in `resolveConcurrency` for ferial fill-in, reducing repeated backward scans.
- ✅ Cached Holy Week Wednesday lookup in `BmvSaturdayRule` + precomputed Advent/Ember combined criteria in `AdventEmberDayRule`.
- ✅ Precomputed immutable criteria in multiple rules (Nativity/All Souls/Nativity Vigil & Octave/St. Matthias/Feb 27/Seven Sorrows).
- ✅ Added early short-circuit conflict checks in first/second class conflict rules.
- ❌ Discarded: `createMassWithDate` memoization (cache overhead regression).
- ❌ Discarded: weekday rolling replacement for anchor-day parse check.
- Current best cold-path metric: `total_ms=47.741` (hot cache metric remains ~`0.035-0.04ms`).
