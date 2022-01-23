import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { IngredientModule } from 'src/app/core/components/ingredient/ingredient.module';
import { MealComponent } from './meal.component';

@NgModule({
  declarations: [MealComponent],
  imports: [CommonModule, MatIconModule, IngredientModule],
  exports: [MealComponent],
})
export class MealModule {}
