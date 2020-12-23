import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { PaymentService } from '../../service/payment.service';
import { map } from 'rxjs/operators';
// import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/service/cart.service';
import { CommonService } from 'src/app/service/common.service';
import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { City } from 'src/app/model/city';
import * as cities from '../../data/disctricts.json';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  cities: any= cities["default"];
  products: Product[];
  totalPrice: Number = 0;
  totalQuantity: Number = 0;
  private city = { "Hồ Chí Minh": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(e => `Quận ` + e), "Hà Nội": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(e => `Quận ` + e) }

  constructor(private service: PaymentService, private cartService: CartService, private commonService: CommonService) { }

  ngOnInit() {
    this.displaydata();
    this.getTotal();
    this.getCity();
  }
  getCity() {
    // this.commonService.getAllCity().subscribe(data => this.cities = data);
  }
  getTotal() {
    this.cartService.totalPrice.subscribe(data => this.totalPrice = data);
    this.cartService.totalQuantity.subscribe(data => this.totalQuantity = data);
  }
  displaydata() {
    this.products = this.cartService.getItems();
  }
}