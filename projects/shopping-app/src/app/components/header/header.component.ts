import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(private cService: CartService){}

  public totalItem: number = 0;
  
  ngOnInit(){
    this.cService.getProducts().subscribe((res) => {
        this.totalItem = res.length;    
    });
  
  }
}
