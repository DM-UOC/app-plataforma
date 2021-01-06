import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModEntregaTareasPage } from './mod-entrega-tareas.page';

describe('ModEntregaTareasPage', () => {
  let component: ModEntregaTareasPage;
  let fixture: ComponentFixture<ModEntregaTareasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModEntregaTareasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModEntregaTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
