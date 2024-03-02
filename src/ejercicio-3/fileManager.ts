import * as fs from 'fs';

/**
 * Clase para leer el archivo
 */
export class FileReader {
  /**
   * Crea un objeto lector de archivos, para la ruta dada
   * @param filePath La ruta hacia el archivo de lectura
   */
  constructor(private filePath: string) {}

  /**
   * Método para leer el contenido del archivo
   * @returns El contenido del archivo
   */
  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, 'utf-8');
      return content;
    } catch (error) {
      console.error('Error al leer el archivo:', error.message);
      return '';
    }
  }
}

/**
 * Clase para escribir un archivo
 */
export class FileWriter {
  /**
   * Crea un objeto escritor de archivos para la ruta dada
   * @param filePath La ruta hacia el archivo de escritura
   */
  constructor(private filePath: string) {}

  /**
   * Método para escribir en el archivo
   * @param data Los datos a escribir en el archivo
   */
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error) {
      console.error('Error al escribir en el archivo:', error.message);
    }
  }
}