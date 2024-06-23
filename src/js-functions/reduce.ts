export function BetterReduce<T, U = never>(
  arr: T[],
  fn: (acc: U, curr: T, index: number, arr: T[]) => U,
  initialValue: U
): U {
  return arr.reduce(fn, initialValue);
}

export function BetterReduce2<T, U = never>(
  arr: T[],
  fn: (acc: U, curr: T, index: number, arr: T[]) => U,
  initialValue: U
): U {
  let acc = initialValue;

  for (let i = 0; i < arr.length; i++) {
    acc = fn(acc, arr[i], i, arr);
  }

  return acc;
}
