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

const getAdjacentEmpty = (
  input: string[][],
  rowIndex: number,
  seatIndex: number,
) => {
  const isUndefinedEmptyOrFloor = (row: number, seat: number) => {
    return input[row]?.[seat] !== Seat.occupied;
  }

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

const processSeating = (input: string[][]): ProcessedSeating => {
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
        }
        else {
          result[rowIndex][seatIndex] = Seat.empty;
        }
        // If a seat is occupied (#) and four or more seats adjacent to it are also occupied, the seat becomes empty.
      } else if (seat === Seat.occupied) {
        const {
          occupiedCount,
        } = getAdjacentEmpty(input, rowIndex, seatIndex);


        if (occupiedCount >= 4) {
          result[rowIndex][seatIndex] = Seat.empty;
          changed = true;
        }
        else {
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
    input.map((seats) => seats.join("")).join("\n") + "\n"
  );
}

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

export const part2 = (input: string[][]) => {};
