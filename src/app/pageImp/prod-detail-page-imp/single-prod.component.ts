import { Component } from '@angular/core';
import {SingleProdService} from '../../services/single-prod.service'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-prod',
  templateUrl: './single-prod.component.html',
  styleUrls: ['./single-prod.component.css']
})
export class SingleProdComponent {
  constructor(private _apiservie:SingleProdService,private route: ActivatedRoute){}
  viewData:any;
  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('productId');
    console.log(id)
    if (id){
    this._apiservie.getProductById(Number(id)).subscribe(res=>{
      this.viewData=res
    })}}

  max = 5;
  isReadonly = true;
   
}
