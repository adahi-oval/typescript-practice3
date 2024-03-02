/**
 * Interfaz para asegurar que un objeto tenga el método scan()
 */
export interface Scannable {
  scan(): string;
}

/**
 * Clase que representa un escáner
 */
export class Scanner implements Scannable {
  /**
   * Método para escanear
   * @returns Una salida por consola y un string con el mismo contenido
   */
  scan(): string {
    console.log('Scanning...');
    return 'Scanning...';
  }
}