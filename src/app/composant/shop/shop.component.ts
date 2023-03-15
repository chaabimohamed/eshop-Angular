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
  numberOfPage:any;
  currentPage = 1;
  itemsPerPage = 6;
  constructor(private _apiservie:ProductService){}
  ngOnInit(){
    this._apiservie.getProduct().subscribe(res=>{
      this.allProduct=res
      this.viewData=this.allProduct;
      this.numberOfPage=this.allProduct.length/this.itemsPerPage
    })

  }
  filter(element:string){
    this.viewData = this.allProduct.filter((p:any)=>p.category==element);
  }
  max = 5;
  isReadonly = true;  
}
