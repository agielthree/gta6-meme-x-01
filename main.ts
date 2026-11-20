// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry itself is the X post named in POST.json: a GTA 6 meme carrying
// the make.fun ghost, posted from a public account with a make.fun link,
// an @makefunai tag and the entrant's play code. The house reads the post
// from X and judges the meme there, so this program has exactly one job:
// hand POST.json over to the grader by copying it from the repository
// directory into the output directory.
//
// Local run (mirrors the grader, with /bot and /output replaced):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR: string = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR: string = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath: string = join(BOT_DIR, 'POST.json');
const targetPath: string = join(OUTPUT_DIR, 'POST.json');

let raw: string;
try {
  raw = readFileSync(sourcePath, 'utf8');
} catch (err) {
  console.error(`Could not read ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

let post: { url?: unknown };
try {
  post = JSON.parse(raw) as { url?: unknown };
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof post.url !== 'string' || !post.url.startsWith('https://x.com/')) {
  console.error('POST.json has no valid X post URL in its "url" field.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(targetPath, raw);
console.log(`Wrote ${targetPath} for ${post.url}`);
