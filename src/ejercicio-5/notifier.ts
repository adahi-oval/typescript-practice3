import { Service } from './services';

/**
 * Clase base para un notificador, usando un servicio concreto
 */
export class Notifier {
  /**
   * Crea una instancia de la clase Notifier para enviar una notificacion
   * @param notificationService El servicio que se quiere usar en cada instancia
   */
  constructor(private notificationService: Service) {}

  /**
   * Método para enviar un mensaje por el servicio dado en cada instancia
   * @param message Mensaje a enviar
   * @returns String con el mensaje enviado por consola
   */
  sendNotification(message: string): string {
    return this.notificationService.notify(message);
  }
}