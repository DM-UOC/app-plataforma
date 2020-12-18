import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModProfesorMateriasPage } from './mod-profesor-materias.page';

describe('ModProfesorMateriasPage', () => {
  let component: ModProfesorMateriasPage;
  let fixture: ComponentFixture<ModProfesorMateriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModProfesorMateriasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModProfesorMateriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
