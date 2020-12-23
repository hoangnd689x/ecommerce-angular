import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
  
@Injectable()
export class ProductService {
 
  private productsUrl: string;
	 
  constructor(private http: HttpClient) {
    this.productsUrl = 'http://localhost:8080/api/product';
  }
 
  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
