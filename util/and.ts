export const and = (...args: Array<any>) : boolean => {
  return args.reduce((acc, arg) => acc && !!arg, true);
}
