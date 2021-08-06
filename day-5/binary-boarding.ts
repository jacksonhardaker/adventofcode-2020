class TreeNode {
  min: number;
  max: number;
  parent: TreeNode | null;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(min: number, max: number, parent: TreeNode | null) {
    this.min = min;
    this.max = max;
    this.parent = parent;

    this.left = this.isEndNode()
      ? null
      : new TreeNode(min, Math.floor(min + (max - min) / 2), this);
    this.right = this.isEndNode()
      ? null
      : new TreeNode(Math.ceil(min + (max - min) / 2), max, this);
  }

  isEndNode() {
    return this.min === this.max;
  }

  getVal() {
    return this.isEndNode() ? this.min : -1;
  }
}

console.log('changed');

const rowTree = new TreeNode(0, 127, null);
const seatTree = new TreeNode(0, 7, null);

export const parse = (rowString: string, tree: TreeNode): number => {
  const node = rowString.split("").reduce(
    (node: TreeNode, step: string): TreeNode => {
      switch (step) {
        case "L":
        case "F":
          if (!node.left) {
            throw new Error("Invalid node.");
          }
          return node.left;
        case "R":
        case "B":
          if (!node.right) {
            throw new Error("Invalid node.");
          }
          return node.right;
        default:
          throw new Error("Invalid command.");
      }
    },
    tree,
  );

  return node.getVal();
};

export const parseRow = (rowString: string): number => {
  return parse(rowString, rowTree);
};

export const parseColumn = (seatString: string): number => {
  return parse(seatString, seatTree);
};

interface Seat {
  row: number;
  column: number;
  id: number;
}

export const calculateSeat = (input: string): Seat => {
  const row = parseRow(input.slice(0, 7));
  const column = parseColumn(input.slice(7));
  return {
    row,
    column,
    id: row * 8 + column,
  };
};

export const part1 = (input: Array<string>): number => {
  return input.reduce((highest: number, code: string): number => {
    const id = calculateSeat(code).id;

    return id > highest ? id : highest;
  }, 0);
};

export const part2 = (input: Array<string>) => {
  const maxSeatId = part1(input);
  const seatIds = input.map((code: string) => calculateSeat(code).id);

  let mySeat = 0;
  seatIds.includes(mySeat - 1) && seatIds.includes(mySeat + 1) && !seatIds.includes(mySeat)
  while(!(seatIds.includes(mySeat - 1) && seatIds.includes(mySeat + 1) && !seatIds.includes(mySeat))) {
    mySeat++;
    if (mySeat >= maxSeatId) {
      break;
    }
  }

  return mySeat;
};
