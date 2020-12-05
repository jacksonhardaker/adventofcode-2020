const defaultOptions = {
  delimiter: "\n",
  parser: <T>(val: T) => val
};

export const readAndSplit = (
  path: string,
  delimiter?: string | RegExp,
): Array<string> => {

  const result = Deno.readTextFileSync(path);
  const dataArray = result.split(delimiter ? delimiter : defaultOptions.delimiter).filter((mass) => !!mass);

  return dataArray;
};

export const readSplitAndParse = <T>(
  path: string,
  customOptions: {
    delimiter?: string;
    parser: (value: string) => T;
  },
): Array<T> => {
  const dataArray = readAndSplit(path, customOptions.delimiter || defaultOptions.delimiter).map(customOptions.parser);
  return dataArray;
};
