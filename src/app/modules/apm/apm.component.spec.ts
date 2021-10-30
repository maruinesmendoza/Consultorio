import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApmComponent } from './apm.component';

describe('ApmComponent', () => {
  let component: ApmComponent;
  let fixture: ComponentFixture<ApmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
