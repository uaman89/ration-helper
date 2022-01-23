import { Component, Input, OnInit } from '@angular/core';
import { defaultingredient as defaultIngredient } from '../../constants';
import { Ingredient } from '../../interfaces/ingredient.interface';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  @Input() params?: Ingredient;

  constructor() { }

  ngOnInit(): void {
  }

}
