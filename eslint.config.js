const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ["dist/*"],
    rules: {
      quotes: ["off", "single", { allowTemplateLiterals: true }],
      "react/no-unescaped-entities": "off",
      "react/display-name": "off",
    },
  },
]);
