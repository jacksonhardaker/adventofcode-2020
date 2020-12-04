import { readSplitAndParse } from "../util/read-split-parse.ts";
import { calculateFromThree, calculateFromTwo } from "./report-repair.ts";

const __dirname = new URL(".", import.meta.url).pathname;
const input = readSplitAndParse<number>(`${__dirname}/input.txt`, {
  parser: (value) => +value,
});

const part1Result = calculateFromTwo(input);
console.log(`🌟 Part 1 Result - ${part1Result}`);

const part2Result = calculateFromThree(input);
console.log(`🌟 Part 2 Result - ${part2Result}`);
