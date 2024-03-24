import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.tesourofieis.app",
  appName: "Tesouro dos Fiéis",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
