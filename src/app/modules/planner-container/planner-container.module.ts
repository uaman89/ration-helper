import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormGroupName, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AvailableIngredientsModule } from '../available-ingredients/available-ingredients.module';
import { MealPlannerModule } from '../meal-planner/meal-planner.module';
import { PlannerContainerComponent } from './planner-container.component';

@NgModule({
  declarations: [PlannerContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MealPlannerModule,
    AvailableIngredientsModule,
  ],
  exports: [PlannerContainerComponent],
})
export class PlannerContainerModule {}
