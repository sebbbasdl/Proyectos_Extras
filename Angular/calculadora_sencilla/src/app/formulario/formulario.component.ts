import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  operandoA: number ;
  operandoB: number ;
  @Output() resultadoSuma= new EventEmitter<number>;

  sumar():void{
    
    this.resultadoSuma.emit(this.operandoA+this.operandoB)
  }
}
