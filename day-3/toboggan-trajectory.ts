export const findTreesByRight3Down1 = (map: Array<string>): number => {
  const tree = "#";

  let column = 0;
  let trees = 0;
  for (const row of map) {
    if (row.charAt(column % row.length) === tree) {
      trees++;
    }
    column += 3;
  }
  return trees;
};

export const part2 = (map: Array<string>) => {};
