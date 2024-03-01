export interface Printable {
  print(): void;
}

export interface Nameable {
  getName(): string;
}


export class Thing implements Printable, Nameable {
  constructor(protected name: string) {}

  getName(): string {
    return this.name;
  }

  print(): void {
    console.log(`${this.name}: ${this.constructor.name}`);
  }
}

// Clases de ejemplo de enseres

export class Book extends Thing {
  constructor(protected name: string, private pages: number) {
    super(name);
  }
}

export class Clothing extends Thing {
  constructor(protected name: string, private size: number) {
    super(name);
  }
}

export class Furniture extends Thing {
  constructor(protected name: string, private material: string) {
    super(name);
  }
}