import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModMateriasPage } from './mod-materias.page';

describe('ModMateriasPage', () => {
  let component: ModMateriasPage;
  let fixture: ComponentFixture<ModMateriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModMateriasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModMateriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
