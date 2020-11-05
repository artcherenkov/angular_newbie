import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart = (product) => this.items.push(product);

  getItems = () => this.items;

  clearCart = () => {
    this.items = [];
    return this.items;
  }

  // инжектнем HttpClient в сигнатуре конструктора,
  // чтобы иметь возможность фетчить информацию и взаимодействовать со сторонними API
  constructor(
    private http: HttpClient
  ) { }
}
