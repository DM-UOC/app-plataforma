import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionHijosPage } from './gestion-hijos.page';

describe('GestionHijosPage', () => {
  let component: GestionHijosPage;
  let fixture: ComponentFixture<GestionHijosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionHijosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionHijosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
