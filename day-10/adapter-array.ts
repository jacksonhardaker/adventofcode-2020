export const getJoltage = (input: number[], initialJoltage = 0) => {
  const results = {
    jolts1: 0,
    jolts2: 0,
    jolts3: 0,
    finalJoltage: 0,
  };

  let currentJoltage = initialJoltage;

  while (true) {
    let finished = false;
    switch (true) {
      case input.includes(currentJoltage + 1):
        results.jolts1++;
        currentJoltage += 1;
        break;
      case input.includes(currentJoltage + 2):
        results.jolts2++;
        currentJoltage += 2;
        break;
      case input.includes(currentJoltage + 3):
        results.jolts3++;
        currentJoltage += 3;
        break;
      default:
        finished = true;
        break;
    }

    if (finished) {
      currentJoltage += 3;
      results.jolts3++;
      results.finalJoltage = currentJoltage;
      break;
    }
  }

  return results;
};

/**
 * What is the number of 1-jolt differences multiplied by the number of 3-jolt differences?
 */
export const part1 = (input: number[]) => {
  const { jolts1, jolts3 } = getJoltage(input);

  return jolts1 * jolts3;
};

const tribonacciSequence = [1, 1, 2, 4, 7, 13, 24, 44, 81, 149];
const getTribonacci = (num: number) => {
  if (num > tribonacciSequence.length) {
    throw new Error(`Can't calculate tribonacci number for ${num}`);
  }

  return tribonacciSequence[num - 1];
};

export const part2 = (input: number[]) => {
  const sorted = input.sort((a, b) => a - b);
  const withMaxMin = [0, ...sorted, sorted.slice(-1)[0] + 3];

  let count = 1;
  let iterations = 1;
  for (let joltage of withMaxMin) {
    if (withMaxMin.includes(joltage + 1)) {
      iterations++;
    } else {
      count *= getTribonacci(iterations);
      iterations = 1;
    }
  }
  return count;
};
