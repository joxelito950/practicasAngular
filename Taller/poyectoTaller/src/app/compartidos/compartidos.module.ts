import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [NavegacionComponent],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports:[
    NavegacionComponent
  ]
})
export class CompartidosModule { }
