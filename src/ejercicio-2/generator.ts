import { Bill } from './bill';
import { Strategy } from './strategies';

/**
 * Clase que genera la factura en un formato específico, según patron Strategy
 */
export class Generator {
  /**
   * Crea un objeto generador para generar la factura en el formato definido por la estrategia
   * @param bill La factura que vamos a generar
   * @param strategy El formato (estrategia) que se va a generar
   */
  constructor(private bill: Bill, private strategy: Strategy) {}

  /**
   * Setter para la estrategia
   * @param strategy La nueva estrategia
   */
  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  /**
   * Método para generar la factura según estrategia
   */
  generate(): void {
    this.strategy.execute(this.bill);
  }
}