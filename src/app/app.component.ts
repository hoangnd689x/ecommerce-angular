import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-angular';
  totalPrice: number = 0;
  totalQuantity: number = 0;
  constructor(private cartService: CartService) {
    this.cartService.totalPrice.subscribe(data=>this.totalPrice=data);
    this.cartService.totalQuantity.subscribe(data=>this.totalQuantity=data);
  }
}
