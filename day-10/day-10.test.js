import { part1, part2, getJoltage } from './adapter-array.ts';

describe('Day 2 - Part 1', () => {
  test('example input has results', () => {
    const result = getJoltage([
      16,
      10,
      15,
      5,
      1,
      11,
      7,
      19,
      6,
      12,
      4,
    ])

    expect(result.jolts1).toEqual(7)
    expect(result.jolts2).toEqual(0)
    expect(result.jolts3).toEqual(5)
  })

  test('example input has results', () => {
    const result = getJoltage([
      28,
      33,
      18,
      42,
      31,
      14,
      46,
      20,
      48,
      47,
      24,
      23,
      49,
      45,
      19,
      38,
      39,
      11,
      1,
      32,
      25,
      35,
      8,
      17,
      7,
      9,
      4,
      2,
      34,
      10,
      3,
    ])

    expect(result.jolts1).toEqual(22)
    expect(result.jolts2).toEqual(0)
    expect(result.jolts3).toEqual(10)
  })
})

describe('Day 2 - Part 2', () => {
  test('example input has x result', () => {
    const result = part2([
    ])

    expect(result).toEqual(undefined)
  })
})
