import {Thing} from './things'

export interface Searchable<T> {
  search(searchTerm: string): T[];
}

export class Box implements Searchable<Thing>{
  constructor(private items: Thing[]) {}

  addItem(item: Thing): void {
    this.items.push(item);
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  getItem(index: number): Thing {
    return this.items[index];
  }

  getNumberOfItems(): number {
    return this.items.length;
  }

  getItems(): Thing[] {
    return this.items;
  }

  search(searchName: string): Thing[] {
    return this.items.filter((item) => item.getName() === searchName);
  }

}

export class BoxPrinter {
  constructor(private box: Box) {}

  print(): void {
    this.box.getItems().forEach((item) => {
      item.print();
    });
  }
}