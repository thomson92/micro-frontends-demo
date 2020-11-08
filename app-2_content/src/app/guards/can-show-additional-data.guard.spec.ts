import { TestBed } from '@angular/core/testing';

import { CanShowAdditionalDataGuard } from './can-show-additional-data.guard';

describe('CanShowAdditionalDataGuard', () => {
  let guard: CanShowAdditionalDataGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanShowAdditionalDataGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
