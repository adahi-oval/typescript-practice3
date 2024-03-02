import 'mocha';
import { expect } from 'chai';
import { ShortMessageService, EmailService } from '../src/ejercicio-5/services';
import { Notifier } from '../src/ejercicio-5/notifier';

describe('Ejercicio 5', () => {
  const emailNotifier = new Notifier(new EmailService);
  const shortMessageNotifier = new Notifier(new ShortMessageService);
  
  it('Email Funciona correctamente', () => {
    expect(emailNotifier.sendNotification('Hola Mundo!')).to.deep.eq('Sending notification via email: Hola Mundo!');
  });

  it('SMS funciona correctamente', () => {
    expect(shortMessageNotifier.sendNotification('Hola Mundo!')).to.deep.eq('Sending notification via SMS: Hola Mundo!');
  });

})