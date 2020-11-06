import {Component, OnInit} from '@angular/core';

// импортируем
import {FormBuilder} from '@angular/forms';

import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;

  // создадим поле класса
  checkoutForm;

  constructor(
    private cartService: CartService,

    // инжектнем
    private formBuilder: FormBuilder
  ) {

    // создадим экземпляр класса и с помощью метода group() определим поля формы
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

}
