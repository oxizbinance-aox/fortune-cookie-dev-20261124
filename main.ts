// Fortune Cookie Wisdom for Developers
// Writes one original fortune-cookie line to /output/entry.txt.
// Deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: proverbial, true about dev life (every senior has cursed
// legacy code), with a fresh turn — the villain is your younger self.
// One balanced sentence, 63 characters, no trailing newline.
const FORTUNE =
  "The legacy code you curse was written by a younger, braver you.";

// Guard the gate: the entry must stay within 1-120 characters.
if ([...FORTUNE].length > 120 || FORTUNE.trim().length === 0) {
  throw new Error("Fortune line violates the 1-120 character gate.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
