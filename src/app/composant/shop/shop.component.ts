import { Component } from '@angular/core';
import {ProductService} from '../../services/product.service'
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  title = "api";
  allProduct:any;
  viewData:any;
  filtred:any;
  constructor(private _apiservie:ProductService){}
  ngOnInit(){
    this._apiservie.getProduct().subscribe(res=>{
      this.allProduct=res
      this.viewData=this.allProduct;
    })

  }
  filter(element:string){
    this.viewData = this.allProduct.filter((p:any)=>p.category==element);
  }  
}
