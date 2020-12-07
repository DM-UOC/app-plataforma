import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParcialesDetallePage } from './parciales-detalle.page';

describe('ParcialesDetallePage', () => {
  let component: ParcialesDetallePage;
  let fixture: ComponentFixture<ParcialesDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcialesDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParcialesDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
