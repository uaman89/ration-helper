import { TestBed } from '@angular/core/testing';

import { PlannerContainerService } from './planner-container.service';

describe('PlannerContainerService', () => {
  let service: PlannerContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlannerContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
