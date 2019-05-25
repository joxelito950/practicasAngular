import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioNotasDosComponent } from './paginas/formulario-notas-dos/formulario-notas-dos.component';
import { FormularioNotasUnoComponent } from './paginas/formulario-notas-uno/formulario-notas-uno.component';
import { ListadoComponent } from './paginas/listado/listado.component';

const routes: Routes = [
  { path: 'listado', component: ListadoComponent },
  { path: 'formulario/uno', component: FormularioNotasUnoComponent },
  { path: 'formulario/dos', component: FormularioNotasDosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
