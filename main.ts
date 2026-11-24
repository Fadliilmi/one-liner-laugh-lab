import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I didn't eat your sock. I adopted it. It lives under the couch now and pays rent in lint.";

const MAX_CHARS = 200;

function assertValid(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`Entry must be 1-${MAX_CHARS} characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("Entry must not be only white space");
  }
}

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";

assertValid(LINE);

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, OUTPUT_FILE), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(OUTPUT_DIR, OUTPUT_FILE)}`);
