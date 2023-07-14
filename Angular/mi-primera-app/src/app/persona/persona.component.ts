import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  nombre : string = "Sebastian"
  apellido : string = "de Leon"
  edad : number = 22
  //private edad : number =  22

  /*getEdad(){
    return this.edad
  }*/

  /*Template Reference Variable en Angular
    
  <div (keyup)='0'>
    <label>Repetidor:</label>
    <input #entrada />
    {{entrada.value}}
  </div>*/
}
