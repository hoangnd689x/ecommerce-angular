import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { Item } from 'src/app/model/items';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { registerLocaleData } from '@angular/common';
import localeVI from '@angular/common/locales/vi';
registerLocaleData(localeVI, 'vi');

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  data: Cart;
  product: Product;
  items: Item[];
  totalPrice: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.cartService.totalPrice.subscribe(data=>this.totalPrice=data);
    console.log("items: ",this.items);
  }
  minusQuantity(item) {
    if (item.quantity > 1){
      item.quantity--;
      this.cartService.calculateTotal();
      this.cartService.totalPrice.subscribe(data=>this.totalPrice=data);
      this.cartService.updateItem(item);
    }
  }
  plusQuantity(item) {
    item.quantity++;
    this.cartService.calculateTotal();
    this.cartService.totalPrice.subscribe(data=>this.totalPrice=data);
    this.cartService.updateItem(item);
  }
  onInputChanged(item,event) {
    item.quantity=event.target.value;
    this.cartService.updateItem(item);
    this.cartService.calculateTotal();
    this.cartService.totalPrice.subscribe(data=>this.totalPrice=data);
  }
  removeItem(index){
    this.cartService.removeItem(index);
  }
}