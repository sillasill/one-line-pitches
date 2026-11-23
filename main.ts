import { mkdirSync, writeFileSync } from "node:fs";

const PITCH = "Just describe your app idea in plain words and an AI agent on make.fun builds it for you: no coding, no cost to try, and the idea you have been carrying around finally becomes a real app you can use.";

if (PITCH.length < 1 || PITCH.length > 240) throw new Error("pitch must be 1 to 240 characters");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
