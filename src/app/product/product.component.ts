import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductServiceService } from '../Services/product-service.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  Products:Product[];
  // constructor(private http:HttpClient) { 
  //   this.http.get("")
  //   .subscribe(
  //     response => {this.Products =response.ProductCollection},
  //     error => {console.log(error)}
  //   );
  // }
  constructor(private sevicePrducts: ProductServiceService) { 
    sevicePrducts.getAllProducts()
    .subscribe(response => {this.Products =response.ProductCollection},err=> {console.log(err)}
    );
  }

}
