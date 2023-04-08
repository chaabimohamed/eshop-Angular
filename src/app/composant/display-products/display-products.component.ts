import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent {
  @Input() data: any;

  max = 5;
  isReadonly = true;
  p: number = 1;
}
