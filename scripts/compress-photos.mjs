import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PEOPLE_DIR = path.join("public", "team", "people");
const MAX_EDGE = 800;
const JPEG_QUALITY = 78;
const SKIP_UNDER_BYTES = 220 * 1024;
const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function listImages(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error && error.code === "ENOENT") return [];
    throw error;
  }

  return entries
    .filter((entry) => entry.isFile() && IMAGE_EXT.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => path.join(dir, entry.name));
}

async function compressFile(file) {
  const before = (await stat(file)).size;
  if (before <= SKIP_UNDER_BYTES) {
    return { file, before, after: before, skipped: true };
  }

  const image = sharp(file, { failOn: "none" }).rotate();
  const buffer = await image
    .resize(MAX_EDGE, MAX_EDGE, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
    .toBuffer();

  if (buffer.length >= before) {
    return { file, before, after: before, skipped: true };
  }

  await writeFile(file, buffer);
  return { file, before, after: buffer.length, skipped: false };
}

const files = await listImages(PEOPLE_DIR);
if (files.length === 0) {
  console.log(`No headshots in ${PEOPLE_DIR}`);
  process.exit(0);
}

let saved = 0;
for (const file of files) {
  const result = await compressFile(file);
  const kb = (bytes) => `${(bytes / 1024).toFixed(0)}KB`;
  if (result.skipped) {
    console.log(`skip  ${file} (${kb(result.before)})`);
    continue;
  }
  saved += result.before - result.after;
  console.log(`ok    ${file}  ${kb(result.before)} -> ${kb(result.after)}`);
}

console.log(`saved ${(saved / 1024 / 1024).toFixed(1)}MB`);
