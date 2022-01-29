import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectedIngredientPlan } from 'src/app/core/interfaces/ingredient.interface';
import { trackById } from 'src/app/shared/track-by.shared';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit {

  @Input() ingredients?: SelectedIngredientPlan[];

  @Output() ingredientRemoved = new EventEmitter<SelectedIngredientPlan>();

  readonly trackById = trackById;

  constructor() {}

  ngOnInit(): void {}

  onRemoveIngredient(ingredient: SelectedIngredientPlan) {
    this.ingredientRemoved.emit(ingredient);
  }
}
