import { Component, Input, OnInit } from '@angular/core';
import { IngredientPlan } from '../../interfaces/ingredient.interface';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-ingredient',
    templateUrl: './ingredient.component.html',
    styleUrls: ['./ingredient.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class IngredientComponent implements OnInit {
  @Input() params?: IngredientPlan;

  constructor() {}

  ngOnInit(): void {}
}
