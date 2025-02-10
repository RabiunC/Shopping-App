import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as data from '../data.json';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    
  dvaCaption = ["Negligible", "Low", "Average","Good", "Great"];
  dvaRange = [
    "below 5%",
    "between 5 and 10%",
    "between 10 and 20%",
    "between 20 and 40%",
    "above 40%"
  ];

  constructor(private http: HttpClient) { }

   getAllProducts(){
    //return this.http.get('https://dummyjson.com/products?limit=10&skip=10&select=title,price');
    return of(data.products);
  }

  getbyId(id: any){
    return data.products.filter((item) => item._id == id);
  }


}
