import { TestBed } from '@angular/core/testing';

import { EGrowthService } from './e-growth.service';

describe('EGrowthService', () => {
  let service: EGrowthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EGrowthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
