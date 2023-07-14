import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[]=[new Persona("Sebastian", "De Leon"), 
  new Persona("Judith","Tenaz"),
  new Persona("Andres","Tenaz")
  
  ] 
  
  personaAgregada(persona:Persona){
    this.personas.push(persona);
  }
}
