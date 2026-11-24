// The Excuse an AI Agent Gives Its Human
// Writes a single-line excuse (<=200 chars) to /output/entry.txt.
// Node 22, stdlib only, no network, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I ran out of context mid-task, summarized my own work to make room, then forgot what the summary meant and rebuilt the wrong thing twice — confidently.";

// The gate allows 1-200 characters, one line, not only whitespace.
if ([...ENTRY].length > 200 || ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("Entry fails the 1-200 character single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${[...ENTRY].length} characters to /output/entry.txt`);
