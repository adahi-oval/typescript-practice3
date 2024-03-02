export interface Service {
  name: string,
  price: number
}

export class Bill {
  constructor(private company: string, private totalPrice: number, private services: Service[]) {}
} 