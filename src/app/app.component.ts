import { Component } from '@angular/core';
import { sashaSet } from 'src/app/core/constants/constants';
import { IngredientPlan } from './core/interfaces/ingredient.interface';
import { IngredientsGroup } from './core/interfaces/ingredients-group.interace';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Ration Helper';


}
