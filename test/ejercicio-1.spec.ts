import { expect } from 'chai';
import { describe, it } from 'mocha';
import { Thing } from '../src/ejercicio-1/things';
import { Box, BoxPrinter } from '../src/ejercicio-1/box';

describe('Ejercicio 1', () => {
  describe('Thing', () => {

    it('getName() debería devolver el nombre correcto', () => {
      const name = 'test';
      const thing = new Thing(name);
      expect(thing.getName()).to.equal(name);
    });
  
    it('print() debería imprimir la salida correcta', () => {
      const name = 'test';
      const thing = new Thing(name);
      const expectedOutput = `${name}: Thing`;
  
      const output: string[] = [];
      const mockConsoleLog = (message: string) => {
        output.push(message);
      };
      const originalConsoleLog = console.log;
      console.log = mockConsoleLog;
  
      thing.print();
  
      console.log = originalConsoleLog;
  
      expect(output.join('\n')).to.equal(expectedOutput);
    });
  });
  
  describe('Box', () => {
    let box: Box;
  
    beforeEach(() => {
      box = new Box([]);
    });
  
    it('debería añadir un artículo correctamente', () => {
      const item = new Thing('test');
      box.addItem(item);
      expect(box.getNumberOfItems()).to.equal(1);
      expect(box.getItem(0)).to.equal(item);
    });
  
    it('debería eliminar un artículo correctamente', () => {
      const item = new Thing('test');
      box.addItem(item);
      box.removeItem(0);
      expect(box.getNumberOfItems()).to.equal(0);
    });
  
    it('debería buscar artículos correctamente', () => {
      const item1 = new Thing('test1');
      const item2 = new Thing('test2');
      box.addItem(item1);
      box.addItem(item2);
      const searchResult = box.search('test1');
      expect(searchResult).to.have.lengthOf(1);
      expect(searchResult[0]).to.equal(item1);
    });
  });
  
  describe('BoxPrinter', () => {
    it('debería imprimir los artículos correctamente', () => {
      const item1 = new Thing('test1');
      const item2 = new Thing('test2');
      const box = new Box([item1, item2]);
      const boxPrinter = new BoxPrinter(box);
  
      const output: string[] = [];
      const mockConsoleLog = (message: string) => {
        output.push(message);
      };
      const originalConsoleLog = console.log;
      console.log = mockConsoleLog;
  
      boxPrinter.print();
  
      console.log = originalConsoleLog;
  
      const expectedOutput = `${item1.getName()}: Thing\n${item2.getName()}: Thing`;
  
      expect(output.join('\n')).to.equal(expectedOutput);
    });
  });  
});