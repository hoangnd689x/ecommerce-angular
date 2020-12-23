import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-cart-service',
  templateUrl: './cart-service.component.html',
  styleUrls: ['./cart-service.component.css']
})
export class CartServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export class CartService {
  items = [];
  constructor() {}
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
