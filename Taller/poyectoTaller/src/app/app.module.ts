import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './paginas/listado/listado.component';
import { FormularioNotasUnoComponent } from './paginas/formulario-notas-uno/formulario-notas-uno.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    FormularioNotasUnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
