function Call<T extends any[], U = unknown>(
  fn: (...args: T) => U,
  ...args: T
): U {
  return fn(...args);
}

Call((a: number, b: string) => String(a), 1, "a");
