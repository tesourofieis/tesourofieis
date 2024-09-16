import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Tesouro dos Fiéis",
  description:
    "Espaço dedicado à oração, exposição e preservação das santas tradições da Igreja.",
  slug: "tesourofieis",
  scheme: "com.tesourofieis.app",
  platforms: ["android", "web", "ios"],
  githubUrl: "https://github.com/tesourofieis/tesourofieis",
  version: "0.3.2",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  userInterfaceStyle: "automatic",
  notification: {
    icon: "./assets/images/notifications.png",
  },
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "cover",
    backgroundColor: "#1d2021",
  },
  updates: {
    enabled: true,
    fallbackToCacheTimeout: 0,
    url: "https://u.expo.dev/22ae55e2-5e39-4f06-ad1a-3f96776bdc75",
  },
  runtimeVersion: {
    policy: "appVersion",
  },
  assetBundlePatterns: ["**/*"],
  androidStatusBar: {
    backgroundColor: "#111111",
    barStyle: "dark-content",
  },
  android: {
    versionCode: 23,
    package: "com.tesourofieis.app",
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#1d2021",
    },
  },
  ios: {
    bundleIdentifier: "com.tesourofieis.com",
  },
  web: {
    favicon: "./assets/images/favicon128.png",
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
  plugins: ["expo-router", "expo-font", "expo-notifications"],
});
