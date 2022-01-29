import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { IngredientPlan } from 'src/app/core/interfaces/ingredient.interface';
import { IngredientsGroup } from 'src/app/core/interfaces/ingredients-group.interace';

@Component({
  selector: 'app-available-ingredients',
  templateUrl: './available-ingredients.component.html',
  styleUrls: ['./available-ingredients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailableIngredientsComponent implements OnInit {
  @Input() plan?: IngredientsGroup[];

  constructor() {}

  ngOnInit(): void {}
}
