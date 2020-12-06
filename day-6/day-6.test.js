import { part1, part2 } from './custom-customs.ts';


const input = 
`abc

a
b
c

ab
ac

a
a
a
a

b`.split('\n\n').map((i) => i.split('\n'));

describe('Day 2 - Part 1', () => {
  test('example input has result of 3 + 3 + 3 + 1 + 1 = 11', () => {
    const result = part1(input)

    expect(result).toEqual(11)
  })
})

describe('Day 2 - Part 2', () => {
  test('example input has result of 3 + 0 + 1 + 1 + 1 = 6', () => {
    const result = part2(input)

    expect(result).toEqual(6)
  })
})
