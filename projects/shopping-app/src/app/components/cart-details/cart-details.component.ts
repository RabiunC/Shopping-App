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

  totalItems: number = 0;
  grandTotal: number = 0;

  ngOnInit(){
    this.cService.getProducts().subscribe((res) => {
      this.totalItems = res.length;    
      })
    
    this.grandTotal = this.cService.getTotalPrice();
  }

  back(){
    this.router.navigateByUrl('/');
  }

}
