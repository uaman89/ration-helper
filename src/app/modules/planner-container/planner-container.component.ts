import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { availablePlans, PlanKeys } from 'src/app/core/constants/constants';
import { SelectedIngredientPlan } from 'src/app/core/interfaces/ingredient.interface';
import { IngredientsGroup } from 'src/app/core/interfaces/ingredients-group.interace';
import { PlannerContainerService } from './planner-container.service';

@Component({
  selector: 'app-planner-container',
  templateUrl: './planner-container.component.html',
  styleUrls: ['./planner-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlannerContainerComponent implements OnInit {
  selectedIngredients$ = this.plannerService.selectedIngredients$;

  currentPlan: IngredientsGroup[] = availablePlans[PlanKeys.yuliia];

  readonly availablePlans = availablePlans;

  constructor(private plannerService: PlannerContainerService) {}

  ngOnInit(): void {}

  onRemoveIngredient({ groupId, id }: SelectedIngredientPlan) {
    this.plannerService.removeIngredientFromSelected(groupId, id);
  }
}
