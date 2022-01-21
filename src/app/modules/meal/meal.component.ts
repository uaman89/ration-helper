import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/interfaces/ingredient.interface';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  ingredients: Ingredient[] = [
    { name: 'гречка', weight: 60 },
    { name: 'хліб', weight: 100 },
    { name: 'йогурт', weight: 400 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
