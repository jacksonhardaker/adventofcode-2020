const { calculate } = require('../report-repair');

describe('Day 1 - Part 1', () => {
  test('example input returns 514579', () => {
    const result = calculate([
      1721,
      979,
      366,
      299,
      675,
      1456,
    ])
    
    expect(result).toEqual(514579)
  })

})
