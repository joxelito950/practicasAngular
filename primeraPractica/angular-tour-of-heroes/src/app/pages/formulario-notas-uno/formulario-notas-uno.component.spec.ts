import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNotasUnoComponent } from './formulario-notas-uno.component';

describe('FormularioNotasUnoComponent', () => {
  let component: FormularioNotasUnoComponent;
  let fixture: ComponentFixture<FormularioNotasUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioNotasUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNotasUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
