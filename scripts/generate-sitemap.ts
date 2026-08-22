import { readdirSync, statSync, writeFileSync } from "fs";
import { join } from "path";

const baseUrl = "https://tesourofieis.com";
const appDir = join(process.cwd(), "src/app");
const publicDir = join(process.cwd(), "public");

type RouteConfig = {
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
};

const routeConfigs = new Map<string, RouteConfig>([["/", { changefreq: "daily", priority: 1.0 }]]);

function getRoutes(dir: string, base = ""): string[] {
  const routes: string[] = [];
  const files = readdirSync(dir);

  for (const file of files) {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);

    if (stat.isDirectory() && !file.startsWith("_") && !file.startsWith("[")) {
      routes.push(...getRoutes(fullPath, `${base}/${file}`));
    } else if (file === "index.tsx" || file === "index.ts") {
      routes.push(base || "/");
    } else if (
      (file.endsWith(".tsx") || file.endsWith(".ts")) &&
      !file.startsWith("_") &&
      !file.startsWith("[") &&
      !file.startsWith("+")
    ) {
      const route = `${base}/${file.replace(/\.(tsx|ts)$/, "")}`;
      routes.push(route);
    }
  }

  return routes;
}

function generateSitemap(routes: string[]): string {
  const lastmod = new Date().toISOString().split("T")[0];

  const urls = routes
    .map((route) => {
      const config = routeConfigs.get(route) ?? {
        changefreq: "weekly",
        priority: 0.7,
      };

      return `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

const routes = getRoutes(appDir).sort();
const sitemap = generateSitemap(routes);
const outputPath = join(publicDir, "sitemap.xml");

writeFileSync(outputPath, sitemap, "utf-8");
console.log(`Generated sitemap.xml with ${routes.length} routes at ${outputPath}`);

if (routes.length < 50) {
  console.log("\nRoutes:");
  routes.forEach((r) => console.log(`  ${baseUrl}${r}`));
}
