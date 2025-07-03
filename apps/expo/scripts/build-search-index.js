const fs = require("fs");
const path = require("path");
const { globSync } = require("glob");
const Database = require("better-sqlite3");

function extractTextFromTSX(content) {
  const textMatches = [...content.matchAll(/<Text[^>]*>([\s\S]*?)<\/Text>/gs)];
  return textMatches
    .map((match) => {
      const text = match[1]
        .replace(/<[^>]+>/g, "")
        .replace(/{[^>]+}/g, "") // Remove JSX expressions
        .trim();
      return text;
    })
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractHeadings(content) {
  const headings = [];
  for (let i = 1; i <= 6; i++) {
    const matches = [
      ...content.matchAll(
        new RegExp(
          `<[^>]*className="[^"]*h${i}[^"]*"[^>]*>([\\s\\S]*?)<\\/[^>]+>`,
          "g"
        )
      ),
    ];
    matches.forEach((match) => {
      const text = match[1].replace(/<[^>]+>/g, "").trim();
      if (text) {
        headings.push({ level: i, text });
      }
    });
  }
  // Sort by heading level first, then by appearance (though regex match order might be good enough)
  return headings.sort((a, b) => a.level - b.level);
}

function extractComment(content) {
  const commentMatch = content.match(
    /<[^>]*className="[^"]*comment[^"]*"[^>]*>([\s\S]*?)<\/[^>]+>/
  );
  if (commentMatch) {
    const text = commentMatch[1].replace(/<[^>]+>/g, "").trim();
    return text || null;
  }
  return null;
}

function generateTitle(filePath, content) {
  // Match any heading tag <H1>, <H2>, ..., <H6> with a text prop
  const headingMatches = [...content.matchAll(/<H[1-6][^>]*text\s*=\s*(["'])(.*?)\1[^>]*\/>/gs)];
  for (const match of headingMatches) {
    const text = match[2].trim(); // Extract and trim the text prop
    if (text) {
      return text; // Return the first non-empty text
    }
  }

  // Fallback to file name processing if no suitable heading is found
  const fileName = path.basename(filePath, ".tsx");
  return (
    fileName
      .replace(/([A-Z])/g, " $1") // Add spaces before capital letters
      .replace(/[-_]/g, " ")       // Replace hyphens/underscores with spaces
      .replace(/\b\w/g, (l) => l.toUpperCase()) // Capitalize each word
      .trim() || "Sem título"      // Default to "Sem título" if empty
  );
}

function generateUrl(relativePath) {
  // Normalize the relative path to be a URL path
  return `/${relativePath}`;
}

// Function to determine if a file should be processed
function shouldProcessFile(file, baseDir, targetDirs) {
  const relative = path.relative(baseDir, file);
  // Ensure the file is within one of the target top-level directories
  const isInTargetDir = targetDirs.some((dir) =>
    relative.startsWith(`${dir}${path.sep}`)
  );
  const isLayout = path.basename(file) === "_layout.tsx";

  if (!isInTargetDir) {
    // console.log(`Ignorando ${file}: fora dos diretórios-alvo`); // Uncomment for verbose logging
    return false;
  }
  if (isLayout) {
    // console.log(`Ignorando ${file}: arquivo _layout.tsx`); // Uncomment for verbose logging
    return false;
  }
  return true;
}

// Main function to process a single file and extract its data
function processFile(file, baseDir) {
  try {
    const rawContent = fs.readFileSync(file, "utf-8");
    if (rawContent.trim().length < 100) {
      // console.log(`Ignorando ${file}: conteúdo muito curto`); // Uncomment for verbose logging
      return null;
    }

    // Determine the ID and URL based on relative path
    let relativePath = path.relative(baseDir, file).replace(/\\/g, "/"); // Normalize path separators for URL/ID

    // If it's an 'index.tsx', the path corresponds to its directory
    if (path.basename(file) === "index.tsx") {
      relativePath = path.dirname(relativePath);
    }
    relativePath = relativePath.replace(/\.tsx$/, ""); // Remove .tsx extension

    const id = relativePath; // Use relativePath as the unique ID
    const url = generateUrl(relativePath); // Generate URL

    const title = generateTitle(file, rawContent);
    const body = extractTextFromTSX(rawContent);
    const comment = extractComment(rawContent);
    const headings = extractHeadings(rawContent);

    // Derive section, levels, and parent_id from the ID/path
    const pathParts = id.split("/").filter(Boolean); // e.g., ['missal', 'sunday-readings', 'doc1']
    const section = pathParts.length > 0 ? pathParts[0] : null; // 'missal'
    const levels = pathParts.slice(0, -1); // ['missal', 'sunday-readings']
    const level = levels.length; // 2

    // Parent ID: the ID of the directory directly above this document/folder
    const parent = level > 0 ? pathParts.slice(0, level).join("/") : null; // 'missal/sunday-readings' if this is 'missal/sunday-readings/doc1'

    const result = {
      id,
      title,
      body: body || `${title} page content`, // Ensure body is not empty
      url,
      // tags: generateTags(relativePath), // You could re-add tags if needed for search or categorization
      section,
      levels, // Keep for potential use in UI for breadcrumbs/metadata
      level,
      parent, // This will be stored as parent_id in DB
    };

    if (comment) {
      result.comment = comment;
    }

    if (headings.length > 0) {
      result.headings = headings;
    }

    return result;
  } catch (error) {
    console.error(`Erro ao processar ${file}:`, error.message);
    return null;
  }
}

// --- Main Database Building Function ---
function buildDatabase() {
  console.log(
    "🔍 Iniciando indexação e construção do banco de dados SQLite..."
  );

  const targetDirs = ["canticos", "devocionario", "fe", "missal", "ritual"];
  const baseDir = "src/app";
  const dbPath = path.resolve("./assets/docs.db"); // Output database file

  // Ensure output directory exists
  const outDir = path.resolve("./assets");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Delete existing DB if it exists to ensure a clean build
  if (fs.existsSync(dbPath)) {
    fs.unlinkSync(dbPath);
    console.log(`🗑️ Removido banco de dados existente: ${dbPath}`);
  }

  // Open SQLite database connection
  const db = new Database(dbPath);
  db.pragma("journal_mode = WAL"); // Recommended for better performance

  // --- Create Tables ---
  db.exec(`
    CREATE TABLE IF NOT EXISTS docs (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      body TEXT NOT NULL,
      url TEXT NOT NULL UNIQUE,
      level INTEGER NOT NULL,
      section TEXT,
      parent_id TEXT, -- Foreign key if you had a separate folders table
      headings_json TEXT, -- Store as JSON string
      comment TEXT -- Store as TEXT, can be null
    );
  `);
  console.log("✅ Tabela 'docs' criada.");

  // --- Create FTS5 Table for Full-Text Search ---
  // Removed UNSTORED - this was the cause of the error.
  db.exec(`
    CREATE VIRTUAL TABLE docs_fts USING fts5(
      id,
      title,
      body,
      tokenize = 'unicode61 remove_diacritics 2',
      prefix = '2 3 4'
    );
  `);
  console.log("✅ Tabela virtual 'docs_fts' (FTS5) criada.");

  // Get all files
  let files = [];
  for (const pattern of targetDirs.map((dir) =>
    path.join(baseDir, dir, "**", "*.tsx")
  )) {
    // Use path.join for cross-platform compatibility
    const found = globSync(pattern, { cwd: process.cwd() }); // Ensure globSync runs from current working directory
    files = files.concat(found);
  }

  // Filter out unwanted files (e.g., _layout.tsx, files outside target dirs)
  files = [...new Set(files)].filter((file) =>
    shouldProcessFile(file, baseDir, targetDirs)
  );

  console.log(`📁 Total de arquivos TSX a processar: ${files.length}`);

  // Prepare insert statements outside the loop for performance
  const insertDocStmt = db.prepare(`
    INSERT INTO docs (id, title, body, url, level, section, parent_id, headings_json, comment)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
  `);
  const insertFTSStmt = db.prepare(`
    INSERT INTO docs_fts (id, title, body) VALUES (?, ?, ?);
  `);

  // Use a transaction for fast inserts
  db.transaction(() => {
    files.forEach((file, index) => {
      const doc = processFile(file, baseDir);
      if (doc) {
        // Log the processed document to check its structure
        // console.log(`Processing: ${doc.id}, Parent: ${doc.parent}, Level: ${doc.level}`);

        insertDocStmt.run(
          doc.id,
          doc.title,
          doc.body,
          doc.url,
          doc.level,
          doc.section,
          doc.parent, // Use the calculated parent ID
          doc.headings ? JSON.stringify(doc.headings) : null,
          doc.comment || null
        );
        insertFTSStmt.run(doc.id, doc.title, doc.body);
      }
      if ((index + 1) % 500 === 0 || index === files.length - 1) {
        console.log(
          `   Processados ${index + 1}/${files.length} documentos...`
        );
      }
    });
  })(); // Execute the transaction immediately

  console.log(
    `✅ Indexados ${
      db.prepare("SELECT COUNT(*) FROM docs").get()["COUNT(*)"]
    } documentos no SQLite.`
  );

  db.close();
  console.log(`📊 Banco de dados SQLite criado com sucesso em: ${dbPath}`);
}

// Run the build process
buildDatabase();
