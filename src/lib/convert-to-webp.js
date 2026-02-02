import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.resolve(
  __dirname,
  "../../public/images/projects/fall-25/vexFALL25",
);

const backupDir = path.join(dir, "_originals");

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
}

for (const file of fs.readdirSync(dir)) {
  if (!/\.(png|jpe?g)$/i.test(file)) continue;

  const input = path.join(dir, file);
  const output = path.join(dir, file.replace(/\.(png|jpe?g)$/i, ".webp"));

  try {
    await sharp(input)
      .resize(400, 400, { fit: "inside" })
      .webp({ quality: 80 })
      .toFile(output);

    // MOVE instead of delete (Windows-safe)
    fs.renameSync(input, path.join(backupDir, file));

    console.log(`✔ ${file} → ${path.basename(output)} (moved original)`);
  } catch (err) {
    console.error(`✖ Failed on ${file}`, err);
  }
}
