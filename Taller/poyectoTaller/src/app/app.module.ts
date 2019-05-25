import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CompartidosModule } from './compartidos/compartidos.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './paginas/listado/listado.component';
import { FormularioNotasUnoComponent } from './paginas/formulario-notas-uno/formulario-notas-uno.component';
import { FormularioNotasDosComponent } from './paginas/formulario-notas-dos/formulario-notas-dos.component';

import { PromedioPipe } from './caracteristicas/pipes/promedio.pipe';
import { ValidacionDirective } from './caracteristicas/directives/validacion.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    FormularioNotasUnoComponent,
    FormularioNotasDosComponent,
    PromedioPipe,
    ValidacionDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CompartidosModule
  ],
  exports: [
    ValidacionDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
