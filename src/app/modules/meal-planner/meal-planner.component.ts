import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { IngredientPlan, SelectedIngredientPlan } from 'src/app/core/interfaces/ingredient.interface';

@Component({
  selector: 'app-meal-planner',
  templateUrl: './meal-planner.component.html',
  styleUrls: ['./meal-planner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealPlannerComponent implements OnInit {
  @Input() selectedIngredients?: SelectedIngredientPlan[];

  @Output() changed = new EventEmitter<SelectedIngredientPlan[]>();

  constructor() {}

  ngOnInit(): void {}

  onRemoveIngredient(index: number) {
    if (!this.selectedIngredients) {
      return;
    }
    this.selectedIngredients.splice(index, 1);
    this.changed.emit(this.selectedIngredients);
  }
}
