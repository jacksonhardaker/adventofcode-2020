import { readAndSplit } from "../util/read-split-parse.ts";
import { validatePasswordByMinMax, validatePasswordByCharPosition } from "./password-philosophy.ts";

const input = readAndSplit("./day-2/input.txt");

const part1Result = validatePasswordByMinMax(input);
console.log(`🌟 Part 1 Result - ${part1Result.length}`); // 582

const part2Result = validatePasswordByCharPosition(input);
console.log(`🌟 Part 2 Result - ${part2Result.length}`); // 729
