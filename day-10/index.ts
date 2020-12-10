import { readSplitAndParse } from "../util/read-split-parse.ts";
import { part1, part2 } from "./adapter-array.ts";

const __dirname = new URL('.', import.meta.url).pathname;
const input = readSplitAndParse<number>(`${__dirname}/input.txt`, {
  parser: (value) => +value,
});

const part1Result = part1(input);
console.log(`🌟 Part 1 Result - ${part1Result}`);

const part2Result = part2(input);
console.log(`🌟 Part 2 Result - ${part2Result}`);
