import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabLectivosPage } from './tab-lectivos.page';

describe('TabLectivosPage', () => {
  let component: TabLectivosPage;
  let fixture: ComponentFixture<TabLectivosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabLectivosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabLectivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
