import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientModule } from 'src/app/core/components/ingredient/ingredient.module';
import { MealComponent } from './meal.component';



@NgModule({
  declarations: [MealComponent],
  imports: [
    CommonModule,
    IngredientModule
  ],
  exports: [
    MealComponent
  ]
})
export class MealModule { }
