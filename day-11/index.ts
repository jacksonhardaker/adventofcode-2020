import { readSplitAndParse } from "../util/read-split-parse.ts";
import { part1, part2 } from "./seating-system.ts";

const __dirname = new URL('.', import.meta.url).pathname;
const input = readSplitAndParse(`${__dirname}/input.txt`, {
  parser: (value: string): string[] => value.split("")
});

const part1Result = part1(input);
console.log(`🌟 Part 1 Result - ${part1Result.occupiedSeats}`);

const part2Result = part2(input);
console.log(`🌟 Part 2 Result - ${part2Result.occupiedSeats}`);
