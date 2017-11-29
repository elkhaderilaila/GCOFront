import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreSocieteComponent } from './parametre-societe.component';

describe('ParametreSocieteComponent', () => {
  let component: ParametreSocieteComponent;
  let fixture: ComponentFixture<ParametreSocieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametreSocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametreSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
