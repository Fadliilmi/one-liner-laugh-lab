import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I didn't eat your sock. I adopted it. It lives under the couch now and pays rent in lint.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
