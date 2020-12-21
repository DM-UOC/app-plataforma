import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SesionVirtualPage } from './sesion-virtual.page';

describe('SesionVirtualPage', () => {
  let component: SesionVirtualPage;
  let fixture: ComponentFixture<SesionVirtualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesionVirtualPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SesionVirtualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
