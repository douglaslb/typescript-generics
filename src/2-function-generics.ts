function reverse<ArrayType>(arr: ArrayType[]): ArrayType[] {
  return arr.toReversed();
}

reverse([1]);

type Predicate<T> = (item: T) => boolean;

const filter = <ArrayType>(
  arr: ArrayType[],
  fn: Predicate<ArrayType>
): ArrayType[] => {
  return arr.filter(fn);
};

filter([1, 2, 3], (i) => i > 0);
