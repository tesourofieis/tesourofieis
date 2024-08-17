import { ScrollViewStyleReset } from "expo-router/html";
import { type PropsWithChildren } from "react";

/**
 * This file is web-only and used to configure the root HTML for every web page during static rendering.
 * The contents of this function only run in Node.js environments and do not have access to the DOM or browser APIs.
 */
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Tesouro dos Fiéis</title>
        <link rel="canonical" href="https://tesourofieis.com/" />
        <link rel="sitemap" href="/sitemap-index.xml" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=G-CYLKZM1NJQ"
          defer
        ></script>
        <script type="text/partytown" defer></script>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="generator" content="Astro v4.12.3" />
        <meta name="generator" content="Starlight v0.25.3" />
        <meta property="og:title" content="Início" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="pt" />
        <meta
          property="og:description"
          content="Espaço dedicado à oração, exposição e preservação das santas tradições da Igreja."
        />
        <meta property="og:site_name" content="Tesouro dos Fiéis" />
        <meta
          name="description"
          content="Espaço dedicado à oração, exposição e preservação das santas tradições da Igreja."
        />
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
      </head>
      <body>{children}</body>
    </html>
  );
}
