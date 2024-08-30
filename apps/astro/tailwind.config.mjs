import starlightPlugin from "@astrojs/starlight-tailwind";

import baseConfig from "@tesourofieis/tailwind-config/web";

/** @type {import('tailwindcss').Config} */
export default {
  content: baseConfig.content,
  presets: [baseConfig],
  theme: baseConfig.theme,
  plugins: [starlightPlugin()],
};
