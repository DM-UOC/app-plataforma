import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModListadoParticipantesTareaPage } from './mod-listado-participantes-tarea.page';

describe('ModListadoParticipantesTareaPage', () => {
  let component: ModListadoParticipantesTareaPage;
  let fixture: ComponentFixture<ModListadoParticipantesTareaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModListadoParticipantesTareaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModListadoParticipantesTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
