import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suma'
})
export class SumaPipe implements PipeTransform {

  transform(numeros: number[]): number {
    var total = 0;
    numeros.forEach(numero => {
      total += numero;
    });
    return total;
  }

}
