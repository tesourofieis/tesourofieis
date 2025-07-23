import * as fs from "fs";
import * as path from "path";
import { globSync } from "glob";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { docs } from "~/db/schema";
import type { Docs } from "~/app/(tabs)/more";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

interface ParsedContentSegment {
  type: "text" | "heading" | "comment";
  content: string;
  index: number;
  level?: number;
  length?: number;
}

function extractTextFromNestedTags(content: string): string[] {
  const textContents: string[] = [];
  let startIndex = 0;

  while (startIndex < content.length) {
    const openTag = content.indexOf("<Text", startIndex);
    if (openTag === -1) break;

    const tagEnd = content.indexOf(">", openTag);
    if (tagEnd === -1) break;

    // Find the matching closing tag by counting nested tags
    let depth = 1;
    let currentIndex = tagEnd + 1;
    let textContent = "";

    while (currentIndex < content.length && depth > 0) {
      const nextOpen = content.indexOf("<Text", currentIndex);
      const nextClose = content.indexOf("</Text>", currentIndex);

      if (nextClose === -1) break;

      if (nextOpen !== -1 && nextOpen < nextClose) {
        // Found nested opening tag
        textContent += content.substring(currentIndex, nextOpen);
        depth++;
        currentIndex = content.indexOf(">", nextOpen) + 1;
      } else {
        // Found closing tag
        textContent += content.substring(currentIndex, nextClose);
        depth--;
        currentIndex = nextClose + 7; // Skip '</Text>'
      }
    }

    if (depth === 0) {
      const cleanContent = textContent
        .replace(/<[^>]+>/g, "")
        .replace(/{[^}]+}/g, "")
        .trim();

      if (cleanContent) {
        textContents.push(cleanContent);
      }
    }

    startIndex = currentIndex;
  }

  return textContents;
}

function parseRawContentToSegments(rawContent: string): ParsedContentSegment[] {
  const segments: ParsedContentSegment[] = [];
  const headingTags = ["H1", "H2", "H3", "H4", "H5", "H6"];

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
        length: match[0].length,
        level: parseInt(tag.substring(1), 10),
      }));
    })
    .sort((a, b) => a.index - b.index);

  const commentMatch = rawContent.match(
    /<[^>]*className="[^"]*comment[^"]*"[^>]*>([\s\S]*?)<\/[^>]+>/
  );
  const commentSegment: ParsedContentSegment | null = commentMatch
    ? {
        type: "comment",
        content: commentMatch[1].replace(/<[^>]+>/g, "").trim(),
        index: commentMatch.index!,
        length: commentMatch[0].length,
      }
    : null;

  const allStructuralElements: ParsedContentSegment[] = [
    ...headingMatches,
    ...(commentSegment ? [commentSegment] : []),
  ].sort((a, b) => a.index! - b.index!);

  let lastIndex = 0;

  for (const structuralElement of allStructuralElements) {
    if (structuralElement.index! > lastIndex) {
      const textChunk = rawContent.substring(
        lastIndex,
        structuralElement.index!
      );

      const extractedTexts = extractTextFromNestedTags(textChunk);

      if (extractedTexts.length > 0) {
        segments.push({
          type: "text",
          content: extractedTexts.join(" ").replace(/\s+/g, " ").trim(),
          index: lastIndex,
        });
      }
    }

    segments.push(structuralElement);
    lastIndex = structuralElement.index! + structuralElement.length!;
  }

  if (lastIndex < rawContent.length) {
    const textChunk = rawContent.substring(lastIndex);
    const extractedTexts = extractTextFromNestedTags(textChunk);

    if (extractedTexts.length > 0) {
      segments.push({
        type: "text",
        content: extractedTexts.join(" ").replace(/\s+/g, " ").trim(),
        index: lastIndex,
      });
    }
  }

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

