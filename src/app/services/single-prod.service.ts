import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SingleProdService {

  constructor(private _http:HttpClient) {}
  getProductById(id:Number){
    return this._http.get(`http://localhost:3000/product/`+id);
  }
}
