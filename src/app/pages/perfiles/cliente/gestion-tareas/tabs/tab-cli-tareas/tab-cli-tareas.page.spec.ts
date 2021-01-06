import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabCliTareasPage } from './tab-cli-tareas.page';

describe('TabCliTareasPage', () => {
  let component: TabCliTareasPage;
  let fixture: ComponentFixture<TabCliTareasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCliTareasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabCliTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
