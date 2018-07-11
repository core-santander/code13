import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
// import { ClientesService } from './servicios/clientes.service';

@NgModule({
  declarations: [
    AppComponent,
    ListadoClientesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [], //Clases de servicios solo para este módulo
  bootstrap: [AppComponent]
})
export class AppModule { }
