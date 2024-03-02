/**
 * Interfaz para encapsular los diferentes servicios mensajeadores
 */
export interface Service {
  notify(message: string): string;
}

/**
 * Clase que permite notificaciones via email 
 */
export class EmailService implements Service {
  /**
   * Método para enviar mensaje
   * @param message Mensaje a enviar
   * @returns String con el mensaje enviado
   */
  notify(message: string): string {
    console.log(`Sending notification via email: ${message}`);
    return `Sending notification via email: ${message}`;
  }
}

/**
 * Clase que permite notificaciones via SMS
 */
export class ShortMessageService implements Service {
  /**
   * Método para enviar mensaje
   * @param message Mensaje a enviar
   * @returns String con el mensaje enviado
   */
  notify(message: string): string {
    console.log(`Sending notification via SMS: ${message}`);
    return `Sending notification via SMS: ${message}`;
  }
}