import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SelectedIngredientPlan } from 'src/app/core/interfaces/ingredient.interface';

@Injectable({
  providedIn: 'root',
})
export class PlannerContainerService {

  public get selectedIngredients() {
    return this._selectedIngredients.value;
  }

  private _selectedIngredients = new BehaviorSubject<SelectedIngredientPlan[]>(
    []
  );

  constructor() {}

  addIngredientToSelected(newIngredient: SelectedIngredientPlan) {
    this._selectedIngredients.next([
      ...this.selectedIngredients,
      newIngredient,
    ]);
  }

  removeIngredientFromSelected(groupId: number, ingredientId: number) {
    const updatedList = this.selectedIngredients.filter((d) => {
      return d.groupId !== groupId && d.id !== ingredientId;
    });
    this._selectedIngredients.next(updatedList);
  }
}
