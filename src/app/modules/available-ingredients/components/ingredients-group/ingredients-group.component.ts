import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IngredientPlan } from 'src/app/core/interfaces/ingredient.interface';
import { IngredientComponent } from '../../../../core/components/ingredient/ingredient.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-ingredients-group',
    templateUrl: './ingredients-group.component.html',
    styleUrls: ['./ingredients-group.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, IngredientComponent]
})
export class IngredientsGroupComponent implements OnInit {
  @Input() label?: string;
  @Input() ingredients?: IngredientPlan[];

  @Output() ingredientClick = new EventEmitter<IngredientPlan>();

  constructor() {}

  ngOnInit(): void {}

  onClickItem(ingredient: IngredientPlan) {
    this.ingredientClick.emit(ingredient);
  }
}
