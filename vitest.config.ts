import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    watch: false,
    coverage: {
      provider: "v8",
      include: ["src/lib/**/*"],
      exclude: ["src/lib/resources"],
      reporter: ["text", "json-summary", "json"],
      all: true,
    },
  },
});
