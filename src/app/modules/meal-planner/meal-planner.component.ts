import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/interfaces/ingredient.interface';

@Component({
  selector: 'app-meal-planner',
  templateUrl: './meal-planner.component.html',
  styleUrls: ['./meal-planner.component.scss']
})
export class MealPlannerComponent implements OnInit {

  selectedIngredients: Ingredient[] = [
    { name: 'гречка', weight: 60 },
    { name: 'хліб', weight: 100 },
    { name: 'йогурт', weight: 400 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
