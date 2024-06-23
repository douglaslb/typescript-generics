{
  type Nullable<T> = T | null;
  const a: Nullable<number> = 1;

  type Pair<T, U> = [T, U];
  const b: Pair<string, boolean> = ["hello", true];

  const c: Record<string, number> = { a: 1 };

  interface IGeneric<T> {}
  const d: IGeneric<number> = {};

  interface IGeneric2<T> {
    value: T;
  }

  const x1: IGeneric2<number> = { value: 1 };

  interface IGeneric3<T> {
    value: T;
    fn(): T;
  }

  const x2: IGeneric3<number> = {
    value: 2,
    fn() {
      return this.value;
    },
  };

  interface IGeneric4<T, U> {
    value: T;
    fn(item: U): U;
  }

  const x3: IGeneric4<number, string> = {
    value: 2,
    fn() {
      return "foo";
    },
  };

  interface IGeneric5<T> {
    value: T;
    fn<U>(item: U): U;
  }

  const x4: IGeneric5<string> = {
    value: "foo",
    fn: <U>(item: U) => item,
  };

  x4.fn(1);
}
