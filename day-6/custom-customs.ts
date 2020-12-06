export const part1 = (input: string[][]) => {
  const sum = input.reduce((sum: number, group: string[]): number => {
    const uniqueYesAnswers = [...new Set(group.flatMap((person) => person.split('')))].length;

    return sum + uniqueYesAnswers;
  }, 0);

  return sum;
};

// a
// b
// c

interface GroupAnswersMap {
  [key: string]: number;
}

export const part2 = (input: string[][]) => {
  const sum = input.reduce((sum: number, group: string[]): number => {
    const answersMap = group.reduce((map: GroupAnswersMap, person) => {
      const answers = person.split('');

      answers.forEach((answer) => {
        map[answer] = map[answer] ? map[answer] + 1 : 1;
      });

      return map;
    }, {});

    const allYes = Object.values(answersMap).filter((count) => count === group.length).length;

    return sum + allYes;
  }, 0);

  return sum;
};
