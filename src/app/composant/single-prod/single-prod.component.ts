import { Component } from '@angular/core';
import {SingleProdService} from '../../services/single-prod.service'
@Component({
  selector: 'app-single-prod',
  templateUrl: './single-prod.component.html',
  styleUrls: ['./single-prod.component.css']
})
export class SingleProdComponent {
  constructor(private _apiservie:SingleProdService){}
  title = "api";
  viewData:any;
  ngOnInit(){
    this._apiservie.getProduct().subscribe(res=>{
      this.viewData=res
    })}
  max = 5;
  isReadonly = true;

}
