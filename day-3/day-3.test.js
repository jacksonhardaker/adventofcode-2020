import { findTreesByRight3Down1, multiRouteFindTreesAndMultiply } from './toboggan-trajectory.ts'

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
  test('example input returns 336 as multiple of ecountered trees across paths', () => {
    const result = multiRouteFindTreesAndMultiply([
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

    expect(result).toEqual(336)
  })
})
