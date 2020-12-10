export const getJoltage = (input: Array<number>) => {
  const results = {
    jolts1: 0,
    jolts2: 0,
    jolts3: 0,
  };

  let currentJoltage = 0;

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
      break;
    }
  }

  return results;
};

/**
 * What is the number of 1-jolt differences multiplied by the number of 3-jolt differences?
 */
export const part1 = (input: Array<number>) => {
  const { jolts1, jolts3 } = getJoltage(input);

  return jolts1 * jolts3;
};

export const part2 = (input: Array<number>) => {};
