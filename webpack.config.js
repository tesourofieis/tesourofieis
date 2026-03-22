const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      // Enable Workbox + Expo SW configuration for proper PWA support
      offline: true,
    },
    argv,
  );

  // Add custom service worker handling for notifications
  if (config.plugins) {
    // Find the Workbox plugin and customize it
    const workboxPlugin = config.plugins.find((plugin) => plugin.constructor.name === "GenerateSW");

    if (workboxPlugin) {
      // Enhance the Workbox configuration for notifications
      workboxPlugin.config = {
        ...workboxPlugin.config,
        // Add notification handling capabilities
        runtimeCaching: [
          ...(workboxPlugin.config.runtimeCaching || []),
          {
            urlPattern: /^https:\/\/tesourofieis\.com\//,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "tesouro-cache",
            },
          },
        ],
        // Add notification service worker features
        importScripts: [
          // Import our custom notification handling
          "/notification-sw.js",
        ],
      };
    }
  }

  return config;
};
