import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IngredientModule } from 'src/app/core/components/ingredient/ingredient.module';
import { IngredientsGroupComponent } from './ingredients-group.component';

@NgModule({
  declarations: [IngredientsGroupComponent],
  imports: [CommonModule, IngredientModule],
  exports: [IngredientsGroupComponent],
})
export class IngredientsGroupModule {}
