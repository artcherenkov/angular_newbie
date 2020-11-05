import {Component, OnInit, Input} from '@angular/core';

/*
  Чтобы кнопка заработала, нужно две вещи:
    1) Заставить компонент product-alerts эмиттить событие при клике
    2) Заставить компонент product-list реагировать это событие
 */

import {Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  // The @Input() decorator indicates that the property value passes in from the component's parent, the product list component.
  @Input() product;

  // Создадим свойство notify с помощью декоратора @Output и записать туда инстанс EventEmitter'а.
  // This allows the product alert component to emit an event when the value of the notify property changes.
  @Output() notify = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
