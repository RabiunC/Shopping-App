import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    const item = this.cartItemList.find(
      (item: any) => product._id === item._id
    );
    if (!item) {
      this.cartItemList.push({ ...product, quantity: 1 });
    } else {
      item.quantity = item.quantity + 1;
    }
    this.productList.next(this.cartItemList);
    //console.log(this.cartItemList);
    this.getTotalQuantity();
    this.getTotalPrice();
  }

  getTotalQuantity(): number {
    let totalQuantity = 0;
    totalQuantity = this.cartItemList.reduce((acc: any, item: any) => {
      return acc + item.quantity;
    }, 0);
    return totalQuantity;
  }

  removeCartItem(product: any) {
    const item = this.cartItemList.find(
      (item: any) => product._id === item._id
    );
    const idx = this.cartItemList.findIndex(
      (item: any) => product._id === item._id
    );
    item.quantity--;
    if (item.quantity < 1) {
      this.cartItemList.splice(idx, 1);
    }
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  deleteItem(id: any) {
    const idx = this.cartItemList.findIndex((item: any) => item._id === id);
    this.cartItemList.splice(idx, 1);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((item: any) => {
      grandTotal = grandTotal + item.quantity * item.price;
    });
    return grandTotal;
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
