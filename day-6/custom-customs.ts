export const part1 = (input: string[][]) => {
  const sum = input.reduce((sum: number, group: string[]): number => {
    const uniqueYesAnswers = [...new Set(group.flatMap((person) => person.split('')))].length;

    return sum + uniqueYesAnswers;
  }, 0);

  return sum;
};

export const part2 = (input: string[][]) => {};
