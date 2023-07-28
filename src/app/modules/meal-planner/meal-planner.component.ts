import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SelectedIngredientPlan } from 'src/app/core/interfaces/ingredient.interface';
import { NgIf } from '@angular/common';
import { MealComponent } from './components/meal/meal.component';

@Component({
    selector: 'app-meal-plan',
    templateUrl: './meal-planner.component.html',
    styleUrls: ['./meal-planner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MealComponent, NgIf]
})
export class MealPlanComponent implements OnInit {
  @Input() selectedIngredients: SelectedIngredientPlan[] = [];

  @Output() ingredientRemoved = new EventEmitter<SelectedIngredientPlan>();

  constructor() {}

  ngOnInit(): void {}

  onRemoveIngredient(removedIngredient: SelectedIngredientPlan) {
    this.ingredientRemoved.emit(removedIngredient);
  }
}
