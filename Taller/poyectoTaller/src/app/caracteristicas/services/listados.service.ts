import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Nota } from '../class/notas.class';
import { NOTAS } from 'src/app/compartidos/notas';

@Injectable({
  providedIn: 'root'
})
export class ListadosService {

  constructor() { }

  getNotas() :Observable<Nota[]> {
    return of(NOTAS);
  }

  addNota(nota: Nota) {
    NOTAS.push(nota);
  }
}
