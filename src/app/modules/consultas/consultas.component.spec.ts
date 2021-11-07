import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { consultasComponent } from './consultas.component';

describe('consultasComponent', () => {
  let component: consultasComponent;
  let fixture: ComponentFixture<consultasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ consultasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(consultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

