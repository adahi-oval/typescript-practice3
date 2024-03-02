import { Thing } from './things';

/**
 * Interfaz para objetos que pueden ser buscados.
 */
export interface Searchable<T> {
  /**
   * Busca objetos que coincidan con el término de búsqueda proporcionado.
   * @param searchTerm El término de búsqueda.
   * @returns Un array de objetos que coinciden con el término de búsqueda.
   */
  search(searchTerm: string): T[];
}

/**
 * Clase que representa una caja que contiene objetos de tipo Thing.
 */
export class Box implements Searchable<Thing> {
  /**
   * Crea una instancia de Box.
   * @param items Los objetos que contiene la caja.
   */
  constructor(private items: Thing[]) {}

  /**
   * Añade un objeto a la caja.
   * @param item El objeto a añadir.
   */
  addItem(item: Thing): void {
    this.items.push(item);
  }

  /**
   * Elimina un objeto de la caja.
   * @param index El índice del objeto a eliminar.
   */
  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  /**
   * Obtiene un objeto de la caja por su índice.
   * @param index El índice del objeto a obtener.
   * @returns El objeto en el índice especificado.
   */
  getItem(index: number): Thing {
    return this.items[index];
  }

  /**
   * Obtiene el número de objetos en la caja.
   * @returns El número de objetos en la caja.
   */
  getNumberOfItems(): number {
    return this.items.length;
  }

  /**
   * Obtiene todos los objetos contenidos en la caja.
   * @returns Un array con todos los objetos contenidos en la caja.
   */
  getItems(): Thing[] {
    return this.items;
  }

  /**
   * Busca objetos en la caja por su nombre.
   * @param searchName El nombre a buscar.
   * @returns Un array de objetos cuyos nombres coinciden con el término de búsqueda.
   */
  search(searchName: string): Thing[] {
    return this.items.filter((item) => item.getName() === searchName);
  }
}

/**
 * Clase que imprime el contenido de una caja.
 */
export class BoxPrinter {
  /**
   * Crea una instancia de BoxPrinter.
   * @param box La caja cuyo contenido se imprimirá.
   */
  constructor(private box: Box) {}

  /**
   * Imprime el contenido de la caja.
   */
  print(): void {
    this.box.getItems().forEach((item) => {
      item.print();
    });
  }
}
