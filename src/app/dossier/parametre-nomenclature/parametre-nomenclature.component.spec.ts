import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreNomenclatureComponent } from './parametre-nomenclature.component';

describe('ParametreNomenclatureComponent', () => {
  let component: ParametreNomenclatureComponent;
  let fixture: ComponentFixture<ParametreNomenclatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametreNomenclatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametreNomenclatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
