import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'shoppingApp';
  data: any = [];
  filterby: any = '';

  constructor(private pService: ProductService){}

  ngOnInit(): void {
    
    /*this.pService.getAllProducts().subscribe((res) => {
        this.data = res;
        //console.log(this.data);
    })*/
    this.data = this.pService.getAllProducts();
  }

}
