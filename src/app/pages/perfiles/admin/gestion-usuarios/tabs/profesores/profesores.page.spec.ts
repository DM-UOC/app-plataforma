import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { PerfilesService } from 'src/app/services/perfiles/perfiles.service';

import { ProfesoresPage } from './profesores.page';

describe('ProfesoresPage', () => {
  let httpClient: HttpClient;
  let component: ProfesoresPage;
  let fixture: ComponentFixture<ProfesoresPage>;
  let de: DebugElement;
  let el: HTMLElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesoresPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientModule
      ],
      providers: [
        PerfilesService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfesoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Despliega lista de profesores del sistema descripcion, nombre, y usuario dentro de la lista", () => {
    let perfilesService = fixture.debugElement.injector.get(PerfilesService);
    let administrador = perfilesService.retornaUsuarios[1];
    console.log('************************* PROFESORES *************************');
    console.log(administrador);
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css("ion-list ion-item"));
    el = de.nativeElement;

    expect(el.textContent).toContain(administrador);
  });

});
