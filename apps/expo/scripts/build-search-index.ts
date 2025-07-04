import * as fs from "fs";
import * as path from "path";
import { globSync } from "glob";
import Database from "better-sqlite3";

// Import the canonical Docs and SubHeading types
import type { Docs, SubHeading } from "~/app/(tabs)/more"; // Adjust path as needed

// Utility function for slugifying text
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// --------------------------- Content Extraction Functions ---------------------------

interface ParsedContentSegment {
  type: "text" | "heading" | "comment";
  content: string; // The extracted text/title
  index: number; // Start index in the rawContent
  level?: number; // For headings
  id?: string; // For headings
  length?: number; // Added length to simplify calculation in loop
}

function parseRawContentToSegments(rawContent: string): ParsedContentSegment[] {
  const segments: ParsedContentSegment[] = [];
  const headingTags = ["H1", "H2", "H3", "H4", "H5", "H6"];

  // Find all JSX <Text> elements (This part was actually fine before as it was already spread)
  const allTextMatches = [
    ...rawContent.matchAll(/<Text[^>]*>([\s\S]*?)<\/Text>/gs),
  ].map((match) => ({
    type: "text" as const,
    content: match[1]
      .replace(/<[^>]+>/g, "")
      .replace(/{[^>]+}/g, "")
      .trim(),
    index: match.index!,
    length: match[0].length, // Added length here
  }));

  // Find all Hn elements
  const headingMatches = headingTags
    .flatMap((tag) => {
      const regex = new RegExp(
        `<${tag}[^>]*text\\s*=\\s*(["'])(.*?)\\1[^>]*\\/>`,
        "gs"
      );
      return [...rawContent.matchAll(regex)].map((match) => ({
        type: "heading" as const,
        content: match[2].trim(),
        index: match.index!,
        length: match[0].length, // Added length here
        level: parseInt(tag.substring(1), 10),
      }));
    })
    .sort((a, b) => a.index - b.index);

  // Find the comment element
  const commentMatch = rawContent.match(
    /<[^>]*className="[^"]*comment[^"]*"[^>]*>([\s\S]*?)<\/[^>]+>/
  );
  const commentSegment: ParsedContentSegment | null = commentMatch
    ? {
        type: "comment",
        content: commentMatch[1].replace(/<[^>]+>/g, "").trim(),
        index: commentMatch.index!,
        length: commentMatch[0].length, // Added length here
      }
    : null;

  // Combine all found structural elements (headings, comments) and sort them by their start index
  const allStructuralElements: ParsedContentSegment[] = [
    ...headingMatches,
    ...(commentSegment ? [commentSegment] : []),
  ].sort((a, b) => a.index! - b.index!); // Add ! for non-null assertion on index

  let lastIndex = 0; // Tracks position in rawContent

  for (const structuralElement of allStructuralElements) {
    // Add any plain text content that precedes this structural element
    if (structuralElement.index! > lastIndex) {
      // ! for non-null assertion
      const textChunk = rawContent.substring(
        lastIndex,
        structuralElement.index!
      ); // ! for non-null assertion
      const extractedTexts = [
        // <<< ADDED SPREAD OPERATOR HERE
        ...textChunk.matchAll(/<Text[^>]*>([\s\S]*?)<\/Text>/gs),
      ]
        .map((match) =>
          match[1]
            .replace(/<[^>]+>/g, "")
            .replace(/{[^>]+}/g, "")
            .trim()
        )
        .filter(Boolean);

      if (extractedTexts.length > 0) {
        segments.push({
          type: "text",
          content: extractedTexts.join(" ").replace(/\s+/g, " ").trim(),
          index: lastIndex,
        });
      }
    }

    segments.push(structuralElement);
    lastIndex = structuralElement.index! + structuralElement.length!; // ! for non-null assertion
  }

  // Add any remaining plain text content after the last structural element
  if (lastIndex < rawContent.length) {
    const textChunk = rawContent.substring(lastIndex);
    const extractedTexts = [
      // <<< ADDED SPREAD OPERATOR HERE
      ...textChunk.matchAll(/<Text[^>]*>([\s\S]*?)<\/Text>/gs),
    ]
      .map((match) =>
        match[1]
          .replace(/<[^>]+>/g, "")
          .replace(/{[^>]+}/g, "")
          .trim()
      )
      .filter(Boolean);

    if (extractedTexts.length > 0) {
      segments.push({
        type: "text",
        content: extractedTexts.join(" ").replace(/\s+/g, " ").trim(),
        index: lastIndex,
      });
    }
  }

  // Final cleanup and consolidation of consecutive text segments
  const consolidatedSegments: ParsedContentSegment[] = [];
  let currentTextContent: string = "";

  segments.forEach((segment) => {
    if (segment.type === "text") {
      currentTextContent += (currentTextContent ? " " : "") + segment.content;
    } else {
      if (currentTextContent) {
        consolidatedSegments.push({
          type: "text",
          content: currentTextContent.trim(),
          index: -1,
          length: currentTextContent.length,
        });
        currentTextContent = "";
      }
      consolidatedSegments.push(segment);
    }
  });
  if (currentTextContent) {
    consolidatedSegments.push({
      type: "text",
      content: currentTextContent.trim(),
      index: -1,
      length: currentTextContent.length,
    });
  }

  return consolidatedSegments;
}

