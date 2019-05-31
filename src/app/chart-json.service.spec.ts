import { TestBed } from '@angular/core/testing';

import { ChartJsonService } from './chart-json.service';

describe('ChartJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartJsonService = TestBed.get(ChartJsonService);
    expect(service).toBeTruthy();
  });
});
