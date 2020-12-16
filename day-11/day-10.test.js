import { part1, part2 } from './seating-system.ts';

describe('Day 2 - Part 1', () => {
  test('example input has 37 occupied seats', () => {
    const result = part1([
      'L.LL.LL.LL',
      'LLLLLLL.LL',
      'L.L.L..L..',
      'LLLL.LL.LL',
      'L.LL.LL.LL',
      'L.LLLLL.LL',
      '..L.L.....',
      'LLLLLLLLLL',
      'L.LLLLLL.L',
      'L.LLLLL.LL',
    ].map((val) => val.split('')))

    expect(result.endState).toEqual([
      '#.#L.L#.##',
      '#LLL#LL.L#',
      'L.#.L..#..',
      '#L##.##.L#',
      '#.#L.LL.LL',
      '#.#L#L#.##',
      '..L.L.....',
      '#L#L##L#L#',
      '#.LLLLLL.L',
      '#.#L#L#.##',
    ].map((val) => val.split('')))
    expect(result.occupiedSeats).toEqual(37)
  })
})

describe('Day 2 - Part 2', () => {
  test('example input has 26 occupied seats', () => {
    const result = part2([
      'L.LL.LL.LL',
      'LLLLLLL.LL',
      'L.L.L..L..',
      'LLLL.LL.LL',
      'L.LL.LL.LL',
      'L.LLLLL.LL',
      '..L.L.....',
      'LLLLLLLLLL',
      'L.LLLLLL.L',
      'L.LLLLL.LL',
    ].map((val) => val.split('')))

    expect(result.endState).toEqual([
      '#.L#.L#.L#',
      '#LLLLLL.LL',
      'L.L.L..#..',
      '##L#.#L.L#',
      'L.L#.LL.L#',
      '#.LLLL#.LL',
      '..#.L.....',
      'LLL###LLL#',
      '#.LLLLL#.L',
      '#.L#LL#.L#',
    ].map((val) => val.split('')))
    expect(result.occupiedSeats).toEqual(26)
  })
})
