import { readSplitAndParse } from "../util/read-split-parse.ts";
import { part1, part2 } from "./custom-customs.ts";

const __dirname = new URL(".", import.meta.url).pathname;
const input = readSplitAndParse<string[]>(`${__dirname}/input.txt`, {
  delimiter: "\n\n",
  parser: (group) => group.split("\n").filter((g) => !!g),
});

const part1Result = part1(input);
console.log(`🌟 Part 1 Result - ${part1Result}`);

const part2Result = part2(input);
console.log(`🌟 Part 2 Result - ${part2Result}`);
