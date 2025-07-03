const fs = require("fs");
const path = require("path");
const { globSync } = require("glob");

function extractTextFromTSX(content) {
  const textMatches = [...content.matchAll(/<Text[^>]*>([\s\S]*?)<\/Text>/gs)];
  return textMatches
    .map((match) => {
      const text = match[1]
        .replace(/<[^>]+>/g, "")
        .replace(/{[^>]+}/g, "")
        .trim();
      return text;
    })
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function generateTitle(filePath, content) {
  const textMatches = [...content.matchAll(/<Text[^>]*>([\s\S]*?)<\/Text>/gs)];
  for (const match of textMatches) {
    const text = match[1].replace(/<[^>]+>/g, "").trim();
    return text;
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

function generateUrl(relativePath) {
  return `/${relativePath}`;
}

function generateTags(relativePath) {
  const pathParts = relativePath.split("/").filter(Boolean);
  const tags = [];

  // Add each parent folder as a tag
  for (let i = 0; i < pathParts.length - 1; i++) {
    tags.push(pathParts[i]);
  }

  // Add hierarchical tags for nested structure
  let currentPath = "";
  for (let i = 0; i < pathParts.length - 1; i++) {
    currentPath += (currentPath ? "/" : "") + pathParts[i];
    if (i > 0) {
      tags.push(currentPath.replace("/", ":"));
    }
  }

  return [...new Set(tags)];
}

function shouldProcessFile(file, baseDir, targetDirs) {
  const relative = path.relative(baseDir, file);
  const isInTargetDir = targetDirs.some((dir) =>
    relative.startsWith(dir + "/")
  );
  const isLayout = path.basename(file) === "_layout.tsx";

  if (!isInTargetDir) {
    console.log(`Ignorando ${file}: fora dos diretórios-alvo`);
    return false;
  }
  if (isLayout) {
    console.log(`Ignorando ${file}: arquivo _layout.tsx`);
    return false;
  }
  return true;
}

function processFile(file, baseDir) {
  try {
    const raw = fs.readFileSync(file, "utf-8");
    if (raw.trim().length < 100) {
      console.log(`Ignorando ${file}: conteúdo muito curto`);
      return null;
    }

    let relativePath = path
      .relative(baseDir, file)
      .replace(/\\/g, "/")
      .replace(/\.tsx$/, "");

    if (path.basename(file) === "index.tsx") {
      relativePath = path.dirname(relativePath);
    }

    const title = generateTitle(file, raw);
    const body = extractTextFromTSX(raw);
    const url = generateUrl(relativePath);
    const tags = generateTags(relativePath);
    const pathParts = relativePath.split("/").filter(Boolean);
    const section = pathParts[0];
    const levels = pathParts.slice(0, -1);
    const level = levels.length;
    const parent = level > 0 ? levels.join("/") : null;

    return {
      id: relativePath,
      title,
      body: body || `${title} page content`,
      url,
      tags,
      section,
      levels,
      level,
      parent,
    };
  } catch (error) {
    console.error(`Erro ao processar ${file}:`, error);
    return null;
  }
}

function buildIndex() {
  console.log("🔍 Iniciando indexação...");
  console.log("Diretório atual:", process.cwd());

  const targetDirs = ["canticos", "devocionario", "fe", "missal", "ritual"];
  const baseDir = "src/app";
  const patterns = targetDirs.map((dir) => `${baseDir}/${dir}/**/*.tsx`);

  if (!fs.existsSync(baseDir)) {
    console.error(`❌ ${baseDir}/ não existe`);
    return;
  }

  console.log(`${baseDir}/ existe, conteúdos:`, fs.readdirSync(baseDir));
  targetDirs.forEach((dir) => {
    const dirPath = path.join(baseDir, dir);
    if (fs.existsSync(dirPath)) {
      console.log(
        `${dirPath}/ existe, conteúdos:`,
        fs.readdirSync(dirPath).slice(0, 10)
      );
    } else {
      console.warn(`⚠️ ${dirPath}/ não existe`);
    }
  });

  let files = [];
  for (const pattern of patterns) {
    const found = globSync(pattern);
    console.log(`Padrão "${pattern}": encontrou ${found.length} arquivos`);
    files = files.concat(found);
  }

  files = [...new Set(files)].filter((file) =>
    shouldProcessFile(file, baseDir, targetDirs)
  );

  console.log(`📁 Total de arquivos TSX após filtragem: ${files.length}`);

  const index = files
    .map((file) => processFile(file, baseDir))
    .filter((doc) => doc !== null);

  const outDir = path.resolve("./assets");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  try {
    fs.writeFileSync(
      path.join(outDir, "search-index.json"),
      JSON.stringify(index, null, 2),
      "utf-8"
    );
    console.log(
      `✅ Indexados ${index.length} documentos → ${path.join(
        outDir,
        "search-index.json"
      )}`
    );
    console.log(`📊 Amostra de entradas:`);
    index.slice(0, 3).forEach((doc) => {
      console.log(
        `   ${doc.id}: "${doc.title}" (${doc.url}) [${doc.tags.join(", ")}]`
      );
    });
  } catch (error) {
    console.error("Erro ao gravar o índice:", error);
  }
}

buildIndex();
