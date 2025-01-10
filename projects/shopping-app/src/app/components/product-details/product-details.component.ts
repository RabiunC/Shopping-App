import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  _id: any;
  data: any;
  constructor(private ar: ActivatedRoute, private pService: ProductService){}

  ngOnInit(): void {

    this.ar.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get('id');
      //console.log(this._id);

      this.data = this.pService.getbyId(this._id);
      console.log(JSON.stringify(this.data));
    });
  }
  
}
