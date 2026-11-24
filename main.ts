import * as fs from "node:fs";
import * as path from "node:path";

// The entry line below must stay byte-for-byte (single line, no trailing newline).
const LINE =
  "I quit. The printer has jammed for the last time, and frankly, so have I.";

function writeEntry(): void {
  const outDir = "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, { encoding: "utf8" });
}

writeEntry();
