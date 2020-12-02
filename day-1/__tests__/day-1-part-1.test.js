import { calculateFromTwo, calculateFromThree } from '../report-repair.ts'

describe('Day 1 - Part 1', () => {
  test('example input returns 514579', () => {
    const result = calculateFromTwo([
      1721,
      979,
      366,
      299,
      675,
      1456,
    ])
    
    expect(result).toEqual(514579)
  })

  test('example input returns 241861950', () => {
    const result = calculateFromThree([
      1721,
      979,
      366,
      299,
      675,
      1456,
    ])
    
    expect(result).toEqual(241861950)
  })

})
