import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvailableIngredientsComponent } from './available-ingredients.component';
import { IngredientsGroupModule } from './components/ingredients-group/ingredients-group.module';

@NgModule({
  declarations: [AvailableIngredientsComponent],
  imports: [CommonModule, IngredientsGroupModule],
  exports: [AvailableIngredientsComponent],
})
export class AvailableIngredientsModule {}
