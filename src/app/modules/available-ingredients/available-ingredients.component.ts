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
        const { groupId } = ingredient;
        obj[groupId] = obj[groupId] || [];
        obj[groupId].push(ingredient);
        return obj;
      },
      {}
    );

    this.availableIngredients = [];

    this.selectedPlan.forEach((planGroup) => {
      if (!selectedMap[planGroup.id]) {
        this.availableIngredients.push(this.copyGroup(planGroup));
        return;
      }
      const group: IngredientsGroup = this.copyGroup(planGroup, false);

      // get every selected ingr. which belongs to current group
      // calc it's proportion
      // sum proportions of every selected ingr.
      // if proportion > 1 - no availble ingredients
      // if < 1, then fill ingredients list with planGroup ingredients and multiply it's weights on (1 - totalProportion)

      const totalSelectedPropportion = selectedMap[planGroup.id].reduce<number>(
        (total, selected) => {
          const planned = planGroup.ingredients.find((d) => selected.id);
          if (!planned) {
            console.warn('should not happen');
            return total;
          }
          const proportion = selected.weight / planned.weight;

          return total + proportion;
        },
        0
      );

      if (totalSelectedPropportion < 1) {
        const leftProportion = 1 - totalSelectedPropportion;
        group.ingredients = planGroup.ingredients.map((plan) => {
          return {
            ...plan,
            weight: Math.ceil(plan.weight * leftProportion),
          };
        });
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

// for one group can be only one full ingredient, or a few but with proportionally reduced weigth
interface SelectedIngredientsMap {
  [groupId: number]: IngredientPlan[];
}
