import { Printable } from './printer';
import { Scannable } from './scanner';

export class PrinterScanner implements Printable, Scannable {
  /**
   * Método para imprimir, saca una salida por consola y un string para testear
   * @returns Una salida por consola y un String con el mismo contenido
   */
  print(): string {
    console.log('Printing...');
    return 'Printing...';
  }

  /**
   * Método para escanear
   * @returns Una salida por consola y un string con el mismo contenido
   */
  scan(): string {
    console.log('Scanning...');
    return 'Scanning...';
  }
}