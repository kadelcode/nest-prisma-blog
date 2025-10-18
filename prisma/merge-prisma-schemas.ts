import fs from 'fs';
import path from 'path';

const prismaDir = path.resolve(__dirname);
const outputFile = path.join(prismaDir, 'schema.prisma');

const base = fs.readFileSync(path.join(prismaDir, 'base.prisma'), 'utf8');
const files = fs
  .readdirSync(prismaDir)
  .filter(
    (file) =>
      file.endsWith('.prisma') &&
      file !== 'base.prisma' &&
      file !== 'schema.prisma',
  );

let merged = base + '\n\n';
for (const file of files) {
  const content = fs.readFileSync(path.join(prismaDir, file), 'utf8');
  merged += `// --- ${file} ---\n\n${content}\n\n`;
}

fs.writeFileSync(outputFile, merged);
console.log(`✅ Merged ${files.length} schema files into schema.prisma`);
