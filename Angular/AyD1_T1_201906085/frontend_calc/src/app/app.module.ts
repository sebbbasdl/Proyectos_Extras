// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de agregar esta importación

import { AppComponent } from './app.component';
import { BackendDataComponent } from './backend-data/backend-data.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, BackendDataComponent, FormularioComponent, ResultadoComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule], // Asegúrate de agregar HttpClientModule aquí
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
