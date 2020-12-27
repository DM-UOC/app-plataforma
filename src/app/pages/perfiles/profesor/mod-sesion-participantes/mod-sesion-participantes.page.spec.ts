import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModSesionParticipantesPage } from './mod-sesion-participantes.page';

describe('ModSesionParticipantesPage', () => {
  let component: ModSesionParticipantesPage;
  let fixture: ComponentFixture<ModSesionParticipantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModSesionParticipantesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModSesionParticipantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
