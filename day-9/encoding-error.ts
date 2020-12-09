export const validate = (
  input: number[],
  preambleLength: number = 25,
): boolean => {
  const preamble = input.slice(0, preambleLength);
  const target = input.slice(preambleLength).shift();

  if (!target) {
    throw new Error("Invalid input");
  }

  return preamble.some((num, index) => {
    const foundIndex = preamble.indexOf(target - num);
    return foundIndex !== -1 && foundIndex !== index;
  });
};

export const part1 = (input: Array<number>, preambleLength: number = 25) => {
  const firstInvalid = input.slice(preambleLength).find((_, index) => {
    return !validate(input.slice(index), preambleLength);
  });

  return firstInvalid;
};

export const sum = (input: number[]): number => {
  return input.reduce((sum, num) => sum + num, 0);
};

export const part2 = (input: Array<number>, preambleLength: number = 25) => {
  const invalidNumber = part1(input, preambleLength);

  if (!invalidNumber) {
    throw new Error("Invalid input");
  }

  let smallest = 0;
  let largest = 0;
  for (let i = 0; i < input.length; i++) {
    if (i < invalidNumber) {
      let marker = i;
      const toSum = [input[i]];
      while (sum(toSum) <= invalidNumber) {
        if (sum(toSum) === invalidNumber) {
          break;
        }

        marker++;

        if (marker >= input.length) {
          break;
        }

        toSum.push(input[marker]);
      }

      if (sum(toSum) === invalidNumber) {
        largest = toSum.reduce((largest, num) => num > largest ? num : largest, Number.NEGATIVE_INFINITY);
        smallest = toSum.reduce((smallest, num) => num < smallest ? num : smallest, Number.POSITIVE_INFINITY);
        break;
      }
    }
  }

  return smallest + largest;
};
