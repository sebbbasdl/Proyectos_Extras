import { Component } from '@angular/core';
import { Ingresos } from './ingresos.model';
import { Egresos } from './egresos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-presupuesto';
  ingresos: Ingresos[]= [new Ingresos(2100,"Salario"), new Ingresos(1500, "Venta Coche")];
  egresos: Egresos[]=[new Egresos(1500,"Renta departamento"), new Egresos(435.28,"Ropa")];
  totalI :number =this.totalIngresos(this.ingresos);
  totalE :number =this.totalEgresos(this.egresos);
  nuevoI:Ingresos

  /*constructor() {
    const total = this.totalIngresos(this.ingresos);
    console.log('Total ingresos:', total);
  }*/

  totalIngresos(arregloIngresos: Ingresos[]): number {
    let total: number = 0;
  
    for (let index = 0; index < arregloIngresos.length; index++) {
      total += arregloIngresos[index].valor;
    }
  
    return total;
  }

  totalEgresos(arregloEgresos:Egresos[]):number{
    let total:number = 0
    for (let index = 0; index < arregloEgresos.length; index++) {
        total += arregloEgresos[index].valor
        
    }
    return total;
  }

  procesarNuevoI(nuevo:Ingresos){
    this.nuevoI=nuevo
    this.ingresos.push(this.nuevoI);
    this.totalI= this.totalIngresos(this.ingresos)

  }

}
