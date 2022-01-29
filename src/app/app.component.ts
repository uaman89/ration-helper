import { Component } from '@angular/core';
import { sashaSet } from 'src/app/core/constants';
import { Ingredient } from './core/interfaces/ingredient.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Ration Helper';

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
