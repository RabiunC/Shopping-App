import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.css'
})
export class CartDetailsComponent implements OnInit{

  constructor(private router: Router, private cService: CartService){}
  
  cartProductList: any = [];
  public totalItems: number = 0;
  public grandTotal : number = 0;
  public quantity: number = 0;
  public itemTotalPrice: number = 0;

  back(){
    this.router.navigateByUrl('/');
  }
  clearCart(){
    this.cService.removeAllCart();
  }
  incrementQauntity(item: any){
    this.cService.addToCart(item);
  }
  decrementQauntity(item: any){
    this.cService.removeCartItem(item);
  }
  deleteItem(id: any) {
    this.cService.deleteItem(id);
  }
                      
  ngOnInit(){
    this.cService.getProducts().subscribe((res) => {
        this.cartProductList = [...res];
        this.itemTotalPrice = res.map((item: any) => {
             return Object.assign(item, {itemTotalPrice: item.quantity * item.price});
        });  
        this.totalItems = res.reduce((acc: any, curr: any) => {
          return acc + curr.quantity;
        }, 0);
        this.grandTotal = this.cService.getTotalPrice();
        //console.log(this.itemTotalPrice);
    });
    /*this.productList.forEach((item: any) => {
          Object.assign(item, {quantity: 1, totalPrice: item.price});          
      });*/
  }
  
}
