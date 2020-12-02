const findPairBySum = (
  input: Array<number> = [],
  target: number = 2020,
): [number, number] | null => {
  const match = input.find((number) => {
    return input.includes(target - number);
  });

  return match ? [match, target - match] : null;
};

export const calculateFromTwo = (input: Array<number> = []): number => {
  const [a, b] = findPairBySum(input) || [];
  return a && b ? a * b : -1;
};

export const calculateFromThree = (input: Array<number> = []): number => {
  let b, c;
  const a = input.find((number) => {
    const pair = findPairBySum(input, 2020 - number);

    if (pair) {
      [b, c] = pair;
      return true;
    }

    return false;
  });

  return a && b && c ? a * b * c : -1;
};
