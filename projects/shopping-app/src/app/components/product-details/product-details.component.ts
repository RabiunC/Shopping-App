import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { DVACAPTION } from '../../../../public/models/app-enums-model'

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
  public NEGLIGIBLE = "below 5%";
  public LOW = "between 5 and 10%";
  public AVERAGE = "between 10 and 20%";
  public GOOD = "between 20 and 40%";
  public GREAT = "above 40%";
  
  constructor(private ar: ActivatedRoute, private pService: ProductService, private cService: CartService, private router: Router){
   //
  }

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

      //console.log("Original data", this.data);
      this.filteringNutrientsbyVal(this.data[0].nutrients);

      console.log("After Object Assigned", this.data);

      this.cService.getProducts().subscribe((res) => {
        const item = res.filter((item: any) => item._id == this.id);
        if(item.length !== 0){
          this.elem = true;
        }
        this.totalItems = res.reduce((acc: any, curr: any) => {
          return acc + curr.quantity;
        }, 0);
        this.grandTotal = this.cService.getTotalPrice();
      });
    });
  }

  filteringNutrientsbyVal(nutrientsObj: any){ 
     
    if(nutrientsObj.Carotenoid){
        if(nutrientsObj.Carotenoid == 0){      
          Object.assign(nutrientsObj, {cimage: "assets/r0.png", cremarks: DVACAPTION[0], ccontent: this.NEGLIGIBLE });
        }
        else if(nutrientsObj.Carotenoid == 1){ 
          Object.assign(nutrientsObj, {cimage: "assets/r1.png", cremarks: DVACAPTION[1], ccontent: this.LOW });    
        }
        else if(nutrientsObj.Carotenoid == 2){ 
          Object.assign(nutrientsObj, {cimage: "assets/r2.png", cremarks: DVACAPTION[2], ccontent: this.AVERAGE });    
        }
        else if(nutrientsObj.Carotenoid == 3){ 
          Object.assign(nutrientsObj, {cimage: "assets/r3.png", cremarks: DVACAPTION[3], ccontent: this.GOOD });   
        }
        else if(nutrientsObj.Carotenoid == 4){ 
          Object.assign(nutrientsObj, {cimage: "assets/r4.png", cremarks: DVACAPTION[4], ccontent: this.GREAT });    
        }
      }
    if(nutrientsObj.VitaminC){
      if(nutrientsObj.VitaminC == 0){      
          Object.assign(nutrientsObj, {vimage: "assets/r0.png", vremarks: DVACAPTION[0], vcontent: this.NEGLIGIBLE});
        }
        else if(nutrientsObj.VitaminC == 1){ 
          Object.assign(nutrientsObj, {vimage: "assets/r1.png", vremarks: DVACAPTION[1], vcontent: this.LOW});    
        }
        else if(nutrientsObj.VitaminC == 2){ 
          Object.assign(nutrientsObj, {vimage: "assets/r2.png", vremarks: DVACAPTION[2], vcontent: this.AVERAGE});    
        }
        else if(nutrientsObj.VitaminC == 3){ 
          Object.assign(nutrientsObj, {vimage: "assets/r3.png", vremarks: DVACAPTION[3], vcontent: this.GOOD});    
        }
        else if(nutrientsObj.VitaminC == 4){ 
          Object.assign(nutrientsObj, {vimage: "assets/r4.png", vremarks: DVACAPTION[4], vcontent: this.GREAT});    
        }
      }
    if(nutrientsObj.Folates){
        if(nutrientsObj.Folates == 0){      
          Object.assign(nutrientsObj, {foimage: "assets/r0.png", foremarks: DVACAPTION[0], focontent: this.NEGLIGIBLE});
        }
        else if(nutrientsObj.Folates == 1){ 
          Object.assign(nutrientsObj, {foimage: "assets/r1.png", foremarks: DVACAPTION[1], focontent: this.LOW});   
        }
        else if(nutrientsObj.Folates == 2){ 
          Object.assign(nutrientsObj, {foimage: "assets/r2.png", foremarks: DVACAPTION[2], focontent: this.AVERAGE});    
        }
        else if(nutrientsObj.Folates == 3){ 
          Object.assign(nutrientsObj, {foimage: "assets/r3.png", foremarks: DVACAPTION[3], focontent: this.GOOD});    
        }
        else if(nutrientsObj.Folates == 4){ 
          Object.assign(nutrientsObj, {foimage: "assets/r4.png", foremarks: DVACAPTION[4], focontent: this.GREAT});    
        }
      }
    if(nutrientsObj.Potassium){
        if(nutrientsObj.Potassium == 0){      
          Object.assign(nutrientsObj, {pimage: "assets/r0.png", premarks: DVACAPTION[0], pcontent: this.NEGLIGIBLE });
        }
        else if(nutrientsObj.Potassium == 1){ 
          Object.assign(nutrientsObj, {pimage: "assets/r1.png", premarks: DVACAPTION[1], pcontent: this.LOW });    
        }
        else if(nutrientsObj.Potassium == 2){ 
          Object.assign(nutrientsObj, {pimage: "assets/r2.png", premarks: DVACAPTION[2], pcontent: this.AVERAGE });    
        }
        else if(nutrientsObj.Potassium == 3){ 
          Object.assign(nutrientsObj, {pimage: "assets/r3.png", premarks: DVACAPTION[3], pcontent: this.GOOD });   
        }
        else if(nutrientsObj.Potassium == 4){ 
          Object.assign(nutrientsObj, {pimage: "assets/r4.png", premarks: DVACAPTION[4], pcontent: this.GREAT });    
        }
      }
    if(nutrientsObj.Fiber){
        if(nutrientsObj.Fiber == 0){      
          Object.assign(nutrientsObj, {fiimage: "assets/r0.png", firemarks: DVACAPTION[0], ficontent: this.NEGLIGIBLE });
        }
        else if(nutrientsObj.Fiber == 1){ 
          Object.assign(nutrientsObj, {fiimage: "assets/r1.png", firemarks: DVACAPTION[1], ficontent: this.LOW });    
        }
        else if(nutrientsObj.Fiber == 2){ 
          Object.assign(nutrientsObj, {fiimage: "assets/r2.png", firemarks: DVACAPTION[2], ficontent: this.AVERAGE });    
        }
        else if(nutrientsObj.Fiber == 3){ 
          Object.assign(nutrientsObj, {fiimage: "assets/r3.png", firemarks: DVACAPTION[3], ficontent: this.GOOD });    
        }
        else if(nutrientsObj.Fiber == 4){ 
          Object.assign(nutrientsObj, {fiimage: "assets/r4.png", firemarks: DVACAPTION[4], ficontent: this.GREAT });   
        }
      }

    }
  
}
