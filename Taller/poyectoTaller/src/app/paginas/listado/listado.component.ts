import { Component, OnInit } from '@angular/core';
import { ListadosService } from '../../caracteristicas/services/listados.service';
import { Pelicula } from 'src/app/caracteristicas/class/pelicula.class';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
  providers: [ListadosService]
})
export class ListadoComponent implements OnInit {
  public listaPeliculas: Pelicula[];


  constructor(public servicioPeliculas: ListadosService) { }

  ngOnInit() {
    this.getPeliculas();
  }
  getPeliculas() {
    this.servicioPeliculas.getPeliculas().subscribe(
      response => {
        this.listaPeliculas = response;
      }
    )
  }
}
