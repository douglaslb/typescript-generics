export async function BetterFetch<T = unknown>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) throw new Error();
  return (await response.json()) as T;
}

BetterFetch<{ a: "1" }>("asdasd");

export async function BetterFetch2<T = unknown>(url: string) {
  const response = await fetch(url);

  return {
    ok: response.ok,
    json: async () => (await response.json()) as T,
    text: async () => await response.text(),
  };
}

BetterFetch2<{ a: "1" }>("asdasd").then((response) => {
  response.json;
});

export async function BetterFetch3<T = unknown>(
  url: string,
  options: RequestInit
) {
  const response = await fetch(url, options);

  return {
    ok: response.ok,
    json: async () => (await response.json()) as T,
    text: async () => await response.text(),
  };
}

BetterFetch2<{ a: "1" }>("asdasd").then((response) => {
  response.json;
});
