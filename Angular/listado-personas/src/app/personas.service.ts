import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";
import { DataServices } from "./data.services";

@Injectable(    )
export class PersonasService{
    
  personas: Persona[]=[new Persona("Sebastian", "De Leon"), 
  new Persona("Judith","Tenaz"),
  new Persona("Andres","Tenaz")
  
  ]
  saludar = new EventEmitter<number>() 
  constructor(private loggingService:LoggingService, private dataServices: DataServices){

  }
  personaAgregada(persona:Persona){
    this.loggingService.enviarMensajeAConsola("Persona agregada es : "+ persona.nombre+" "+persona.apellido)
    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas)
  }

  encontrarPersona(index:number){
    let persona : Persona=this.personas[index]
    return persona


  }

  modificarPersona(index:number, persona :Persona){
    let persona1= this.personas[index]
    persona1.nombre=persona.nombre
    persona1.apellido=persona.apellido
  }

  eliminarPersona(index:number){
    this.personas.splice(index,1)
  }
}