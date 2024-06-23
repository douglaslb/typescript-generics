export function Filter<T>(arr: T[], fn: (item: T) => boolean): T[] {
  return arr.filter(fn);
}

export function Filter2<T>(arr: T[], fn: (item: T) => boolean): T[] {
  const result: T[] = [];

  for (const item of arr) {
    if (fn(item)) {
      result.push(item);
    }
  }

  return result;
}

export function Filter3<T extends any[]>(
  arr: T,
  fn: (item: T extends (infer U)[] ? U : never) => boolean
): T {
  return arr.filter(fn) as T;
}
