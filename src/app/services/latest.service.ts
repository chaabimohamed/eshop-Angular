import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LatestService {

  constructor(private _http:HttpClient) {}
  getLatest(){
    return this._http.get('http://localhost:3000/latest');
  }

}
