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
import { PlannerContainerService } from '../planner-container/planner-container.service';

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

  constructor(private plannerService: PlannerContainerService) {}

  ngOnInit(): void {}

  setAvailableIngredients(ingredients: SelectedIngredientPlan[]): void {
    if (!this.selectedPlan) {
      return;
    }

    const selectedMap = ingredients.reduce<SelectedIngredientsMap>(
      (obj, ingredient) => {
        obj[ingredient.groupId] = ingredient;
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

        const selected = selectedMap[planGroup.id];
        const planned = planGroup.ingredients.find((d) => selected.id);

        if (!planned) {
          console.warn(`can't find planned item that matches to selected one`);
          return;
        }

        const weightDiff = planned.weight - selected.weight;
        if (weightDiff > 0) {
          const proportion = weightDiff / planned.weight;
          group.ingredients = planGroup.ingredients.map((plan) => {
            return {
              ...plan,
              weight: Math.ceil(plan.weight * proportion)
            };
          });
        }
      }
      this.availableIngredients.push(group);
    });
  }

  onPickIngredient(ingredientPlan: IngredientPlan, groupId: number) {
    this.plannerService.addIngredientToSelected({ ...ingredientPlan, groupId });
  }

  private copyGroup(
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

// for one group can be only one ingredient
interface SelectedIngredientsMap {
  [groupId: number]: IngredientPlan;
}
