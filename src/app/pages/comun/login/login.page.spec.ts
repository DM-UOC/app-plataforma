import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        SeguridadService, 
        HttpClient,
        IonicModule.forRoot()],
        schemas: [
          CUSTOM_ELEMENTS_SCHEMA
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
