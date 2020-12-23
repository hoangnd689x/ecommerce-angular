import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payment } from '../model/payment';
import { Observable } from 'rxjs';
import { Subject, BehaviorSubject } from 'rxjs';
  
@Injectable()
export class PaymentService {
 
  private paymentsUrl: string;
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);
  constructor(private http: HttpClient) {
    this.paymentsUrl = 'http://localhost:8080/api/payment';
  }
 
  public findAll(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.paymentsUrl);
  }
 
  public save(payment: Payment) {
    return this.http.post<Payment>(this.paymentsUrl, payment);
  }
}
