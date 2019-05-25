import { Component, OnInit } from '@angular/core';
import { FormularioNotas } from 'src/app/caracteristicas/class/formularioNotas.class';
import { FormularioService } from 'src/app/caracteristicas/services/formulario.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-notas-dos',
  templateUrl: './formulario-notas-dos.component.html',
  styleUrls: ['./formulario-notas-dos.component.scss']
})
export class FormularioNotasDosComponent extends FormularioNotas implements OnInit {

  constructor(
    public formularioNotaUno: FormBuilder,
    public servicioFormulario: FormularioService,
  ) {
    super(formularioNotaUno, servicioFormulario);
   }

  ngOnInit() {
    this.crearFormulario();
  }

  calcularPromedio(){
    if(this.formularioNota.valid){
      this.promedio = 1;
    } else {
      this.promedio = 0;
    }
  }
}
