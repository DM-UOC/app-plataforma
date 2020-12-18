import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfesorMateriasDetallePage } from './profesor-materias-detalle.page';

describe('ProfesorMateriasDetallePage', () => {
  let component: ProfesorMateriasDetallePage;
  let fixture: ComponentFixture<ProfesorMateriasDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorMateriasDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfesorMateriasDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
