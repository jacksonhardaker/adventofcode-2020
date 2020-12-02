import { and } from "../util/and.ts";

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
  return a && b ? a * b : 0;
};

export const calculateFromThree = (input: Array<number> = []): number => {
  let b = 0, c = 0;
  const a = input.find((number) => {
    [b, c] = findPairBySum(input, 2020 - number) || [0, 0];
    return and(b, c);
  }) || 0;
  return and(a, b, c) ? a * b * c : 0;
};
