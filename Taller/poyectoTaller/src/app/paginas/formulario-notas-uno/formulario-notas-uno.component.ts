import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormularioNotas } from 'src/app/caracteristicas/class/formularioNotas.class';
import { FormularioService } from 'src/app/caracteristicas/services/formulario.service';
import { Nota } from 'src/app/caracteristicas/class/notas.class';
import { ListadosService } from 'src/app/caracteristicas/services/listados.service';

@Component({
  selector: 'app-formulario-notas-uno',
  templateUrl: './formulario-notas-uno.component.html',
  styleUrls: ['./formulario-notas-uno.component.scss'],
  providers:[FormularioService, ListadosService],
})
export class FormularioNotasUnoComponent extends FormularioNotas implements OnInit {

  constructor(
    public formularioNotaUno: FormBuilder,
    public servicioFormulario: FormularioService,
    public listadoService: ListadosService,
  ) {
    super(formularioNotaUno, servicioFormulario);
   }


  ngOnInit() {
    this.crearFormulario();
  }

  calcularPromedio(){
    this.promedio = +0;
    if(this.formularioNota.valid){
      this.promedio += +this.formularioNota.value.notaUno;
      this.promedio += +this.formularioNota.value.notaDos;
      this.promedio += +this.formularioNota.value.notaTres;
      this.promedio += +this.formularioNota.value.notaCuatro;
      this.promedio = this.promedio/4;
      console.log(this.promedio);
    }
    const nota = new Nota();
    nota.nombre = this.formularioNota.value.nombre;
    nota.dni = this.formularioNota.value.dni;
    nota.notaUno = this.formularioNota.value.notaUno;
    nota.notaDos = this.formularioNota.value.notaDos;
    nota.notaTres = this.formularioNota.value.notaTres;
    nota.notaCuatro = this.formularioNota.value.notaCuatro;
    nota.promedio = this.promedio;
    this.listadoService.addNota(nota);
  }
}
