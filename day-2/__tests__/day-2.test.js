import { validatePasswordByMinMax, validatePasswordByCharPosition } from '../password-philosophy.ts'

describe('Day 2 - Part 1', () => {
  test('example input returns 2 valid passwords', () => {
    const result = validatePasswordByMinMax([
      '1-3 a: abcde',
      '1-3 b: cdefg',
      '2-9 c: ccccccccc',
    ])

    expect(result.length).toEqual(2)
    expect(result[0]).toEqual(expect.stringContaining('abcde'))
    expect(result[1]).toEqual(expect.stringContaining('ccccccccc'))
  })
})

describe('Day 2 - Part 2', () => {
  test('example input returns 1 valid passwords, abcde', () => {
    const result = validatePasswordByCharPosition([
      '1-3 a: abcde',
      '1-3 b: cdefg',
      '2-9 c: ccccccccc',
    ])
  
    expect(result.length).toEqual(1)
    expect(result[0]).toEqual(expect.stringContaining('abcde'))
  })
})
