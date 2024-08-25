import starlightPlugin from "@astrojs/starlight-tailwind";

import baseConfig from "@tesourofieis/tailwind-config/base";

/** @type {import('tailwindcss').Config} */
export default {
  content: [...baseConfig.content, "../../packages/ui/src/*.{ts,tsx}"],
  presets: [baseConfig],
  theme: baseConfig.theme,
  plugins: [starlightPlugin()],
};
