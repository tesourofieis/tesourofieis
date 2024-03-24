import { defineConfig } from "vitest/config";
import codspeedPlugin from "@codspeed/vitest-plugin";

export default defineConfig({
  plugins: [codspeedPlugin()],
  test: {
    benchmark: {
      outputFile: "bench/report.json",
      reporters: "json",
    },
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
