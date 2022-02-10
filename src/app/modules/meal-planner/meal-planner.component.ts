import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SelectedIngredientPlan } from 'src/app/core/interfaces/ingredient.interface';

@Component({
  selector: 'app-meal-planner',
  templateUrl: './meal-planner.component.html',
  styleUrls: ['./meal-planner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealPlannerComponent implements OnInit {
  @Input() selectedIngredients: SelectedIngredientPlan[] = [];

  @Output() ingredientRemoved = new EventEmitter<SelectedIngredientPlan>();

  constructor() {}

  ngOnInit(): void {}

  onRemoveIngredient(removedIngredient: SelectedIngredientPlan) {
    this.ingredientRemoved.emit(removedIngredient);
  }
}
