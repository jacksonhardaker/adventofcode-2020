import { readSplitAndParse } from "../util/read-split-parse.ts";
import { part1, part2 } from "./passport-processing.ts";

const parser = (value: string): Array<string> => {
  return value.split(/\s+/).filter((attr) => !!attr);
};

const __dirname = new URL(".", import.meta.url).pathname;
const input = readSplitAndParse(
  `${__dirname}/input.txt`,
  { delimiter: "\n\n", parser },
);

const part1Result = part1(input);
console.log(`🌟 Part 1 Result - ${part1Result.length}`);

// const part2Result = part2(input);
// console.log(`🌟 Part 2 Result - ${part2Result}`);
