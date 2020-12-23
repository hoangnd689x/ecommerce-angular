import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { Item } from '../model/items';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  basicUrl = "http://localhost:8080/api/cart";
  items: Item[] = [];
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);
  cartID: string = "";
  constructor(private http: HttpClient) {
    this.getOrCreateCartID();
    this.getItemsFromLocalStorage();
    this.calculateTotal();
  }

  addToCart(product: any, quantity: any) {
    let item = new Item(product, quantity);
    this.getOrCreateCartID();
    this.getItemsFromLocalStorage();
    this.addItem(item);
    this.calculateTotal();
  }
  addItem(item: Item) {
    const isSelected = this.items.find(e => e.productId === item.productId)
    if (isSelected) {
      this.items.forEach(e => {
        if (e.productId == item.productId) e.quantity += item.quantity;
      })
    } else {
      this.items.push(item);
    }
    localStorage.setItem(this.cartID, JSON.stringify(this.items));
  }
  updateItem(item: Item) {
    const isSelected = this.items.find(e => e.productId === item.productId)
    if (isSelected) {
      let index = this.items.indexOf(isSelected);
      this.items[index] = item;
    } else {
      this.items.push(item);
    }
    localStorage.setItem(this.cartID, JSON.stringify(this.items));
  }
  getItemsFromLocalStorage() {
    this.items = JSON.parse(localStorage.getItem(this.cartID)) || [];
    return this.items;
  }
  calculateTotal() {
    let totalPrice = 0;
    let totalQuantity = 0;
    this.items.forEach(item => {
      totalPrice += +item.buyPrice * +item.quantity;
      totalQuantity += +item.quantity;
    });
    this.totalPrice.next(totalPrice);
    this.totalQuantity.next(totalQuantity);

  }
  getOrCreateCartID() {
    let cartID = localStorage.getItem("cartID");
    if (cartID) {
      this.cartID = cartID;
      return;
    };
    cartID = this.generateUUID();
    localStorage.setItem("cartID", cartID);
    this.cartID = cartID;
  }
  generateUUID(): string {
    return 'xxxxxxxxyxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  getItems() {
    this.getOrCreateCartID();
    this.getItemsFromLocalStorage();
    this.calculateTotal();
    return this.items;
  }
  removeItem(index: any) {
    this.items.splice(index, 1);
    this.calculateTotal();
    localStorage.setItem(this.cartID, JSON.stringify(this.items));
  }
}
