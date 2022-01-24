import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/interfaces/ingredient.interface';

@Component({
  selector: 'app-ingredients-group',
  templateUrl: './ingredients-group.component.html',
  styleUrls: ['./ingredients-group.component.scss']
})
export class IngredientsGroupComponent implements OnInit {

  @Input() label?: string;
  @Input() group?: Ingredient[];

  constructor() { }

  ngOnInit(): void {
  }

}
