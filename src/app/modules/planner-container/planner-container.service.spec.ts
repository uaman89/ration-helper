import { TestBed } from '@angular/core/testing';

import { IngradientSelectService } from './planner-container.service';

describe('PlannerContainerService', () => {
  let service: IngradientSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngradientSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
