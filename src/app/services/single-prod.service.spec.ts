import { TestBed } from '@angular/core/testing';

import { SingleProdService } from './single-prod.service';

describe('SingleProdService', () => {
  let service: SingleProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
