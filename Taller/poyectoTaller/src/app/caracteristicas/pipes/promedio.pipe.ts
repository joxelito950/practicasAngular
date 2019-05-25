import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({
  name: 'promedio'
})
export class PromedioPipe implements PipeTransform {

  transform(formulario: FormGroup, args?: any): number {
    let promedio = 0;
    promedio += +formulario.value.notaUno;
    promedio += +formulario.value.notaDos;
    promedio += +formulario.value.notaTres;
    promedio += +formulario.value.notaCuatro;
    return promedio/4;

  }

}
