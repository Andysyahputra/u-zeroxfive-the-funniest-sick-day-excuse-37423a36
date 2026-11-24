import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, under 200 characters: a sick-day excuse that is half
// believable, with a concrete detail and the laugh landing at the end.
const ENTRY =
  "My smartwatch says my heart rate hit 190 while I was asleep, so I'm spending today finding out whether I'm dying or just haunted.";

const outDir = "/output";

// Gate check: mirror the sealed gate so a bad line fails loudly here
// instead of silently shipping an invalid entry.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n") ||
  ENTRY.includes("\r")
) {
  throw new Error(
    `entry fails the gate: ${ENTRY.length} chars, must be a single non-blank line of 1-200 characters`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
