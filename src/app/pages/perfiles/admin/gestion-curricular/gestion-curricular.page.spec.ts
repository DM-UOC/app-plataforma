import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionCurricularPage } from './gestion-curricular.page';

describe('GestionCurricularPage', () => {
  let component: GestionCurricularPage;
  let fixture: ComponentFixture<GestionCurricularPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCurricularPage ],
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionCurricularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
