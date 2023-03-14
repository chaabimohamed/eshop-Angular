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
  constructor(private _apiservie:ProductService){}
  ngOnInit(){
    this._apiservie.getProduct().subscribe(res=>{
      this.allProduct=res
      this.viewData=this.allProduct;
    })

  }
  filter(element:string){
    this.viewData = this.allProduct.filter((p:any)=>p["sub-category"]==element);
  }  
}
