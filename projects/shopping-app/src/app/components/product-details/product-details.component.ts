import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  _id: any;
  constructor(private ar: ActivatedRoute){}

  ngOnInit(): void {

    this.ar.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get('id');
      console.log(this._id);
    });
  }
  
}
