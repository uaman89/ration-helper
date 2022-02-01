import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import {
  IngredientPlan,
  SelectedIngredientPlan,
} from 'src/app/core/interfaces/ingredient.interface';
import { IngredientsGroup } from 'src/app/core/interfaces/ingredients-group.interace';
import { PlannerContainerService } from '../planner-container/planner-container.service';
import {
  SelectIngredientDialogComponent,
  SelectIngredientDialogData,
} from './components/select-ingredient-dialog/select-ingredient-dialog.component';

@Component({
  selector: 'app-available-ingredients',
  templateUrl: './available-ingredients.component.html',
  styleUrls: ['./available-ingredients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailableIngredientsComponent implements OnInit, OnDestroy {
  @Input() selectedPlan?: IngredientsGroup[];

  availableIngredients: IngredientsGroup[] = [];

  destroyed$ = new Subject<void>();

  constructor(
    private plannerService: PlannerContainerService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.plannerService.selectedIngredients$
      //todo: add takeUntill
      .pipe(takeUntil(this.destroyed$))
      .subscribe((items) => this.setAvailableIngredients(items));
  }

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
    this.cdr.markForCheck();
  }

  onPickIngredient(ingredientPlan: IngredientPlan, groupId: number) {
    const data: SelectIngredientDialogData = {
      ingredient: ingredientPlan,
    };
    this.dialog
      .open(SelectIngredientDialogComponent, { data })
      .afterClosed()
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          this.plannerService.addIngredientToSelected({
            ...ingredientPlan,
            groupId,
          });
        }
      });
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

  ngOnDestroy(): void {
      this.destroyed$.next();
      this.destroyed$.complete();
  }
}

// for one group can be only one full ingredient, or a few but with proportionally reduced weigth
interface SelectedIngredientsMap {
  [groupId: number]: IngredientPlan[];
}
