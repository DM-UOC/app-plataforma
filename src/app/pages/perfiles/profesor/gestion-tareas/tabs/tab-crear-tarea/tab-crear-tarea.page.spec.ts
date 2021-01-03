import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabCrearTareaPage } from './tab-crear-tarea.page';

describe('TabCrearTareaPage', () => {
  let component: TabCrearTareaPage;
  let fixture: ComponentFixture<TabCrearTareaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCrearTareaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabCrearTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
