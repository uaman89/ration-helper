import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { IngredientPlan } from 'src/app/core/interfaces/ingredient.interface';
import { IngredientsGroup } from 'src/app/core/interfaces/ingredients-group.interace';

@Component({
  selector: 'app-available-ingredients',
  templateUrl: './available-ingredients.component.html',
  styleUrls: ['./available-ingredients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailableIngredientsComponent implements OnInit {
  @Input() set plan(plan: IngredientsGroup[]) {
    this.updateIngredientPlanMap(plan);
  }

  @Input()
  set selectedIngredients(ingredients: IngredientPlan[]) {}

  private ingredientGroupMap = new Map<string, number>();
  private availableIngredients: IngredientsGroup[] = [];

  constructor() {}

  ngOnInit(): void {}

  updateIngredientPlanMap(plan: IngredientsGroup[]) {
    this.ingredientGroupMap.clear();
    plan.forEach((group) => {
      group.ingredients.forEach((ingredient) =>
        this.ingredientGroupMap.set(ingredient.name, group.id)
      );
    });
  }

  updateAbailbleIngredients(selectedIngredients: IngredientPlan[]) {
    selectedIngredients.forEach((ingredient) => {});
  }
}
