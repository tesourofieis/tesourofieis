import { ScrollViewStyleReset } from "expo-router/html";
import type { PropsWithChildren } from "react";

/**
 * This file is web-only and used to configure the root HTML for every web page during static rendering.
 * The contents of this function only run in Node.js environments and do not have access to the DOM or browser APIs.
 */
export default function PageRoot({ children }: PropsWithChildren) {
  return (
    <html lang="pt">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Tesouro dos Fiéis</title>
        <meta
          name="description"
          content="Espaço dedicado à oração, exposição e preservação das santas tradições da Igreja."
        />
        <meta property="og:title" content="Tesouro dos Fiéis" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Espaço dedicado à oração, exposição e preservação das santas tradições da Igreja."
        />
        <meta property="og:site_name" content="Tesouro dos Fiéis" />
        <link rel="canonical" href="https://tesourofieis.com/" />
        <link rel="sitemap" href="/sitemap.xml" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=G-CYLKZM1NJQ"
          async
        />
        <script type="text/partytown">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CYLKZM1NJQ');
          `}
        </script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <meta property="og:image" content="https://tesourofieis.com/og.png" />
        <meta
          property="twitter:image"
          content="https://tesourofieis.com/og.png"
        />
        <meta
          name="og:url"
          property="og:url"
          content="https://tesourofieis.com"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tesouro dos Fiéis" />
        <meta name="twitter:image:alt" content="Tesouro dos Fiéis" />
        <meta name="twitter:site" content="@tesourofieis" />
        <meta name="twitter:creator" content="@tesourofieis" />
        <meta name="twitter:domain" content="https://tesourofieis.com" />
        <meta
          name="keywords"
          content="Espaço dedicado à oração, exposição e preservação das santas tradições da Igreja"
        />
        <meta name="author" content="Tesouro dos Fiéis" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#32302f" />

        {/* Google Fonts Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <style>
          {`
            /* Critical CSS for instant first paint */
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', serif;
              background-color: #eee6d9;
              color: #262624;
            }
            
            /* Font loading fallbacks */
            @font-face {
              font-family: 'Cardo_400Regular';
              font-display: swap;
              src: local('Cardo'), local('Cardo Regular');
            }
            
            @font-face {
              font-family: 'Cardo_700Bold';
              font-display: swap;
              src: local('Cardo'), local('Cardo Bold');
            }
            
            @font-face {
              font-family: 'DMSerifDisplay_400Regular';
              font-display: swap;
              src: local('DM Serif Display'), local('DMSerifDisplay-Regular');
            }
            
            @font-face {
              font-family: 'DMSerifDisplay_400Regular_Italic';
              font-display: swap;
              src: local('DM Serif Display'), local('DMSerifDisplay-Italic');
            }
            
            @font-face {
              font-family: 'DMSerifText_400Regular';
              font-display: swap;
              src: local('DM Serif Text'), local('DMSerifText-Regular');
            }
          `}
        </style>

        <script>
          {`
            // Enhanced service worker registration for PWA notifications
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', async () => {
                try {
                  // Register the main Expo/Workbox service worker
                  const registration = await navigator.serviceWorker.register('/sw.js', {
                    scope: '/'
                  });
                  
                  console.log('🚀 Tesouro dos Fiéis SW registered:', registration.scope);
                  
                  // Wait for service worker to be ready
                  await navigator.serviceWorker.ready;
                  console.log('✅ Service Worker ready for notifications');
                  
                  // Listen for service worker updates
                  registration.addEventListener('updatefound', () => {
                    console.log('🔄 Service Worker update found');
                    const newWorker = registration.installing;
                    if (newWorker) {
                      newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                          console.log('🆕 New Service Worker ready');
                          // Could show update notification here
                        }
                      });
                    }
                  });
                  
                  // Handle messages from service worker
                  navigator.serviceWorker.addEventListener('message', (event) => {
                    console.log('📨 Message from SW:', event.data);
                    
                    if (event.data?.type === 'NOTIFICATION_CLICK') {
                      const { url } = event.data;
                      if (url && url !== window.location.pathname) {
                        window.location.href = url;
                      }
                    }
                  });
                  
                } catch (error) {
                  console.error('❌ SW registration failed:', error);
                }
              });
            } else {
              console.log('❌ Service Worker not supported');
            }
          `}
        </script>

        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  );
}
