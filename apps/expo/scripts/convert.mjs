import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { glob } from 'glob';

const convertHeadings = async (directory) => {
  const files = await glob(`${directory}/**/*.{ts,tsx}`, { ignore: '**/node_modules/**' });
  
  for (const file of files) {
    try {
      const content = readFileSync(file, 'utf-8');
      const converted = convertFileContent(content);
      
      if (converted !== content) {
        writeFileSync(file, converted);
        console.log(`Converted: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
};

const convertFileContent = (content) => {
  const usedHeadings = new Set();
  
  // Check which headings are used in this file
  const headingPatterns = [
    { level: 1, regex: /<Text\s+className="h1[^"]*"[^>]*>/g },
    { level: 2, regex: /<Text\s+className="h2[^"]*"[^>]*>/g },
    { level: 3, regex: /<Text\s+className="h3[^"]*"[^>]*>/g },
    { level: 4, regex: /<Text\s+className="h4[^"]*"[^>]*>/g },
    { level: 5, regex: /<Text\s+className="h5[^"]*"[^>]*>/g },
    { level: 6, regex: /<Text\s+className="h6[^"]*"[^>]*>/g }
  ];
  
  for (const pattern of headingPatterns) {
    if (pattern.regex.test(content)) {
      usedHeadings.add(pattern.level);
    }
  }
  
  if (usedHeadings.size === 0) {
    return content;
  }
  
  // Add imports only for used headings
  const componentsToImport = Array.from(usedHeadings)
    .sort()
    .map(level => `H${level}`)
    .join(', ');
  
  const importStatement = `import { ${componentsToImport} } from "~/components/Headings";\n`;
  
  if (!content.includes('from "~/components/Headings"')) {
    const lines = content.split('\n');
    const lastImportIndex = lines.findIndex((line, index) => 
      line.startsWith('import') && 
      (index === lines.length - 1 || !lines[index + 1].startsWith('import'))
    );
    
    if (lastImportIndex >= 0) {
      lines.splice(lastImportIndex + 1, 0, importStatement);
      content = lines.join('\n');
    } else {
      content = importStatement + content;
    }
  }
  
  // Convert heading patterns
  const conversionPatterns = [
    { level: 1, regex: /<Text\s+className="h1[^"]*"[^>]*>\s*([^<]+(?:\s*\n\s*[^<]+)*)\s*<\/Text>/g },
    { level: 2, regex: /<Text\s+className="h2[^"]*"[^>]*>\s*([^<]+(?:\s*\n\s*[^<]+)*)\s*<\/Text>/g },
    { level: 3, regex: /<Text\s+className="h3[^"]*"[^>]*>\s*([^<]+(?:\s*\n\s*[^<]+)*)\s*<\/Text>/g },
    { level: 4, regex: /<Text\s+className="h4[^"]*"[^>]*>\s*([^<]+(?:\s*\n\s*[^<]+)*)\s*<\/Text>/g },
    { level: 5, regex: /<Text\s+className="h5[^"]*"[^>]*>\s*([^<]+(?:\s*\n\s*[^<]+)*)\s*<\/Text>/g },
    { level: 6, regex: /<Text\s+className="h6[^"]*"[^>]*>\s*([^<]+(?:\s*\n\s*[^<]+)*)\s*<\/Text>/g }
  ];
  
  for (const pattern of conversionPatterns) {
    content = content.replace(pattern.regex, (match, textContent) => {
      const cleanText = textContent.replace(/\s+/g, ' ').trim();
      return `<H${pattern.level} text="${cleanText}" />`;
    });
  }
  
  return content;
};

// Run the conversion
convertHeadings('src/app/').then(() => {
  console.log('Conversion complete!');
});
