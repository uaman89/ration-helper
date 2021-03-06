import { Component, Input, OnInit } from '@angular/core';
import { IngredientPlan } from '../../interfaces/ingredient.interface';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
})
export class IngredientComponent implements OnInit {
  @Input() params?: IngredientPlan;

  constructor() {}

  ngOnInit(): void {}
}
