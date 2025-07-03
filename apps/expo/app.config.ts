import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Tesouro dos Fiéis",
  description:
    "Espaço dedicado à oração, exposição e preservação das santas tradições da Igreja.",
  slug: "tesourofieis",
  scheme: "com.tesourofieis.app",
  newArchEnabled: true,
  platforms: ["android", "web", "ios"],
  githubUrl: "https://github.com/tesourofieis/tesourofieis",
  version: "0.5.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  userInterfaceStyle: "automatic",
  notification: {
    icon: "./assets/images/notifications.png",
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
  android: {
    versionCode: 23,
    package: "com.tesourofieis.app",
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#1d2021",
    },
    intentFilters: [
      {
        action: "VIEW",
        autoVerify: true,
        data: [
          {
            scheme: "https",
            host: "tesourofieis.com",
            pathPrefix: "/",
          },
        ],
        category: ["BROWSABLE", "DEFAULT"],
      },
    ],
  },
  ios: {
    bundleIdentifier: "com.tesourofieis.com",
    icon: {
      dark: "./assets/images/ios-dark.png",
      light: "./assets/images/ios-light.png",
      tinted: "./assets/images/ios-tinted.png",
    },
    associatedDomains: ["applinks:tesourofieis.com"],
    userInterfaceStyle: "automatic",
    supportsTablet: true,
    config: {
      usesNonExemptEncryption: false,
    },
  },
  web: {
    favicon: "./assets/images/favicon128.png",
    web: {
      bundler: "metro",
      output: "static",
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
    ["expo-sqlite", { enableFTS: true }],
    "expo-notifications",
    "expo-secure-store",
    [
      "expo-splash-screen",
      {
        backgroundColor: "#eee6d9",
        image: "./assets/images/splash-icon-light.png",
        dark: {
          image: "./assets/images/splash-icon-dark.png",
          backgroundColor: "#1d2021",
        },
      },
    ],
    [
      "expo-asset",
      {
        assets: [
          "./assets/images/station1.png",
          "./assets/images/station2.png",
          "./assets/images/station3.png",
          "./assets/images/station4.png",
          "./assets/images/station5.png",
          "./assets/images/station6.png",
          "./assets/images/station7.png",
          "./assets/images/station8.png",
          "./assets/images/station9.png",
          "./assets/images/station10.png",
          "./assets/images/station11.png",
          "./assets/images/station12.png",
          "./assets/images/station13.png",
          "./assets/images/station14.png",
          "./assets/images/station14.png",
          "./assets/images/cross.png",
          "./assets/images/1.jpeg",
          "./assets/images/angelus.jpg",
        ],
      },
    ],
    [
      "expo-dev-launcher",
      {
        launchMode: "most-recent",
      },
    ],
  ],
});
