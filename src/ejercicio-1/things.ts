export interface Printable {
  print(): void;
}

export interface Nameable {
  getName(): string;
}


export class Thing implements Printable, Nameable {
  /**
   * Crea una instancia de Thing.
   * @param name El nombre de la cosa.
   */
  constructor(protected name: string) {}

  /**
   * Obtiene el nombre de la cosa.
   * @returns El nombre de la cosa.
   */
  getName(): string {
    return this.name;
  }

  /**
   * Imprime información sobre la cosa.
   */
  print(): void {
    console.log(`${this.name}: ${this.constructor.name}`);
  }
}

// Clases de ejemplo de enseres

/**
 * Representa un libro.
 * Extiende la clase Thing e incluye el número de páginas.
 */
export class Book extends Thing {
  /**
   * Crea una instancia de Book.
   * @param name El nombre del libro.
   * @param pages El número de páginas del libro.
   */
  constructor(protected name: string, private pages: number) {
    super(name);
  }
}

/**
 * Representa una prenda de vestir.
 * Extiende la clase Thing e incluye el tamaño.
 */
export class Clothing extends Thing {
  /**
   * Crea una instancia de Clothing.
   * @param name El nombre de la prenda de vestir.
   * @param size El tamaño de la prenda de vestir.
   */
  constructor(protected name: string, private size: number) {
    super(name);
  }
}

/**
 * Representa un mueble.
 * Extiende la clase Thing e incluye el material.
 */
export class Furniture extends Thing {
  /**
   * Crea una instancia de Furniture.
   * @param name El nombre del mueble.
   * @param material El material del mueble.
   */
  constructor(protected name: string, private material: string) {
    super(name);
  }
}
