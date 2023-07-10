import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import {
  IngredientPlan,
  SelectedIngredientPlan,
} from 'src/app/core/interfaces/ingredient.interface';
import { IngredientsGroup } from 'src/app/core/interfaces/ingredients-group.interace';
import { IngradientSelectService } from '../planner-container/planner-container.service';
import {
  SelectIngredientDialogComponent,
  SelectIngredientDialogData,
} from './components/select-ingredient-dialog/select-ingredient-dialog.component';
import { getCompletionProportion } from './helpers/available-ingredients.helpers';
import { IngredientsGroupComponent } from './components/ingredients-group/ingredients-group.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-available-ingredients',
  templateUrl: './available-ingredients.component.html',
  styleUrls: ['./available-ingredients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, IngredientsGroupComponent, MatDialogModule],
})
export class AvailableIngredientsComponent
  implements OnInit, OnChanges, OnDestroy
{
  @Input() selectedPlan?: IngredientsGroup[];

  availableIngredients: IngredientsGroup[] = [];

  destroyed$ = new Subject<void>();

  constructor(
    private plannerService: IngradientSelectService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.plannerService.selectedIngredients$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((items) => this.setAvailableIngredients(items));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedPlan']) {
      this.setAvailableIngredients(this.plannerService.selectedIngredients);
    }
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
      const selectedPlanIngredients = selectedMap[planGroup.id];
      if (!selectedPlanIngredients) {
        this.availableIngredients.push(this.copyGroup(planGroup));
        return;
      }
      const group: IngredientsGroup = this.copyGroup(planGroup, false);

      const totalSelectedPropportion = getCompletionProportion(
        selectedPlanIngredients,
        planGroup.ingredients
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
      .subscribe((data) => {
        if (data) {
          this.plannerService.addIngredientToSelected({ ...data, groupId });
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
