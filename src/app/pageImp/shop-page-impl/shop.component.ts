import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service'
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {


  title = "api";
  allProduct:any;
  viewData:any;
  categorys:any;
  brands:any;
  constructor(private _apiservie:ProductService){}
  ngOnInit(){
    this._apiservie.getProduct().subscribe(res=>{
      this.allProduct=res
      this.viewData=this.allProduct;
      this.categorys = [...new Set(this.allProduct.map((p:any)=> p["sub-category"]))];
      this.brands = [...new Set(this.allProduct.map((p:any)=> p["brand"]))];
    })

  }
  
  resiveData(data:any){
    this.viewData = data;
  }

}