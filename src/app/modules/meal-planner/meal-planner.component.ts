import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { SelectedIngredientPlan } from 'src/app/core/interfaces/ingredient.interface';
import { MealComponent } from './components/meal/meal.component';

@Component({
    selector: 'app-meal-plan',
    templateUrl: './meal-planner.component.html',
    styleUrls: ['./meal-planner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, MealComponent],
})
export class MealPlanComponent {
  @Input() selectedIngredients: SelectedIngredientPlan[] = [];

  @Output() ingredientRemoved = new EventEmitter<SelectedIngredientPlan>();
  @Output() saved = new EventEmitter<void>();

  constructor() {}

  onRemoveIngredient(removedIngredient: SelectedIngredientPlan) {
    this.ingredientRemoved.emit(removedIngredient);
  }

  onSave(): void {
    this.saved.emit();
  }

  onLoad(): void {
  }
}
