import { readAndSplit } from "../util/read-split-parse.ts";
import { findTreesByRight3Down1, multiRouteFindTreesAndMultiply } from "./toboggan-trajectory.ts";

const input = readAndSplit("./day-3/input.txt");

const part1Result = findTreesByRight3Down1(input);
console.log(`🌟 Part 1 Result - ${part1Result}`);

const part2Result = multiRouteFindTreesAndMultiply(input);
console.log(`🌟 Part 2 Result - ${part2Result}`);
