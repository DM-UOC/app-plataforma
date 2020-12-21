import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModHijosPage } from './mod-hijos.page';

describe('ModHijosPage', () => {
  let component: ModHijosPage;
  let fixture: ComponentFixture<ModHijosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModHijosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModHijosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
