import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltersFunctionService {


  filter(products:any,element:string,by:string){
    return products.filter((p:any)=>p[by]==element);
  }
  constructor() { 
  
  }

}
