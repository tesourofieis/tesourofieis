import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    watch: false,
    environment: "edge-runtime",
    exclude: ["node_modules", "e2e"],
  },
});
