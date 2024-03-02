import 'mocha';
import { expect } from 'chai';
import { FileReader, FileWriter } from '../src/ejercicio-3/fileManager';

describe('Ejercicio 3', () => {
  // Client code
  const fileReader = new FileReader('./test/testFile.txt');
  const fileWriter = new FileWriter('./test/testFile.txt');
  const fileReader2 = new FileReader('');
  const fileWriter2 = new FileWriter('');
  
  const currentContent = fileReader.readFile();
  console.log(currentContent);
  const oldContent = currentContent;

  describe('FileReader', () => {
    it('Reader funciona correctamente', () => {
      expect(currentContent).to.deep.eq('This is a test file.');
    });
  });

  describe('FileWriter', () => {

    const newData = 'This is new content to be written into the file.';
    fileWriter.writeFile(newData);
    const updatedContent = fileReader.readFile();

    it('Writer funciona correctamente', () => {
      expect(updatedContent).to.deep.eq(newData);
    });

    // Restauramos el contenido original
    fileWriter.writeFile(oldContent);

  });

  describe('Errores', () => {
    it('Debería saltar error si no existe y leemos.', () => {
      expect(() => fileReader2.readFile()).to.throw();
    });
    it('Deberia saltar error si intentamos escribir y no existe', () => {
      expect(() => fileWriter2.writeFile('')).to.throw('Error al escribir en el archivo.');
    });
  });
});