import { and } from "../util/and.ts";

enum Seat {
  occupied = "#",
  empty = "L",
  floor = ".",
}

interface ProcessedSeating {
  changed: Boolean;
  result: string[][];
  occupied: number;
}

const getImmediatelyAdjacentEmpty = (
  input: string[][],
  rowIndex: number,
  seatIndex: number,
) => {
  const isUndefinedEmptyOrFloor = (row: number, seat: number) => {
    return input[row]?.[seat] !== Seat.occupied;
  };

  const topLeft = isUndefinedEmptyOrFloor(rowIndex - 1, seatIndex - 1);
  const topCenter = isUndefinedEmptyOrFloor(rowIndex - 1, seatIndex);
  const topRight = isUndefinedEmptyOrFloor(rowIndex - 1, seatIndex + 1);
  const left = isUndefinedEmptyOrFloor(rowIndex, seatIndex - 1);
  const right = isUndefinedEmptyOrFloor(rowIndex, seatIndex + 1);
  const bottomLeft = isUndefinedEmptyOrFloor(rowIndex + 1, seatIndex - 1);
  const bottomCenter = isUndefinedEmptyOrFloor(rowIndex + 1, seatIndex);
  const bottomRight = isUndefinedEmptyOrFloor(rowIndex + 1, seatIndex + 1);

  const occupiedCount = [
    topLeft,
    topCenter,
    topRight,
    left,
    right,
    bottomLeft,
    bottomCenter,
    bottomRight,
  ].reduce((count, isEmpty) => isEmpty ? count : count + 1, 0);

  return {
    topLeft,
    topCenter,
    topRight,
    left,
    right,
    bottomLeft,
    bottomCenter,
    bottomRight,
    occupiedCount,
  };
};

const getVisibleEmpty = (
  input: string[][],
  rowIndex: number,
  seatIndex: number,
) => {
  const isUndefinedEmptyOrFloor = (velocityY: number, velocityX: number) => {
    let row = rowIndex + velocityY;
    let seat = seatIndex + velocityX;
    let isOccupied = false;
    while (input[row]?.[seat] !== undefined) {
      if (input[row]?.[seat] === Seat.occupied) {
        isOccupied = true;
        break;
      } else if (input[row]?.[seat] === Seat.empty) {
        isOccupied = false;
        break;
      }

      row += velocityY;
      seat += velocityX;
    }

    return !isOccupied;
    // return input[row]?.[seat] !== Seat.occupied;
  };

  const topLeft = isUndefinedEmptyOrFloor(-1, -1);
  const topCenter = isUndefinedEmptyOrFloor(-1, 0);
  const topRight = isUndefinedEmptyOrFloor(-1, 1);
  const left = isUndefinedEmptyOrFloor(0, -1);
  const right = isUndefinedEmptyOrFloor(0, 1);
  const bottomLeft = isUndefinedEmptyOrFloor(1, -1);
  const bottomCenter = isUndefinedEmptyOrFloor(1, 0);
  const bottomRight = isUndefinedEmptyOrFloor(1, 1);

  const occupiedCount = [
    topLeft,
    topCenter,
    topRight,
    left,
    right,
    bottomLeft,
    bottomCenter,
    bottomRight,
  ].reduce((count, isEmpty) => isEmpty ? count : count + 1, 0);

  return {
    topLeft,
    topCenter,
    topRight,
    left,
    right,
    bottomLeft,
    bottomCenter,
    bottomRight,
    occupiedCount,
  };
};

const processSeating = (
  input: string[][],
  tolerance = 4,
  getAdjacentEmpty = getImmediatelyAdjacentEmpty,
): ProcessedSeating => {
  const result: string[][] = Array(input.length).fill(null).map(() => []);
  let occupied = 0;
  let changed = false;

  input.forEach((row, rowIndex) => {
    row.forEach((seat, seatIndex) => {
      if (seat === Seat.floor) {
        result[rowIndex][seatIndex] = Seat.floor;
        return;
      }

      // If a seat is empty (L) and there are no occupied seats adjacent to it, the seat becomes occupied.
      if (seat === Seat.empty) {
        const {
          topLeft,
          topCenter,
          topRight,
          left,
          right,
          bottomLeft,
          bottomCenter,
          bottomRight,
        } = getAdjacentEmpty(input, rowIndex, seatIndex);

        if (
          and(
            topLeft,
            topCenter,
            topRight,
            left,
            right,
            bottomLeft,
            bottomCenter,
            bottomRight,
          )
        ) {
          occupied++;
          result[rowIndex][seatIndex] = Seat.occupied;
          changed = true;
        } else {
          result[rowIndex][seatIndex] = Seat.empty;
        }
        // If a seat is occupied (#) and four or more seats adjacent to it are also occupied, the seat becomes empty.
      } else if (seat === Seat.occupied) {
        const {
          occupiedCount,
        } = getAdjacentEmpty(input, rowIndex, seatIndex);

        if (occupiedCount >= tolerance) {
          result[rowIndex][seatIndex] = Seat.empty;
          changed = true;
        } else {
          occupied++;
          result[rowIndex][seatIndex] = Seat.occupied;
        }
      }
    });
  });

  return {
    changed,
    result,
    occupied,
  };
};

const logSeatingMap = (input: string[][]) => {
  console.log(
    input.map((seats) => seats.join("")).join("\n") + "\n",
  );
};

export const part1 = (input: string[][]) => {
  let current = [...input];
  let next = processSeating(current);
  while (next.changed) {
    next = processSeating(next.result);
  }

  return {
    endState: next.result,
    occupiedSeats: next.occupied,
  };
};

export const part2 = (input: string[][]) => {
  const process = (input: string[][]) =>
    processSeating(input, 5, getVisibleEmpty);

  let current = [...input];
  let next = process(current);
  while (next.changed) {
    next = process(next.result);
  }

  return {
    endState: next.result,
    occupiedSeats: next.occupied,
  };
};
