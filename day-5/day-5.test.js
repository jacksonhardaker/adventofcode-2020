import { parseRow, parseColumn, calculateSeat, part1, part2 } from './binary-boarding.ts';

describe('Day 2 - Part 1', () => {

  test.each([
    ['FBFBBFF', 44]
  ])("parseRow is called with %s and returns %i", (input, expected) => {
    expect(parseRow(input)).toEqual(expected);
  });

  test.each([
    ['RLR', 5]
  ])("parseSeat is called with %s and returns %i", (input, expected) => {
    expect(parseColumn(input)).toEqual(expected);
  })

  test.each([
    ['FBFBBFFRLR', 44, 5, 357],
    ['BFFFBBFRRR', 70, 7, 567],
    ['FFFBBBFRRR', 14, 7, 119],
    ['BBFFBBFRLL', 102, 4, 820],
  ])('calculateSeat is called with %s and returns a row of %i and column of %i and an id of %i', (input, row, col, id) => {
    const result = calculateSeat(input);
  
    expect(result.row).toEqual(row);
    expect(result.column).toEqual(col);
    expect(result.id).toEqual(id);

  })
})

describe.skip('Day 2 - Part 2', () => {
  test('example input has x result', () => {
    const result = part2([
    ])

    expect(result).toEqual(undefined)
  })
})
