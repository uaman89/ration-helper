import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/interfaces/ingredient.interface';
import { IngredientsGroup } from 'src/app/core/interfaces/ingredients-group.interace';

@Component({
  selector: 'app-available-ingredients',
  templateUrl: './available-ingredients.component.html',
  styleUrls: ['./available-ingredients.component.scss'],
})
export class AvailableIngredientsComponent implements OnInit {
  @Input()
  plan?: IngredientsGroup[];

  @Input()
  set selectedIngredients(ingredients: Ingredient[]) {

  }

  availableIngredients: IngredientsGroup[] = [];

  constructor() {}

  ngOnInit(): void {}

  updateAbailbleIngredients( selectedIngredients: Ingredient[] ){
    selectedIngredients.forEach( ingredient => {

    });
  }
}
