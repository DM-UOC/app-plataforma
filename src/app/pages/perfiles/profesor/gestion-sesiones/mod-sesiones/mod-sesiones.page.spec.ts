import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModSesionesPage } from './mod-sesiones.page';

describe('ModSesionesPage', () => {
  let component: ModSesionesPage;
  let fixture: ComponentFixture<ModSesionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModSesionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModSesionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
