#!/usr/bin/env bash
set -euo pipefail

npx --yes tsx lib/tests/bench/calendar.perf.ts
