import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PerfilesService } from './perfiles.service';

describe('PerfilesService', () => {
  let service: PerfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(PerfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Retornando usuarios perfil administrador", async () => {
    let administradores = await service.retornaUsuarios(1);
    console.log('++++++++++++++++++++++');
    console.log(administradores);
    expect(Array.isArray(administradores)).toBeTruthy();
    expect(administradores.constructor.length).toBeGreaterThan(0);
  });

});
