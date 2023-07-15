import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable(    )
export class PersonasService{
    
  personas: Persona[]=[new Persona("Sebastian", "De Leon"), 
  new Persona("Judith","Tenaz"),
  new Persona("Andres","Tenaz")
  
  ]
  saludar = new EventEmitter<number>() 
  constructor(private loggingService:LoggingService){

  }
  personaAgregada(persona:Persona){
    this.loggingService.enviarMensajeAConsola("Persona agregada es : "+ persona.nombre+" "+persona.apellido)
    this.personas.push(persona);
  }
}