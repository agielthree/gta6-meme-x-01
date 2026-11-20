// gta6-meme-x-01 — make.fun bounty entry point.
//
// The graded artifact is not produced by this script: it is the X post
// whose URL lives in POST.json — a GTA 6 meme carrying the make.fun
// ghost, posted from the entrant's public account, tagged @makefunai,
// with a make.fun link and the entrant's play code in the post. The
// grader reads the post directly from X, so this script has one job
// only: pass POST.json along, reading it from the bot directory and
// writing it unchanged into the output directory.
//
// Run it locally the same way the grader runs it (paths swapped):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir: string = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const inputFile: string = join(botDir, 'POST.json');
const outputFile: string = join(outputDir, 'POST.json');

let contents: string;
try {
  contents = readFileSync(inputFile, 'utf8');
} catch (error) {
  console.error(`Unable to read ${inputFile}: ${(error as Error).message}`);
  process.exit(1);
}

let entry: { url?: unknown };
try {
  entry = JSON.parse(contents) as { url?: unknown };
} catch (error) {
  console.error(`POST.json is not valid JSON: ${(error as Error).message}`);
  process.exit(1);
}

const postUrlPattern = /^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/\d+$/;

if (typeof entry.url !== 'string' || !postUrlPattern.test(entry.url)) {
  console.error(
    'POST.json "url" must look like https://x.com/<handle>/status/<numeric id>.',
  );
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, contents);
console.log(`Copied ${outputFile} — post: ${entry.url}`);
