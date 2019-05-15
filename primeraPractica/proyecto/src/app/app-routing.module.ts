import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HolaComponent } from './hola/hola.component';
import { ErrorComponent } from './error/error.component';
import { Clase2Component } from './clase2/clase2.component';

const routes: Routes = [
  { path: "clase1", component: HolaComponent },
  { path: "clase2", component: Clase2Component },
  { path: "clase2/:id", component: Clase2Component },
  { path: "**", component: ErrorComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
