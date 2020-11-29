import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { PerfilesService } from 'src/app/services/perfiles/perfiles.service';

import { AdministradoresPage } from './administradores.page';

describe('AdministradoresPage', () => {
  let httpClient: HttpClient;
  let component: AdministradoresPage;
  let fixture: ComponentFixture<AdministradoresPage>;
  let de: DebugElement;
  let el: HTMLElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradoresPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientModule
      ],
      providers: [PerfilesService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AdministradoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradoresPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    component = null;
    de = null;
    el = null;
  });

  it("is created", () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it("Despliega lista de administradores del sistema descripcion, nombre, y usuario dentro de la lista", () => {
    let perfilesService = fixture.debugElement.injector.get(PerfilesService);
    let administrador = perfilesService.retornaUsuarios(1)[0];
    console.log('******************************************************');
    console.log(administrador);
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css("ion-list ion-item"));
    el = de.nativeElement;

    expect(el.textContent).toContain(administrador);
  });

});
