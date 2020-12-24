import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionSesionesVirtualesPage } from './gestion-sesiones-virtuales.page';

describe('GestionSesionesVirtualesPage', () => {
  let component: GestionSesionesVirtualesPage;
  let fixture: ComponentFixture<GestionSesionesVirtualesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionSesionesVirtualesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionSesionesVirtualesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
