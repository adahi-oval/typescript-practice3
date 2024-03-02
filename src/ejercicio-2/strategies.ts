import { BillPrinter, Bill } from './bill';

/**
 * Interfaz como base para las clases de diferentes estrategias
 */
export interface Strategy {
  execute(bill: Bill): void;
}

export class PDF implements Strategy {
  execute(bill: Bill): void {
    const printer: BillPrinter = new BillPrinter(bill)
    console.log(`Factura generada con formato PDF: ${printer.print()}`);
  }
}

export class HTML implements Strategy {
  execute(bill: Bill): void {
    const printer: BillPrinter = new BillPrinter(bill)
    console.log(`Factura generada con formato HTML: ${printer.print()}`);
  }
}