// This function now builds the structured 'content' object for Docs
function buildDocumentContent(rawContent: string): Docs["content"] {
  // Return type is specific to the 'content' field of Docs
  const parsedSegments = parseRawContentToSegments(rawContent);

  const content: Docs["content"] = {
    introduction: undefined,
    headings: [],
    comment: undefined,
  };

  let currentHeadingBody: string[] = []; // Collects text for the current heading's body
  let inIntroduction = true; // True until the first heading is found

  parsedSegments.forEach((segment, index) => {
    if (segment.type === "heading") {
      // If we were collecting introduction text
      if (inIntroduction && currentHeadingBody.length > 0) {
        content.introduction = currentHeadingBody.join(" ").trim();
        if (content.introduction === "") content.introduction = undefined; // Remove empty intro
      }
      inIntroduction = false; // First heading found, no longer in intro

      // Add the collected body text to the *previous* heading
      if (content.headings.length > 0) {
        content.headings[content.headings.length - 1].body = currentHeadingBody
          .join(" ")
          .trim();
      }

      // Generate unique ID for this heading
      const baseId = slugify(segment.content);
      // Ensure unique ID across all headings, use overall count as suffix if needed
      const uniqueId =
        baseId +
        (content.headings.filter((h) => h.id.startsWith(baseId)).length > 0
          ? `-${content.headings.filter((h) => h.id.startsWith(baseId)).length}`
          : "");

      content.headings.push({
        title: segment.content,
        id: uniqueId,
        level: segment.level!, // ! because we know it's a heading
        body: "", // Will be filled by subsequent text segments
      });
      currentHeadingBody = []; // Reset for the new heading
    } else if (segment.type === "text") {
      currentHeadingBody.push(segment.content);
    } else if (segment.type === "comment") {
      content.comment = segment.content;
    }
  });

  // After iterating all segments, add any remaining body text to the LAST heading
  if (content.headings.length > 0) {
    content.headings[content.headings.length - 1].body = currentHeadingBody
      .join(" ")
      .trim();
  } else if (currentHeadingBody.length > 0 && inIntroduction) {
    // If no headings found, all text is introduction
    content.introduction = currentHeadingBody.join(" ").trim();
    if (content.introduction === "") content.introduction = undefined;
  }

  // Sort headings to ensure H1s come before H2s, etc. (though parsing order helps)
  content.headings.sort((a, b) => {
    // Primary sort by appearance (if needed based on `match.index` from parseRawContentToSegments)
    // Secondary sort by level
    return a.level - b.level; // Or combine with original position if stored in SubHeading
  });

  return content;
}

