import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabCliSesionesPage } from './tab-cli-sesiones.page';

describe('TabCliSesionesPage', () => {
  let component: TabCliSesionesPage;
  let fixture: ComponentFixture<TabCliSesionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCliSesionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabCliSesionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