function buildDocumentContent(rawContent: string): Docs["content"] {
  const parsedSegments = parseRawContentToSegments(rawContent);

  const content: Docs["content"] = {
    introduction: undefined,
    headings: [],
    comment: undefined,
  };

  let currentHeadingBody: string[] = [];
  let inIntroduction = true;

  parsedSegments.forEach((segment) => {
    if (segment.type === "heading") {
      if (inIntroduction && currentHeadingBody.length > 0) {
        content.introduction = currentHeadingBody.join(" ").trim();
        if (content.introduction === "") content.introduction = undefined;
      }
      inIntroduction = false;

      if (content.headings.length > 0) {
        content.headings[content.headings.length - 1].body = currentHeadingBody
          .join(" ")
          .trim();
      }

      const baseId = slugify(segment.content);
      const uniqueId =
        baseId +
        (content.headings.filter((h) => h.id.startsWith(baseId)).length > 0
          ? `-${content.headings.filter((h) => h.id.startsWith(baseId)).length}`
          : "");

      content.headings.push({
        title: segment.content,
        id: uniqueId,
        level: segment.level!,
        body: "",
      });
      currentHeadingBody = [];
    } else if (segment.type === "text") {
      currentHeadingBody.push(segment.content);
    } else if (segment.type === "comment") {
      content.comment = segment.content;
    }
  });

  if (content.headings.length > 0) {
    content.headings[content.headings.length - 1].body = currentHeadingBody
      .join(" ")
      .trim();
  } else if (currentHeadingBody.length > 0 && inIntroduction) {
    content.introduction = currentHeadingBody.join(" ").trim();
    if (content.introduction === "") content.introduction = undefined;
  }

  content.headings.sort((a, b) => a.level - b.level);

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

    const isFolder = path.basename(file) === "index.tsx";

    if (isFolder) {
      relativePath = path.dirname(relativePath);
    }
    relativePath = relativePath.replace(/\.tsx$/, "");

    const id: string = relativePath;
    const url: string = generateUrl(relativePath);

    const title: string = generateTitle(file, rawContent);
    const documentContent = buildDocumentContent(rawContent);

    const pathParts: string[] = id.split("/").filter(Boolean);
    const section: string | null = pathParts.length > 0 ? pathParts[0] : null;
    const levels: string[] = pathParts.slice(0, -1);
    const level: number = levels.length;
    const parent: string | null =
      level > 0 ? pathParts.slice(0, level).join("/") : null;

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

function buildDatabase(): void {
  console.log("🔍 Iniciando indexação e construção do banco de dados...");

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

  const sqlite = new Database(dbPath);
  const db = drizzle(sqlite);

  sqlite.exec(`
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

  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS settings (
      font_size TEXT NOT NULL DEFAULT "normal",
      angelus_enabled INTEGER NOT NULL DEFAULT 1,
      mass_enabled INTEGER NOT NULL DEFAULT 1,
      novena_enabled INTEGER NOT NULL DEFAULT 1,
      office_enabled INTEGER NOT NULL DEFAULT 0,
      permission_requested INTEGER NOT NULL DEFAULT 0,
      permission_soft_rejected INTEGER NOT NULL DEFAULT 0
    );
  `);

  sqlite.exec(`
    CREATE VIRTUAL TABLE docs_fts USING fts5(
      id,
      title,
      search_body,
      tokenize = 'unicode61 remove_diacritics 2',
      prefix = '2 3 4'
    );
  `);

  sqlite.exec(`
    INSERT INTO settings (
      font_size,
      angelus_enabled,
      mass_enabled,
      novena_enabled,
      office_enabled,
      permission_requested,
      permission_soft_rejected
    ) VALUES ('normal', 1, 1, 1, 0, 0, 0);
  `);

  console.log("✅ Tabelas docs, settings e docs_fts criadas");

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

  const processedDocs: Docs[] = [];

  files.forEach((file) => {
    const doc = processFile(file, baseDir);
    if (doc) processedDocs.push(doc);
  });

  sqlite.transaction(() => {
    processedDocs.forEach((doc, index) => {
      const fullSearchableBody = [
        doc.content.introduction,
        ...doc.content.headings.map((h) => `${h.title} ${h.body}`),
        doc.content.comment,
      ]
        .filter(Boolean)
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();

      db.insert(docs)
        .values({
          id: doc.id,
          title: doc.title,
          url: doc.url,
          level: doc.level,
          section: doc.section,
          parent: doc.parent,
          hasChildren: doc.hasChildren,
          contentJson: JSON.stringify(doc.content),
        })
        .run();

      sqlite
        .prepare(
          `INSERT INTO docs_fts (id, title, search_body) VALUES (?, ?, ?)`
        )
        .run(doc.id, doc.title, fullSearchableBody);

      if ((index + 1) % 500 === 0 || index === processedDocs.length - 1) {
        console.log(
          `   Processados ${index + 1}/${processedDocs.length} documentos...`
        );
      }
    });
  })();

  const docCount = db.select().from(docs).all().length;
  console.log(`✅ Indexados ${docCount} documentos no SQLite.`);

  sqlite.close();
  console.log(`📊 Banco de dados SQLite criado com sucesso em: ${dbPath}`);
}

buildDatabase();
