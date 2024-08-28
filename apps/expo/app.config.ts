import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "tesourofieis",
  slug: "tesourofieis",
  scheme: "com.tesourofieis.app",
  version: "0.3.0",
  orientation: "portrait",
  icon: "./assets/images/favicon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/icon.png",
    resizeMode: "contain",
    backgroundColor: "#1d2021",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    bundleIdentifier: "com.tesourofieis.app",
    supportsTablet: true,
  },
  android: {
    versionCode: 21,
    package: "com.tesourofieis.app",
    adaptiveIcon: {
      foregroundImage: "./assets/images/favicon.png",
      backgroundColor: "#1d2021",
    },
  },
  extra: {
    eas: {
      projectId: "22ae55e2-5e39-4f06-ad1a-3f96776bdc75",
    },
  },
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  plugins: [
    "expo-router",
    [
      "expo-font",
      {
        fonts: [
          "./assets/fonts/SpaceMono-Regular.ttf",
          "./assets/fonts/GoudyBookletter1911.otf",
          "./assets/fonts/EBGaramond-VariableFont_wght.ttf",
          "./assets/fonts/BerkshireSwash-Regular.ttf",
        ],
      },
    ],
  ],
});
