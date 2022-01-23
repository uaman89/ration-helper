import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealPlannerComponent } from './meal-planner.component';
import { MealModule } from '../meal/meal.module';

@NgModule({
  declarations: [MealPlannerComponent],
  imports: [CommonModule, MealModule],
  exports: [MealPlannerComponent],
})
export class MealPlannerModule {}
