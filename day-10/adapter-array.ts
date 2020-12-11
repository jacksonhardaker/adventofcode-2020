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

const compareArrays = (arr1: any[], arr2: any[]) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

export const part2 = (input: number[]) => {

  const parseChain = (chain: number[]) => {
    const newChain: number[] = [];

    chain.forEach((value) => {
        let hasChildren = false;
        [1, 2, 3].forEach((iterator: number) => {
          if (input.includes(value + iterator)) {
            newChain.push(value + iterator);
            hasChildren = true;
          }
        });
  
        if (!hasChildren) {
          newChain.push(value);
        }
    });

    return newChain;
  };

  let chainEnd = [0];
  let newChainEnd = parseChain(chainEnd);

  while (!compareArrays(chainEnd, newChainEnd)) {
    console.log(newChainEnd.length);
    chainEnd = [...newChainEnd];
    newChainEnd = parseChain(chainEnd);
  }

  return chainEnd.length;
};
