import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { startWith, takeUntil } from 'rxjs';
import {
  Ingredient,
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

  availableIngredients: IngredientsGroup[] = [];

  constructor(private plannerService: PlannerContainerService) {}

  ngOnInit(): void {
    this.plannerService.selectedIngredients$
      .pipe(
        startWith(this.plannerService.selectedIngredients)
        // todo: add destriyed$
        // takeUntil(this.destroyed$)
      )
      .subscribe((ingredients) => this.setAvailableIngredients(ingredients));
  }

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
