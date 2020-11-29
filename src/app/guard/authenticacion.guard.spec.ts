import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthenticacionGuard } from './authenticacion.guard';

describe('AuthenticacionGuard', () => {
  let guard: AuthenticacionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        Router
      ]
    });
    guard = TestBed.inject(AuthenticacionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
