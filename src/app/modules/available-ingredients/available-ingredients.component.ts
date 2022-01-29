import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  IngredientPlan,
  SelectedIngredientPlan
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
      if (!selectedMap[planGroup.id]) {
        return;
      }
      const group = { ...planGroup, ingredients: [] } as IngredientsGroup;
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
      this.availableIngredients.push(group);
    });
  }
}

interface PlanIngredientsMap {
  [groupId: number]: {
    [ingredientId: number]: IngredientPlan;
  };
}
