import { Component, EventEmitter, Output } from '@angular/core';
import { Ingresos } from '../ingresos.model';

@Component({
  selector: 'app-agregar-dato',
  templateUrl: './agregar-dato.component.html',
  styleUrls: ['./agregar-dato.component.css']
})
export class AgregarDatoComponent {
  signo:string
  desc:string
  value:number
  @Output() nuevoIngreso = new EventEmitter<Ingresos>();

  // Resto del código del componente hijo

  enviarNuevoIngreso() {
    const ingresos: Ingresos = new Ingresos(this.value, this.desc); 

    this.nuevoIngreso.emit(ingresos);
  }
}
