import { readAndSplit } from "../util/read-split-parse.ts";
import { findTreesByRight3Down1, part2 } from "./toboggan-trajectory.ts";

const input = readAndSplit("./day-3/input.txt");

const part1Result = findTreesByRight3Down1(input);
console.log(`🌟 Part 1 Result - ${part1Result}`);

const part2Result = part2(input);
console.log(`🌟 Part 2 Result - ${part2Result}`);
