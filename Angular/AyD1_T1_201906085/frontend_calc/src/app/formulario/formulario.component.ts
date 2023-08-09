import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {
  operandoA: number;
  operandoB: number;
  @Output() enviarOperandos = new EventEmitter<{ operandoA: number, operandoB: number }>();

  sumar(): void {
    // Emitir un objeto que contenga los dos operandos
    this.enviarOperandos.emit({ operandoA: this.operandoA, operandoB: this.operandoB });
  }
}
