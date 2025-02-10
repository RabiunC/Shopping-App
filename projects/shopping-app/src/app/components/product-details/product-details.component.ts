import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  id: any;
  data: any;
  public totalItems: number = 0;
  public grandTotal : number = 0;
  elem: boolean = false;

  constructor(private ar: ActivatedRoute, private pService: ProductService, private cService: CartService, private router: Router){}

  back(){
    this.router.navigateByUrl('/');
  }

  incrementQauntity(item: any){
    this.cService.addToCart(item);
  }

  deleteItem(id: any) {
    this.cService.deleteItem(id);
  }

  ngOnInit(): void {
    this.ar.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      //console.log(this.id);
      this.data = this.pService.getbyId(this.id);
      //console.log(JSON.stringify(this.data));

      this.cService.getProducts().subscribe((res) => {        
        
        const item = res.filter((item: any) => this.id === item._id);
        if(item){
          this.elem = true;
          //alert(this.elem);
        }

        this.totalItems = res.reduce((acc: any, curr: any) => {
          return acc + curr.quantity;
        }, 0);
        this.grandTotal = this.cService.getTotalPrice();
      });
    });
  }
  
}
