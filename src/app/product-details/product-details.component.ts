import { Component, OnInit } from '@angular/core';

// импортируем необходимый пакет, а также массив продуктов
import {ActivatedRoute} from '@angular/router';

import {products} from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // добавим поле класса
  product;

  // Инжектнем ActivatedRoute в конструктор.
  // ActivatedRoute уникален для каждого компонента. Он содержит информацию о роуте, параметрах роута и др.
  // Инжектая (добавляя) ActivatedRoute в конструктор, мы конфигурируем компонент на использование сервиса (service).
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // Подписываемся на параметры роута и находим по переданному в роуте индексу продукт, на страницу которого мы перешли.
    this.route.paramMap.subscribe(params => this.product = products[+params.get('productId')]);
  }

}
