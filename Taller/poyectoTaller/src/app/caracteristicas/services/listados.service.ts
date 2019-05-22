import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pelicula } from '../class/pelicula.class';
import { PELICULAS } from '../../compartidos/peliculas-mock';

@Injectable({
  providedIn: 'root'
})
export class ListadosService {

  constructor() { }

  getPeliculas() :Observable<Pelicula[]> {
    return of(PELICULAS);
  }
}
