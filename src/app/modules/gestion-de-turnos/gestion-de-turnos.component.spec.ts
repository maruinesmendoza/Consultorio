import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeTurnosComponent } from './gestion-de-turnos.component';

describe('GestionDeTurnosComponent', () => {
  let component: GestionDeTurnosComponent;
  let fixture: ComponentFixture<GestionDeTurnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDeTurnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDeTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
