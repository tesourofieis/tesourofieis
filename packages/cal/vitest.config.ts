import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [],
  test: {
    watch: false,
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary", "json"],
      all: true,
    },
  },
});
