import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/interfaces/ingredient.interface';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  @Input() ingredients?: Ingredient[];

  constructor() { }

  ngOnInit(): void {
  }

}
