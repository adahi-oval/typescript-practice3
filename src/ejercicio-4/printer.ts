/**
 * Interfaz para asegurar que el objeto dado tiene método print().
 */
export interface Printable {
  print(): string;
}

/**
 * Clase Printer, que implementa la interfaz Printable y tiene solo un método Print
 */
export class Printer implements Printable {
  /**
   * Método para imprimir, saca una salida por consola y un string para testear
   * @returns Una salida por consola y un String con el mismo contenido
   */
  print(): string {
    console.log('Printing...');
    return 'Printing...';
  }
}