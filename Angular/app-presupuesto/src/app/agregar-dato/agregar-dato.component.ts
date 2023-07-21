import { Component, EventEmitter, Output } from '@angular/core';
import { Ingresos } from '../ingresos.model';
import { Egresos } from '../egresos.model';

@Component({
  selector: 'app-agregar-dato',
  templateUrl: './agregar-dato.component.html',
  styleUrls: ['./agregar-dato.component.css']
})
export class AgregarDatoComponent {
  tipo:string="ing"
  desc:string
  value:number
  @Output() nuevoIngreso = new EventEmitter<{ nuevo2: Egresos ,nuevo: Ingresos, tipo: string }>();


  // Resto del código del componente hijo

  enviarNuevoIngreso() {
    console.log(this.tipo);
    const nuevo: Ingresos = new Ingresos(this.value, this.desc);
    const nuevo2: Egresos = new Egresos(this.value, this.desc);
    this.nuevoIngreso.emit({ nuevo2, nuevo, tipo: this.tipo });
  }
  

  tipoOperacion(evento: Event) {
    this.tipo = (evento.target as HTMLSelectElement).value;
  }
}
