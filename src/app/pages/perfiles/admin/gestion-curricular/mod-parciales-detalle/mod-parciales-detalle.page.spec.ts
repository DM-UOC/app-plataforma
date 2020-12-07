import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModParcialesDetallePage } from './mod-parciales-detalle.page';

describe('ModParcialesDetallePage', () => {
  let component: ModParcialesDetallePage;
  let fixture: ComponentFixture<ModParcialesDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModParcialesDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModParcialesDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
