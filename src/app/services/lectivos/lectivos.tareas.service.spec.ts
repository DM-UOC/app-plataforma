import { TestBed } from '@angular/core/testing';

import { LectivosTareasService } from './lectivos.tareas.service';

describe('Lectivos.TareasService', () => {
  let service: LectivosTareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LectivosTareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
