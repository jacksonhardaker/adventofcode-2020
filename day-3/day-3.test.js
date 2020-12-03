import { findTreesByRight3Down1, part2 } from './toboggan-trajectory.ts'

describe('Day 2 - Part 1', () => {
  test('example input encounters 7 trees', () => {
    const result = findTreesByRight3Down1([
      '..##.......',
      '#...#...#..',
      '.#....#..#.',
      '..#.#...#.#',
      '.#...##..#.',
      '..#.##.....',
      '.#.#.#....#',
      '.#........#',
      '#.##...#...',
      '#...##....#',
      '.#..#...#.#',
    ])

    expect(result).toEqual(7)
  })
})

describe('Day 2 - Part 2', () => {
  test('example input returns 1 valid passwords, abcde', () => {
    const result = part2([
      '..##.......',
      '#...#...#..',
      '.#....#..#.',
      '..#.#...#.#',
      '.#...##..#.',
      '..#.##.....',
      '.#.#.#....#',
      '.#........#',
      '#.##...#...',
      '#...##....#',
      '.#..#...#.#',
    ])
  })
})
