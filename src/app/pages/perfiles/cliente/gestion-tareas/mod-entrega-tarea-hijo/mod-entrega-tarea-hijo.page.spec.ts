import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModEntregaTareaHijoPage } from './mod-entrega-tarea-hijo.page';

describe('ModEntregaTareaHijoPage', () => {
  let component: ModEntregaTareaHijoPage;
  let fixture: ComponentFixture<ModEntregaTareaHijoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModEntregaTareaHijoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModEntregaTareaHijoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
