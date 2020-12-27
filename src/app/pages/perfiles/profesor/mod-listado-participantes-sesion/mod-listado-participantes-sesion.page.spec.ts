import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModListadoParticipantesSesionPage } from './mod-listado-participantes-sesion.page';

describe('ModListadoParticipantesSesionPage', () => {
  let component: ModListadoParticipantesSesionPage;
  let fixture: ComponentFixture<ModListadoParticipantesSesionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModListadoParticipantesSesionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModListadoParticipantesSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
