const readSplitAndParse = require("../util/read-split-parse");
const { calculateFromTwo, calculateFromThree } = require("./report-repair");

const input = readSplitAndParse('/day-1/input.txt', { parser: (val) => Number(val)})

const part1Result = calculateFromTwo(input)
console.log(`Part 1 Result - ${part1Result}`) // 1010884

const part2Result = calculateFromThree(input)
console.log(`Part 1 Result - ${part2Result}`) // 253928438
