import { Component, OnInit } from '@angular/core';
import { sashaSet } from 'src/app/core/constants/constants';
import { SelectedIngredientPlan } from 'src/app/core/interfaces/ingredient.interface';
import { PlannerContainerService } from './planner-container.service';

@Component({
  selector: 'app-planner-container',
  templateUrl: './planner-container.component.html',
  styleUrls: ['./planner-container.component.scss'],
  // todo: add onPUsh
})
export class PlannerContainerComponent implements OnInit {
  rationPlan = sashaSet;

  selectedIngredients$ = this.plannerService.selectedIngredients$;

  constructor(private plannerService: PlannerContainerService) {}

  ngOnInit(): void {
    // todo: remove mocks
    const [group1, group2, group3] = this.rationPlan;
    const [ingA] = group1.ingredients;
    const [, , ingB] = group2.ingredients;
    const [, ingC] = group3.ingredients;
    const selectedMock: SelectedIngredientPlan[] = [
      { groupId: group1.id, ...ingA, weight: ingA.weight * 0.75 },
      { groupId: group2.id, ...ingB, weight: ingB.weight * 0.25 },
      { groupId: group3.id, ...ingC, weight: ingC.weight * 0.5 },
    ];
    selectedMock.forEach((mock) =>
      this.plannerService.addIngredientToSelected(mock)
    );
  }

  onRemoveIngredient({ groupId, id }: SelectedIngredientPlan) {
    this.plannerService.removeIngredientFromSelected(groupId, id);
  }
}
