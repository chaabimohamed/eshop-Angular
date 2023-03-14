import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) {}
  getProduct(){
    return this._http.get('http://localhost:3000/product');
  }
  getWomenProduct(){
    return this._http.get('http://localhost:3000/product/women')
  }
  getKidsProduct(){
    return this._http.get('http://localhost:3000/product/kids')
  }
  getMenProduct(){
    return this._http.get('http://localhost:3000/product/men')
  }
}
