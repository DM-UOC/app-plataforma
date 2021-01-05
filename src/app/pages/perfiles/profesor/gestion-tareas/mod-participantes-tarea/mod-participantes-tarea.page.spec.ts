import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModParticipantesTareaPage } from './mod-participantes-tarea.page';

describe('ModParticipantesTareaPage', () => {
  let component: ModParticipantesTareaPage;
  let fixture: ComponentFixture<ModParticipantesTareaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModParticipantesTareaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModParticipantesTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
