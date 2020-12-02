type ReadSplitParseOptions = {
  delimiter: string;
};

const defaultOptions = {
  delimiter: "\n",
};

export const readSplitAndParseAsNumber = (
  path: string,
  customOptions?: ReadSplitParseOptions,
): Array<number> => {
  const options = customOptions || defaultOptions;
  const parser = (value: string): number => Number(value);

  const result = Deno.readTextFileSync(Deno.realPathSync(path));
  const dataArray = result.split(options.delimiter).filter((mass) => !!mass)
    .map(parser);

  return dataArray;
};
