import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MateriasService } from 'src/app/services/materias/materias.service';

import { TabMateriasPage } from './tab-materias.page';

describe('TabMateriasPage', () => {
  let component: TabMateriasPage;
  let fixture: ComponentFixture<TabMateriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMateriasPage ],
      imports: [
        IonicModule.forRoot(),
        MateriasService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TabMateriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
