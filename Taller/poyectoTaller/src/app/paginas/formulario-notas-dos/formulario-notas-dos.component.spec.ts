import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNotasDosComponent } from './formulario-notas-dos.component';

describe('FormularioNotasDosComponent', () => {
  let component: FormularioNotasDosComponent;
  let fixture: ComponentFixture<FormularioNotasDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioNotasDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNotasDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
