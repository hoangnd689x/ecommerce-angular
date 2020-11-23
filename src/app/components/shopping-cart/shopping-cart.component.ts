import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { Item } from 'src/app/model/items';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  data: Cart;
  product: Product;
  items: Item[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    let cartId = localStorage.getItem("cartID");
    this.items = this.cartService.getItemsFromDB(cartId);
    console.log("items: ",this.items);
  }

}
