import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  valorOperandoA: number = 0;
  valorOperandoB: number = 0;
  suma: number;
  titulo = 'Aplicación Calculadora';

  constructor(private http: HttpClient) {}

  recibirOperandos(operandos: { operandoA: number; operandoB: number }): void {
    const operandoA = operandos.operandoA;
    const operandoB = operandos.operandoB;

    console.log('Operando A:', operandoA);
    console.log('Operando B:', operandoB);
    this.valorOperandoA = operandoA;
    this.valorOperandoB = operandoB;
    this.enviarDatosAlBackend()
  }

  ngOnInit() {

  }

  enviarDatosAlBackend() {
    const url = 'http://localhost:3000/api/endpoint'; // La URL del backend
    const data = { key1: this.valorOperandoA, key2: this.valorOperandoB }; // Los datos que deseas enviar

    this.http.post<any>(url, data).subscribe(
      (response) => {
        console.log('Respuesta del backend:', response);
        this.suma = response.suma; // Guardamos el valor de la suma en la propiedad suma de nuestro componente
      },
      (error) => {
        console.error('Error en la petición al backend:', error);
      }
    );
  }
}
