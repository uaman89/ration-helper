import { Component, OnInit } from '@angular/core';
import { sashaSet } from 'src/app/core/constants/constants';
import { INGREDIENTS } from 'src/app/core/constants/ingredients';
import { IngredientPlan } from 'src/app/core/interfaces/ingredient.interface';

@Component({
  selector: 'app-planner-container',
  templateUrl: './planner-container.component.html',
  styleUrls: ['./planner-container.component.scss'],
})
export class PlannerContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  rationPlan = sashaSet;

  selectedIngredients: IngredientPlan[] = [
    { ...INGREDIENTS.buckweat, weight: 40 },
    { ...INGREDIENTS.bread, weight: 50 },
    { ...INGREDIENTS.yogurt, weight: 400 },
  ];

  onSelectedIngredientsChange(selectedIngredients: IngredientPlan[]) {
    this.selectedIngredients = selectedIngredients;
  }
}
