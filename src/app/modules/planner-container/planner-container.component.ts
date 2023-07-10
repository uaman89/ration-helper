import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { availablePlans, PlanKeys } from 'src/app/core/constants/constants';
import { SelectedIngredientPlan } from 'src/app/core/interfaces/ingredient.interface';
import { IngredientsGroup } from 'src/app/core/interfaces/ingredients-group.interace';
import { IngradientSelectService } from './planner-container.service';
import { AsyncPipe } from '@angular/common';
import { AvailableIngredientsComponent } from '../available-ingredients/available-ingredients.component';
import { MealPlannerComponent } from '../meal-planner/meal-planner.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-planner-container',
    templateUrl: './planner-container.component.html',
    styleUrls: ['./planner-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatFormFieldModule, MealPlannerComponent, AvailableIngredientsComponent, AsyncPipe]
})
export class PlannerContainerComponent implements OnInit {
  selectedIngredients$ = this.plannerService.selectedIngredients$;

  @Input() currentPlan?: IngredientsGroup[];

  readonly availablePlans = availablePlans;

  constructor(private plannerService: IngradientSelectService) {}

  ngOnInit(): void {}

  onRemoveIngredient({ groupId, id }: SelectedIngredientPlan) {
    this.plannerService.removeIngredientFromSelected(groupId, id);
  }
}
