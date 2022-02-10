import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectedIngredientPlan } from 'src/app/core/interfaces/ingredient.interface';

@Injectable({
  providedIn: 'root',
})
export class PlannerContainerService {
  public get selectedIngredients() {
    return this._selectedIngredients$.value;
  }

  public get selectedIngredients$(): Observable<SelectedIngredientPlan[]> {
    return this._selectedIngredients$.asObservable();
  }

  private _selectedIngredients$ = new BehaviorSubject<SelectedIngredientPlan[]>(
    []
  );

  constructor() {}

  addIngredientToSelected(newIngredient: SelectedIngredientPlan) {
    this._selectedIngredients$.next([
      ...this._selectedIngredients$.value,
      newIngredient,
    ]);
  }

  removeIngredientFromSelected(groupId: number, ingredientId: number) {
    const updatedList = this.selectedIngredients.filter((d) => {
      return !(d.groupId === groupId && d.id === ingredientId);
    });
    this._selectedIngredients$.next(updatedList);
  }

  clearSelectedIngredients() {
    this._selectedIngredients$.next([]);
  }
}
