import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IngredientPlan } from 'src/app/core/interfaces/ingredient.interface';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  @Input() ingredients?: IngredientPlan[];

  @Output() ingredientRemoved = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveIngredient( index: number ) {
    this.ingredientRemoved.emit(index);
  }

}
