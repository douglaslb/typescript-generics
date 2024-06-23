{
  class MyClass<T> {}

  class Queue<T> {
    private data: T[] = [];

    push(item: T) {
      this.data.push(item);
    }

    pop(): T | undefined {
      return this.data.shift();
    }

    peek(): T | undefined {
      return this.data[0];
    }
  }

  const queue = new Queue<string>();
  queue.push("a");
  queue.push(1);
  const p = queue.pop();

  interface IQueue<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
  }

  class Queue2<T> implements IQueue<T> {
    push(item: T): void {
      throw new Error("Method not implemented.");
    }
    pop(): T | undefined {
      throw new Error("Method not implemented.");
    }
    peek(): T | undefined {
      throw new Error("Method not implemented.");
    }
  }

  class Pair<T, U> {
    constructor(public a: T, public b: U) {}
  }

  class Pair2<T extends string, U = number> {
    constructor(public a: T, public b: U) {}
  }

  class Queue3<ClassType> {
    private data: ClassType[] = [];

    push(item: ClassType) {
      this.data.push(item);
    }

    pop(): ClassType | undefined {
      return this.data.shift();
    }

    peek(): ClassType | undefined {
      return this.data[0];
    }

    map<Return>(fn: (item: ClassType) => Return): Return[] {
      return this.data.map(fn);
    }
  }
}
