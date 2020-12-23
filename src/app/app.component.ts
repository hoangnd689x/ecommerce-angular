import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http' ;
import { map} from 'rxjs/operators';

import * as $ from 'jquery/dist/jquery.min.js';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private http: Http) { }
  httpdata;
  searchparam = 2;
   ngOnInit() {
    //$('.btn-scale').prop('disabled',false); 
    this.http.get("http://jsonplaceholder.typicode.com/users")
    .pipe(map((response) => response.json()))
    .subscribe((data) => this.displaydata(data));     
   }
   displaydata(data) {this.httpdata = data;}
}
// export class AppComponent implements OnInit {
//   constructor(
//     private route: ActivatedRoute,
//     private cartService: CartService
//   ) { }
//   addToCart(product) {
//     this.cartService.addToCart(product);
//     window.alert('Your product has been added to the cart!');
//   }
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
// }
