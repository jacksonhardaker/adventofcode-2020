import { part1, part2 } from './handheld-halting.ts';

describe('Day 2 - Part 1', () => {
  test('example input has a result of 5', () => {
    const { accumulator } = part1([
      'nop +0',
      'acc +1',
      'jmp +4',
      'acc +3',
      'jmp -3',
      'acc -99',
      'acc +1',
      'jmp -4',
      'acc +6',
    ])

    expect(accumulator).toEqual(5)
  })
})

describe('Day 2 - Part 2', () => {
  test('example input has a result of 8', () => {
    const result = part2([
      'nop +0',
      'acc +1',
      'jmp +4',
      'acc +3',
      'jmp -3',
      'acc -99',
      'acc +1',
      'jmp -4',
      'acc +6',
    ])

    expect(result).toEqual(8)
  })
})
