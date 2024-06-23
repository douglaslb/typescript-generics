export function JSONParse<T = unknown>(json: string): T {
  return JSON.parse(json);
}

const data = JSONParse<{ a: "1" }>('{"a": "1"}');
