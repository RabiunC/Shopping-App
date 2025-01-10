import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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
