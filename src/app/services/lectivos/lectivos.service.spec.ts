import { TestBed } from '@angular/core/testing';

import { LectivosService } from './lectivos.service';

describe('LectivosService', () => {
  let service: LectivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LectivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
