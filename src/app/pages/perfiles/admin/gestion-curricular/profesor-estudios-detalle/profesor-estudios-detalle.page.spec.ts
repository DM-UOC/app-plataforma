import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfesorEstudiosDetallePage } from './profesor-estudios-detalle.page';

describe('ProfesorEstudiosDetallePage', () => {
  let component: ProfesorEstudiosDetallePage;
  let fixture: ComponentFixture<ProfesorEstudiosDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorEstudiosDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfesorEstudiosDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
