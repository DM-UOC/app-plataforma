import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CliHijosPage } from './cli-hijos.page';

describe('CliHijosPage', () => {
  let component: CliHijosPage;
  let fixture: ComponentFixture<CliHijosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliHijosPage ],
      imports: [
        FormBuilder,
        IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CliHijosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
