import { TestBed } from '@angular/core/testing';

import { FiltersFunctionService } from './filters-function.service';

describe('FiltersFunctionService', () => {
  let service: FiltersFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltersFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
