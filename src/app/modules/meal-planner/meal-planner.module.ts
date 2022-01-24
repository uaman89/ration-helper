import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MealModule } from './components/meal/meal.module';
import { MealPlannerComponent } from './meal-planner.component';


@NgModule({
  declarations: [MealPlannerComponent],
  imports: [CommonModule, MealModule],
  exports: [MealPlannerComponent],
})
export class MealPlannerModule {}
