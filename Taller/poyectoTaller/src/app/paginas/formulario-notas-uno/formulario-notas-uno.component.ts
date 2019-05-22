import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormularioNotas } from 'src/app/caracteristicas/class/formularioNotas.class';
import { FormularioService } from 'src/app/caracteristicas/services/formulario.service';

@Component({
  selector: 'app-formulario-notas-uno',
  templateUrl: './formulario-notas-uno.component.html',
  styleUrls: ['./formulario-notas-uno.component.scss'],
  providers:[FormularioService],
})
export class FormularioNotasUnoComponent extends FormularioNotas implements OnInit {

  constructor(
    public formularioNotaUno: FormBuilder,
    public servicioFormulario: FormularioService,
  ) {
    super(formularioNotaUno, servicioFormulario);
   }


  ngOnInit() {
    this.crearFormulario();
  }

}
