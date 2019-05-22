import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioService }  from '../services/formulario.service';

export class FormularioNotas {
    public formularioNota: FormGroup;
    public promedio: number;

    public formErrores = {
        nombre: '',
        dni: '',
        notaUno: '',
        notaDos: '',
        notaTres: '',
        notaCuatro: '',
    }

    constructor(
        public formulario: FormBuilder,
        public servicioFormulario: FormularioService,
    ) { }

    public getFormulario(): FormGroup {
        return this.formularioNota;
    }

    public crearFormulario(): void {
        this.formularioNota = this.formulario.group({
            nombre: ['', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(50),
            ]],
            dni: ['', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(11),
            ]],
            notaUno: ['', [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(1),
            ]],
            notaDos: ['', [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(1),
            ]],
            notaTres: ['', [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(1),
            ]],
            notaCuatro: ['', [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(1),
            ]],
        });
        this.suscribirFormulario();
    }

    public suscribirFormulario() {
        this.formularioNota.valueChanges.subscribe(() => {
            this.formErrores = this.servicioFormulario.validateForm(this.formularioNota, this.formErrores);
        });
    }
}