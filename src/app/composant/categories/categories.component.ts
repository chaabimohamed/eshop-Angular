import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  @Input() categorys: any;
  @Input() brands: any;
  @Input() data: any;


  @Output() dataEvent= new EventEmitter<any>();
  filter(element:string,by:any){
    this.dataEvent.emit(this.data.filter((p:any)=>p[by]==element));
  }
}
