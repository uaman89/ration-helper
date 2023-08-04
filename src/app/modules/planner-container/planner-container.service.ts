import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PlanKeys } from 'src/app/core/constants/constants';
import { SelectedIngredientPlan } from 'src/app/core/interfaces/ingredient.interface';

@Injectable({
  providedIn: 'root',
})
export class IngradientSelectService {
  public get selectedIngredients() {
    return this._selectedIngredients$.value;
  }

  public get selectedIngredients$(): Observable<SelectedIngredientPlan[]> {
    return this._selectedIngredients$.asObservable();
  }

  private _selectedIngredients$ = new BehaviorSubject<SelectedIngredientPlan[]>(
    [],
  );

  selectedPlanName: string = '';

  addIngredientToSelected(newIngredient: SelectedIngredientPlan) {
    this._selectedIngredients$.next([
      ...this._selectedIngredients$.value,
      newIngredient,
    ]);
  }

  removeIngredientFromSelected(groupId: number, ingredientId: number): void {
    const updatedList = this.selectedIngredients.filter((d) => {
      return !(d.groupId === groupId && d.id === ingredientId);
    });
    this._selectedIngredients$.next(updatedList);
  }

  clearSelectedIngredients(): void {
    this._selectedIngredients$.next([]);
  }

  setSelectedIngredients(newList: SelectedIngredientPlan[]): void {
    this._selectedIngredients$.next(newList);
  }
}
