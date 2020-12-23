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
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.totalQuantity.subscribe(data=>this.totalQuantity=data);
    this.cartService.totalPrice.subscribe(data=>this.totalPrice=data);
  }
}
