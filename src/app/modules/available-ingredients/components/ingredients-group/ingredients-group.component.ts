import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IngredientPlan } from 'src/app/core/interfaces/ingredient.interface';
import { IngredientComponent } from '../../../../core/components/ingredient/ingredient.component';

@Component({
  selector: 'app-ingredients-group',
  templateUrl: './ingredients-group.component.html',
  styleUrls: ['./ingredients-group.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, IngredientComponent],
})
export class IngredientsGroupComponent {
  @Input() label?: string;
  @Input() ingredients?: IngredientPlan[];

  @Output() ingredientClick = new EventEmitter<IngredientPlan>();

  onClickItem(ingredient: IngredientPlan) {
    this.ingredientClick.emit(ingredient);
  }
}
