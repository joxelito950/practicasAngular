import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor() { }

  public messages(){
     const mensajes={
      required: 'El campo es requerido',
      number: 'El campo es numerico',
      minlength: 'El minimo de caracteres no ah sido alcanzado',
      manlength: 'Ah excedio el maximo de caracteres'
    }
    return mensajes;
  };
  public validateForm(formularioAValidar: FormGroup, errores: any) {
    const formulario = formularioAValidar;

    for(const nombreCampo in errores){
      if(nombreCampo){
          errores[nombreCampo] = '';
          const campo = formulario.get(nombreCampo);
          const messages = this.messages();
          if(campo && !campo.valid){
            if(campo.invalid && campo.touched){
              for(const key in campo.errors){
                if(key){
                  errores[nombreCampo] = errores[nombreCampo] || messages[key];
                } else{
                  errores[nombreCampo] = errores[nombreCampo] || messages[key](campo.errors[key]);
                }
              }
            }
          }
      }
    }
    return errores;
  }
}
