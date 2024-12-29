import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as data from '../data.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    
  constructor(private http: HttpClient) { }

   getAllProducts(){
    //return this.http.get('https://dummyjson.com/products?limit=10&skip=10&select=title,price');
    return data.products;
  }


}
