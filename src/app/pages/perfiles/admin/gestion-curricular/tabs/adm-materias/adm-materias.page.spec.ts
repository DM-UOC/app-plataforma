import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmMateriasPage } from './adm-materias.page';

describe('AdmMateriasPage', () => {
  let component: AdmMateriasPage;
  let fixture: ComponentFixture<AdmMateriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmMateriasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmMateriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
