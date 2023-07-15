import { Component, Input } from '@angular/core';
import { Ingresos } from '../ingresos.model';
import { Egresos } from '../egresos.model';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  @Input() egresosTotales:number
  @Input() ingresosTotales:number


}
