import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {

  nombreInput: string
  apellidoInput:string
  //@ViewChild('nombreInput') nombreInput:ElementRef
  //@ViewChild('apellidoInput') apellidoInput:ElementRef

  constructor(private loggingService:LoggingService, private personasService:PersonasService){
      this.personasService.saludar.subscribe(
      (indice:number) => alert("El indice es: "+indice)
    )
  }

  ngOnInit(){}
  agregarPersona(){
    let persona1= new Persona(this.nombreInput,this.apellidoInput)
    //this.personas.push(persona1)
    //this.personaCreada.emit(persona1);
    this.personasService.personaAgregada(persona1)
  }
}
