import { Component, Input } from '@angular/core';
import { Ingresos } from '../ingresos.model';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent {
  @Input() ingresoE: Ingresos;
  @Input() totalI:number
  
  
}
