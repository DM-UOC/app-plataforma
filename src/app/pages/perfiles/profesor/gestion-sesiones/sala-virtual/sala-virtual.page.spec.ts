import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalaVirtualPage } from './sala-virtual.page';

describe('SalaVirtualPage', () => {
  let component: SalaVirtualPage;
  let fixture: ComponentFixture<SalaVirtualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaVirtualPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalaVirtualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
