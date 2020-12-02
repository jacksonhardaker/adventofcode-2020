type ReadSplitParseOptions = {
  delimiter: string;
};

const defaultOptions = {
  delimiter: "\n",
};

export const readAndSplit = (
  path: string,
  customOptions?: ReadSplitParseOptions,
): Array<string> => {
  const options = customOptions || defaultOptions;

  const result = Deno.readTextFileSync(Deno.realPathSync(path));
  const dataArray = result.split(options.delimiter).filter((mass) => !!mass);

  return dataArray;
};

export const readSplitAndParseAsNumber = (
  path: string,
  customOptions?: ReadSplitParseOptions,
): Array<number> => {
  const parser = (value: string): number => Number(value);

  const dataArray = readAndSplit(path, customOptions).map(parser);

  return dataArray;
};
