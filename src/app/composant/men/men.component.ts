import { Component } from '@angular/core';
import {ProductService} from '../../services/product.service'

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {


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
  max = 5;
  isReadonly = true;
  p: number = 1;
}
