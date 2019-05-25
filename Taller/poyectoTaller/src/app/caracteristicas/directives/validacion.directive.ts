import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import { FormularioService } from '../services/formulario.service';
import { FormGroup, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appValidacion]'
})
export class ValidacionDirective implements OnInit {

  private readonly element: HTMLIFrameElement;
  private abstractControl: AbstractControl; 

  @Input() length = 20;
  @Input() group: FormGroup;
  @Input() errors: any;

  constructor(
    public formulario: FormularioService, 
    public ref: ElementRef,
  ) {
    this.element = ref.nativeElement;
   }

  ngOnInit(){
    this.abstractControl = this.group.controls[this.element.name];
  }
  @HostListener('keydown', ['$event']) ontextInput(event: any) {
    if (69 === event.keyCode) {
      event.preventDefault();
    }
    console.log(this.length, this.abstractControl);
  }
  
  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }
}
