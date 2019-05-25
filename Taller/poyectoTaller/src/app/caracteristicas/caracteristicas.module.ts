import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromedioPipe } from './pipes/promedio.pipe';

@NgModule({
  declarations: [PromedioPipe],
  imports: [
    CommonModule
  ]
})
export class CaracteristicasModule { }
