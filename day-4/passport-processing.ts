enum PassportFields {
  byr = "byr", // Birth Year
  iyr = "iyr", // Issue Year
  eyr = "eyr", // Expiration Year
  hgt = "hgt", // Height
  hcl = "hcl", // Hair Color
  ecl = "ecl", // Eye Color
  pid = "pid", // Passport ID
  cid = "cid", // Country ID
}
const requiredAttrs = [
  PassportFields.byr,
  PassportFields.iyr,
  PassportFields.eyr,
  PassportFields.hgt,
  PassportFields.hcl,
  PassportFields.ecl,
  PassportFields.pid,
];

export const isValidField = (field: PassportFields, value: string): boolean => {
  switch (field) {
    case PassportFields.byr:
      return Number(value) >= 1920 && Number(value) <= 2002;
    case PassportFields.iyr:
      return Number(value) >= 2010 && Number(value) <= 2020;
    case PassportFields.eyr:
      return Number(value) >= 2020 && Number(value) <= 2030;
    case PassportFields.hgt: {
      const [, num, unit] = value.match(/^(\d+)(cm|in)$/) || [];
      if (unit === "cm") {
        return Number(num) >= 150 && Number(num) <= 193;
      } else if (unit === "in") {
        return Number(num) >= 59 && Number(num) <= 76;
      }
    }
    case PassportFields.hcl:
      return /^\#[0-9a-f]{6}$/.test(value);
    case PassportFields.ecl:
      return /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(value);
    case PassportFields.pid:
      return /^\d{9}$/.test(value);
    case PassportFields.cid:
      return true;
    default:
      throw new Error("Unrecognized field.");
  }
};

interface PassportObject {
  byr: string;
  iyr: string;
  eyr: string;
  hgt: string;
  hcl: string;
  ecl: string;
  pid: string;
  cid: string;
}

const emptyPassport: PassportObject = {
  byr: "",
  iyr: "",
  eyr: "",
  hgt: "",
  hcl: "",
  ecl: "",
  pid: "",
  cid: "",
};

export const isValidPassport = (passport: string[]): boolean => {
  const passportObj: PassportObject = passport.reduce(
    (acc, field) =>
      Object.assign({}, acc, { [field.slice(0, 3)]: field.slice(4) }),
    emptyPassport,
  );

  const isValid = requiredAttrs.reduce((isValid, field) => {
    return isValid && isValidField(field, passportObj[field]);
  }, true);

  return isValid;
};

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

export const part2 = (input: string[][]) => {
  const validPassports = input.filter(((p) => isValidPassport(p)));
  return validPassports;
};
