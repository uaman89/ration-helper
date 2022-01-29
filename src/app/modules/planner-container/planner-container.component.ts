import { Component, OnInit } from '@angular/core';
import { sashaSet } from 'src/app/core/constants';
import { Ingredient } from 'src/app/core/interfaces/ingredient.interface';

@Component({
  selector: 'app-planner-container',
  templateUrl: './planner-container.component.html',
  styleUrls: ['./planner-container.component.scss'],
})
export class PlannerContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  rationPlan = sashaSet;

  selectedIngredients: Ingredient[] = [
    { name: 'гречка', weight: 60 },
    { name: 'хліб', weight: 100 },
    { name: 'йогурт', weight: 400 },
  ];

  onSelectedIngredientsChange(selectedIngredients: Ingredient[]) {
    this.selectedIngredients = selectedIngredients;
  }
}
