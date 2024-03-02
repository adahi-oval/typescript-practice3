/**
 * La clase que representa las facturas
 */
export class Bill {
  /**
   * Crea una factura con los datos correspondientes.
   * @param company El nombre de la empresa
   * @param totalPrice El precio total de la factura
   */
  constructor(private company: string, private totalPrice: number) {}

  getCompany(): string {
    return this.company;
  }

  getPrice(): number {
    return this.totalPrice;
  }
}

/**
 * Clase para imprimir la factura, principio Single Responsibility
 */
export class BillPrinter {
  /**
   * Genera un objeto para imprimir la factura
   * @param bill La factura a imprimir
   */
  constructor(private bill: Bill) {}

  /**
   * Método para imprimir la factura en un string
   * @returns El string con los datos de la factura
   */
  print(): string {
    return `Company: ${this.bill.getCompany()}, Total Price: ${this.bill.getPrice()}`;
  }
}