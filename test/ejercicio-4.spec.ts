import 'mocha';
import { expect } from 'chai';
import { Printer } from '../src/ejercicio-4/printer';
import { Scanner } from '../src/ejercicio-4/scanner';
import { PrinterScanner } from '../src/ejercicio-4/printerScanner';

describe('Ejercicio 4', () => {

  const printer = new Printer;
  const scanner = new Scanner;
  const printerScanner = new PrinterScanner;

  it('Printer funciona correctamente', () => {
    expect(printer.print()).to.deep.eq('Printing...');
  });

  it('Scanner funciona correctamente', () => {
    expect(scanner.scan()).to.deep.eq('Scanning...');
  });
  
  it('PrinterScanner funciona correctamente', () => {
    expect(printerScanner.print()).to.deep.eq('Printing...');
    expect(printerScanner.scan()).to.deep.eq('Scanning...');
  });

});