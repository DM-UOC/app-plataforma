import { TestBed } from '@angular/core/testing';

import { AuthenticacionGuard } from './authenticacion.guard';

describe('AuthenticacionGuard', () => {
  let guard: AuthenticacionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticacionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
