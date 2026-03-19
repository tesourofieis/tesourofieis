#!/usr/bin/env bash
set -euo pipefail

LOG_FILE="$(mktemp)"

if ! npx vitest run lib/tests/calendar --reporter=dot >"$LOG_FILE" 2>&1; then
  tail -80 "$LOG_FILE"
  rm -f "$LOG_FILE"
  exit 1
fi

rm -f "$LOG_FILE"
