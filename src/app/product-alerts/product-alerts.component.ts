import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // The @Input() decorator indicates that the property value passes in from the component's parent, the product list component.
  @Input() product;

  constructor() {
  }

  ngOnInit(): void {
  }

}
