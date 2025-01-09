import { promises as fs } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function extractMetadata(filePath) {
  try {
    const content = await fs.readFile(filePath, "utf-8");

    const titleMatch =
      content.match(/<h1[^>]*>(.*?)<\/h1>/i) || content.match(/# (.*?)(\n|$)/);

    const descriptionMatch =
      content.match(/<h2[^>]*>(.*?)<\/h2>/i) || content.match(/## (.*?)(\n|$)/);

    if (!titleMatch) return null;

    const title = titleMatch[1].trim();
    const description = descriptionMatch ? descriptionMatch[1].trim() : null;

    // Adjust the link to include src/app prefix
    const link = filePath
      .replace(/\\/g, "/")
      .replace(/^.*\/\(docs\)/, "")
      .replace(/\.(mdx?|jsx?|tsx?)$/, "")
      .toLowerCase();

    return { title, description, link };
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return null;
  }
}

async function scanDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const sidebar = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.name.startsWith(".") || entry.name === "node_modules") {
      continue;
    }

    if (entry.isDirectory()) {
      const subItems = await scanDirectory(fullPath);
      sidebar.push(...subItems);
    } else if (
      !entry.name.startsWith("index.") &&
      !entry.name.startsWith("_") && // Skip files starting with underscore
      /\.(mdx?|jsx?|tsx?)$/.test(entry.name)
    ) {
      const metadata = await extractMetadata(fullPath);
      if (metadata) {
        sidebar.push(metadata);
      }
    }
  }

  return sidebar;
}

async function generateSidebar() {
  try {
    // Set root directory to src/app
    const rootDir = join(__dirname, "src", "app");
    const sidebar = await scanDirectory(rootDir);
    sidebar.sort((a, b) => a.title.localeCompare(b.title));

    const output = `export const sidebar = ${JSON.stringify(
      sidebar,
      null,
      2,
    )} as const;\n`;
    await fs.writeFile(join(__dirname, "src", "sidebar.ts"), output);

    console.log(`Generated sidebar with ${sidebar.length} items`);
    return sidebar;
  } catch (error) {
    console.error("Error generating sidebar:", error);
    throw error;
  }
}

// Only run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSidebar().catch(console.error);
}

export { generateSidebar };
