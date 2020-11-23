import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable()
export class ProductDetailService {
  private productsUrl: string;
	 
  constructor(private http: HttpClient) {
    this.productsUrl = 'http://localhost:8080/api/product';
  }

  getProduct(id: number): Observable<Product | undefined> {
    return this.http.get<Product>(this.productsUrl+"/"+id);
  }
  
}
