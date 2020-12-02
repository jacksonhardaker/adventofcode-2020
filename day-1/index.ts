import { readSplitAndParseAsNumber } from "../util/read-split-parse.ts";
import { calculateFromThree, calculateFromTwo } from "./report-repair.ts";

const input = readSplitAndParseAsNumber("./day-1/input.txt");

const part1Result = calculateFromTwo(input);
console.log(`🌟 Part 1 Result - ${part1Result}`); // 1010884

const part2Result = calculateFromThree(input);
console.log(`🌟 Part 2 Result - ${part2Result}`); // 253928438
