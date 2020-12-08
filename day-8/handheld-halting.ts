enum Operations {
  Accumulate = "acc", // Accumulate
  Jump = "jmp", // Jump
  Noop = "nop", // Noop
}

export const part1 = (input: Array<string>) => {
  let accumulator = 0;
  let position = 0;
  let executed: { [key: number]: boolean } = {};
  while (!executed[position] && position < input.length) {
    executed[position] = true;

    const [operation, argument] = input[position].split(" ");
    switch (operation) {
      case Operations.Accumulate:
        accumulator += Number(argument);
        position++;
        break;
      case Operations.Jump:
        position += Number(argument);
        break;
      case Operations.Noop:
        position++;
        break;
      default:
        throw new Error("Invalid command");
    }
  }

  return { accumulator, position };
};

export const part2 = (input: Array<string>) => {

  let acc = 0;
  input.some((line, index, arr) => {
    const input = [...arr];
    const mutatedLine = line.match(/nop/) ? line.replace(Operations.Noop, Operations.Jump) : line.replace(Operations.Jump, Operations.Noop);
    input[index] = mutatedLine;

    const { accumulator, position } = part1(input);
    if (position === input.length) {
      acc = accumulator;
      return true;
    }
    return false;
  })
  
  return acc;
};
