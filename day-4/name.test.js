import { part1, part2 } from './passport-processing.ts';
const input = [`ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm`,
`iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929`,
`hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm`,
`hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`].map((pp) => pp.split(/\s+/));

describe('Day 2 - Part 1', () => {
  test('example input has 2 results', () => {
    const result = part1(input)

    expect(result.length).toEqual(2)
    expect(result[0]).toEqual('ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm'.split(/\s+/))
    expect(result[1]).toEqual('hcl:#ae17e1 iyr:2013 eyr:2024 ecl:brn pid:760753108 byr:1931 hgt:179cm'.split(/\s+/))
  })
})

describe('Day 2 - Part 2', () => {
  test('example input has x result', () => {
    const result = part2([
    ])

    expect(result).toEqual(undefined)
  })
})
