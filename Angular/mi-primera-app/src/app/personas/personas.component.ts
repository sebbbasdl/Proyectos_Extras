import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css'] 
})
export class PersonasComponent{
    deshabilitar = false;
    mensaje = 'No se ha agregado ninguna persona';
    titulo = 'Ingeniero';
    mostrar = false

    agregarPersona(){
        this.mostrar = true
        this.mensaje = 'Persona agregada';
    }


/*<input type="text" class = 'form-control' (input)='modificarTitulo($event)'>
    modificarTitulo(event : Event){
        this.titulo =  (<HTMLInputElement>event.target).value

    }*/
}