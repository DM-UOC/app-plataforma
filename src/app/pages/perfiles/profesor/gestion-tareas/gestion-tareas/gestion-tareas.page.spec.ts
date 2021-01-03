import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionTareasPage } from './gestion-tareas.page';

describe('GestionTareasPage', () => {
  let component: GestionTareasPage;
  let fixture: ComponentFixture<GestionTareasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionTareasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
