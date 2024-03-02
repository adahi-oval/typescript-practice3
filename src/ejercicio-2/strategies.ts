import { BillPrinter, Billv2 } from './bill';

/**
 * Interfaz como base para las clases de diferentes estrategias
 */
export interface Strategy {
  execute(bill: Billv2): string;
}

/**
 * Estrategia para el formato PDF
 */
export class PDF implements Strategy {
  execute(bill: Billv2): string {
    const printer: BillPrinter = new BillPrinter(bill)
    console.log(`Factura generada con formato PDF: ${printer.print()}`);
    return `Factura generada con formato PDF: ${printer.print()}`;
  }
}

/**
 * Estrategia para el formato HTML
 */
export class HTML implements Strategy {
  execute(bill: Billv2): string {
    const printer: BillPrinter = new BillPrinter(bill)
    console.log(`Factura generada con formato HTML: ${printer.print()}`);
    return `Factura generada con formato HTML: ${printer.print()}`;
  }
}