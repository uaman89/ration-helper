import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvailableIngredientsModule } from '../available-ingredients/available-ingredients.module';
import { MealPlannerModule } from '../meal-planner/meal-planner.module';
import { PlannerContainerComponent } from './planner-container.component';



@NgModule({
  declarations: [
    PlannerContainerComponent
  ],
  imports: [
    CommonModule,
    MealPlannerModule,
    AvailableIngredientsModule
  ],
  exports: [PlannerContainerComponent]
})
export class PlannerContainerModule { }
