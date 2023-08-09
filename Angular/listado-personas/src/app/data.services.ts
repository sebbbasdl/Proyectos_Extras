import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Persona } from './persona.model'

@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient){
    }

    guardarPersonas(personas: Persona[]){   
        this.httpClient.post('https://listado-personas-788fd-default-rtdb.firebaseio.com/datos.json', personas).subscribe(
            response =>{
                console.log("resultado de guardar Personas"+ response)
            },
            error => console.log("Error al guardar Personas"+error)
        )

    }
}