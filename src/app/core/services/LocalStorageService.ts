import { Injectable } from '@angular/core';
import { StorageService } from '../interfaces/data-saver.interface';
import { SelectedIngredientPlan } from '../interfaces/ingredient.interface';

@Injectable()
export class LocalStorageService implements StorageService {
  readonly savedPlansKey = '__saved-plans-ids';

  save(planId: string, data: object) {
    localStorage.setItem(planId, JSON.stringify(data));
    this.updateSavedIdList(planId);
  }

  load(planId: string): SelectedIngredientPlan[] {
    const savedData = localStorage.getItem(planId);
    return savedData ? (JSON.parse(savedData) as SelectedIngredientPlan[]) : [];
  }

  getSavedPlanList(): string[] {
    const value = localStorage.getItem(this.savedPlansKey);
    return value ? JSON.parse(value) : [];
  }

  private updateSavedIdList(newId: string) {
    const keysList = this.getSavedPlanList();
    keysList.push(newId);
    localStorage.setItem(this.savedPlansKey, JSON.stringify(keysList));
  }
}
