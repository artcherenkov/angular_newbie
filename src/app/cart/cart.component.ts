import { Component, OnInit } from '@angular/core';

// импортируем сервис `Cart`
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;

  // инжектнем сервис в сигнатуру конструктора
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    // установим список продуктов в корзине
    this.items = this.cartService.getItems();
  }

}
