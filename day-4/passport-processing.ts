enum PassportFields {
  byr = "Birth Year",
  iyr = "Issue Year",
  eyr = "Expiration Year",
  hgt = "Height",
  hcl = "Hair Color",
  ecl = "Eye Color",
  pid = "Passport ID",
  cid = "Country ID",
}

const requiredAttrs = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

// const valida

export const part1 = (input: string[][]) => {
  const validPassports = input.filter((passport) => {
    const attrs = passport.map((attr) => attr.slice(0, 3)).sort();
    const isValid = requiredAttrs.reduce(
      (isValid, attr) => isValid && attrs.includes(attr),
      true,
    );
    return isValid;
  });

  return validPassports;
};

export const part2 = (input: Array<string>) => {};
