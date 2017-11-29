import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreComptabiliteComponent } from './parametre-comptabilite.component';

describe('ParametreComptabiliteComponent', () => {
  let component: ParametreComptabiliteComponent;
  let fixture: ComponentFixture<ParametreComptabiliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametreComptabiliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametreComptabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
