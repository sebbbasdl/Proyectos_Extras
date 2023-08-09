import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../../persona.model';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  index: number
  nombreInput: string
  apellidoInput:string
  modoEdicion: number
  //@ViewChild('nombreInput') nombreInput:ElementRef
  //@ViewChild('apellidoInput') apellidoInput:ElementRef

  constructor(private loggingService:LoggingService, private personasService:PersonasService, private router: Router, private route: ActivatedRoute){
      this.personasService.saludar.subscribe(
      (indice:number) => alert("El indice es: "+indice)
    )
  }

  ngOnInit(){
      this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion']
      this.index = this.route.snapshot.params['id']
      if(this.modoEdicion != null && this.modoEdicion == 1){
       console.log("Modo edicion") 
       let persona : Persona =this.personasService.encontrarPersona(this.index)
       this.nombreInput=persona.nombre
       this.apellidoInput= persona.apellido

      }

  }
  guardarPersona(){
    let persona1= new Persona(this.nombreInput,this.apellidoInput)
    //this.personas.push(persona1)
    //this.personaCreada.emit(persona1);
    if(this.modoEdicion != null && this.modoEdicion == 1){
      this.personasService.modificarPersona(this.index,persona1)

    }else{
      this.personasService.personaAgregada(persona1)
    }
    
    this.router.navigate(['personas'])
  }

  eliminarPersona(){
    if(this.index !=null){
      this.personasService.eliminarPersona(this.index)

    }
    this.router.navigate(['personas'])
  }
}
