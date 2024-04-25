import { TestBed } from '@angular/core/testing';

import { DipforService } from './dipfor.service';

describe('DipforService', () => {
  let service: DipforService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DipforService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
