import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModLectivosPage } from './mod-lectivos.page';

describe('ModLectivosPage', () => {
  let component: ModLectivosPage;
  let fixture: ComponentFixture<ModLectivosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModLectivosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModLectivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
