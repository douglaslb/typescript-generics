{
  function makeArray<T>(x: T): T[] {
    return [x];
  }

  makeArray(5); // number[]

  const m = [1, 2, 3].map<string>((item) => String(item));
}
