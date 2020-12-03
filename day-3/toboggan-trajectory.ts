const findTrees = (map: Array<string>, right: number, down: number): number => {
  const tree = "#";
  const width = map[0].length;

  let column = 0;
  let row = 0;
  let trees = 0;
  while (row < map.length) {
    trees = map[row].charAt(column % width) === tree ? trees + 1 : trees;
    column += right;
    row += down;
  }
  return trees;
}

export const findTreesByRight3Down1 = (map: Array<string>): number => {
  return findTrees(map, 3, 1);
};

/**
 * 
 Right 1, down 1.
Right 3, down 1. (This is the slope you already checked.)
Right 5, down 1.
Right 7, down 1.
Right 1, down 2.
In the above example, these slopes would find 2, 7, 3, 4, and 2 tree(s) respectively; multiplied together, these produce the answer 336.
 */
export const multiRouteFindTreesAndMultiply = (map: Array<string>) => {
  const trees = [
    findTrees(map, 1, 1),
    findTrees(map, 3, 1),
    findTrees(map, 5, 1),
    findTrees(map, 7, 1),
    findTrees(map, 1, 2),
  ];

  return trees.reduce((multiple, num) => multiple * num, 1);
};
