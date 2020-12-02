const readSplitAndParse = require("../util/read-split-parse");
const { calculate } = require("./report-repair");

const input = readSplitAndParse('/day-1/input.txt', { parser: (val) => Number(val)})

const part1Result = calculate(input)
console.log(`Part 1 Result - ${part1Result}`)

