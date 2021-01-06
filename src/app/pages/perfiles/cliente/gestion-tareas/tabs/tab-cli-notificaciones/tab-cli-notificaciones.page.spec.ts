import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabCliNotificacionesPage } from './tab-cli-notificaciones.page';

describe('TabCliNotificacionesPage', () => {
  let component: TabCliNotificacionesPage;
  let fixture: ComponentFixture<TabCliNotificacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCliNotificacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabCliNotificacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
