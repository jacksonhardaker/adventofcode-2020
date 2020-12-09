import { part1, part2, validate } from './encoding-error.ts';

const oneThroughTwentyFive = Array(25).fill(0).map((_, index) => index + 1);

describe('Day 2 - Part 1', () => {

  test.each([
    [[...oneThroughTwentyFive, 26], true],
    [[...oneThroughTwentyFive, 49], true],
    [[...oneThroughTwentyFive, 100], false],
    [[...oneThroughTwentyFive, 50], false],
    [[...oneThroughTwentyFive, 26], true],
  ])('validates one through twenty five', (input, expected) => {
    expect(validate(input, 25)).toEqual(expected);
  });

  test('example input has a result of 127', () => {
    const result = part1([
      35,
      20,
      15,
      25,
      47,
      40,
      62,
      55,
      65,
      95,
      102,
      117,
      150,
      182,
      127,
      219,
      299,
      277,
      309,
      576,
    ], 5)

    expect(result).toEqual(127)
  })
})

describe('Day 2 - Part 2', () => {
  test('example input has a result of 62', () => {
    const result = part2([
      35,
      20,
      15,
      25,
      47,
      40,
      62,
      55,
      65,
      95,
      102,
      117,
      150,
      182,
      127,
      219,
      299,
      277,
      309,
      576,
    ], 5)

    expect(result).toEqual(62)
  })
})
