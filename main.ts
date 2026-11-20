// Deterministic news-image entry: copy the original poster to /output/entry.png.
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PNG_SIGNATURE = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const here = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(here, 'entry.png');
const destination = join(outputDir, 'entry.png');

const bytes = readFileSync(source);
if (!bytes.subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error('entry.png is not a PNG');
}
if (bytes.readUInt32BE(16) > 1024 || bytes.readUInt32BE(20) > 1024) {
  throw new Error('entry.png exceeds 1024 by 1024 pixels');
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);
