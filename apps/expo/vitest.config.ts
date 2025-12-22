import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    watch: false,
    environment: "edge-runtime",
    server: { deps: { inline: ["convex-test"] } },
  },
});
