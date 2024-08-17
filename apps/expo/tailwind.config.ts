import type { Config } from "tailwindcss";
// @ts-expect-error - no types
import nativewind from "nativewind/preset";

import baseConfig from "@tesourofieis/tailwind-config/base";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: baseConfig.theme,
  presets: [baseConfig, nativewind],
} satisfies Config;
