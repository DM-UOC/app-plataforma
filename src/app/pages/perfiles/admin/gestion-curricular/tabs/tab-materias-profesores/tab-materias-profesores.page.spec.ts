import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabMateriasProfesoresPage } from './tab-materias-profesores.page';

describe('TabMateriasProfesoresPage', () => {
  let component: TabMateriasProfesoresPage;
  let fixture: ComponentFixture<TabMateriasProfesoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMateriasProfesoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabMateriasProfesoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
