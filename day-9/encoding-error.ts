export const validate = (input: number[], preambleLength: number = 25): boolean => {
  const preamble = input.slice(0, preambleLength);
  const target = input.slice(preambleLength).shift();

  if (!target)
    throw new Error("Invalid input");   

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

export const part2 = (input: Array<number>) => {};
