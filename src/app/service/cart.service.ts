import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../model/items';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  basicUrl = "http://localhost:8080/api/cart";
  items: Item[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();
  constructor(private http: HttpClient) { }

  addToCart(product: any, quantity: any) {
    let item = new Item(product, quantity);

    this.items.push(item); // mockup purpose
    // check if existed cartID;
    let cartID = this.getOrCreateCartID(item);
    this.getItemsFromDB(cartID);
    this.calculateTotal();
  }
  calculateTotal() {
    let totalPrice = 0;
    let totalQuantity = 0;
    this.items.forEach(item => {
      totalPrice += +item.buyPrice * item.quantity;
      totalQuantity += item.quantity;
    });
    this.totalPrice.next(totalPrice);
    this.totalQuantity.next(totalQuantity);
    console.log("calculating total: totalPrice: " + totalPrice + " total quantity: " + totalQuantity);
  }
  getItemsFromDB(cartID: string) {
    // post method to get items base on cartID
    // this.http.post(this.basicUrl,item).subscribe(data=> cartID=data.toString());
    // mockup data
    return this.items;
  }
  getOrCreateCartID(item) {
    let cartID = localStorage.getItem("cartID");
    if (cartID) return cartID;
    // add product to db and get cartID back
    // this.http.post(this.basicUrl,item).subscribe(data=> cartID=data.toString());
    // mock data ==> return item & cartID=1;
    cartID = "1"
    localStorage.setItem("cartID", cartID);
    return cartID;
  }
}
