import { readAndSplit } from "../util/read-split-parse.ts";
import { validatePasswordByMinMax, validatePasswordByCharPosition } from "./password-philosophy.ts";

const __dirname = new URL('.', import.meta.url).pathname;
const input = readAndSplit(`${__dirname}/input.txt`);

const part1Result = validatePasswordByMinMax(input);
console.log(`🌟 Part 1 Result - ${part1Result.length}`);

const part2Result = validatePasswordByCharPosition(input);
console.log(`🌟 Part 2 Result - ${part2Result.length}`);
