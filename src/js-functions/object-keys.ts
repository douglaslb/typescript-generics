const obj = { a: 1, b: true };
Object.keys(obj).forEach((item) => obj[item]);

export function BetterKeys<T extends Record<string, unknown>>(
  obj: T
): (keyof T)[] {
  return Object.keys(obj);
}

const x = BetterKeys(obj);
