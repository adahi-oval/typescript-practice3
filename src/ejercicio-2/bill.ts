/**
 * La clase que representa las facturas
 */
export class Bill {
  /**
   * Crea una factura con los datos correspondientes.
   * @param company El nombre de la empresa
   * @param totalPrice El precio total de la factura
   */
  constructor(protected company: string, protected totalPrice: number) {}

  getCompany(): string {
    return this.company;
  }

  getPrice(): number {
    return this.totalPrice;
  }
}

/**
 * Segunda versión de la clase Bill, esta vez con setters, segun principio open-closed
 */
export class Billv2 extends Bill {
  /**
   * Crea una factura con la nueva versión, utilizando super ya que no cambian los parámetros 
   * @param company Nombre de la empresa
   * @param totalPrice Precio total de la factura
   */
  constructor(protected company: string, protected totalPrice: number) {
    super(company, totalPrice);
  }

  /**
   * Cambia el nombre de la empresa asignada a la factura
   * @param name Nuevo nombre de la empresa
   */
  setCompany(name: string) {
    this.company = name;
  }

  /**
   * Actualiza el precio de la factura
   * @param newPrice Nuevo precio
   */
  setPrice(newPrice: number) {
    this.totalPrice = newPrice;
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
  constructor(private bill: Billv2) {}

  /**
   * Método para imprimir la factura en un string
   * @returns El string con los datos de la factura
   */
  print(): string {
    return `Company: ${this.bill.getCompany()}, Total Price: ${this.bill.getPrice()}`;
  }
}