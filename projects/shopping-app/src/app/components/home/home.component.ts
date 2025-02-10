import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  title = 'shoppingApp';
  productList : any = [];
  filterby: any = '';
  quantity: number = 0;

  constructor(private pService: ProductService, private cService: CartService){}

  addToCart(item: any){
      this.cService.addToCart(item);
  }  

  ngOnInit(): void {    
    this.pService.getAllProducts().subscribe((res) => {
        this.productList = res;        
    })
  }
  
}
