{
  function makeStringArray<T extends string>(x: T): T[] {
    return [x];
  }

  makeStringArray("a");

  type Greet<
    Name extends string,
    TimeOfDay extends "morning" | "afternoon" | "evening"
  > = `Good ${TimeOfDay}, ${Name}!`;

  const x: Greet<"John", "evening"> = "Good evening, John!";

  function reverse<T extends any[]>(arr: T): T {
    return arr.toReversed() as T;
  }
}
