import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionTareasRepresentantePage } from './gestion-tareas-representante.page';

describe('GestionTareasRepresentantePage', () => {
  let component: GestionTareasRepresentantePage;
  let fixture: ComponentFixture<GestionTareasRepresentantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionTareasRepresentantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionTareasRepresentantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
