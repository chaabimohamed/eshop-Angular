import { Component } from '@angular/core';
import {ProductService} from '../../services/product.service'

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent {

  title = "api";
  allProduct:any;
  viewData:any;
  filtred:any;
  categorys:any;
  constructor(private _apiservie:ProductService){}
  ngOnInit(){
    this._apiservie.getProduct().subscribe(res=>{
      this.allProduct=res
      this.viewData=this.allProduct;
      this.categorys=this.allProduct.map((p:any)=>p["sub-category"])
    })

  }
  filter(element:string,by:string){
    this.viewData = this.allProduct.filter((p:any)=>p[by]==element);
  }
  max = 5;
  isReadonly = true;
  p: number = 1;
}
