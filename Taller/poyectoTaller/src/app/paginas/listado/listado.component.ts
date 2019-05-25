import { Component, OnInit } from '@angular/core';
import { ListadosService } from '../../caracteristicas/services/listados.service';
import { Nota } from 'src/app/caracteristicas/class/notas.class';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
  providers: [ListadosService]
})
export class ListadoComponent implements OnInit {
  public listaNotas: Nota[];


  constructor(public servicioNotas: ListadosService) { }

  ngOnInit() {
    this.getNotas();
  }
  getNotas() {
    this.servicioNotas.getNotas().subscribe(
      response => {
        this.listaNotas = response;
      }
    )
  }
  addNota(nota:Nota) {
    this.servicioNotas.addNota(nota);
  }
}
