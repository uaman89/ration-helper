import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailableIngredientsComponent } from './available-ingredients.component';
import { IngredientsGroupComponent } from './components/ingredients-group/ingredients-group.component';
import { IngredientsGroupModule } from './components/ingredients-group/ingredients-group.module';

@NgModule({
  declarations: [AvailableIngredientsComponent],
  imports: [CommonModule, IngredientsGroupModule],
})
export class AvailableIngredientsModule {}
