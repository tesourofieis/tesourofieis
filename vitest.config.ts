import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    watch: false,
    coverage: {
      provider: "v8",
      include: ["src/lib/**/*"],
      exclude: ["src/lib/resources"],
      reporter: ["json-summary"],
      all: true,
    },
  },
});
