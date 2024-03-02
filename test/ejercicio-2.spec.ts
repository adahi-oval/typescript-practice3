import 'mocha';
import { expect } from 'chai';
import { Billv2, BillPrinter } from '../src/ejercicio-2/bill';
import { PDF, HTML } from '../src/ejercicio-2/strategies';
import { Generatorv2 } from '../src/ejercicio-2/generator';

describe('Ejercicio 2', () => {

  const bill1 = new Billv2('Empresa', 350);
  const bill2 = new Billv2('Empresa', 350);
  const printer1 = new BillPrinter(bill1);
  const strat1 = new PDF;
  const strat2 = new HTML;
  const gen1 = new Generatorv2(bill1, strat1);
  const gen2 = new Generatorv2(bill1, strat2);
  const gen3 = new Generatorv2(bill1, strat2);

  describe('Bill', () => {
    it('getters funcionan bien', () => {
      expect(bill1.getCompany()).to.deep.equal('Empresa');
      expect(bill1.getPrice()).to.eq(350);
    });

    it('setters funcionan bien', () => {
      bill2.setCompany('Company');
      bill2.setPrice(400);
      expect(bill2.getCompany()).to.deep.eq('Company');
      expect(bill2.getPrice()).to.eq(400);
    });

    it('Printer funciona bien', () => {
      expect(printer1.print()).to.deep.eq('Company: Empresa, Total Price: 350');
    });
  });

  describe('Generator', () => {
    it('Genera correctamente', () =>{
      expect(gen1.generate()).to.deep.eq('Factura generada con formato PDF: Company: Empresa, Total Price: 350')
      expect(gen2.generate()).to.deep.eq('Factura generada con formato HTML: Company: Empresa, Total Price: 350')
    });

    it('Setter funciona correctamente', () => {
      gen3.setStrategy(strat1);
      expect(gen3.generate()).to.deep.eq('Factura generada con formato PDF: Company: Empresa, Total Price: 350')
    });
  });

});