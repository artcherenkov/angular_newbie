import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  // Определим методы класса
  addToCart = (product) => this.items.push(product);

  getItems = () => this.items;

  clearCart = () => {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
