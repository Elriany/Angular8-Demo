import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }
  url ="https://gist.githubusercontent.com/a7med-hussien/7fc3e1cba6abf92460d69c0437ce8460/raw/da46abcedf99a3d2bef93a322641926ff60db3c3/products.json";

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

}
