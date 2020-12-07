import { part1, part2 } from './handy-haversacks.ts';

describe('Day 2 - Part 1', () => {
  test('example input has the result 4', () => {
    const result = part1([
      'light red bags contain 1 bright white bag, 2 muted yellow bags.',
      'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
      'bright white bags contain 1 shiny gold bag.',
      'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
      'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
      'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
      'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
      'faded blue bags contain no other bags.',
      'dotted black bags contain no other bags.',
    ])

    expect(result).toEqual(4)
  })
})

describe('Day 2 - Part 2', () => {
  test('example input has x result', () => {
    const result = part2([
    ])

    expect(result).toEqual(undefined)
  })
})
