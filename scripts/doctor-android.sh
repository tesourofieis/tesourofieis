#!/usr/bin/env bash

set -euo pipefail

required_commands=(java node bun adb)
missing_commands=()

for command_name in "${required_commands[@]}"; do
  if ! command -v "$command_name" >/dev/null 2>&1; then
    missing_commands+=("$command_name")
  fi
done

if ((${#missing_commands[@]} > 0)); then
  echo "Missing commands: ${missing_commands[*]}" >&2
  echo "Install the Arch Android SDK packages, then run 'mise run setup' again." >&2
  exit 1
fi

java_major="$(java -version 2>&1 | sed -n '1s/.*version "\([0-9]*\).*/\1/p')"
if [[ "$java_major" != "17" ]]; then
  echo "Expected mise-managed Java 17, found Java ${java_major:-unknown}." >&2
  echo "Ensure 'mise activate' runs after other PATH changes in your shell." >&2
  exit 1
fi

required_sdk_paths=(
  "platforms/android-36/android.jar"
  "build-tools/36.0.0/aapt2"
  "cmake/3.22.1/bin/cmake"
  "ndk/27.1.12297006/ndk-build"
  "platform-tools/adb"
)
missing_sdk_packages=()

for sdk_path in "${required_sdk_paths[@]}"; do
  if [[ ! -e "$ANDROID_SDK_ROOT/$sdk_path" ]]; then
    missing_sdk_packages+=("$sdk_path")
  fi
done

if ((${#missing_sdk_packages[@]} > 0)); then
  echo "Missing Android SDK files:" >&2
  printf '  %s\n' "${missing_sdk_packages[@]}" >&2
  echo "Install them with sdkmanager, then rerun 'mise run doctor'." >&2
  exit 1
fi

printf 'Java:   %s\n' "$(java -version 2>&1 | head -n 1)"
printf 'Node:   %s\n' "$(node --version)"
printf 'Bun:    %s\n' "$(bun --version)"
printf 'ADB:    %s\n' "$(adb version | head -n 1)"
printf 'SDK:    %s\n' "$ANDROID_SDK_ROOT"
echo "Android development environment is ready."
