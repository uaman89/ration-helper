import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvailableIngredientsComponent } from './available-ingredients.component';
import { IngredientsGroupModule } from './components/ingredients-group/ingredients-group.module';
import { SelectIngredientDialogModule } from './components/select-ingredient-dialog/select-ingredient-dialog.module';

@NgModule({
  declarations: [AvailableIngredientsComponent],
  imports: [
    CommonModule,
    IngredientsGroupModule,
    SelectIngredientDialogModule
  ],
  exports: [AvailableIngredientsComponent],
})
export class AvailableIngredientsModule {}
