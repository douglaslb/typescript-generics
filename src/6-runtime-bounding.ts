//Currying
{
  function simpleSum(a: number, b: number): number {
    return a + b;
  }

  function currySimple(func: (...args: any) => any) {
    return function curried(...args: unknown[]) {
      if (args.length >= func.length) {
        return func(...args);
      }

      return function partial(...args2: unknown[]) {
        return curried(...args, ...args2);
      };
    };
  }

  const partialSum = currySimple(simpleSum);
  const partialSum1 = partialSum(1);
  const partialSum2 = partialSum(2);

  const totalSum = partialSum(1)(2);

  function sum(...args: number[]) {
    return args.reduce((acc, curr) => acc + curr, 0);
  }

  function curry<T>(func: (...args: T[]) => any) {
    return function curried(...args: T[]) {
      return function partial(...args2: T[]) {
        if (args2.length === 0) {
          return func(...args, ...args2);
        }
        return curried(...args, ...args2);
      };
    };
  }

  const curriedSum = curry(sum);
  curriedSum(1)(2)(3)(4)();
}

//Runtime bounding
{
  interface Ops<InitialType> {
    array: InitialType[];
    prefix: <Prefix>(item: InitialType, prefix: Prefix) => string;
  }

  //@ts-expect-error
  const ops: Ops<string> = {};

  const ops2: Ops<string> = {
    array: ["1"],
    prefix: (item, prefix) => `${prefix}${item}`,
  };

  ops2.prefix<"a">("1", "a");

  const m = [1, 2, 3].map((item) => item);
}
