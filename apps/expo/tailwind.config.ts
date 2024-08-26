// @ts-expect-error - no types
import nativewind from "nativewind/preset";
import type { Config } from "tailwindcss";

import baseConfig from "@tesourofieis/tailwind-config/native";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: baseConfig.theme,
  presets: [baseConfig, nativewind],
} satisfies Config;
