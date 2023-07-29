import { Component, Input } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  @Input() persona: Persona;
  @Input() indice: number;
  
  constructor(private personaService:PersonasService){
        
  }

  emitirSaludo(){
    this.personaService.saludar.emit(this.indice+1)
  }
}
