type Greet<T> = `Greet , ${T}!`;

const x: Hello<"world">;

type StringArray = Array<string>;
type Nullable<Type> = Type | null;
type NullableString = Nullable<string>;
type NullableNumber = Nullable<number>;
