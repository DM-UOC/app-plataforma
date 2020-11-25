import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmMateriasProfesoresPage } from './adm-materias-profesores.page';

describe('AdmMateriasProfesoresPage', () => {
  let component: AdmMateriasProfesoresPage;
  let fixture: ComponentFixture<AdmMateriasProfesoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmMateriasProfesoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmMateriasProfesoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
