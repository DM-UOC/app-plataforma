import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModParcialesPage } from './mod-parciales.page';

describe('ModParcialesPage', () => {
  let component: ModParcialesPage;
  let fixture: ComponentFixture<ModParcialesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModParcialesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModParcialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