function generateTitle(filePath: string, content: string): string {
  const headingMatches = [
    ...content.matchAll(/<H[1-6][^>]*text\s*=\s*(["'])(.*?)\1[^>]*\/>/gs),
  ];
  if (headingMatches.length > 0) {
    const primaryTitle = headingMatches[0][2].trim();
    if (primaryTitle) return primaryTitle;
  }

  const fileName = path.basename(filePath, ".tsx");
  return (
    fileName
      .replace(/([A-Z])/g, " $1")
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase())
      .trim() || "Sem título"
  );
}

function generateUrl(relativePath: string): string {
  return `/${relativePath}`;
}

// --------------------------- File Processing & Database Build ---------------------------

function shouldProcessFile(
  file: string,
  baseDir: string,
  targetDirs: string[]
): boolean {
  const relative: string = path.relative(baseDir, file);
  const isInTargetDir: boolean = targetDirs.some((dir) =>
    relative.startsWith(`${dir}${path.sep}`)
  );
  const isLayout: boolean = path.basename(file) === "_layout.tsx";

  return isInTargetDir && !isLayout;
}

function processFile(file: string, baseDir: string): Docs | null {
  try {
    const rawContent: string = fs.readFileSync(file, "utf-8");
    if (rawContent.trim().length < 100) {
      console.log(`Ignorando ${file}: conteúdo muito curto`);
      return null;
    }

    let relativePath: string = path.relative(baseDir, file).replace(/\\/g, "/");

    // Determine if this is a folder (index.tsx) or file
    const isFolder = path.basename(file) === "index.tsx";

    if (isFolder) {
      relativePath = path.dirname(relativePath);
    }
    relativePath = relativePath.replace(/\.tsx$/, "");

    const id: string = relativePath;
    const url: string = generateUrl(relativePath);

    const title: string = generateTitle(file, rawContent);
    const documentContent = buildDocumentContent(rawContent);

    // Derive section, levels, and parent from the ID/path
    const pathParts: string[] = id.split("/").filter(Boolean);
    const section: string | null = pathParts.length > 0 ? pathParts[0] : null;
    const levels: string[] = pathParts.slice(0, -1);
    const level: number = levels.length;
    const parent: string | null =
      level > 0 ? pathParts.slice(0, level).join("/") : null;

    // A folder (index.tsx) has children, a regular file does not
    const hasChildren = isFolder;

    const result: Docs = {
      id,
      title,
      url,
      level,
      levels,
      section,
      parent,
      hasChildren,
      content: documentContent,
    };

    return result;
  } catch (error: any) {
    console.error(`Erro ao processar ${file}:`, error.message);
    return null;
  }
}

// --- Main Database Building Function ---
function buildDatabase(): void {
  console.log(
    "🔍 Iniciando indexação e construção do banco de dados SQLite..."
  );

  const targetDirs: string[] = [
    "canticos",
    "devocionario",
    "fe",
    "missal",
    "ritual",
  ];
  const baseDir: string = "src/app";
  const dbPath: string = path.resolve("./assets/docs.db");

  const outDir: string = path.resolve("./assets");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  if (fs.existsSync(dbPath)) {
    fs.unlinkSync(dbPath);
    console.log(`🗑️ Removido banco de dados existente: ${dbPath}`);
  }

  const db: Database.Database = new Database(dbPath);
  db.pragma("journal_mode = WAL");

  db.exec(`
    CREATE TABLE IF NOT EXISTS docs (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      url TEXT NOT NULL UNIQUE,
      level INTEGER NOT NULL,
      section TEXT,
      parent TEXT,
      hasChildren INTEGER NOT NULL,
      content_json TEXT NOT NULL
    );
  `);
  console.log("✅ Tabela 'docs' criada.");

  db.exec(`
    CREATE VIRTUAL TABLE docs_fts USING fts5(
      id,
      title,
      search_body,
      tokenize = 'unicode61 remove_diacritics 2',
      prefix = '2 3 4'
    );
  `);
  console.log("✅ Tabela virtual 'docs_fts' (FTS5) criada.");

  let files: string[] = [];
  for (const pattern of targetDirs.map((dir) =>
    path.join(baseDir, dir, "**", "*.tsx")
  )) {
    const found: string[] = globSync(pattern, { cwd: process.cwd() });
    files = files.concat(found);
  }

  files = [...new Set(files)].filter((file) =>
    shouldProcessFile(file, baseDir, targetDirs)
  );

  console.log(`📁 Total de arquivos TSX a processar: ${files.length}`);

  // Prepare insert statements
  const insertDocStmt = db.prepare(
    `INSERT INTO docs (id, title, url, level, section, parent, hasChildren, content_json)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?);`
  );
  const insertFTSStmt = db.prepare(
    `INSERT INTO docs_fts (id, title, search_body) VALUES (?, ?, ?);`
  );

  db.transaction(() => {
    const docs: Docs[] = [];

    files.forEach((file) => {
      const doc = processFile(file, baseDir);
      if (doc) docs.push(doc);
    });

    docs.forEach((doc, index) => {
      const fullSearchableBody = [
        doc.content.introduction,
        ...doc.content.headings.map((h) => `${h.title} ${h.body}`),
        doc.content.comment,
      ]
        .filter(Boolean)
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();

      insertDocStmt.run(
        doc.id,
        doc.title,
        doc.url,
        doc.level,
        doc.section || null,
        doc.parent || null,
        doc.hasChildren ? 1 : 0,
        JSON.stringify(doc.content)
      );

      insertFTSStmt.run(doc.id, doc.title, fullSearchableBody);

      if ((index + 1) % 500 === 0 || index === docs.length - 1) {
        console.log(`   Processados ${index + 1}/${docs.length} documentos...`);
      }
    });
  })();

  const docCountResult: { "COUNT(*)": number } = db
    .prepare("SELECT COUNT(*) FROM docs")
    .get() as { "COUNT(*)": number };
  console.log(
    `✅ Indexados ${docCountResult["COUNT(*)"]} documentos no SQLite.`
  );

  db.close();
  console.log(`📊 Banco de dados SQLite criado com sucesso em: ${dbPath}`);
}

buildDatabase();
