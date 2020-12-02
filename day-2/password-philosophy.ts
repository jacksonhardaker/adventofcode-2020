export const validatePasswordByMinMax = (
  input: Array<string>,
): Array<string> => {
  const validPasswords = input.filter((data) => {
    const [policy, letter, password] = data.split(" ");
    const [min, max] = policy.split("-").map((num) => +num);

    const letterCount = password.split("").filter((char) =>
      char === letter.slice(0, 1)
    ).length;

    return letterCount >= min && letterCount <= max;
  });

  return validPasswords;
};

export const validatePasswordByCharPosition = (
  input: Array<string>,
): Array<string> => {
  const validPasswords = input.filter((data) => {
    const [policy, letter, password] = data.split(" ");
    const [pos1, pos2] = policy.split("-").map((num) => +num);

    const hasCharAtPos1 = password.charAt(pos1 - 1) === letter.slice(0, 1);
    const hasCharAtPos2 = password.charAt(pos2 - 1) === letter.slice(0, 1);

    return (hasCharAtPos1 && !hasCharAtPos2) ||
      (hasCharAtPos2 && !hasCharAtPos1);
  });

  return validPasswords;
};
