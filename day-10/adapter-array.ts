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

class Node {
  value: number;
  tree: Tree;
  children: Node[];
  parent: Node | null;

  constructor(value: number, tree: Tree, parent: Node | null) {
    this.value = value;
    this.children = [];
    this.tree = tree;
    this.parent = parent;

    let hasChildren = false;
    [1, 2, 3].forEach((iterator) => {
      if (tree.validValues.includes(value + iterator)) {
        this.pushChild(value + iterator);
        hasChildren = true;
      }
    });

    if (!hasChildren) {
      tree.leaves.push(this);
    }
  }

  pushChild(value: number) {
    this.children.push(new Node(value, this.tree, this));
  }
}

class Tree {
  root: Node;
  validValues: number[];
  leaves: Node[];

  constructor(validValues: number[]) {
    this.validValues = validValues;
    this.leaves = [];
    this.root = new Node(0, this, null);
  }
}

const failure1 = (input: number[]) => {
  // This solution uses too much space for the puzzle input.
  // Would have been nice if we needed to keep track of the makeup of
  // each combination.
  const tree = new Tree(input);
  return tree.leaves.length;
}
const failure2 = (input: number[]) => {
  let totalCombinations = 0;
  const traverse = (
    input: number[],
    currentJoltage: number,
  ) => {
    let hasNextStep = false;

    [1, 2, 3].forEach((iterator) => {
      if (input.includes(currentJoltage + iterator)) {
        traverse(input, currentJoltage + iterator);
        hasNextStep = true;
      }
    });

    if (!hasNextStep) {
      totalCombinations++;
    }
  };

  traverse(input, 0);
  return totalCombinations;
}

export const part2 = (input: number[]) => {
  // return failure1(input);
  // return failure2(input);
};
