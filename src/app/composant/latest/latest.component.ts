import { Component } from '@angular/core';
import {LatestService} from '../../services/latest.service'


@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent { 
  title = "api";
  viewData: any;
  constructor(private _apiservie: LatestService) { }
  ngOnInit() {
    this._apiservie.getLatest().subscribe(res => {
      this.viewData = res
    })}
  max=5;
  isReadonly=true;
}
