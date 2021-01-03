import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModGestionTareasPage } from './mod-gestion-tareas.page';

describe('ModGestionTareasPage', () => {
  let component: ModGestionTareasPage;
  let fixture: ComponentFixture<ModGestionTareasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModGestionTareasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModGestionTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
