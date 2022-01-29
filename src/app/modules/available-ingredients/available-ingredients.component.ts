import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  IngredientPlan,
  SelectedIngredientPlan,
} from 'src/app/core/interfaces/ingredient.interface';
import { IngredientsGroup } from 'src/app/core/interfaces/ingredients-group.interace';

@Component({
  selector: 'app-available-ingredients',
  templateUrl: './available-ingredients.component.html',
  styleUrls: ['./available-ingredients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailableIngredientsComponent implements OnInit {
  @Input() selectedPlan?: IngredientsGroup[];

  @Input() set selectedIngredients(ingredients: SelectedIngredientPlan[]) {
    this.setAvailableIngredients(ingredients);
  }

  availableIngredients: IngredientsGroup[] = [];

  constructor() {}

  ngOnInit(): void {}

  setAvailableIngredients(ingredients: SelectedIngredientPlan[]): void {
    if (!this.selectedPlan) {
      return;
    }

    const selectedMap = ingredients.reduce<PlanIngredientsMap>(
      (obj, ingredient) => {
        const { id, groupId } = ingredient;
        obj[groupId] = obj[groupId] || {};
        obj[groupId][id] = ingredient;
        return obj;
      },
      {}
    );

    this.availableIngredients = [];
    this.selectedPlan.forEach((planGroup) => {
      let group: IngredientsGroup;

      if (!selectedMap[planGroup.id]) {
        group = this.copyGroup(planGroup);
      } else {
        group = this.copyGroup(planGroup, false);
        planGroup.ingredients.forEach((planned) => {
          const selected = selectedMap[planGroup.id][planned.id];
          if (!selected) {
            group.ingredients.push(planned);
            return;
          }

          const weightDiff = planned.weight - selected.weight;
          if (weightDiff > 0) {
            group.ingredients.push({
              ...planned,
              weight: weightDiff,
            });
          }
        });
      }
      this.availableIngredients.push(group);
    });
  }

  copyGroup(
    group: IngredientsGroup,
    cloneIngredients = true
  ): IngredientsGroup {
    const clone = { ...group, ingredients: [] } as IngredientsGroup;
    if (cloneIngredients) {
      clone.ingredients = group.ingredients.map((data) => ({ ...data }));
    }

    return clone;
  }
}

interface PlanIngredientsMap {
  [groupId: number]: {
    [ingredientId: number]: IngredientPlan;
  };
}
