import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { City } from '../model/city';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private locationBaseUrl = 'https://thongtindoanhnghiep.co/api/';
  constructor(private http: HttpClient) { }

  getAllCity(): Observable<City[]> {
    let url: string = `${this.locationBaseUrl}city`;
    return this.http.get<CityResponse>(url).pipe(map(response=>response.LtsItem));
  }
}
interface CityResponse {
  LtsItem: City[];
  TotalDoanhNghiep: number;
}