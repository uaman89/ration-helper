import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanComponent } from './meal-planner.component';

describe('MealPlannerComponent', () => {
  let component: MealPlanComponent;
  let fixture: ComponentFixture<MealPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MealPlanComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
