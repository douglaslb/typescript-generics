{
  function parse<T = never>(json: string): T {
    return JSON.parse(json);
  }

  const a = parse('{"a": 1}');
  const b = parse<{ a: number }>('{"a": 1}');
}
