import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { PaymentService } from '../../service/payment.service';
import { map } from 'rxjs/operators';
// import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
   products: Product[];
  private city = {"Hồ Chí Minh":[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>`Quận `+e),"Hà Nội":[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>`Quận `+e)}
  constructor(private http: HttpClient,private service:PaymentService) { }

  ngOnInit() {
    this.service.findAll().
    subscribe((data) => this.displaydata(data));
  }
  displaydata(data) {
    this.products = data;
  }
  // products = [{
  //             "name": "Cơm cháy chà bông", 
  //             "price": "20.000"
  //           }, {
  //             "name": "Cơm chiên hải sản", 
  //             "price": "30.000"
  //           }];

}
