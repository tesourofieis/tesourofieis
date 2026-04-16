const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  {
    ignores: [
      "dist/**",
      ".expo/**",
      "android/**",
      "ios/**",
      "assets/docs.json",
      "assets/search-index.json",
    ],
  },
  expoConfig,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "react/display-name": "off",
    },
  },
]);
